
angular.module('app', [
    'angular-meteor',
    'ionic',
    'uiGmapgoogle-maps'
    ])



if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
}
else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['app']);
}
