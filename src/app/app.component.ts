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
  loginShow: any = [];
  qtdRepo: any = 0;
  qtdFoll: any = 0;
  cDate: any = null;
  search: any = '';

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

  listLogin(id){
    this.loginShow = this.listUser.filter(function(e) {
      return id == e.id;
    });
    let urlRepo, urlFoll, urlDate;
    urlRepo = this.loginShow[0].repos_url;
    urlFoll = this.loginShow[0].followers_url;
    urlDate = this.loginShow[0].subscriptions_url;

    this.repoList(urlRepo);
    this.followersList(urlFoll);
    this.createdDate(urlDate);
  }

  repoList(url){
    this.apiService.getRepoUser(url).subscribe((data) => {
      this.qtdRepo = data;
      this.qtdRepo = this.qtdRepo.length;
    })    
  }

  searchUser(param){
    /* this.listUser = this.listUser.filter(function(e) {
      return param == e.login;
    }); */
    console.log(param)
  }

  followersList(url){
    this.apiService.getFollUser(url).subscribe((data) => {
      this.qtdFoll = data;
      this.qtdFoll = this.qtdFoll.length;
    })    
  }

  createdDate(url){
    this.apiService.getCreatedDateUser(url).subscribe((data) => {
      this.cDate = data;
      this.cDate = this.cDate[0].created_at;
    })    
  }
}
