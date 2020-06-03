 (function() {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var nameValidation = function(e) {
        if(formulario.nombre.value == 0) {
            alert("Complete el campo Nombre");
            console.log(nameValidation);
            e.preventDefault(e);   
        };
        
    };

    // var emailValidation = function(e){
    //     if(formulario.email.value == 0){
    //         alert("Complete el campo Correo electrónico");
    //         console.log(formulario.email.value);
    //         e.preventDefault(e)
    //     };
        
    // };

    // var phoneValidation = function(e){
    //     if(formulario.phone.value == 0){
    //         alert("Complete el campo Número de contacto");
    //         console.log(formulario.phone.value);
    //         e.preventDefault(e)
    //     };
        
    // };
    // var topicValidation = function(e){
    //     if(formulario.list.value == 0){
    //         alert("Complete el campo Estoy interesado en ...");
    //         console.log(formulario.list.value);
    //         e.preventDefault(e)
    //     };
        
    // };
    // var messageValidation = function(e){
    //     if(formulario.message.value == 0){
    //         alert("Complete el campo de Mensaje");
    //         console.log(formulario.message.value);
    //         e.preventDefault(e)
    //     };
        
    // };

    // var termsValidation = function(e){
    //     if(formulario.terms.checked === false) {
    //         alert("Acepta Terminos y Condiciones");
    //         e.preventDefault(e)
    //     }

    // };

    


    var validation = function(e){
      nameValidation(e);
    //   emailValidation(e);
    //   phoneValidation(e);
    //   topicValidation(e);
    //   messageValidation(e);
    //   termsValidation(e);

    };

    formulario.addEventListener("submit", validation)
}())