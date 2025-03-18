//Define 10 students in JSON format Store it in an array

let students = [
    { id: 1, age: 20, name: "Alice", course: "IT", address: "Colombo", gpa: 3.8, gender: "Female" },
    { id: 2, age: 22, name: "Bob", course: "Business", address: "Kandy", gpa: 3.2, gender: "Male" },
    { id: 3, age: 21, name: "Charlie", course: "IT", address: "Galle", gpa: 3.6, gender: "Male" },
    { id: 4, age: 23, name: "Diana", course: "IT", address: "Jaffna", gpa: 3.9, gender: "Female" },
    { id: 5, age: 22, name: "Eve", course: "Marketing", address: "Colombo", gpa: 3.5, gender: "Female" },
    { id: 6, age: 20, name: "Frank", course: "IT", address: "Negombo", gpa: 3.4, gender: "Male" },
    { id: 7, age: 21, name: "Grace", course: "HR", address: "Kurunegala", gpa: 3.7, gender: "Female" },
    { id: 8, age: 24, name: "Hank", course: "IT", address: "Anuradhapura", gpa: 3.3, gender: "Male" },
    { id: 9, age: 23, name: "Ivy", course: "IT", address: "Gampaha", gpa: 3.9, gender: "Female" },
    { id: 10, age: 22, name: "Jack", course: "Business", address: "Matara", gpa: 3.1, gender: "Male" }
];
console.log("**************************")

//Find the female students

let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

console.log("**************************")

//Find students who follow the IT course

let ITstudents = students.filter(student => student.course === "IT");
console.log("IT Course Students:", ITstudents);

console.log("**************************")

//Find the maximum and average GPA

let maxGPA = Math.max(...students.map(student => student.gpa));

let avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

console.log(`Maximum GPA: ${maxGPA}`);
console.log(`Average GPA: ${avgGPA.toFixed(2)}`);
