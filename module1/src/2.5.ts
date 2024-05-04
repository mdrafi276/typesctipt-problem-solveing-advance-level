{
    // function with generic

     const createArray = (params: string): string[] =>{

        return [params]
     }




     const createArrayWithGeneric = <T>(param: T):T[] =>{

        return [param];
     }
     interface GenericObj {id: number, name: string}
     const res1 = createArray("bangladesh");
     const resGeneric = createArrayWithGeneric<string>("bangladesh")
     const resGenericObj = createArrayWithGeneric<GenericObj>({id:222, name:'mr parsian'})







     const createArrayWithTuple= <T, Q>(param1: T, param2: Q):[T,Q]  =>{

        return [param1, param2];
     }
     interface GenericObj {id: number, name: string}
     const res10 = createArrayWithTuple<string, number>("bangladesh", 22);
     const res12 = createArrayWithTuple<string, {name:string}>("bangladesh",
     
     {name: 'asia'}, 
    );
     const resGeneric = createArrayWithGeneric<string>("bangladesh")
     const resGenericObj = createArrayWithGeneric<GenericObj>(
        {id:222, name:'mr parsian'}
    )





    const addCourseToStudent =<T> (student: T):T =>{
        const course = " Next Level Web Development";
        return {
            ...student,
            course
        }
    }

        interface StT {
            name:string,
             email:string
             devType: string
             hasWatch:string
            }


    const student1 = addCourseToStudent<StT>({ name:'mr x', email:'x@gmail.com', devType:'NLWD'})
    const student2 = addCourseToStudent<StT>({ name:'mr Y', email:'x@gmail.com', devType:'NLWD', hasWatch:'apple watch'})





    //

}