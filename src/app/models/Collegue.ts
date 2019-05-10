export class Collegue{
    constructor(
        public name:string,
        public firstname:string,
        public birthdate:Date,
        public email:string,
        public photoUrl:string,
        public roles:string[],
        public matricule?:string,
        public password?:string
    ){}
}