import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SayCheeseService {

  static initCamera = new EventEmitter<any>();

  constructor() {}

  public init() {
    SayCheeseService.initCamera.emit(true);
  }
}
