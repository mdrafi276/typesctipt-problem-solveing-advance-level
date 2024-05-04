{

    // promis

    interface Tod {
        id: number;
        userID:number
        title:string;
        completed:boolean;
    }
    const getTodo = async ():Promise<Tod> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data.userI.0[]D);
        console.log(data.id);
        console.log(data.title);
    }
    getTodo();
    type someType = {
        something: string
    }


    const createPromise =():Promise<someType> =>{
        return new Promise<someType>((resolve, reject) =>{
            const data : Promise<someType> = 'something'
            if (data){
                resolve(data);
            }
            else{
                reject("Faield to load data");
            }
        })
    }

    // Calling create promise function 
     const showData =async()=>{
        const data = await createPromise();
        console.log(data);
        return data
     }
     showData()


}
