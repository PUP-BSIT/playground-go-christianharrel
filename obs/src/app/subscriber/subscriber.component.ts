import { Component } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';

@Component({
  selector: 'app-subscriber',
  styleUrl: './subscriber.component.css',
  template: '{{ numberGeneratorService.numberListener | async }}',
})
export class SubscriberComponent {
  generatedNumber = 0;

  constructor(protected numberGeneratorService: NumberGeneratorService) {}
}

