{
    // mapped types

    const arrayOfNumber: number[] = [1,2,3,4];

    // const arrayOfString:string[] = ['1','2, 3', '4'];

    const arrayOfString : string[] = arrayOfNumber.map(number => number.toString());
    

    
    console.log(arrayOfString)

    type AreaNumber = {
        height: number;
        width: number;

    }
    // interface AreaString {
    //     heidth:string;
    //     width: string;
    // }


    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1: AreaString<{heidth:string, width:number}> ={
        heidth:"33",
        width:33
    }



    //
}