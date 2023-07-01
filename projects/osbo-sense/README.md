# osbo-adsense-angular

> Google AdSense for Angular Applications

## Install

```bash
npm install osbo-adsense-angular
```
## Use

#### Add adsense code

Use the standard AdSense code somewhere in your `<head></head>` as you [normally would](https://support.google.com/adsense/answer/7477845)

```html
<script async src=//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js></script>
```

#### Import NgModule

Add AdsenseModule to the imports of your NgModule

```typescript
import { OsboSenseModule } from 'osbo-sense';

@NgModule({
  imports: [
    OsboSenseModule
    }),
    ...
```

#### Show Ad

Uses global defaults which can be overriden via inputs

```html
<ngosbo-adsense [config]="config"></ngosbo-adsense>
```

## Inputs

| input                   | type          | description                                         |
| ----------------------- | ------------- | --------------------------------------------------- |
| tipo                    | strint        | infeed, display, multiple                           |
| dataadclient            | string        | account ca-pub-XXXXXXXXXXXXXXXX                     |
| dataadslot              | string        | ad slot/number                                      |
| dataadformat            | string        | adsense ad format                                   |
| style                   | string        | element display style                               |
| datafullwidthresponsive | boolean       | enable full width responsive ad                     |
| dataadqlayoutkey        | string        | used for in-feed ads                                |

```typescript
    // multiples ads
    this.config = {} as SenseConfiguration;

    this.config.tipo = "multiple";
    this.config.dataadclient = "ca-pub-xxxxx";
    this.config.dataadformat = "autorelaxed";
    this.config.dataadslot = "999999999";
    this.config.style = "display:block";

    // display ads
    this.config1 = {} as SenseConfiguration;

    this.config1.tipo = "display";
    this.config1.dataadclient = "ca-pub-xxxxx";
    this.config1.dataadformat = "auto";
    this.config1.dataadslot = "9999999";
    this.config1.datafullwidthresponsive = "true";
    this.config1.style = "display:block";

    // infeed ads
    this.config2 = {} as SenseConfiguration;
    this.config2.tipo = "infeed";
    this.config2.dataadclient = "ca-pub-xxxxx";
    this.config2.dataadformat = "fluid";
    this.config2.dataadslot = "99999999";
    this.config2.dataadqlayoutkey = "xxxxxx";
    this.config2.style = "display:block";
```
