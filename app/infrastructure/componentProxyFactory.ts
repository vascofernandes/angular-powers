
import {Component, View, DynamicComponentLoader, Injector, bind, Type, ElementRef} from 'angular2/core';

declare var System: any;

export class ComponentProvider {
    path: string;
    provide: { (module: any): any };
}

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function componentProxyFactory(provider: ComponentProvider): Type {
    
    @Component({
        selector: 'component-proxy',
        template: `<span #content></span>`,
        bindings: [bind(ComponentProvider).toValue(provider)]
    })
    class VirtualComponent {
        constructor(el: ElementRef, loader: DynamicComponentLoader, inj: Injector, provider: ComponentProvider) { 
            System.import(provider.path)
                .then(m => {
                    loader.loadIntoLocation(provider.provide(m), el, 'content');
                });
        }
    }
    
    return VirtualComponent;
}