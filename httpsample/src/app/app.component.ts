import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service'; 

@Component({
  selector: 'app-root',
  template: `
  <input #num />
  <button (click)="checkNumber(num.value)"> 
    Check Number
  </button>
  `
})
export class AppComponent {
  constructor(private backendService: BackendService) {}
  
  checkNumber(num: number) {
    this.backendService.getIsEven(num).subscribe((data) => { 
      console.log(data.iseven);
    });
  }
}
