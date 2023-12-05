
class personService {

    constructor(){

    }
    getPerson() {
        return {name:'Fahd',lastName:'KORAICHE'};
    }
    getPersonName(){
        return "Fahd KORAICHE";
    }
}

module.exports  = new personService();