{
    // nullable types

    const searchname =(value:string | null)=>{
  if(value){
    console.log("Searching...");
  }
  else{
    console.log("there is nothing to search...");
  }
    }
    searchname(null)


// unknown typeof 
 
const getSpeedInMeterPerSecound = (value: unknown) =>{
    if(typeof value === "number"){
        const convertedSpeed = (value * 1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);

    }
    else if(typeof value === "string"){
        const [result, unit] = value.split(" ");
                const convertedSpeeds = (parseFloat(result) * 1000)/3600;

        console.log(convertedSpeeds);
    }
    else{
        console.log("Worng input");
    }

    
}
getSpeedInMeterPerSecound(`1000 kmh^-1`)

// never type

const  throwError =(msg: string): never=>{
    throw new Error(msg)
}
throwError("muskil se error hogaya")





}