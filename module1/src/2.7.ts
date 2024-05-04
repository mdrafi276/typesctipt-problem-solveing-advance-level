{
    // generic constraint with keyof operatior

    type Vehicle = { 
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; //menualy
    type Owner2 = keyof Vehicle  
    

  
 const  getPropertyValue =<x, y extends keyof x >(obj: x, key: y) => {
        return obj[key]
    }
      const user = {
        name:'mr parsian',
        age: 16,
        address:'ctg'
    }
      const car = {
        name:'tesla',
        model:" teslalaallala",
        address:'ctg'
    }
    const result1 = getPropertyValue(user, 'name');


    



    //
}