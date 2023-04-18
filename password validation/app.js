let is_visible = false;

function see() {
    let input = document.getElementById("password");
    let see = document.getElementById("see");

    if(is_visible){
        input.type = 'password'
        is_visible = false;
        see.style.color = 'gray'
    }

    else {
        input.type = 'text';
        is_visible = true;
        see.style.color = "red";
    }
}

function check (Value) {
   
    
   let input = Value.trim();

   document.getElementById("count").innerText = "Passowrd Lenght : " + input.length;

   if(input.length>=5){
    document.getElementById("count1").style.color  = "#50f20af4";
    document.getElementById("fa-check").style.color = "#50f20af4";
   }

   else{
    document.getElementById("count1").style.color = "#fff";
    document.getElementById("fa-check").style.color = "#abcbf5";
   }

   if(  input.length <=15 ){
    document.getElementById("count2").style.color = "#50f20af4";
    document.getElementById("fa-check2").style.color = "#50f20af4";
   }

   else{
    document.getElementById("count2").style.color = "#fff";
    document.getElementById("fa-check2").style.color = "#fff";

   }

   if(input.match(/[0-9]/gi)){
    document.getElementById("count3").style.color = "#50f20af4";
    document.getElementById("fa-check3").style.color = "#50f20af4";

   }
   else{
    document.getElementById("count3").style.color = "#fff";
    document.getElementById("fa-check3").style.color = "#abcbf5";
   }
   if(input.match(/[A-Z]/)){
    document.getElementById("count4").style.color = "#50f20af4";
    document.getElementById("fa-check4").style.color = "#50f20af4";

   }
   else{
    document.getElementById("count4").style.color = "#fff";
    document.getElementById("fa-check4").style.color = "#abcbf5";
   }
   if(input.match(/[^A-Za-z0-9'']/i)){
    document.getElementById("count5").style.color = "#50f20af4";
    document.getElementById("fa-check5").style.color = "#50f20af4";

   }
   else{
    document.getElementById("count5").style.color = "#fff";
    document.getElementById("fa-check5").style.color = "#abcbf5";
   }
   if(input.match(" ")){
    document.getElementById("count6").style.color = "#50f20af4";
    document.getElementById("fa-check6").style.color = "#50f20af4";

   }
   else{
    document.getElementById("count6").style.color = "#fff";
    document.getElementById("fa-check6").style.color = "#abcbf5";
   }
 
   

    
}

