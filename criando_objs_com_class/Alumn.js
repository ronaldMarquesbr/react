const Person = require('./Person');

class Alumn extends Person{

    constructor(name, age, turma){
        super(name, age);  // 'super' irá representar a classe que herdará os at
        this.turma = turma;
    }

}

module.exports = Alumn;
