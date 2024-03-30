import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  subscription: Subscription = new Subscription();

  constructor(
    // il faut probablement injecter un service ici !
    private userService: UserService
  ) {}

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;
      this.userService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }
}
