import { Injectable } from '@angular/core';

@Injectable()
export class CursosplatformService {
  testCount = 0;
  constructor() {}
  test() {
    this.testCount++;
    console.log(this.testCount);
    console.log('plataform');
  }
}
