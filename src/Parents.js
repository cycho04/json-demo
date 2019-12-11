import React from 'react';
import {Grid, Card, Container} from '@material-ui/core';
import styled from 'styled-components';

import {parents} from './family.json';
import {calculateAge} from './utils';
import {device} from './media';


const StyledContainer = styled(Container)`
  background-color: #FBD786;
  border: 5px solid white;
  border-radius: 100%;
  width: 100px !important;
  height: 100px !important;
  padding-top: 20px;
  font-size: 0.6rem;
  @media ${device.mobile}{
    width: 170px !important;
    height: 170px !important;
    padding-top: 50px;
    font-size: 0.8rem;
  }
  @media ${device.tablet}{
    width: 250px !important;
    height: 250px !important;
    padding-top: 80px;
    font-size: 1rem;
  }
  @media ${device.laptop}{
    width: 300px !important;
    height: 300px !important;
    padding-top: 100px;
    font-size: 1.5rem;
  }
`
const StyledCard = styled(Card)`
    background: transparent !important;
    box-shadow: none !important;
    text-align: center;
`

export default () => {
  return(
    parents.map((member) => {
      return(
        <Grid item xs key={member.name}>
          <StyledCard>
            <StyledContainer>
              <div>
                <div>{member.name}</div>
                <div>{`Age: ${calculateAge(member.DOB)}`}</div>
                <div>{`DOB: ${member.DOB}`}</div>
              </div>
            </StyledContainer>
          </StyledCard>
        </Grid>
      )
    })
  )
}