/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.service("NetworkStat",function($http){
    
    return {
        getNetwork: function(callback){
                
                $http({
                    url:"http://172.16.3.63:3000/accounts/network?account_id=4356987821&grid_name=Google&year_from=2016&month_from=01&date_from=01&year_to=2016&month_to=01&date_to=01",
                    data: {},
                    method:"GET"
                }).then(function(res){
                    
                    callback(res); 
                    
                });
        }
    };
});