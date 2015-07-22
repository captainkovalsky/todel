#home work - variant 1

angularJs patterns

1. MVC (or MVVM with 2-way bindings)

	Controller in angularJs is a instance for any controller function. [controller](src/controller.js)

	View is a html template which will be rendered. [view](src/view.html)

	Model can be whatever (JSON objects, scope properties)

2. 2-way bindings

	two way data binding is presented by {{ expression }}
	directives: ng-model, ng-bind, ng-repeat, ng-if...

3. Pub/Sub

	Pub/Sub is presented by $scope.$on, $scope.$emit, $scope.$broadcast methods


4. Singleton

	All angularJs services are singletons (factory, provider, 'service')
	for example, [service](src/service.js) will be cached in Instance Cache after first instantiation by $injector


5. Factory

	$provider can be used as a factory in angularJs
	for example, [factory](src/factory.js)

6. Decorator

	Decorators are presented by decorator method of $provide
	for example, [decorator](https://github.com/angular/angular.js/blob/291d7c467fba51a9cb89cbeee62202d51fe64b09/src/ngTouch/directive/ngClick.js#L44)


7. Callbacks

	Callback pattern is used very widely in angularJs, for example in [animate runner](https://github.com/angular/angular.js/blob/291d7c467fba51a9cb89cbeee62202d51fe64b09/src/ngAnimate/animateRunner.js#L20) 


