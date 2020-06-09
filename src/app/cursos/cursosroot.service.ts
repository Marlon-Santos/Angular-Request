import { Injectable } from '@angular/core';

@Injectable()
export class CursosrootService {
  testCount = 0;
  constructor() {}
  test() {
    this.testCount++;
    console.log(this.testCount);
    console.log('root');
  }
}
