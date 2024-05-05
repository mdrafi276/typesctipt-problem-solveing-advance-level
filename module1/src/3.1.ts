{
    // opp - class 

    class Animal {
    //    public name: string;
    //     public species: string;
    //    public  sound: string;
         constructor( public name:string, public species:string, public sound:string){
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    }

    makesSound(){
        console.log(`The ${this.name} say ${this.sound}`);
    }
    }

    const deg = new Animal("German Shepard Bhai", "dog", "Ghew Ghew")
    const cat = new Animal("persian bhai", "cat", "meaw meaw")

   cat.makesSound()


    //
}