"use strict";
var _a, _b, _c;
{
    let statement = "i will become a great dev";
    // console.log(statement)
    const ageNAme = [25, "habib", true];
    const student = {
        firstname: "habib",
        lastname: "rifat",
        ocupation: "web developer"
    };
    student.ocupation = "web developer";
    // function 
    function addAll(number1, number2) {
        return number1 + number2;
    }
    addAll(5, 5);
    const addall2 = (numer1, number2) => numer1 + number2;
    const richUser = {
        name: "habib",
        balane: 0,
        totyalBalance(balane) {
            return `i have lots of money ${this.balane + balane}`;
        }
    };
    const arr = [10, 21, 33];
    arr.map((element) => (element * element));
    // spread oparator 
    // rest operator
    // destructuring 
    // spread operator 
    const friends = ["habib", "rakib", "sakiub", "nakib"];
    const friends2 = ["abdullah", "mukit", "jim"];
    const allFriendsList = [...friends, ...friends2];
    //  console.log("all friend list ", allFriendsList)
    //  friends.push(...friends2)
    //  spread for object 
    let mentors = {
        html: "habib",
        css: "labib",
        xml: "uganda"
    };
    const mentors2 = {
        html2: "habib",
        css2: "labib",
        xml2: "uganda"
    };
    mentors = Object.assign(Object.assign({}, mentors), mentors2);
    const allMentors = Object.assign(Object.assign({}, mentors), mentors2);
    // console.log(allMentors)
    const allFriends = (...friends) => {
        friends.forEach(element => {
            // console.log(element)
        });
    };
    allFriends(...friends);
    // .................disturing 
    // object dsturing 
    const studentx = {
        id: "black_black",
        name: {
            firstName: "habib",
            middleName: "rifat",
            lastname: "imam"
        },
        contactno: "123444444444",
        address: "khilkhat"
    };
    // you ccant have name alies in distruring 
    const { id, name: { lastname }, contactno } = studentx;
    // array distruring 
    const friendAtrray = ["habib", "rakib", "sakiub", "nakib", "black", "blue"];
    const [, , bestfriend, ...reatFriend] = friendAtrray;
    const student1 = {
        id: "iusfhiudshs",
        namex: {
            firstName: "habib",
            middletName: "rifat",
            lastName: "rana"
        },
        contactNo: "1234567"
    };
    const student2 = {
        id: "iusfhiudshs",
        namex: {
            firstName: "habib",
            middletName: "rifat",
            lastName: "rana"
        },
    };
    const friendsLIst = ["yooooo", "blue blue"];
    const add = (number1, number2) => number1 + number2;
    const habibRifat = "expartDeveloper";
    const habibRifat2 = "FakibazDeveloper";
    const habibRifat3 = "juniorDeveloper";
    const habibRifatx = "FakibazDeveloper";
    const habibRifaty = {
        id: "yoooooooooo",
        contactNo: "iugiuguygy",
        deg: "black",
        deg2: "blue"
    };
    // trinary operator the question mark many face 
    // console.log("i am working")
    const age = 15;
    {
        age >= 18 ? console.log("adult") : console.log("just a child ");
    }
    // nullify check it works for only null and undefined value nullish caulissing operator
    const isouthorised = undefined;
    const studentmnx = {
        name: "habib",
        address: {
            present: "khilKhat",
            permanent: "yoo"
        }
    };
    const permanentAddress = (_b = (_a = studentmnx === null || studentmnx === void 0 ? void 0 : studentmnx.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "no Permanent address";
    const permanentAddress2 = ((_c = studentmnx === null || studentmnx === void 0 ? void 0 : studentmnx.address) === null || _c === void 0 ? void 0 : _c.permanent) ? studentmnx.address.permanent : "no xxxx address";
    //  console.log({permanentAddress}, {permanentAddress2})
    //  unknown type and never type 
    const calculateDistance = (val) => {
        const x = typeof val;
        if (x === "number") {
            const dis = val * 1000;
            console.log(dis);
        }
        if (x === "string") {
            const [xm, str] = val.split(' ');
            const speed = parseFloat(xm);
            console.log(xm * 500);
        }
    };
    calculateDistance("100 kmPh");
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("i am throwing error");
}
