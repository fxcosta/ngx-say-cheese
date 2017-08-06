import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';

import { SayCheeseService } from './say-cheese.service';

declare var SayCheese: any;

@Component({
  selector: 'say-cheese',
  template: `
    <div [attr.id]="elementId" style="height: 190px">
    </div>
  `
})
export class SayCheeseComponent implements OnInit, OnChanges {

  @Input('elementId') elementId: any;
  private camera: any;

  constructor(private sayChesseService: SayCheeseService) {}

  ngOnInit() {
    SayCheeseService.initCamera.subscribe(
      data => this.init(data)
    );
  }

  ngOnChanges(changes: SimpleChanges) {}

  public init (status) {
    setTimeout(() => {
        this.camera = new SayCheese(`#${this.elementId}`,
          { snapshots: true, width: 245 });
        this.camera.start();

        this.camera.on('snapshot', (snap) => {
            this.camera.stop();
        });
    }, 1000);
  }
}
