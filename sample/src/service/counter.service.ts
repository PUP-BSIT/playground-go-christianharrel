import { Subject } from 'rxjs';

export class CounterService {
  private count: number = 0;
  onupdate = new Subject<number>();

  increment() {
    this.count++;
    this.onupdate.next(this.count);
  }

  getCount() {
    return this.count;
  }
}
