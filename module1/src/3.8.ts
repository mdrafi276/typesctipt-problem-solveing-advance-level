{
    //plymoorphisom
    class Person {
        getSleep(){
            console.log("I am sleeping for 8 hours  par day");
        }
    }
    class Student extends Person {
         getSleep(){
            console.log("I am sleeping for 7 hours  par day");
        }
    }
    class Developer extends Person {
         getSleep(){
            console.log("I am sleeping for 6 hours  par day");
        }
    }

    const getSleepHours = (param: Person) =>{
        param.getSleep()
    } 
    const persone1 = new Person()
    const persone2 = new Student()
    const persone3 = new Developer()
    getSleepHours(persone1)

    class Shape {
        getArea(){
            return 0;
        }
        radius:number;
    }
    class Circle extends Shape {
        radius : number;
        constructor(radius: number){
            super();
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }


    class Rectangle extends Shape {
      height: number;
       width: number;
        constructor(height: number, width:number){
            super();
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    }
    const getShapeArea =( param: Shape) =>{
        console.log(param.getArea());
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(10,20)
    getShapeArea(shape2)




    //
}