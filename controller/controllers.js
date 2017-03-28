document.write("<script src='../script/api.js'></script>");
document.write("<script src='static/appframework-2.1.0/js/pda.js'></script>");
document.write("<script src='../script/jquery-1.7.1.min.js'></script>");
document.write("<script src='../script/api.js'></script>");
document.write("<script src='../script/pda.js'></script>");
document.write("<script src='../script/page.js'></script>");
document.write("<script src='../script/api.js'></script>");
var UserInfoModule=angular.module('UserInfoModule',[]);
UserInfoModule.controller('userInfo',['$scope',
    function($scope){

      $scope.getinfo=function(){
      
     
       

	    api.ajax({
	    			url:getUrl("auqcKpartDaqController!test3.m"),
	    			method:'post',
	    			data: {
	    				values: {
	    			    	data: $scope.user
	    			    }
	    			}
	    		}, function(ret, err) {
	    		
	    	       alert(ret[0].a);
	    		  
	    			
	    		}); 
      }
    
	}

])
