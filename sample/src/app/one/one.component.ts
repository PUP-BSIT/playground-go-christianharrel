import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.onupdate.subscribe((newValue) => {
      console.log(`Comp 1 - count is updated: ${newValue}`);
    });
  }
}
