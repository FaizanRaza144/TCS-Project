const express = require('express');
var router = express.Router();
const result = [{
    "id": 1,
    "student_name": "Faizan",
    "marks": 89
},
{
    "id": 2,
    "student_name": "Umair",
    "marks": 85
},
{
    "id": 1,
    "student_name": "Shaheer",
    "marks": 88
},
{
    "id": 1,
    "student_name": "Nouman",
    "marks": 70
},
{
    "id": 1,
    "student_name": "Ali",
    "marks": 91
},];
var url = 'mongodb://localhost:27017/database';

const App = express();

App.listen(3000,()=>{
console.log("App is working fine");
})

App.get('/result',(req,res)=>{
    res.json(result);
})