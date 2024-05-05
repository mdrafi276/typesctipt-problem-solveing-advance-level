{
    //type gurds

    //  typeof --> type gurds

    type Alfanewmaric = string | number;
    const add = (param1:Alfanewmaric , peram2: Alfanewmaric): Alfanewmaric =>{
        
        if(typeof param1 === "number" && typeof peram2 === 'number'){
            
            return param1 + peram2;
        }
        else{
            return param1.toString() + peram2.toString();
        }
        
    }
    const result = add(2, 3)
    console.log(result);



    // in guard

    type NOrmalUser = {
        name: string
    }
    type AdminUser = {
        name:string;
        role:"admin"
    }



    const getUser = (user: NOrmalUser | AdminUser) =>{
            if("role" in user){
                console.log(`My name is ${user.name} My role is ${user.role}`);
            } else{
                console.log(`My name is ${user.name}`);
            }
    }

    const normalUser : NOrmalUser = {
        name:"mr. normal bhai",
    }
    const adminUser :AdminUser ={
        name: 'mr admin bhai',
        role:"admin"
    }

    getUser(adminUser)
    


    //
}