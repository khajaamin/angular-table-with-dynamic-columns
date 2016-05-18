/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.directive("networkList",function(){
   
    return {
        templateUrl :   CONFIG.getTempleteUrl("directive/network-list"),
        controller  :   function($scope,NetworkStat)
        {
            $scope.netwroks = []; 
            $scope.selectedColumnList = {}; 
            
            $scope.columnList = [
                {name:"id",display_name:"Id",removable:false},
                {name:"name",display_name:"name",removable:false},
                {name:"no_of_campaigns",display_name:"# of Campaigns",removable:true},
                {name:"spend",display_name:"Spend",removable:true},
                {name:"impressions",display_name:"Immpress",removable:true},
                {name:"clicks",display_name:"# of Clicks",removable:true},
                {name:"costperclick",display_name:"Cost per click",removable:true},
                {name:"ctr",display_name:"Click through rate",removable:true},
                {name:"events",display_name:"events",removable:true}
            ];
            
            angular.forEach($scope.columnList,function(col){
                
                    $scope.selectedColumnList[col.name] = true;
            });
            
                NetworkStat.getNetwork(function(res){
                    
                    if(res.status === 200)
                    {
                        $scope.netwroks =res.data; 
                    }
                });
            
            
            $scope.reselectColumn = function(colName){
                $scope.selectedColumnList[colName] = true;
            };
            
            
            $scope.checkColumnSelection = function(colName){
                
                if($scope.selectedColumnList[colName])
                {
                    return true; 
                }
                else
                {
                    return false; 
                }
            };
            
            $scope.showHideColumnSelection = function()
            {
                $scope.showSelection = false; 
                
                 angular.forEach($scope.columnList,function(col){
                
                    if($scope.selectedColumnList[col.name] === false)
                    {
                        
                        console.log($scope.selectedColumnList[col.name]); 
                        $scope.showSelection = true; 
                    }
                });
                return $scope.showSelection; 
            };
        }
    };
    
});