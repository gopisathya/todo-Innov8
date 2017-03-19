var app = angular.module('app');
app.factory('taskService',function($http,$window){

return{
 taskadded:function(data)
   {

console.log("data in service"+JSON.stringify(data));
   	 var get=$http.post('/posttaskdata',data).then(function(response)
   	 {
       return response;
   	 });
   	 return get;
   },

   getalltaskdata:function()
	{
		var action=$http.get('/getalldata').then(function(response)
		{ 
			console.log("get in service"+JSON.stringify(response));
			return response;
		});
		return action;
	}	


}
});