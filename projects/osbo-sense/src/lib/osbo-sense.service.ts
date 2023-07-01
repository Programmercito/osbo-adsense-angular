import { Renderer2, OnInit, Inject, Injectable, ElementRef, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsboSenseService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public executeScript(js: string, componente: ElementRef<any> | undefined) {
    let script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    let scri: string;
    scri = "setTimeout(() => {" + js + "}, 0);";
    script.text = scri;
    this.renderer.appendChild(componente?.nativeElement, script);
  }

}
