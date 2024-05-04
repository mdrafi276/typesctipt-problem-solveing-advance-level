{
    // interface
     type User1 = {
        name:string;
        age:number;


     };
     type userWithRole1 = User1 & {role: string}
     interface UserWithrole2 extends User1{
        role: string;
     }
     type roleNumber = number;
     interface User2{
        name:string;
        age:number;
     }
     const user1: UserWithrole2 ={
        name:"Persian",
        age:100,
        role: 'manager'
     }

     type Roll1 = number[];
     interface Roll2 {
        [index : number] : number
     }
     const roleNumber1:Roll2 = [1,2,3,4];

      type Add = ( num1: number , num2: number) =>number
      interface Add2 {
        (num1: number, num2: number) : number
      }

     const add: Add2 = ( num1 , num2) =>num1 + num2;
     add(2,3)



}