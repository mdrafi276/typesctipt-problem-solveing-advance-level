{
    //abstraction : 1. interface, 2. abstract

    interface Vehicel1 {
       startEngine():void;
       stopEngine():void;
       move(): void;

    }


    class car1 implements Vehicel1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log('I am moving the car');
        }
        test(){
            console.log(" i am just testing");
        }

        
    }


    

    const  toyotaCar = new car()
    toyotaCar.startEngine()
// abastract class

abstract class car2 {
     abstract startEngine(): void 
    abstract    stopEngine(): void 
       abstract move(): void
        test(){
            console.log(" i am just testing");
        }
}

class TototaCar extends car2{
    startEngine(): void {
        console.log(" i am starting the car engine");
    }
    stopEngine(): void {
        console.log(" i am stopping the car engine");
    }
    move(): void {
        console.log(' i  am moving the car engine');
    }
}

   const hondaCar = new car2()
hondaCar.startEngine()





    //
}