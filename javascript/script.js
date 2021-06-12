function getAkanName () {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = Number(document.getElementById("month").value);
    let dayOfBirth = Number(document.getElementById("day").value);
    let genders = document.getElementsByName("gender");

    //lets calculate the function gender
    function getGender () {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;

            }
        }
    }
}

let myGenderValue = getGender ();
console.log(myGenderValue);

// Next thing we are going to validate our functions
function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12 ) {
        return false;
    } else {
        return true
    }
}