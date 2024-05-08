{
    let statement : string = "i will become a great dev"
// console.log(statement)
const ageNAme : [number, string, boolean] = [25, "habib", true]

const student :{ firstname:string;
     ocupation:"web developer";
    middlename?:string;
    lastname:string
}={
     firstname:"habib",
    lastname:"rifat",
    ocupation:"web developer"
}

student.ocupation = "web developer"


// function 


function addAll(number1:number , number2:number):number
{
return number1 + number2
}
addAll(5,5)

const addall2=(numer1:number, number2:number):number=> numer1+number2

const richUser = {
    name:"habib",
    balane:0,
    totyalBalance(balane:number):string{
        return `i have lots of money ${this.balane + balane}`
    }
}

const arr:number[] =[10,21,33]
arr.map((element:number):number=>(element* element))


// spread oparator 
// rest operator
// destructuring 



// spread operator 

 const friends : string[]=["habib","rakib","sakiub","nakib"]
 const friends2 : string[]=["abdullah","mukit","jim"]

 const allFriendsList :string[] =[...friends, ...friends2]
//  console.log("all friend list ", allFriendsList)
//  friends.push(...friends2)

//  spread for object 

let mentors = {
    html:"habib",
    css:"labib",
    xml:"uganda"
}
const mentors2 = {
    html2:"habib",
    css2:"labib",
    xml2:"uganda"
}




mentors={...mentors,...mentors2}

const allMentors = {...mentors, ...mentors2}
// console.log(allMentors)

const allFriends=(...friends:string[])=>{
    friends.forEach(element => {
        // console.log(element)
    });
}
allFriends(...friends)

// .................disturing 
// object dsturing 

const studentx = {
    id:"black_black",
    name:{
        firstName:"habib",
        middleName:"rifat",
        lastname:"imam"
    },
    contactno:"123444444444",
    address:"khilkhat"
}


// you ccant have name alies in distruring 
const { id,
    name:{
        lastname
    },
    contactno
 }=studentx

// array distruring 

const friendAtrray=["habib","rakib","sakiub","nakib","black","blue"]

const [,,bestfriend,...reatFriend]= friendAtrray

// type alies is fixing type to a veriable and name alies fixing a value to a veriable

// type Alis for object 

type GoodStudent={
    id : string;
    namex:{
        firstName:string;
        middletName:string;
        lastName:string;
    };
    contactNo?:string;
}

const student1 : GoodStudent ={
    id:"iusfhiudshs",
    namex:{
        firstName:"habib",
        middletName:"rifat",
        lastName:"rana"
    },
    contactNo:"1234567"
}
const student2 : GoodStudent ={
    id:"iusfhiudshs",
    namex:{
        firstName:"habib",
        middletName:"rifat",
        lastName:"rana"
    },
    
}

// type alies for array 

type FriendsArray = string[];

const friendsLIst : FriendsArray = ["yooooo","blue blue"]


// type alies for function 
type Add  = (number1:number, number:number) => number 

const add:Add = (number1 , number2) => number1+number2


// union and interrSection practice 

type FrontEndDeveloper = "FakibazDeveloper" | "juniorDeveloper";
type BackEndDeveloper = "FakibazDeveloper" | "expartDeveloper";


// | takes the all proprrty of both if there is no common proprrty then thetr will be no type 
type FullStackDeveloper = FrontEndDeveloper | BackEndDeveloper

const habibRifat : FullStackDeveloper = "expartDeveloper"
const habibRifat2 : FullStackDeveloper = "FakibazDeveloper"
const habibRifat3 : FullStackDeveloper = "juniorDeveloper"

// & takes the common proprrty of both if there is no common proprrty and whatever proprty is left as uncommon then thetr will be no type 
type FullStackDeveloper2 = FrontEndDeveloper & BackEndDeveloper
const habibRifatx : FullStackDeveloper2 = "FakibazDeveloper"
// other developer option is not valid as we are using and operator only common one


// foer objct now


type FrontEndDeveloper2 = {
    id:string;
    contactNo:String;
    deg:string
}
type BackEndDeveloperx = {
    id:string;
    contactNo:String;
   deg2:string
}
 

type FullstackDeveloperM = FrontEndDeveloper2 & BackEndDeveloperx

const habibRifaty : FullstackDeveloperM = {
id:"yoooooooooo",
contactNo:"iugiuguygy",
deg:"black",
deg2:"blue"

}



// trinary operator the question mark many face 

// console.log("i am working")

const age : number = 15;

{
    age >= 18 ? console.log("adult"): console.log("just a child ")
}

// nullify check it works for only null and undefined value nullish caulissing operator

const isouthorised : undefined = undefined;

const studentmnx :{
    name:string;
    address:{
        present:string;
        permanent?:string
    }
}={
    name:"habib",
    address:{
        present:"khilKhat",
        permanent:"yoo"
    }
}

 const permanentAddress = studentmnx?.address?.permanent ?? "no Permanent address"
 const permanentAddress2 = studentmnx?.address?.permanent ? studentmnx.address.permanent : "no xxxx address"
//  console.log({permanentAddress}, {permanentAddress2})


//  unknown type and never type 
 const calculateDistance = (val : unknown)=>{
    const x = typeof val
    if (x === "number")
        {
            const dis = val * 1000;
            console.log(dis)
        }
   
    if (x === "string")
        {
            const [xm, str] = val.split(' ')
            const speed = parseFloat(xm)
            console.log(xm*500);

        }
}

calculateDistance("100 kmPh");

const throwError=(msg:string):never =>{
    throw new Error (msg)
}
throwError("i am throwing error")




}