function renderMainPage(){
    var name = document.getElementById("name").value;
    var pswd = document.getElementById("password").value;
    console.log("name");
    if(name != '' && pswd != ''){
        window.location.href = "mainpage.html";
    }
    else{
        alert("Enter Both username and password");
    }

}