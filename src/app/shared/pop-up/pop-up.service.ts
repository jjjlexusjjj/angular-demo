import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Renderer2 } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';

@Injectable()
export class PopUpService {

  constructor(
    private compFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    ) { }

  public show(message: string, title?: string, modal: boolean = true): void {
    const popup = document.createElement('app-pop-up');
    const factory = this.compFactoryResolver.resolveComponentFactory(PopUpComponent);
    const popupRef = factory.create(this.injector, [], popup);

    const appRef = this.injector.get(ApplicationRef);
    appRef.attachView(popupRef.hostView);

    const subscription = popupRef.instance.onClose.subscribe(event => {
      console.log('onClosehandler', event);
      // renderer.removeChild(document.body, popup);
      document.body.removeChild(popup);
      appRef.detachView(popupRef.hostView);
      subscription.unsubscribe();
      // popupRef.destroy();
    });

    popupRef.instance.message = message;
    // renderer.appendChild(document.body, popup);
    document.body.appendChild(popup);
  }
}
