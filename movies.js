angular.module('ghibli', [])
.controller('Movies', function($scope, $http) {
    $http.get('https://ghibliapi.herokuapp.com/films').
        then(function(response) {
            $scope.movies = response.data;
        });

    $scope.sortTitle = function() {
    	$scope.movies = $scope.movies.sort(function(a,b){
    		var textA=a.title.toLowerCase(), textB=b.title.toLowerCase()
    		if(textA < textB)//sort string ascending
    			return -1
    		if(textA > textB)
    			return 1
    		return 0 //default return value (no sorting)
    	})
    }

    $scope.sortDirector = function() {
    	$scope.movies = $scope.movies.sort(function(a,b){
    		var textA=a.director.toLowerCase(), textB=b.director.toLowerCase()
    		if(textA < textB)//sort string ascending
    			return -1
    		if(textA > textB)
    			return 1
    		return 0 //default return value (no sorting)
    	})
    }

    $scope.sortReleaseDate = function() {
    	$scope.movies = $scope.movies.sort(function(a,b){
    		return a.release_date-b.release_date//sort int ascending
    	})
    }

    $scope.sortRatedScore = function() {
    	$scope.movies = $scope.movies.sort(function(a,b){
    		return a.rt_score-b.rt_score//sort int ascending
    	})
    }		

});

