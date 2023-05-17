var checkbox= document.getElementById("propietario");
var checkbox2= document.getElementById("tercero");
var formulario=document.getElementById("informacionConfidencial");
var botonEnviarDatos=document.getElementById("boton");
var correo=document.getElementById("campo");
var telf=document.getElementById("campo1");

botonEnviarDatos.disabled=true;
//Para el checkbox tercero

checkbox.addEventListener("click",function()
{
  var checked = checkbox.checked;
  if(checked)
  {
    botonEnviarDatos.disabled=false;
  }
  else{
    botonEnviarDatos.disabled=true;
  }    
 
})

//Para el checkbox tercero

checkbox2.addEventListener("click",function()
{
  var checked = checkbox2.checked;
  if(checked)
  {
    formulario.style.visibility="visible"; //visible muestra
  }
  else{
    formulario.style.visibility="hidden"; //hidden oculta
  }    
 
})



function validar() 
{
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var valor = document.getElementById("email");
    if (!expresion.exec(valor.value)) {
        alert("El campo correo electrónico es incorrecto");
        document.getElementById("email").value = "";
    }    
}

function validarTelefono()
{
    var valor = document.getElementById("telefono").value;
    if (valor.length !== 10 || valor == "") {
        alert("El campo teléfono es incorrecto, solo 10 digitos");
        document.getElementById("telefono").value = "";
        return false;
    }
    return true;
}


function enviarform() {
    var boton = document.getElementById("btncontacto");
     boton.disabled=true;
     boton.innerText ="Enviando datos....";

     this.form.submit();
}

