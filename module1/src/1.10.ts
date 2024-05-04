{
    // union types ||
    // type FrontendDeveloper ="fakibazDeveloper" | "juniorDeveloper";
    // type fullStackDeveloper = 'frontendDeveloper' | "fullStackDeveloper"
    type FrontendDeveloper = {
        skills: string[];
        designation1: "FrontendDeveloper"
    }
    type  BackendDeveloper = {
        skills: string[];
        designation2: "BackendDeveloper"
    }
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    const fullStackDeveloper:FullStackDeveloper ={
        skills:["html", "css", "js"],
        designation1:"FrontendDeveloper",
        designation2:"BackendDeveloper"
    }

    const newDeveloper :FrontendDeveloper = 'juniorDeveloper'
    type User = {
        name:string;
        email:string;
        gender:"male" | 'female';
        bloodGroup: "O+" | "A+" | "B+";

    }
    const user:User = {
        name:"mir",
        gender:"male",
        bloodGroup:"B+"
    }

}