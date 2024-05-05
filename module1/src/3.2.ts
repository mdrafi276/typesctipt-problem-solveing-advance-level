{


    class Parent {

    
        constructor(name: string, age  :number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;

        }
        getSleep(numOfHourse: number){
            console.log(`${this.name} will sleep for ${numOfHourse}`);

        }
    }

    class Student : parent{
    
    
        constructor(name: string, age  :number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;

        }
        getSleep(numOfHourse: number){
            console.log(`${this.name} will sleep for ${numOfHourse}`);

        }
    
    }

    class Teacher {
        name: string;
        age : number;
        address: string;
        designation: string;
    
        constructor(name: string, age  :number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = this.designation;

        }
        getSleep(numOfHourse: number){
            console.log(`${this.name} will sleep for ${numOfHourse}`);

        }
        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    
    }
     const reacher = new Teacher{"mr, z", 29, "ctg"}
     
    
}