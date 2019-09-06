/*VALIDACIÓ DEL FORMULARI*/
/*detectem l'event del "click" del botó del formulari*/
/*funció de validació*/
function validar(){
  /*desem a una variable el valor del primer "input" (nom)*/
  /*agafem el atribut "value" del input mitjançant el DOM(Model Object Document)*/
  var nom = document.getElementById('nom').value;
  /*lo mateix amb el camp "missatge"*/
  var missatge = document.getElementById('missatge').value;
  /*control del contingut del input amb id "nom"*/
  if(nom == ""){
    // agafem per ID el element y apliquem un border vermell
    document.getElementById("nom").style.border = "2px solid red";
    // missatge popup per donar l'error
    alert("el camp nom és buit");
  }else{
    /*lo mateix amb el camp "missatge"*/
    if(missatge == ""){
      alert("el camp missatge és buit");
    }else{
      alert("El formulari s'ha enviar correctament");
    }
  }
}
