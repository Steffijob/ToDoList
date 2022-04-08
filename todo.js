function ajax(){

    //Creating an XHR Object
    var xhttp = new XMLHttpRequest()
    //Eventlistener
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4&&this.status==200){
            
            var response = JSON.parse(this.responseText);
            var output ="";
             
            for(var i=0;i<response.length;i++){
                output += "<li>"+ response[i].title+"</li>";
    
            }
            document.getElementById("demo").innerHTML=output;
    
    
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    
    xhttp.send();
    }

    function myFunction()
    {
        window.location="login.html";
    }



