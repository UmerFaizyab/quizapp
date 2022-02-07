document.getElementById("sub").addEventListener("click", function(){
    if(document.getElementById("secret").value == 0001){
        window.location.assign("pages/setquiz.html")
    }
    else{
        alert("Wrong Key")
        document.getElementById("secret").value = ""
    }
})
document.getElementById("attemptquiz").addEventListener("click",function(){
    window.location.assign("pages/quiz.html")


})
