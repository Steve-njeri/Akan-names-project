function akanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let gender = document.getElementById("gender").value;

    //validating inputs
    if (yearOfBirth.length !== 4){
        alert("invalid year")
    }

    if (parseInt(monthOfBirth) < 1 || parseInt(monthOfBirth) > 12 ){
        alert("invalid month")
    }

    if (parseInt(dayOfBirth) < 1 || parseInt(dayOfBirth) > 31 ){
        alert("invalid date")
    }
    
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

    //lets calculate gender
    let name;
    if (gender === "male") {
        name = maleAkanNames[d];
    }else if (gender === "female") {
        name = femaleAkanNames[d];
    }else {
        alert("select gender")
    }

    //displaying to the html
    document.getElementById("dayOfTheWeek").innerHTML = dayOfWeek;
    document.getElementById("akanName").innerHTML = name;

} 