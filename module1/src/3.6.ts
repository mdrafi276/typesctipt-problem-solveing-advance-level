{
    // 
    class BankAccount {
       public readonly id: number;
       public name: string;
        protected _balance:number;
    
        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        //setter
        set depostit(amount: number){
            this._balance = this.Balance + amount;
        }
        
        // addDeposit(amount:number){
        //     this._balance = this._balance + amount
        // }
//getter
get Balance(){
    return this._balance;
}

        
    //  public   getBlance(){
    //         return this._balance;
    //     }
        
        
    }
    class StudentAccount extends BankAccount{
        test(){
            this._balance
        }
    }
    
    const goribManusherAccount = new BankAccount(111, 'Mr. gorib', 39);

    // goribManusherAccount.addDeposit(39)
    // goribManusherAccount.dDeposit = 0 // function call kore

    goribManusherAccount.depostit = 20
    // const mybalance = goribManusherAccount.getBlance() //function call kore
    const mybalance = goribManusherAccount.Balance; // Property er moto kore
    
    console.log(mybalance);
}