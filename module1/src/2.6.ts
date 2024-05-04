{
  const addCourseToStudent = <T extends {name:string, id:number, email:string}>(student: T): T => {
    const course = " Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  interface StT {
    name: string;
    email: string;
    devType: string;
    hasWatch: string;
  }

  const student1 = addCourseToStudent({
    id:222,
    name: "mr x",
    email: "x@gmail.com",
    devType: "NLWD",
    
  });

  const student3 = addCourseToStudent({
   id:444,
    name: 'rohim',
    email:'rohim@gmail.com',
    devType:"frontend developer",
  })

  const student2 = addCourseToStudent({
    id: 23,
    name: "mr Y",
    email: "x@gmail.com",
    devType: "NLWD",
    hasWatch: "apple watch",
  });
}
