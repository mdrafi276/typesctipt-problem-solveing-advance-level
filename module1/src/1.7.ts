{
    const bros1:string[] = ["mir", "mezba", "Mizan","firoz"]
    const bros2:string[] = ["Tomnoy", "Nahid","Rahat"]



    bros1.push(...bros2)
}

const mentors ={
    typescript:"mezba",
    redux:"Mir",
    dbms:"mizan"
}
const mentors2 ={
    prisma:"firoz",
    next:"Tonmoy",
    cloud:"nahid"
}

const mentorsList ={
    ...mentors,
    ...mentors2
}


// Learn rest oparetor

const greatFriend = (...friends: string[]) =>{

    // console.log(`hi ${friend1},${ friend2},${friend3}`)
    friends.forEach((friend:string) =>console.log(`Hi ${friend}`))

    greatFriend("abul", "kanul", "babul","ubol","labul", "habol")
}