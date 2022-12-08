





    class mas {
    constructor(firstName, lastName, phoneNumber, position, education, dateOfEmployment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.education = education;
        this.dateOfEmployment = dateOfEmployment;
    }

    get position() {
        this._position;
    }

    set position(value) {
        if (["Doctor", "Accountant", "UI/UX", "Web developer","Systems analyst","Artist"].includes(value)) this._position = value
        else this._position = null;
    }
}

const arr = new mas('Diana','Htytsiuk' , '0951135400' , 'UI/UX' , 'Software engineering', 2013)

console.log(arr)