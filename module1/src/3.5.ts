{
    // Access modifiers

    class BankAccount {
       public readonly id: number;
       public name: string;
        private _balance:number;
    
        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        
        addDeposit(amount:number){
            this._balance = this._balance + amount
        }
        
        
        getBlance(){
            return this._balance;
        }
        
        
    }
    
    const goribManusherAccount = new BankAccount(111, 'Mr. gorib', 39);

    goribManusherAccount.addDeposit(39)
    const mybalance = goribManusherAccount.getBlance()
    console.log(mybalance);
}