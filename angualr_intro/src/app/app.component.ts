import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projection';

  @ViewChild('myInput') myInput: ElementRef;

  logInputValue() {
    console.log(this.myInput.nativeElement.value);
  }
}
