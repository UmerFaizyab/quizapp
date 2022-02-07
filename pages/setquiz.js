// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";

import {
  getDatabase,
  push,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpB_WPoGbck6mfFAvPhVUwBC85t8ZewxM",
    authDomain: "quiz-2e4a8.firebaseapp.com",
    databaseURL: "https://quiz-2e4a8-default-rtdb.firebaseio.com",
    projectId: "quiz-2e4a8",
    storageBucket: "quiz-2e4a8.appspot.com",
    messagingSenderId: "976465019952",
    appId: "1:976465019952:web:b506b57e1f2dfb9f5659f5",
    measurementId: "G-49QEC0L97R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();






var questions = []
document.getElementById("quesNoShow").innerHTML = "Question No " + (questions.length+1)

document.questionAdd = function(){
    document.getElementById("quesNoShow").innerHTML = "Question No " + (questions.length+2)
    var queObject = {};
    queObject.question = document.getElementById("quest").value
    queObject.options = [
        document.getElementById("op1").value,
        document.getElementById("op2").value,
        document.getElementById("op3").value,
        document.getElementById("op4").value,
    ]
    queObject.correct = document.getElementById("correctAns").value
    questions.push(queObject)
    console.log(questions)
    document.getElementById("quest").value = ""
    document.getElementById("op1").value = ""
    document.getElementById("op2").value = ""
    document.getElementById("op3").value = ""
    document.getElementById("op4").value = ""
    document.getElementById("correctAns").value = ""

    // console.log(questions.length)
}



document.addtodatabase = function () {
    var obj = {};
    obj.arr = questions;
  
    const quizez = ref(db, "quiz");
    const newPostRef = push(quizez);
    obj.id = newPostRef.key;
    set(newPostRef, obj)
      .then(function () {
        console.log("success");
        window.location.assign("../index.html")

      })
      .catch(function (err) {
        console.log(err);
      });
  
    console.log(obj);
  };