import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  operand_1: number;
  operand_2: number;
  result: number;
  isActive = true;
  inactive: any;
  isLoggedIn = false;
  students = ['student1', 'student2', 'student3'];
  
  performOperation(operation: string): void {
    switch (operation) {
      case 'ADD':
        this.result = this.operand_1 + this.operand_2;
        break;
      case 'SUBTRACT':
        this.result = this.operand_1 - this.operand_2;
        break;
      case 'MULTIPLY':
        this.result = this.operand_1 * this.operand_2;
        break;
      case 'DIVIDE':
        this.result = this.operand_1 / this.operand_2;
        break;
    }
  }
}
