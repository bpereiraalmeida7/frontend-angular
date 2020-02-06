import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseListUri:string = 'https://api.github.com/orgs/grupotesseract/public_members';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Retornar todos os Colaboradores
  getUsersGithub() {
    return this.http.get(`${this.baseListUri}`);
  }

  // Retornar todos os repositórios
  getRepoUser(urlRepo) {
    return this.http.get(`${urlRepo}`);
  }

  // Retornar todos os seguidores
  getFollUser(urlFoll) {
    return this.http.get(`${urlFoll}`);
  }

  // Retornar os dados de inscrição, para retornar a data de criação da conta
  getCreatedDateUser(urlDate) {
    return this.http.get(`${urlDate}`);
  }

}