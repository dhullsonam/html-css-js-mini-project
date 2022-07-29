
function signUpInfo(){
    var email = document.getElementById("email").value;
    // alert(xx)
    var pswd = document.getElementById("password").value;
    if(email != null && pswd != null){
        window.localStorage.setItem(email, pswd);
    }

}

function submitLoginInfo(){
    // var newEmail = document.getElementById("email").value;
    // // alert(xx)
    // var pswd = document.getElementById("password").value;
    // alert(window.localStorage.getItem(email))
alert("hello")
    console.log("im js file")
    // if(email === newEmail){
    //    alert("yes")
    // }
}