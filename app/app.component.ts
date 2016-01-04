import { Component } from 'angular2/core';
import { Router, RouteConfig, AsyncRoute, ROUTER_DIRECTIVES } from 'angular2/router';

import { componentProxyFactory } from './infrastructure/componentProxyFactory';
import { TodoApp }               from './todo/todo.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroListComponent }     from './heroes/hero-list.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';

declare var System: any;

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Todo']">Todo</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Blog']">Blog</a>
    <a [routerLink]="['About']">About</a>
    <a [routerLink]="['CrisisCenter', 'CrisisDetail', {id:1}]">Princess Crisis</a>
    <a href="/disaster">Asteroids</a>
    
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true },
    { path: '/todo', name: 'Todo', component: TodoApp },
    { path: '/heroes',   name: 'Heroes',     component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
    new AsyncRoute({
        path: '/blog',
        name: 'Blog',
        loader: () => System.import('./app/blog/blog.component.js').then(m => m.BlogComponent),
    }),
    {
        path: '/about',
        name: 'About',
        component: componentProxyFactory({
            path: './app/about/about.component.js',
            provide: m => m.AboutComponent
        })
    },
    //{ path: '/disaster', name: 'Asteroids', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}] } // useAsDefault not working with this line ?!?!
])
export class AppComponent {

    constructor(private router: Router) {
        this.setUpEvents();
    }

    private setUpEvents(): void {
        this.router.subscribe((value: any) => this.onNext(value));
    }

    private onNext(value: any): void {
        //uncomment to get the stacktrace
        //throw new Exception(""); 
        console.log(value);
    }

}