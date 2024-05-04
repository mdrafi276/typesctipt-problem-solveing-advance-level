{
    // conditional type 


    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false // Conditonal type

    type y =  a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    // keyof Sheikh "bike" | 'car' | "ship" ;

    
    // car aase kina / bike ase kina / tractor ase kina 

    type checkVehicle<T> = T extends keyof Sheikh ? true : false;
    type HasTroctor = checkVehicle<"1">


    //
}