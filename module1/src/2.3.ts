{
    //  generic type
    type GenericArray<T> = Array<T>

    //const roleNumbers : number[] = [2,3,4,5];
    const roleNumbers : GenericArray<number> = [2,3,4,5];
    //const mentors : string[] = [" Mr. x", 'Mr.y', 'Mr.z'];
    const mentors : Array<string> = [" Mr. x", 'Mr.y', 'Mr.z'];
    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    // const boolArray: GenericArray<boolean> = [true, false, true];
    

    interface User  {
        name: string;
        age: number;
    }
    const user : GenericArray<{name:string, age: number}>= [{name:"mezba", age: 100}, { name:'jhankar mahabub', age: 33}]
    const add = (x: number, y: number) => x+y

    //  Generic tuple
    type GenericTuple<x,y>=[x, y]
     const manush : GenericTuple<string, string> = ["mr.x", 'mr.y']

    const userWithId: GenericTuple<number,{ name:string, email:string}> = [1134, {name: "parsian", email: 'a@gmail.com'}]

}