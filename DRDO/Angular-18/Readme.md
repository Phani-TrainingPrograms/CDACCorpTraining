# Angular 18
### About
- Angular is a framework provided by Google for developing Rich UI based Web Applications in faster, reliable and easy manner. 
- Developed by google, it provides a wide usage and very huge no of developer community which makes us believe that it is stable and can be used for creating large Internet based Applications. 
- Google promises to release new versions for every 6 months. The current version is v18.x released in May 2024. 
- It has the following features:
    1. It provides a nice Component architecture for developing Apps using self contained components. 
    2. It provides Data binding features where we can bind the html attributes(property binding), events(event binding) and form binding(2-way binding) b/w the logical data and the UI of the Components. 
    3. It provides a very powerful dependency injection feature of allowing services to be injected with their dependencies that are injected externally into the service to provide its services without additional inputs to it. 
    4. It has programming features taken from Typescript which is more like an OOP but built on JavaScript and is typesafe making it more optimized while executing. 
    5. U develop angular app using components, pipes, services, modules, directives, gaurds, interfaces and classes. 
    6. It has support for making REST API calls using rxjs where we can use Http services to fetch the data from the back end applications.
    7. It provides a very powerful routing features that allows to provide hyperlinks and data transfer among the components at the UI level. 

### How to create Angular Apps?
1. Download the nodejs as it is the platform on which the Angular Apps are built. 
2. Download the Angular CLI which is used for developing Angular Apps and components using Command prompt. 
```
npm install -g @angular/cli
ng version
npm uninstall -g @angular/cli
```
3. Using CLI, we can create angular Applications from the Command promot. use small case for declaring the name of the application.  Accept the default values. And allow the wizard to continue create the required folders and basic components. 
```
ng new appname ->Builds as per the Ang 18 ->Smaller apps. 
ng new appname --no-standalone for Module based template. For large scale apps 
cd app-name
ng serve
```

### Differences:
1. Module-Based Components (Traditional Approach)
    - NgModules are the fundamental building blocks for organizing Angular applications.
    - In this approach, all components, directives, and pipes are declared within an NgModule, which defines the scope and context.
    - Features like routing, services, and component declarations are typically handled within the module.
    - Modules provide benefits like dependency injection, tree-shaking, and better organization for large applications.
2. Standalone Components (Newer Approach)
    - Introduced in Angular 14 and emphasized in Angular 15+, Standalone Components allow components to exist independently, without needing to be part of an NgModule.
    - A standalone component can import its dependencies (like directives, pipes, and other services) directly, without requiring a module wrapper.
    - This simplifies the component's lifecycle and makes it easier to manage small, modular applications, as well as for code-splitting in larger applications.

### Key Differences:
1. Modularity: Module-based components rely on NgModules, whereas standalone components can be self-contained without any module dependency.
2. Simplicity: Standalone components streamline development by reducing boilerplate code and allowing components to manage their dependencies directly.
3. Flexibility: Standalone components are particularly useful in small-scale apps or micro frontends, where the overhead of modules is unnecessary.
```
----For creating inline templates where U don't need additional html files or CSS files. 
ng g c common/about --inline-template --inline-style --skip-tests
```

## Features of Angular
1. Angular provides Component architecture for developing UI Features for the Application. It means that UR App is composed of multiple components that make the Application. 
2. Component is a Class that contains the programming logic developed using a language called Typescript along with UI developed on HTML, a CSS file for providing the styles for the component, along with a e2e UI testing file developed in TS. 
3. TypeScript is a JS based Programming language developed by MS for creating Type safe JS. It uses a compiler called Transpiler that will compile the TS file into a type safe ES standardized JS code.
4. Each component is a self contained unit of the Application that has features of the component without much dependencies from other components. The scope of the data is always within the limits of the Component.
5. To share the data among the Components, we have Services. 
6. We have PIPES to transform the data in the way we want to present in the User interface. 
7. We have interfaces to provide the data structure of the data that comes from the REST API. 
8. All Persistance data comes from external Web services developed using any Server side Scripting languages and technlogies like ASP.NET, SpringBoot, PHP and NODEJS. 
9. U can create Custom Directives to provide interpretations to std HTML elements and Custom HTML Elements. 
10. To load the components thru Hyperlinks and URL patterns, we hae Routing feature. 
11. The Main reasons for using Angular framework are : 
    - It supports powerful data Binding feature. 
    - It has DI feature that allows data to be injected from external sources into the components
    - It has powerful Async programming concepts that could be implemented in a faster and easier manner. 
    - It allows to intergrate external libraries and frameworks with little or less effort. 
    - As its developed by Google, the community is large and U get external support for developing the Apps at an industrial scale. 

## Commands to generate Components in Angular
1. ng g i Models/InterfaceName
2. ng g c Components/Calc

## Interaction b/w the components: 
1. From the parent component to the child component, we use Input Directive which works like attributes that can be set from the parent component. 
2. From the child to the parent component, we use Output Directive which is an instance of EventEmitter, the event creator in Angular Apps. The EventEmitter's emit function is used to trigger the event, it can have any data type that could be emitted from the child to the parent(Caller) component. 

## Pipes in Angular
- Pipes are transformation code that makes UI render the content as per the transformation of the HTML Content. 
- There are built in pipes that help in transforming the data as: 
    - uppercase
    - lowercase
    - currency
    - json
    - Percentage
    - Decimal
    - Date
- U can create Custom pipes using the CLI:
    - ng g p Pipes/PipeName --skip-tests
- Custom Pipes are classes in Angular that has Pipe Directive and implements an interface called PipeTransform.
- The PipeTransform interface has one method called transform that contains the logic of modifing the data into the format U want to present. 

## Services in Angular
- A service is an injectable class which maintains a single reference across the components of the module. 
- The scope of the service is limited to the module that U use it. 
- A service is required to share the data and functions that can be used across the components of the module. 
- It maintains a single reference where ever U use it within the module. 
- The references of this service can be injected into the components using the DI feature of Angular. 
- Services are created using the CLI Command: 
```
ng generate service Services/ServiceName    
```

## Forms in Angular
- Forms are required to perform client side validations on inputs provided by the Angular Apps.
- There are 2 ways of performing validations in Angular
    - Reactive Forms
    - Template Driven Forms
- Template Driven Forms use the HTML Elements and its attributes to perform the client side validations like Email, required, Min and Max and many more. 
- Reactive Forms are more object oriented and use the Angular features to perform the validations required for the models. It is also called as Model driven Validations. 

## Modules in Angular
- Modules are independent Blocks of the Applications that contain one or more components with services, pipes and directives to become a part of the Application. 
- Modules was introduced from Angular 5.
- Modules allow to be created and loaded at runtime, instead of loading it at the start of the Application. This feature of loading the Units as and when it is required is called as Lazy Loading. The Opposite of Lazy loading is Eager Loading. 
- U cannot do Lazy loading with Components, U have bind those components into a module and load the Module at runtime. 
- Modules are created using the following command:
```
ng generate module Modules/ModuleName
```


