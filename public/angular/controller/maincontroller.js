app.controller('maincontroller',function($scope,$rootScope,$state,taskService){


$scope.newTask=function(){

  $state.go('newTask');
}

$scope.taskadded=function(carrymodel){

  console.log(JSON.stringify(carrymodel));
pass={};
pass=carrymodel;
pass.status=true;
  taskService.taskadded(pass).then(function(response){

console.log(JSON.stringify(response));
if(response){
$state.go('dashboard');
  }



  })
}


$scope.gettask=function(){

  taskService.taskadded().then(function(response){

    console.log("get"+JSON.stringify(response))
$scope.getalltaskdata = response.data;
})

}

})