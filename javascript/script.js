function akanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let genders = document.getElementById("gender").value;

    CC = parseInt(yearOfBirth.substr(0,2));
    YY = parseInt(yearOfBirth.substr(2,4));
    MM = parseInt(monthOfBirth);
    DD = parseInt(dayOfBirth);
    
    let d = Math.floor(( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7);
    console.log(d);
}


function getAkanName () {
    

    //formula to determine day of birth 
    function calculateDayValue(){
        CC = parseInt(year.substring(0,2));
        YY = parseInt(year.substring(2,4));
        MM = parseInt(document.getElementById("month").value);
        DD = parseInt(document.getElementById("date").value);
        d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
        console.log(d);
        return (Math.floor(d));
    }

    //lets calculate the function gender
    function getGender() {
        var genders = document.getElementsByName("gender");
        if(genders[0].checked == true){
            var gender = "male";
        }
        else if(genders[1].checked == true){
            var gender = "female";
        }
        else{
            return false;
        }

    }

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

    //validate index value
    let index;
    if (dayOfWeekNumber == 0){
        index=6
    }
    else{
        index = dayOfWeekNumber - 1;
    }
    console.log(index);

    //validation variables
    let monthValid = monthValidator();
    let dayValid = dayValidator();

    if (myGenderValue == "male" && monthValid && dayValid) {
        document.getElementById('Akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
    }
    if (myGenderValue == "female" && monthValid && dayValid) {
        document.getElementById('Akan-name').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
    }
    else {
        alert("You entered an invalid day or month, please try again");
    }    
        
}