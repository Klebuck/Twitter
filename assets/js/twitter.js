
/*var comentarios= document.getElementById('comment');
var boton= document.getElementById('click');
var span= document.getElementByID('contador');
var cajadecomentarios= document.getElementByID('newtweet');

 

boton.addEventListener("click", function(){/* llamo a el boton + addeventlistener= que haga algo cuando hago click*/
//creo el input y le doy atributos//
function long(){
    	var twitter= document.getElementById('comment').value;
    	var contador= document.getElementById("caracteres");
		var max= 140;
		contador.innerHTML = max-twitter.length;
    }


function add(){
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


    


