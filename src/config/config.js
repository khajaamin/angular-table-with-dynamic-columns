var CONFIG;

CONFIG ={
    appName:'demoApp',
    dateFormat:'dd-MM-YYYY',
    templetePath: 'templates',
    getTempleteUrl: function(name)
    {
        return CONFIG.templetePath +"/"+ name +".html";
    }
};


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: CONFIG.getTempleteUrl("site/home")
    })
    
    });
