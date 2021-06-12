function akanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let gender = document.getElementById("gender").value;

    CC = parseInt(yearOfBirth.substr(0,2));
    YY = parseInt(yearOfBirth.substr(2,4));
    MM = parseInt(monthOfBirth);
    DD = parseInt(dayOfBirth);
    
    let d = Math.floor(( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7);

     //Arrays of days of the week and of Ghananin Akan names for males & females
     let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    let dayOfWeek = daysOfWeek[d];
    console.log(dayOfWeek);

    //lets calculate gender
    let name;
    if (gender === "male") {
        name = maleAkanNames[d];
    }else if (gender === "female") {
        name = femaleAkanNames[d];
    }else {
        alert("select gender")
    }

    console.log(name);

    //displaying to the html

}


    //Arrays of days of the week and of Ghananin Akan names for males & females
    
//     //validate index value
//     let index;
//     if (dayOfWeekNumber == 0){
//         index=6
//     }
//     else{
//         index = dayOfWeekNumber - 1;
//     }
//     console.log(index);

//     //validation variables
//     let monthValid = monthValidator();
//     let dayValid = dayValidator();

//     if (myGenderValue == "male" && monthValid && dayValid) {
//         document.getElementById('Akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
//         document.getElementById('display-name').textContent = "Here is your Akan name: ";
//         return false;
//     }
//     if (myGenderValue == "female" && monthValid && dayValid) {
//         document.getElementById('Akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
//         document.getElementById('display-name').textContent = "Here is your Akan name: ";
//         return false;
//     }
//     else {
//         alert("You entered an invalid day or month, please try again");
//     }    
        
// }