import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  listUser: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.listUsers();

  
  }

  listUsers(){
    this.apiService.getUsersGithub().subscribe((data) => {
      this.listUser = data;
      console.log(this.listUser);
    })    
  }
}
