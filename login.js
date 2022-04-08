function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin"&&password=="12345")
    {
        // alert("login successfully");
        // return false;
        window.location="todo.html";
        
    }
    else{
        alert("login failed");
    }
}