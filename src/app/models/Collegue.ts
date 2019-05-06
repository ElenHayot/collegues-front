export class Collegue{
    constructor(
        public name:string,
        public firstname:string,
        public birthdate:Date,
        public email:string,
        public photoUrl:string,
        public matricule?:string
    ){}
}