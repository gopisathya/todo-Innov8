app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/");

$stateProvider
.state('login',{
	url:'/',
	views:{
		'template':{
		templateUrl:'angular/view/test.html',
		controller: 'logincontroller'
	}
	}
	
})

     //------------------------------
            // HOME
            //------------------------------
        .state ('dashboard', {
            url: '/dashboard',
            views: {
              'template': {
                templateUrl: 'angular/view/dashboard.html',
                controller: 'maincontroller' 
              }
            }
           
        })

        .state ('newTask', {
            url: '/newtask',
            views: {
              'template': {
                templateUrl: 'angular/view/newtask.html',
                controller: 'maincontroller' 
              }
            }
           
        })


})