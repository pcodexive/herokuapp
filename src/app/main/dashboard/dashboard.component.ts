import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  posts: any;
  constructor( private authService: AuthService, private apiService: ApiService) { }


  ngOnInit(): void {
    this.user = this.authService.getUserData();
    this.getPost()
  }

  getPost() {
    this.apiService.getNew(`posts`).subscribe(res => {
      this.posts = res;
    })
  }
}
