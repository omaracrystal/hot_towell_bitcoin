#Hot Towell Structure

## ``app`` directory is root

- All content is **1 feature** per file
- Each Controller, service, module, view is in its own file.
- All 3rd party vendor scripts are stored in another root folder and **not** in the ``app`` folder

- ``layout`` is where **components** go that define the layout of the application. May contain **shell** view and controller may act as the container for the app, navigation, menus, content areas, and other regions.

## Folders-by-Feature Structure
- Create folders named for the feature they represent. 
- When a folder grows to contain more than 7 files, you may want to organize them further into folders.
 

## Example RECOMMEND:
 ```
 /**
 * recommended
 */
 app/
    app.module.js
    app.config.js
    components/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    layout/
        shell.html
        shell.controller.js
        topnav.html
        topnav.controller.js
    people/
        attendees.html
        attendees.controller.js
        people.routes.js
        speakers.html
        speakers.controller.js
        speaker-detail.html
        speaker-detail.controller.js
    services/
        data.service.js
        localstorage.service.js
        logger.service.js
        spinner.service.js
    sessions/
        sessions.html
        sessions.controller.js
        sessions.routes.js
        session-detail.html
        session-detail.controller.js
 ```

## Example AVOID:
```
/*
* avoid
* Alternative folders-by-type.
* I recommend "folders-by-feature", instead.
*/

app/
    app.module.js
    app.config.js
    app.routes.js
    directives.js
    controllers/
        attendees.js
        session-detail.js
        sessions.js
        shell.js
        speakers.js
        speaker-detail.js
        topnav.js
    directives/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    services/
        dataservice.js
        localstorage.js
        logger.js
        spinner.js
    views/
        attendees.html
        session-detail.html
        sessions.html
        shell.html
        speakers.html
        speaker-detail.html
        topnav.html
```


## Assigning Controllers

- When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers along with their routes.

>**Note:** If a View is loaded via another means besides a route, then use the **ng-controller="Avengers as vm"** syntax.

- **Why?:** Pairing the controller in the route allows different routes to invoke different pairs of controllers and views. When controllers are assigned in the view using ng-controller, that view is always associated with the same controller.

### AVOID EXAMPLE:
```
/* avoid - when using with a route and dynamic pairing is desired */

// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/avengers', {
          templateUrl: 'avengers.html'
        });
}
```

```
<!-- avengers.html -->
<div ng-controller="AvengersController as vm">
</div>
```

```
/* recommended */

// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/avengers', {
            templateUrl: 'avengers.html',
            controller: 'Avengers',
            controllerAs: 'vm'
        });
}
<!-- avengers.html -->
<div>
</div>
```


## Manipulate DOM in a Directive

- When manipulating the DOM directly, use a directive. If alternative ways can be used such as using CSS to set styles or the animation services, Angular templating, ngShow or ngHide, then use those instead. For example, if the directive simply hides and shows, use ngHide/ngShow.

**Why?:** DOM manipulation can be difficult to test, debug, and there are often better ways (e.g. **CSS**, **animations**, **templates**)


## 
