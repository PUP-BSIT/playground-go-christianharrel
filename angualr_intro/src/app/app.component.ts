import { Component } from '@angular/core';

type Subject = {
  id: number;
  subject_code: string;
  subject_name: string;
  no_of_units: number;
};

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
  subjects: Subject[] = [
    {
      id: 1,
      subject_code: 'SUB001',
      subject_name: 'Mathematics',
      no_of_units: 3,
    },
    { id: 2, subject_code: 'SUB002', subject_name: 'Science', no_of_units: 4 },
    { id: 3, subject_code: 'SUB003', subject_name: 'English', no_of_units: 2 },
  ];

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
