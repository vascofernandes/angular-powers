System.register(['angular2/core', 'angular2/router', './infrastructure/componentProxyFactory', './todo/todo.component', './crisis-center/crisis-center.component', './heroes/hero-list.component', './heroes/hero-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, componentProxyFactory_1, todo_component_1, crisis_center_component_1, hero_list_component_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (componentProxyFactory_1_1) {
                componentProxyFactory_1 = componentProxyFactory_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.setUpEvents();
                }
                AppComponent.prototype.setUpEvents = function () {
                    var _this = this;
                    this.router.subscribe(function (value) { return _this.onNext(value); });
                };
                AppComponent.prototype.onNext = function (value) {
                    //uncomment to get the stacktrace
                    //throw new Exception(""); 
                    console.log(value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Component Router</h1>\n    \n    <a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n    <a [routerLink]=\"['Todo']\">Todo</a>\n    <a [routerLink]=\"['Heroes']\">Heroes</a>\n    <a [routerLink]=\"['Blog']\">Blog</a>\n    <a [routerLink]=\"['About']\">About</a>\n    <a [routerLink]=\"['CrisisCenter', 'CrisisDetail', {id:1}]\">Princess Crisis</a>\n    <a href=\"/disaster\">Asteroids</a>\n    \n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/crisis-center/...', name: 'CrisisCenter', component: crisis_center_component_1.CrisisCenterComponent, useAsDefault: true },
                        { path: '/todo', name: 'Todo', component: todo_component_1.TodoApp },
                        { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
                        { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent },
                        new router_1.AsyncRoute({
                            path: '/blog',
                            name: 'Blog',
                            loader: function () { return System.import('./app/blog/blog.component.js').then(function (m) { return m.BlogComponent; }); },
                        }),
                        {
                            path: '/about',
                            name: 'About',
                            component: componentProxyFactory_1.componentProxyFactory({
                                path: './app/about/about.component.js',
                                provide: function (m) { return m.AboutComponent; }
                            })
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map