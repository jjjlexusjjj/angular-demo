import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: Observable<User | null>;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.auth.currentUser;
  }

  logout(): void {
    this.auth.logout()
    .subscribe(() => this.router.navigate(['/']));
  }

}
