function long(){ 
       var twitter= document.getElementById('comment').value;
       var contador= document.getElementById("caracteres");
       var max= 140;
       contador.innerHTML = max-twitter.length;
        
        if(document.getElementById('caracteres').value.length >=120 ){
        element.style.color = 'green';
        }if(document.getElementById('caracteres').value.length >=130){
        element.style.color = 'red';
    }
   }{}




function add(){ /*AÑADIR COMENTARIOS ABAJO*/
    var tweet= document.getElementById('comment').value;
    var contenedor= document.getElementById('comentariosabajo');

 
    document.getElementById('comment').value = "";
    var newtweet= document.createElement('div');
    newtweet.setAttribute("class", 'cajita')
    
   var paragraph= document.createElement('p');
   paragraph.classList.add('color')
   var nodoText= document.createTextNode(tweet);

   paragraph.appendChild(nodoText);
   newtweet.appendChild(paragraph);
   contenedor.appendChild(newtweet);
  

}

var textarea = document.getElementById("comment");
var limit = 200;

comment.oninput = function() {
 textarea.style.height = "";
 textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
 

 var Cuadrocomentarios = document.getElementById

}

