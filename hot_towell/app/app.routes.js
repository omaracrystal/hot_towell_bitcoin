bitcoinCalculator.controller('bitcoinController', function($scope, $http){

    // calling the api, grabbing the value for USD, appending it to the dom
    $http.get("https://bitpay.com/api/rates")
    .success(function(data){
      $scope.rates = data;
      for(var i=0;i<data.length;i++){
        if (data[i].code == "USD"){
          $scope.currRate = data[i].rate;
        }
      }
      $scope.initalAmt = 5000;
      $scope.newAmt= function(price){
        return price/$scope.currRate * $scope.initalAmt;
      };
      $scope.profit = function(price){
        return price/$scope.currRate * $scope.initalAmt - $scope.initalAmt;
      };
    });

    $scope.xAxisTickFormatFunction = function(){
      return function(date){
        return d3.time.format('%x')(new Date(date));
      };
    };

    $scope.bitcoinHistoricalData = [{
      "key": "Prices",
      "values": values
    }];

  });
