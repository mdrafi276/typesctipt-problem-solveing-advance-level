const user ={
    id:345,
    name:{
        firstName:"Mezbabul",
        middleName:"Abidin",
        lastName:"Persian"
    },
    contactNo:"0170000000",
    address:"Uganda",

};
 const {contactNo, name:{middleName:midname}} = user;

 const  myFriends =['chandler',"joey","ross",'rachel','monica',"phoebe"]
 const [,, bestfriend,...rest] =  myFriends