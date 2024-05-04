{
    // utility type
    //pick

    type Person ={
        name : string;
        age : number;
        email? : string;
        contactNum : number;
    }
    type NameAge = Pick<Person, "name" | "age" | "email">
    type contactInfo = Omit<Person, "name" | "age" >


    // Required
    type ParsonRequired = Required<Person>

    //Partial

     type personalParial =  Partial<Person>


     type PersoneReadOnly = {
        name:'mr.y';
        age:22

     }
     //ReadOnly
     const person1 : Person ={
        name: 'mrz',
        age: 200,
        contactNum:'017',
     }
     person1.name('mr.x')

     /// record
    //  type Myobj ={
    //     a:string;
    //     b:string
    type Myobj = Record<string, string>
     }
     const obj1 : Myobj = {
        a:'aa',
        b:'bb',
        c:'ss'
     }

}