import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'app-child',
 templateUrl: './child.component.html',
 styleUrl: './child.component.css',
})
export class ChildComponent {  
  toy = 'horse';
  sayHello() {
  console.log('hello');
  }
  }