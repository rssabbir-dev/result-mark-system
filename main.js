
//Robot Verification System
var verifySum1 = document.getElementById('verify-sum1'); //Verify Robot Sum 1
var verifySum2 = document.getElementById('verify-sum2'); // Verify Robot Sum 2
var sum1 = Math.floor(Math.random() * 5 + 1);
var sum2 = Math.floor(Math.random() * 5 + 1);
var verifySum = sum1 + sum2;
verifySum1.innerHTML = sum1;
verifySum2.innerHTML = sum2;
//Robot Verification System

// Student Data Store In JavaScript Object for Output Data
var studentData = {
    student1: {
        roll: '1',
        name: 'Rahat Hossain',
        board: 'Cumilla',
        fatherName: 'MD.NURUL AMIN',
        motherName: 'AYESHA AKTER',
        dateOfBirth: '18-03-2004',
        result: 'PASSED',
        school: 'CHANDAKARA SHAKANDER ALI SECONDARY SCHOOL',
        reg: '1',
        exam: 'HSC',
        year: '2020'
    },
    student2: {
        roll: '2',
        name: 'Rafi Hossain',
        board: 'Cumilla',
        fatherName: 'MD.NURUL AMIN',
        motherName: 'AYESHA AKTER',
        dateOfBirth: '18-03-2004',
        result: 'PASSED',
        school: 'CHANDAKARA SHAKANDER ALI SECONDARY SCHOOL',
        reg: '2',
        exam: 'HSC',
        year: '2020'
    }
}
// Student Data Store In JavaScript Object for Output Data

// Student Data OutPut Variable
var rollOutput = document.getElementById('roll-output');
var nameOutput = document.getElementById('name-output');
var boardOutput = document.getElementById('board-output');
var fatherNameOutput = document.getElementById('father-name-output');
var motherNameOutput = document.getElementById('mother-name-output');
var dateOfBirthOutput = document.getElementById('date-of-birth-output');
var resultOuptput = document.getElementById('result-output');
var schoolOutput = document.getElementById('school-output');
var gpaOutput = document.getElementById('gpa-output');
// Student Data OutPut Variable

// Student Data OutPut In HTML Table
var y = studentData.student1;
function studentDataOutput(x) {
    rollOutput.innerHTML = x.roll;
    nameOutput.innerHTML = x.name;
    boardOutput.innerHTML = x.board;
    fatherNameOutput.innerHTML = x.fatherName;
    motherNameOutput.innerHTML = x.motherName;
    dateOfBirthOutput.innerHTML = x.dateOfBirth;
    resultOuptput.innerHTML = x.result;
    schoolOutput.innerHTML = x.school;
    gpaOutput.innerHTML = x.gpa;
}
// Student Data OutPut In HTML Table

// Hide And Show Main Section With a Function
function hideShow() {
    document.getElementById('main-before-submit').style.display = "none";
    document.getElementById('main-after-submit').style.display = "block";

}
// Hide And Show Main Section With a Function

// When A User Submit Correct Data, The Function Analyses Is it Correct ?
// if it is.The Prograam Show Output
function submitBtn() {

    var exam = document.getElementById('exam').value; //Examintion Value
    var year = document.getElementById('year').value; // Passing Year Value
    var board = document.getElementById('board').value; //Education Board Value
    var roll = document.getElementById('roll').value; // Student ROll Number
    var regNo = document.getElementById('reg-no').value; //Student Reg Number

    var verifySumInput = document.getElementById('verify-sum').value;
    if (roll == y.roll && exam == y.exam && board == y.board && year == y.year && regNo == y.reg && verifySumInput == verifySum) {
        studentDataOutput(studentData.student1)
        hideShow()
    } else {
        alert('0')
    }

}



