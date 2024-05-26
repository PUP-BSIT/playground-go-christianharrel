import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-two',
  styleUrls: ['./two.component.css'],
  template: `
    <button (click)="increment()">Increment from component 2</button>
  `,
})
export class TwoComponent implements OnInit{
  constructor(private counterService: CounterService) {}

  ngOnInit() : void{
    this.counterService.subscribe();
    console.log('Comp 2 - countService.count:', this.counterService.getCount());
  }
}

