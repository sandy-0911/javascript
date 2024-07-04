const tinderUser = new Object()

tinderUser.id = "234sandy"
tinderUser.name = "Sandeep"
tinderUser.isLoggedIn= false
// console.group(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname: {
            first_name : "Sandeep",
            last_name : "sahoo"
        }
    }
}
// console.log(regularUser.fullname?.userFullname.first_name)

const obb1 = { 1: "a" , 2: "b"}
const objj1 = { 3: "c" , 4: "d"}
// const obj3 = Object.assign({},obb1,objj1)
// console.log(obj3)

const obj3 = {...obb1, ...objj1}
// console.log(obj3)

//Destructuring of a recieved object 
//actually useful in react 
const course = {
    coursename : "Js in Hindi ",
    price: "egg",
    courseInstructor: "Hitesh"
}

//baar baar courseInstructor use karna is tedious so uska alias bana denge 

const {courseInstructor : instructor}= course 
// console.log(courseInstructor)
// instead of console.log(course.courseInstructor)
console.log(instructor)
