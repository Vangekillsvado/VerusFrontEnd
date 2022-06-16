


billingCodes = ['A345','A745','A346','A343','A340','A341','A348','E078','C345','C745','C346','C343','C344','C341','C342','C347','C349','C348','C122','E083','C123','E083','C124','E083','C142','E083','C143','E083','C121','C982','E083','A765','C765', 'None']


patients = []



//to avoid confusion, patient id will ALWAYS be called 'cr'
function registerPatient(cr, name, lastCode, dateOfBirth){
    //get the time of billing
    var now = new Date();

    

}


class Patient {
    constructor(cr,  name,  lastCode, dateOfBirth){
        this.cr = cr;
        this.name = name;
        this.lastCode = lastCode;
        console.log(typeof dateOfBirth, "why");
        this.dateOfBirth = dateOfBirth;
    }

    getCR(){
        return this.cr;
    }

    getName(){
        return this.name;
    }
    getLastCode(){
        return this.lastCode;
    }
    getAge(){
       // console.log(this.dateOfBirth.getDate());
       if (!!+this.dateOfBirth) { // valid date 
        let age = ~~((Date.now() - +this.dateOfBirth) / (31557600000)); //deal with birthdays at some point


        console.log(typeof this.dateOfBirth);
        return age;

    }
    else{
        alert(this.name + " has invalid birthdate.");
        return 0;
    }
        
    }
}





birthday = new Date(2003,01,05);
var x = new Patient(1234, "Chris", 'None', birthday);
console.log(x.getAge(), "hello");

class Code{
/*
    I think a massive problem we're going to run into will be the number of variables each code depends on
    We need to get a list of that
*/


    constructor(name, price, category, maxUse){
        this.name = name;
        this.price = price;
    }

    





}






