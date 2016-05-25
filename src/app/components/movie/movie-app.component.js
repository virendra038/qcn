(function(){
  'use strict';
  var module = angular.module("qcn");
 		module.component("movieApp",{
				templateUrl :"/app/components/movie/movie-app.component.html",
				$routeConfig:[
				{path:"/list", component:"movieList",name:"List"},
				{path:"/detail/:id", component:"movieDetails", name:"Details"},
				{path:"/**", redirectTo:["List"]}
  			
  		]
  		
  		
  	});
  	
    
}());
