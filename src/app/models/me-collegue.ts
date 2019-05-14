export class MeCollegue {

    constructor(
        public matricule:string, 
        public name:string, 
        public firstname:string, 
        public roles:string[],
        public email:string,
        public photoUrl?:string,
    ) { }

}
