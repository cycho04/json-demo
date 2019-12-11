//argument is a string type with a date format MM-DD-YYYY

export const calculateAge = string => {
    let age;
    //fetch current date
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    //fetch family member DOB
    const memberYear = Number(string.substr(6,9));
    const memberMonth = Number(string.substr(0,1));
    const memberDate = Number(string.substr(3,4));

    //year difference
    age = currentYear - memberYear

    //check for current month/date, add extra year if current year's bday passed
    if(currentMonth >= memberMonth && currentDate > memberDate){
      return age++
    }
    else{
      return age
    }
  }