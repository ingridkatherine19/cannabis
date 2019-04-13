function soloNumeros(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;s
    }
}
    


$(document).ready(function () {

    $.validator.addMethod("validName", function(value, element, arg){
        var re = new RegExp(arg);
        return this.optional(element) || re.test(value);
    }, "Valor inválido.");

    $.validator.addMethod("validEmail", function(value, element, arg){
        var re = new RegExp(arg);
        return this.optional(element) || re.test(value);
    }, "Valor inválido.");

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
    }, "Valor inválido.");

    $.validator.addMethod("valueEquals", function(value, element, arg){
        if($.inArray(value, arg) != -1){
        	return true;
        }else{
        	return false;
        }
    }, "Valor inválido.");

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.");

    $.validator.addMethod("validDay", function(value, element, arg){
        var month = $("#month").val();
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){//Enero, marzo, mayo, julio, agosto, octubre y diciembre.
            return true;
        }else if(month == 4 || month == 6 || month == 9 || month == 11){//Abril, junio, septiembre y noviembre. 
            if(value == '31'){
            	return false;
            }
            return true;
        }else{//2
        	if(value == '31' || value == '30' || value == '29'){
            	return false;
            }
            return true;
        }
    }, "Valor inválido.");

    $.validator.addMethod("validURL", function(value, element, arg){
        var re = new RegExp(arg);
        return this.optional(element) || re.test(value);
    }, "La URL es inválida!!!");

    if($("#form_contacto").length > 0){
        $("#form_contacto").validate({
            debug: true,
            errorElement: "span",
            rules: {
                email: {validEmail: /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i },
                nombre: { valueNotEquals: "", validName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i },   
                telefono: { required: true, number: true },
                peso: { required: true, number: true },
                talla: { required: true, number: true },
                edad: { required: true, number: true },
                distrito: { valueNotEquals: "default" },
                msm: { required: false},
            },
            messages:{
                nombre: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 2 caracteres"
                },
                edad: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 1 caracteres"
                },
                peso: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 2 caracteres"
                },
                talla: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 2 caracteres"
                },
                distrito: {
                    valueNotEquals: "Debe seleccionar un distrito"
                },
                telefono: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 7 caracteres"
                },
                email: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 6 caracteres",
                    validEmail: "Formato de Email no válido"
                },
                telefono: {
                    required: "Este campo es requerido",
                    minlength: "Minimo debe tener 7 caracteres"
                },
                msm: {
                    minlength: "Minimo debe tener 2 caracteres"
                },
            },
            highlight: function (element, errorClass, validClass) { //glyphicon-ok -- glyphicon-remove
                
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                //$(element).closest('.form-group').find('span').removeClass('glyphicon-ok').addClass('glyphicon-remove');
            },
            unhighlight: function (element, errorClass, validClass) {
                
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                //$(element).closest('.form-group').find('span').removeClass('glyphicon-remove').addClass('glyphicon-ok');
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length || element.prop('type') === 'radio' || element.prop('type') === 'text' || element.prop('class') === 'form-control') {
                    //error.insertAfter(element.parent());
                    error.insertAfter(element);
                }else if(element.prop('type') === 'checkbox'){
                    element.focus();
                    element.siblings().attr({
                      style: "color: red;"
                    });
                }else{
                    error.insertAfter(element);
                }
            },  
            submitHandler: function (form) {
                $(':input[type="submit"]').prop('disabled', true);
                $.ajax({
                    url: 'server/send.php', 
                    type: 'POST', 
                    data: $("#form_contacto").serialize(), 
                    success: function (data) {
                        console.log(data);
                        $("#msg_error").html("");
                        document.forms["form_contacto"].reset();
                        $(':input[type="submit"]').prop('disabled', false);
                        location.href ="http://blend.work/clientes/tudela/gracias.html";
                        //alert("Su reserva ha sido enviada correctamente, gracias por su preferencia.");
                    }
                });
                
            },
        });
    }
});