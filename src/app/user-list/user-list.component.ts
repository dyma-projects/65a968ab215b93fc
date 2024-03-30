import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users!: string[];

  public subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.subscription.add(
      this.userService.users$.subscribe((dataUsers: string[]) => {
        this.users = dataUsers;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
