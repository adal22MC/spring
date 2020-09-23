/* Variables para el CRUD de perfil */
var tablaPerfil;
var formAddPerfil = document.getElementById("formAddPerfil");
var btnFormCancelarPerfil = document.getElementById("btnFormCancelarPerfil");
var tituloModalPerfil = document.getElementById("tituloModalPerfil");
var collapseTablaPerfil = document.getElementById("collapseTablaPerfil");
var btnNuevoPerfil = document.getElementById("btnNuevoPerfil");
var id_perfil; // 1 -> insert, 2 -> update
var opcion_perfil;

/* Variables para el CRUD de modulo*/
var tablaModulo;
var btnNuevoModulo = document.getElementById("btnNuevoModulo");
var formAddModulo = document.getElementById("formAddModulo");
var btnFormCancelarModulo = document.getElementById("btnFormCancelarModulo");
var tituloModalModulo = document.getElementById("tituloModalModulo");
var id_modulo; // 1 -> insert, 2 -> update
var opcion_modulo;

/* Variables para el CRUD de permiso*/
var tablaPermiso;
var btnNuevoPermiso = document.getElementById("btnNuevoPermiso");
var formAddPermiso = document.getElementById("formAddPermiso");
var btnFormCancelarPermiso = document.getElementById("btnFormCancelarPermiso");
var tituloModalPermiso = document.getElementById("tituloModalPermiso");
var id_permiso; // 1 -> insert, 2 -> update
var opcion_permiso;

/* Inicializamos la datatables */
function init() {
    
    tablaPerfil = $('#tablaPerfil').DataTable({
        "responsive": true,
        "autoWidth": false,
        "ajax": "select_perfil.do",
        "columns": [
            {"data": "id_pe"},
            {"data": "nombre"},
            {"data": "status", "visible" : false},
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditarPerfil'>EDIT</button><button class='btn btn-danger btn-sm btnBorrarPerfil'>DELETE</button></div></div>"}
        ]
    });
    
    tablaModulo = $('#tablaModulo').DataTable({
        "responsive": true,
        "autoWidth": false,
        "ajax": "select_modulo_sistema.do",
        "columns": [
            {"data": "id_mo"},
            {"data": "nombre"},
            {"data" : "descripcion"},
            {"data": "status", "visible" : false},
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditarModulo'>EDIT</button><button class='btn btn-danger btn-sm btnBorrarModulo'>DELETE</button></div></div>"}
        ]
    });
    
    tablaPermiso = $('#tablaPermiso').DataTable({
        "responsive": true,
        "autoWidth": false,
        "ajax": "select_permiso.do",
        "columns": [
            {"data": "id_p"},
            {"data": "nombre"},
            {"data": "descripcion"},
            {"data": "status", "visible" : false},
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditarPermiso'>EDIT</button><button class='btn btn-danger btn-sm btnBorrarPermiso'>DELETE</button></div></div>"}
        ]
    });

    btnNuevoPerfil.click();
    btnNuevoModulo.click();
    btnNuevoPermiso.click();
}

init();

/* Funciones para el CRUD de perfil */

