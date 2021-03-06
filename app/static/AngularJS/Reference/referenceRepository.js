var referenceURL = global_settings.urlCORS + 'api/reference/';


registrationModule.factory('referenceRepository', function ($http) {
    return {
        getCompany: function () {
            return $http({
                url: referenceURL + 'company/',
                method: "GET"
            });
        },
        getClientByName: function (clientName) {
            return $http({
                url: referenceURL + 'clientByName/',
                method: "GET",
                params: {
                    clientName: clientName
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
                getFacturasAll: function (idCliente) {
            return $http({
                url: referenceURL + 'facturasAll/',
                method: "GET",
                params: {
                    idCliente: idCliente
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
                getFacturasEmp: function (cliente) {
            return $http({
                url: referenceURL + 'facturasEmp/',
                method: "GET",
                params: {
                      idCliente: cliente.idCliente,
                      idEmpresas: cliente.idEmpresas
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
                getFacturasSuc: function (idCliente) {
            return $http({
                url: referenceURL + 'facturasSuc/',
                method: "GET",
                params: {
                    idCliente: cliente.idCliente,
                      idEmpresas: cliente.idEmpresas,
                      idSucursales: cliente.idSucursales
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },




                getPedidosAll: function (idCliente) {
            return $http({
                url: referenceURL + 'pedidosAll/',
                method: "GET",
                params: {
                    idCliente: idCliente
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
                getPedidosEmp: function (cliente) {
            return $http({
                url: referenceURL + 'pedidosEmp/',
                method: "GET",
                params: {
                      idCliente: cliente.idCliente,
                      idEmpresas: cliente.idEmpresas
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
                getPedidosSuc: function (idCliente) {
            return $http({
                url: referenceURL + 'pedidosSuc/',
                method: "GET",
                params: {
                    idCliente: cliente.idCliente,
                      idEmpresas: cliente.idEmpresas,
                      idSucursales: cliente.idSucursales
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },









        getCotizacion: function (idCliente) {
            return $http({
                url: referenceURL + 'cotizacion/',
                method: "GET",
                params: {
                    idCliente: idCliente
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getBranchOfficeByIdCompany: function (idEmpresa) {
            return $http({
                url: referenceURL + 'branchOfficeByIdCompany/',
                method: "GET",
                params: {
                    idEmpresa: idEmpresa
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getDepartmentById: function (idSucursal) {
            return $http({
                url: referenceURL + 'departmentById/',
                method: "GET",
                params: {
                    idSucursal: idSucursal
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getCompanyByUser: function (idUsuario) {
            return $http({
                url: referenceURL + 'companyByUser/',
                method: "GET",
                params: {
                    idUsuario: idUsuario
                },
            });
        },
        getBranchOfficeByIdUser: function (idUsuario, idEmpresa) {
            return $http({
                url: referenceURL + 'branchOfficeByIdUser/',
                method: "GET",
                params: {
                    idUsuario: idUsuario,
                    idEmpresa: idEmpresa
                },
            });
        },
        getDepartmentByIdUser: function (idUsuario, idSucursal) {
            return $http({
                url: referenceURL + 'departmentByIdUser/',
                method: "GET",
                params: {
                    idUsuario: idUsuario,
                    idSucursal: idSucursal
                },
            });
        },
        //Genera PDF
        generarPdf: function () {
                return $http({
                    url: referenceURL + 'generarPdf/',
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }, //Fin de genera pdf 
        
        getReferenceWS: function (paramData) {
            console.log("respository:",paramData   );
            return $http({
                url: referenceURL + 'referenceWS/',
                method: "GET",
                params: {

                    idEmpresa: paramData.idEmpresa,
                    idSucursal: paramData.idSucursal,
                    idDepartamento: paramData.idDepartamento,
                    idTipoDocumento: paramData.idTipoDocumento,
                    serie: paramData.serie,
                    folio: paramData.folio,
                    idCliente: paramData.idCliente,
                    idAlma: paramData.idAlma
                    
                },
            });
    },
        getEmpleado: function(idEmpleado) {
            return $http({
                url: referenceURL + 'getEmpleado/',
                method: "GET",
                 params: {idEmpleado: idEmpleado},
                headers: {
                'Content-Type': 'application/json'
                }
            });
        },
          getBills: function(idCliente,idEmpresa) {
            return $http({
                url: referenceURL + 'bills/',
                method: "GET",
                 params: {idCliente:idCliente,
                     idEmpresa: idEmpresa},
                headers: {
                'Content-Type': 'application/json'
                }
            });
        } 
    };

});