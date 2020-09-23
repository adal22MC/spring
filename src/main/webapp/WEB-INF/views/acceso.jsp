<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
    <head>

        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/bootstrap/css/bootstrap.min.css">

        <!-- DataTables .-->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/datatables/datatables.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/datatables/datatables-bs4/css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/datatables/datatables-responsive/css/responsive.bootstrap4.min.css">

        <!-- sweetalert2 -->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/sweetalert2/sweetalert2.min.css">
        <!-- SweetAlert 2 -->
        <script src="${pageContext.request.contextPath}/plugins/sweetalert2/sweetalert2.all.js"></script>


        <title>Acceso</title>
    </head>
    <body class="bg-dark">


        <div class="container-fluid pt-4">
            <div class="row">

                <div class="col-6 col-md-6">

                    <div class="card collapse" id="collapseTablaPerfil">

                        <!-- /.card-header -->
                        <div class="card-body">

                            <!-- TABLA PERFIL -->
                            <table id="tablaPerfil" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Status</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>

                                </tbody>

                            </table>
                            <!-- /. TABLA PERFIL -->

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">

                            <button id="btnNuevoPerfil" class="btn btn-primary" data-toggle="collapse" data-target="#collapseTablaPerfil">
                                Nuevo perfil
                            </button> 

                        </div>

                    </div>
                    <!-- /.card -->

                    <div class="card collapse" id="collapseFormularioPerfil">
                        <form id="formAddPerfil">
                            <div class="card-header">
                                <h2 id="tituloModalPerfil" class="badge badge-primary">Creación de perfil</h2>
                            </div>

                            <div class="card-body">

                                <!-- ENTRADA PARA EL NOMBRE DEL PERFIL -->
                                <div class="input-group pt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="nombrePerfil"
                                           placeholder="Nombre" required>
                                </div>

                            </div>

                            <div class="card-footer">
                                <button id="btnFormCancelarPerfil" class="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseFormularioPerfil">
                                    Cancelar
                                </button> 
                                <button id="btnFormAddPerfil" type="submit" class="btn btn-primary">
                                    Guardar perfil
                                </button> 
                            </div>
                        </form>

                    </div> 

                </div>
                <!-- /.col -->

                <div class="col-6 col-md-6">

                    <div class="card collapse" id="collapseTablaModulo">

                        <!-- /.card-header -->
                        <div class="card-body">

                            <!-- TABLA MODULO -->
                            <table id="tablaModulo" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Status</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>

                                </tbody>

                            </table>
                            <!-- /. TABLA MODULO -->

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">

                            <button id="btnNuevoModulo" class="btn btn-primary" data-toggle="collapse" data-target="#collapseTablaModulo">
                                Nuevo modulo
                            </button> 

                        </div>

                    </div>
                    <!-- /.card -->

                    <div class="card collapse" id="collapseFormularioModulo">
                        <form id="formAddModulo">
                            <div class="card-header">
                                <h2 id="tituloModalModulo" class="badge badge-primary">Creación de modulo</h2>
                            </div>

                            <div class="card-body">

                                <!-- ENTRADA PARA EL NOMBRE DEL MODULO -->
                                <div class="input-group pt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="nombreModulo"
                                           placeholder="Nombre" required>
                                </div>
                                
                                <!-- ENTRADA PARA LA DESCRIPCION DEL MODULO -->
                                <div class="input-group pt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="descripcionModulo"
                                           placeholder="Descripción" required>
                                </div>

                            </div>

                            <div class="card-footer">
                                <button id="btnFormCancelarModulo" class="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseFormularioModulo">
                                    Cancelar
                                </button> 
                                <button id="btnFormAddModulo" type="submit" class="btn btn-primary">
                                    Guardar modulo
                                </button> 
                            </div>
                        </form>

                    </div> 

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

            <div class="row mt-3">
                <div class="col-6 col-md-6">

                    <div class="card collapse" id="collapseTablaPermiso">

                        <!-- /.card-header -->
                        <div class="card-body">

                            <!-- TABLA MODULO -->
                            <table id="tablaPermiso" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Status</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>

                                </tbody>

                            </table>
                            <!-- /. TABLA MODULO -->

                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">

                            <button id="btnNuevoPermiso" class="btn btn-primary" data-toggle="collapse" data-target="#collapseTablaPermiso">
                                Nuevo permiso
                            </button> 

                        </div>

                    </div>
                    <!-- /.card -->

                    <div class="card collapse" id="collapseFormularioPermiso">
                        <form id="formAddPermiso">
                            <div class="card-header">
                                <h2 id="tituloModalPermiso" class="badge badge-primary">Creación de permiso</h2>
                            </div>

                            <div class="card-body">

                                <!-- ENTRADA PARA EL NOMBRE DEL PERMISO -->
                                <div class="input-group pt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="nombrePermiso"
                                           placeholder="Nombre" required>
                                </div>
                                
                                <!-- ENTRADA PARA LA DESCRIPCION DEL PERMISO -->
                                <div class="input-group pt-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="descripcionPermiso"
                                           placeholder="Descripción" required>
                                </div>

                            </div>

                            <div class="card-footer">
                                <button id="btnFormCancelarPermiso" class="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseFormularioPermiso">
                                    Cancelar
                                </button> 
                                <button id="btnFormAddPermiso" type="submit" class="btn btn-primary">
                                    Guardar permiso
                                </button> 
                            </div>
                        </form>

                    </div> 

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->
        </div>





        <!--=====================================
        MODAL EDITAR MODULO 
        ======================================-->

        <div id="modalEditarModulo" class="modal fade" role="dialog">

            <div class="modal-dialog">

                <div class="modal-content">

                    <form id="formEditModulo">

                        <!--=====================================
                            HEADER DEL MODAL
                        ======================================-->

                        <div class="modal-header">

                            <h5 class="modal-title" id="exampleModalLabel">Editar Modulo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>

                        <!--=====================================
                            CUERPO DEL MODAL
                        ====================================== -->

                        <div class="modal-body">

                            <!-- ENTRADA PARA EL NOMBRE DEL MODULO -->
                            <div class="input-group pt-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="nombreEdit"
                                       placeholder="Nombre" required>
                            </div>

                            <!-- ENTRADA PARA LA DESCRIPCION DEL MODULO -->
                            <div class="input-group pt-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="descEdit"
                                       placeholder="Descripción" required>
                            </div>

                        </div>


                        <!--=====================================
                            PIE DEL MODAL
                        ======================================-->

                        <div class="modal-footer">
                            <button id="close" type="button" class="btn btn-light pull-left"
                                    data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-primary">
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="${pageContext.request.contextPath}/plugins/jquery/jquery-3.3.1.min.js"></script>  

        <script src="${pageContext.request.contextPath}/plugins/bootstrap/js/bootstrap.min.js"></script>  

        <!-- DataTables -->
        <script src="${pageContext.request.contextPath}/plugins/datatables/datatables.min.js"></script>
        <script src="${pageContext.request.contextPath}/plugins/datatables/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="${pageContext.request.contextPath}/plugins/datatables/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="${pageContext.request.contextPath}/plugins/datatables/datatables-responsive/js/responsive.bootstrap4.min.js"></script>


        <script src="${pageContext.request.contextPath}/js/accesos.js"></script>


    </body>
</html>