formAddPerfil.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let url;
    let mensaje;
    if(opcion_perfil === 1){
        url = "add_perfil.do";
        mensaje = "¡Alta exitosa!";
    }else if(opcion_perfil === 2){
        url = "update_perfil.do";
        mensaje = "¡Modificación exitosa!";
    }

    $.ajax({
        url: url,
        type: "POST",
        data: {
            id : id_perfil,
            nombre: $("#nombrePerfil").val()
        },
        success: function (resp, textStatus, jqXHR) {
            if (resp === "OK") {
                notificacionExitosa(mensaje);
                tablaPerfil.ajax.reload(null, false);
                btnFormCancelarPerfil.click();
            } else {
                notificarError(resp);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
});

btnFormCancelarPerfil.addEventListener("click", function(){
    $("#nombrePerfil").val("");
    btnNuevoPerfil.click();
});

btnNuevoPerfil.addEventListener("click", function (){
    opcion_perfil = 1;
   tituloModalPerfil.innerText = "Creación de perfil";
   btnFormCancelarPerfil.click();
});

$(document).on('click', '.btnEditarPerfil', function (){
    btnNuevoPerfil.click();
    tituloModalPerfil.innerText = "Editanto perfil";
    opcion_perfil = 2;
    
    if(tablaPerfil.row(this).child.isShown()){
        var data = tablaPerfil.row(this).data();
    }else{
        var data = tablaPerfil.row($(this).parents("tr")).data();
    }
    id_perfil = data['id_pe'];
    $("#nombrePerfil").val(data["nombre"]);
    
});

$(document).on('click', '.btnBorrarPerfil',async  function (){
    if(tablaPerfil.row(this).child.isShown()){
        var data = tablaPerfil.row(this).data();
    }else{
        var data = tablaPerfil.row($(this).parents("tr")).data();
    }

    id_perfil = data["id_pe"];
    
    const result = await Swal.fire({
        title: '¿ESTA SEGURO DE ELIMINAR EL PERFIL?',
        text: "Si no lo esta puede cancelar la acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5bc0de',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Si, eliminar!'
    });
    
    if(result.value){
        try {

            $.ajax({
                url : 'delete_perfil.do',
                type : "POST",
                data: { 
                    id : id_perfil
                },
                success : function(resp, textStatus, jqXHR) {
                    if(resp === "OK"){
                        notificacionExitosa("¡ Eliminación exitosa !");
                        tablaPerfil.ajax.reload(null, false);
                    }else{
                        notificarError(resp);
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }
});

/* Funciones para el CRUD de modulo*/

formAddModulo.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let url;
    let mensaje;
    if(opcion_modulo === 1){
        url = "add_modulo_sistema.do";
        mensaje = "¡Alta exitosa!";
    }else if(opcion_modulo === 2){
        url = "update_modulo_sistema.do";
        mensaje = "¡Modificación exitosa!";
    }

    $.ajax({
        url: url,
        type: "POST",
        data: {
            id : id_modulo,
            nombre: $("#nombreModulo").val(),
            descripcion: $("#descripcionModulo").val()
        },
        success: function (resp, textStatus, jqXHR) {
            if (resp === "OK") {
                notificacionExitosa(mensaje);
                tablaModulo.ajax.reload(null, false);
                btnFormCancelarModulo.click();
            } else {
                notificarError(resp);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
});

btnFormCancelarModulo.addEventListener("click", function(){
    $("#nombreModulo").val("");
    $("#descripcionModulo").val("");
    btnNuevoModulo.click();
});

btnNuevoModulo.addEventListener("click", function (){
   opcion_modulo = 1;
   tituloModalModulo.innerText = "Creación de modulo";
   btnFormCancelarModulo.click();
});

$(document).on('click', '.btnEditarModulo', function (){
    btnNuevoModulo.click();
    tituloModalModulo.innerText = "Editanto perfil";
    opcion_modulo = 2;
    
    if(tablaModulo.row(this).child.isShown()){
        var data = tablaModulo.row(this).data();
    }else{
        var data = tablaModulo.row($(this).parents("tr")).data();
    }
    id_modulo = data['id_mo'];
    $("#nombreModulo").val(data["nombre"]);
    $("#descripcionModulo").val(data["descripcion"]);
    
});

$(document).on('click', '.btnBorrarModulo',async  function (){
    if(tablaModulo.row(this).child.isShown()){
        var data = tablaModulo.row(this).data();
    }else{
        var data = tablaModulo.row($(this).parents("tr")).data();
    }

    id_modulo = data["id_mo"];
    
    const result = await Swal.fire({
        title: '¿ESTA SEGURO DE ELIMINAR EL MODULO?',
        text: "Si no lo esta puede cancelar la acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5bc0de',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Si, eliminar!'
    });
    
    if(result.value){
        try {

            $.ajax({
                url : 'delete_modulo_sistema.do',
                type : "POST",
                data: { 
                    id : id_modulo
                },
                success : function(resp, textStatus, jqXHR) {
                    if(resp === "OK"){
                        notificacionExitosa("¡ Eliminación exitosa !");
                        tablaModulo.ajax.reload(null, false);
                    }else{
                        notificarError(resp);
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }
});


/* Funciones para el CRUD de permiso*/

formAddPermiso.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let url;
    let mensaje;
    if(opcion_permiso === 1){
        url = "add_permiso.do";
        mensaje = "¡Alta exitosa!";
    }else if(opcion_permiso === 2){
        url = "update_permiso.do";
        mensaje = "¡Modificación exitosa!";
    }

    $.ajax({
        url: url,
        type: "POST",
        data: {
            id : id_permiso,
            nombre: $("#nombrePermiso").val(),
            descripcion: $("#descripcionPermiso").val()
        },
        success: function (resp, textStatus, jqXHR) {
            if (resp === "OK") {
                notificacionExitosa(mensaje);
                tablaPermiso.ajax.reload(null, false);
                btnFormCancelarPermiso.click();
            } else {
                notificarError(resp);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
});

btnFormCancelarPermiso.addEventListener("click", function(){
    $("#nombrePermiso").val("");
    $("#descripcionPermiso").val("");
    btnNuevoPermiso.click();
});

btnNuevoPermiso.addEventListener("click", function (){
   opcion_permiso = 1;
   tituloModalPermiso.innerText = "Creación de permiso";
   btnFormCancelarPermiso.click();
});

$(document).on('click', '.btnEditarPermiso', function (){
    btnNuevoPermiso.click();
    tituloModalPermiso.innerText = "Editanto permiso";
    opcion_permiso = 2;
    
    if(tablaPermiso.row(this).child.isShown()){
        var data = tablaPermiso.row(this).data();
    }else{
        var data = tablaPermiso.row($(this).parents("tr")).data();
    }
    id_permiso = data['id_p'];
    $("#nombrePermiso").val(data["nombre"]);
    $("#descripcionPermiso").val(data["descripcion"]);
    
});

$(document).on('click', '.btnBorrarPermiso',async  function (){
    if(tablaPermiso.row(this).child.isShown()){
        var data = tablaPermiso.row(this).data();
    }else{
        var data = tablaPermiso.row($(this).parents("tr")).data();
    }

    id_permiso = data["id_p"];
    
    const result = await Swal.fire({
        title: '¿ESTA SEGURO DE ELIMINAR EL PERMISO?',
        text: "Si no lo esta puede cancelar la acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5bc0de',
        cancelButtonColor: '#d9534f',
        confirmButtonText: 'Si, eliminar!'
    });
    
    if(result.value){
        try {

            $.ajax({
                url : 'delete_permiso.do',
                type : "POST",
                data: { 
                    id : id_permiso
                },
                success : function(resp, textStatus, jqXHR) {
                    if(resp === "OK"){
                        notificacionExitosa("¡ Eliminación exitosa !");
                        tablaPermiso.ajax.reload(null, false);
                    }else{
                        notificarError(resp);
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
            
        } catch (error) {
            console.log(error);
        }
    }
});








/* FUNCIONES PARA LA NOTIFICACIONES DE MENSAJES */

function notificacionExitosa(mensaje){
    Swal.fire(
        mensaje,
        '',
        'success'
    ).then(result => {
        $("#nombrePerfil").val("");
    });
}

function notificarError(mensaje){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje
    });
}

