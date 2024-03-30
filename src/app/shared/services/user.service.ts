import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public addUser(user: string): void {
    this.users$.value.push(user);
    // console.log(this.users$.value);
  }

  constructor() {}
}
