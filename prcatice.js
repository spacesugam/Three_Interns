const students = [
    {"id": 1, "name": "Sugam", "marks": 70},
    {"id": 2, "name": "Chaithra", "marks": 80},
    {"id": 3, "name": "Sharanya", "marks": 95},
]



const updatedStudents = students.map(student => {
    if (student.name === "Sugam") {
        return {...student, name: "Singh"};
    } else {
        return student;
    }
});

console.log(updatedStudents);

console.log(students);
console.log("");
//1. Display the students whose marks is more than 80

let highscorestudent = students.filter(student=>student.marks>80).map(student=>student.name);
students.map(student=>student.name)
console.log(highscorestudent);

//2. Display the name of a student whose marks is 95

let student_scored_95 = students.filter(student=>student.marks==95).map(st=>st.name);
console.log(student_scored_95);




//3.Display the total marks of all the student
let total_score = students.reduce((total,student)=>total+student.marks,0);
console.log(total_score);