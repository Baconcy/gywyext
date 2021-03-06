var app = angular
		.module(
				'dataVApp',
				[ 'ngRoute', ],
				function($httpProvider) {// ngRoute引入路由依赖
					$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
					$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

					// Override $http service's default transformRequest
					$httpProvider.defaults.transformRequest = [ function(data) {
						/**
						 * The workhorse; converts an object to
						 * x-www-form-urlencoded serialization.
						 * 
						 * @param {Object}
						 *            obj
						 * @return {String}
						 */
						var param = function(obj) {
							var query = '';
							var name, value, fullSubName, subName, subValue, innerObj, i;

							for (name in obj) {
								value = obj[name];

								if (value instanceof Array) {
									for (i = 0; i < value.length; ++i) {
										subValue = value[i];
										fullSubName = name + '[' + i + ']';
										innerObj = {};
										innerObj[fullSubName] = subValue;
										query += param(innerObj) + '&';
									}
								} else if (value instanceof Object) {
									for (subName in value) {
										subValue = value[subName];
										fullSubName = name + '[' + subName
												+ ']';
										innerObj = {};
										innerObj[fullSubName] = subValue;
										query += param(innerObj) + '&';
									}
								} else if (value !== undefined
										&& value !== null) {
									query += encodeURIComponent(name) + '='
											+ encodeURIComponent(value) + '&';
								}
							}

							return query.length ? query.substr(0,
									query.length - 1) : query;
						};

						return angular.isObject(data)
								&& String(data) !== '[object File]' ? param(data)
								: data;
					} ];
				});

app.run([ '$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function(evt, next, previous) {
		console.log('路由跳转成功');
		$rootScope.$broadcast('reGetData');
	});
} ]);

// 路由配置
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/dataV', {
		templateUrl : '/gywyext/jsp/equip/equipRealInfo/dataV/dataV.html',
		controller : 'equipRealInfoController'
	})
} ]);

app.constant('baseUrl', '/gywyext/');
app.factory('services', [ '$http', 'baseUrl', function($http, baseUrl) {
	
	var services = {};
	//gaogaogao
	//控制云台
	services.getTurn = function (data){
		return $http({
			method : 'post',
			url : baseUrl + 'equipRealInfo/getTurn.do',
			data : data,
		})
	}
	//停止云台控制
	services.getStop = function (data){
		return $http({
			method : 'post',
			url : baseUrl + 'equipRealInfo/getStop.do',
			data : data,
		})
	}
	
	//haile
	return services;
} ]);
app
		.controller(
				'equipRealInfoController',
				[
						'$scope',
						'services',
						'$location',
						/*'FileUploader',*/
						function($scope, services, $location/*, FileUploader*/) {
							var equipment = $scope;
							var equip_room = $scope;
							var equip_type = $scope;
							var equip_para = $scope;
							
							//gaogaogaogao
							//开始云台操作
							equipment.getTurn = function (id){
								services.getTurn({
									turn_id : id
								}).success(function(data){
									equipment.yunTurn = data;
									if(equipment.yunTurn.result.code != "200"){
										alert(equipment.yunTurn.result.msg);
									}
								})
							}
							//停止云台操作
							equipment.getStop = function (id){
								services.getStop({
									turn_id : id
								}).success(function(data){
									equipment.yunStop = data;
									if(equipment.yunTurn.result.code != "200"){
										alert(equipment.yunStop.result.msg);
									}
								})
							}
							//haile	
							
							// 初始化
							function initPage() {
								console.log("初始化成功equipmentController！");
								d444();
								d555();
								d666(3);
							}
							initPage();
						} ]);