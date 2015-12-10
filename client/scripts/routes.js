angular.module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {





        $stateProvider



            .state('iniciarSesion', {
                url: '/inicio',
                templateUrl: 'client/templates/iniciarSesion.ng.html',

            })





            .state('registro', {
                url: '/registrar',
                templateUrl: 'client/templates/registro.ng.html',

            })




            .state('menu', {
                url: '/navegador',
                abstract:true,
                templateUrl: 'client/templates/menu.ng.html'
            })




            .state('menu.mapa', {
                url: '/main',
                views: {
                    'side-menu21': {
                        templateUrl: 'client/templates/mapa.ng.html',
                        controller: 'mapCtrl'
                    }
                }
            })





            .state('menu.localidades', {
                url: '/localidades',
                views: {
                    'side-menu21': {
                        templateUrl: 'client/templates/localidades.ng.html',

                    }
                }
            })





            .state('menu.recorrido', {
                url: '/recorridos',
                views: {
                    'side-menu21': {
                        templateUrl: 'client/templates/recorrido.ng.html',

                    }
                }
            }) ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('inicio');

    }