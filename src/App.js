import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Grid, Container} from '@material-ui/core';

import Parents from './Parents';
import Children from './Children';
import tree from './images/tree.png'
import family from './family.json';


//
//JSON Schema Validation
let Validator = require('jsonschema').Validator;
let v = new Validator();

let memberSchema = {
  "id": "/Members",
  "type": "array",
  "properties": {
    "name": {"type": "string"},
    "DOB": {"type": "string"}
  }
}
let schema = {
    "id": "/Parents",
    "type": "object",
    "properties": {
      "DOBformat": {"type": "string"},
      "parents": {"$ref": "/Members"},
      "children": {"$ref": "Members"}
    }
}

v.addSchema(memberSchema, "/Members");
console.log(v.validate(family, schema));
//End Validation
//


//Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5af19;
    background-image: url(${tree});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid container spacing={2}>
          <Parents />
        </Grid>
        <Grid container spacing={2}>
          <Children />
        </Grid>
      </Container>
    </>
  );
}

export default App;
