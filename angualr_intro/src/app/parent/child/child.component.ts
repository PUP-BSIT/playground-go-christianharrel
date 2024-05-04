import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'app-child',
 templateUrl: './child.component.html',
 styleUrl: './child.component.css',
})
export class ChildComponent{
 @Input() message = 'Default Message';
 @Output() greet = new EventEmitter();

 onButtonClick(){
   this.greet.emit('Hello Parent! I am your child.');
 }
 toy = 'horse';
sayHello() {
console.log('hello');
}

}
