import { AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { SenseConfiguration } from './config/sense.configuration';
import { OsboSenseService } from './osbo-sense.service';

@Component({
  selector: 'ngosbo-adsense',
  template: `
<div #dov>
  <ng-container [ngSwitch]="this.config.tipo">
    <ng-container *ngSwitchCase="'display'">
        <ins class="adsbygoogle" attr.style="{{this.config.style}}" attr.data-ad-client="{{this.config.dataadclient}}"
            attr.data-ad-slot="{{this.config.dataadslot}}" attr.data-ad-format="{{this.config.dataadformat}}"
            attr.data-full-width-responsive="{{this.config.datafullwidthresponsive}}">
        </ins>
    </ng-container>    
    <ng-container *ngSwitchCase="'infeed'">
        <ins class="adsbygoogle" attr.style="{{this.config.style}}" attr.data-ad-client="{{this.config.dataadclient}}"
            attr.data-ad-slot="{{this.config.dataadslot}}" attr.data-ad-format="{{this.config.dataadformat}}"
            attr.data-ad-layout-key="{{this.config.dataadqlayoutkey}}">
        </ins>
    </ng-container>
    <ng-container *ngSwitchCase="'multiple'">
        <ins class="adsbygoogle" attr.style="{{this.config.style}}" attr.data-ad-client="{{this.config.dataadclient}}"
            attr.data-ad-slot="{{this.config.dataadslot}}" attr.data-ad-format="{{this.config.dataadformat}}">
        </ins>
    </ng-container>
    <ng-container *ngSwitchDefault>
        tipo de anuncio no permitido
    </ng-container>
  </ng-container>

</div>
  `,
  styles: [
  ]
})
export class OsboSenseComponent implements AfterViewInit {
  @ViewChild("dov") divi?: ElementRef;
  @Input() config!: SenseConfiguration;
  constructor(private scriptservice: OsboSenseService) {

  }
  ngAfterViewInit() {
    this.scriptservice.executeScript("(adsbygoogle = window.adsbygoogle || []).push({});", this.divi);
  }
}
