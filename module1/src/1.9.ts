
{
    // type alias


    type Student ={
        name: string;
        age:number;
        gender:string;
        contractNo:string;
        address:string;
    };
    const student1:Student={
        name:"mazba",
        age:22,
        gender:"comon",
        contractNo:"0170000",
        address:"Uganda"


    };

    
    const student2:{
        name:string;
        age:number;
        gender:string;
        address:string;

    }={
        name:'mir',
        age:100,
        gender:"female",
        address:"ctg"
    }

    type IsAdmin = boolean;
    type UserName = string;
    const userName:UserName = 'parsinan' 
    const isAdmin :IsAdmin = true
    type Add = (num1:number, num2:number) => number
    const add:Add = (num1, num2):number =>{
        return num1+num2

    
    }
    add(2,3)

}