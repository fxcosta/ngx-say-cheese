import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SayCheeseComponent } from './say-cheese.component';
import { SayCheeseService } from './say-cheese.service';

export * from './say-cheese.component';
export * from './say-cheese.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SayCheeseComponent,
  ],
  exports: [
    SayCheeseComponent
  ]
})
export class NgxSayCheeseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSayCheeseModule,
      providers: [SayCheeseService]
    };
  }
}
