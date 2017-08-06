# ngx-say-cheese (not for production yet)

## Installation

To install this library, run:

```bash
$ npm install ngx-say-cheese --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxSayCheeseModule } from 'ngx-say-cheese';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSayCheeseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its component and service in your Angular application:

```xml
<say-cheese [elementId]="'cameraElementId'"></say-cheese>
```

Once defined component in your template, you can use the SayCheeseService to
init, stop, take snapshot and others methods:

```typescript
import {SayCheeseService} from 'ngx-say-cheese';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cheeseService: SayCheeseService) {}

  someMethodToDispatchServiceEvents() {
    this.cheeseService.init();
  }
}
```

## License

MIT © [Felix Costa](mailto:fx3costa@gmail.com)
