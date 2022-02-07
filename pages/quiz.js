// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const dbRef = ref(db, "quiz");





onValue(
    dbRef,
    function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        ordersData.push(childSnapshot.val()); 
      });
    },
    {
      onlyOnce: false,
    }
  );
var ordersData = [];
var qnumber = 0;
var correctAns = 0;
function renderArray() {
    ordersData.forEach(function (e) {
    if((qnumber+1) > e.arr.length){
        document.getElementById("quesNoShow").innerHTML = "";
        document.getElementById("showAll").innerHTML = ""  ;
        document.getElementById("result").innerHTML = "Result" ;
        document.getElementById("resultshow").style.display = "block"; 
        document.getElementById("resultshow").innerHTML = "Your Score is " + (((correctAns/e.arr.length)*100).toFixed(2)) + "%";

        
    }
    else{
    document.getElementById("quesNoShow").innerHTML = (qnumber+1) + "/"+e.arr.length
    document.getElementById("showAll").innerHTML = `<div class="py-4 my-2 container text-white"  style="background-color:black;border-radius: 10px;">
        <div class="form-floating" id="questShow">
            <h2>${e.arr[qnumber].question}</h2>
          </div>
    </div>
    <div class="container py-2 my-3" style="border: 5px solid black; border-radius: 10px;">
        <div class="row">
            <div class="col-md-6 my-3">
                <div>
                    <button type="button" class="btn w-100 fs-3 rounded-pill" style="background-color: #48cae4;" onclick="questionShow(${e.arr[qnumber].options[0]})">${e.arr[qnumber].options[0]}</button>
                </div>            
            </div>
            <div class="col-md-6 my-3">
                <div>
                    <button type="button" class="btn  w-100 fs-3 rounded-pill" style="background-color: #48cae4;" onclick="questionShow(${e.arr[qnumber].options[1]})">${e.arr[qnumber].options[1]}</button>
                </div>            
            </div>
            <div class="col-md-6 my-3">
                <div>
                    <button type="button" class="btn  w-100 fs-3 rounded-pill" style="background-color: #48cae4;" onclick="questionShow(${e.arr[qnumber].options[2]})">${e.arr[qnumber].options[2]}</button>
                </div>             
            </div>
            <div class="col-md-6 my-3">
                <div>
                    <button type="button" class="btn  w-100 fs-3 rounded-pill" style="background-color: #48cae4;" onclick="questionShow(${e.arr[qnumber].options[3]})">${e.arr[qnumber].options[3] } </button>
                </div>            
            </div>
            
        </div>
    </div>
    `
            

}

    }
        )


}
document.getElementById("jojo").addEventListener("click", function(){
    renderArray();
    document.getElementById("jojo").style.display = "none"
    
})
document.questionShow = function(op){
    ordersData.forEach(function (e) {    
        if(op == e.arr[qnumber].correct){
            console.log("yes")
            qnumber++;
            correctAns++;
            console.log(e.arr.length)
            console.log(correctAns)
            renderArray()
            
        }
        else{
            console.log("No")
            qnumber++;
            renderArray()
        }

        

        }


    
    )

}
