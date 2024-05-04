{
    class Player {
        name: string;
        age: number;
        country: string;

        constructor(n:string, a: number, c: string){
            this.name = n;
            this.age = a;
            this.country =c;
        }
        play(){
            console.log(`${this.name} form ${this.country} is playing`);
        }
    } 
     

    const marshrafi = new Player("Marshrafi", 40, "Bnagladesh");
    const shakib = new Player("Shakib",   22, "Bnagladesh");
    console.log(marshrafi.name);
    marshrafi.name = "rafi"
    const players: Player[] = [];
    players.push(shakib)
}