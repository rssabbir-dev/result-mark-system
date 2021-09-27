
var verifySum1 = document.getElementById('verify-sum1'); //Verify Robot Sum 1
var verifySum2 = document.getElementById('verify-sum2'); // Verify Robot Sum 2

var rollOutput = document.getElementById('roll-output');
var nameOutput = document.getElementById('name-output');

var studentData = {
    student1: {
        name: 'Rahat Hossain',
        roll: '56199900',
        reg: '1611201675',
        board: 'Dhaka',
        exam: 'HSC',
        year: '2021'
    }
}
var y = studentData.student1;
function studentDataOutput(x) {
    rollOutput.innerHTML = x.roll;
    nameOutput.innerHTML = x.name;
}

function submitBtn() {
    var exam = document.getElementById('exam').value; //Examintion Value
    var year = document.getElementById('year').value; // Passing Year Value
    var board = document.getElementById('board').value; //Education Board Value
    var roll = document.getElementById('roll').value; // Student ROll Number
    var regNo = document.getElementById('reg-no').value; //Student Reg Number

    var verifySumInput = document.getElementById('verify-sum').value;
    if (exam == y.exam && board == y.board && year == y.year && regNo == y.reg && verifySumInput == verifySum) {
        studentDataOutput(studentData.student1)
    }
}

var sum1 = Math.floor(Math.random() * 50 + 1);
var sum2 = Math.floor(Math.random() * 50 + 1);
var verifySum = sum1 + sum2;

verifySum1.innerHTML = sum1
verifySum2.innerHTML = sum2

