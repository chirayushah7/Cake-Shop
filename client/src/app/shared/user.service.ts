import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    name: '',
    email: '',
    password: ''
  }

  imgData: any;

  constructor( private http: HttpClient) { }

  //API calling
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl + '/signup',user);
  }

  login(authCredentials: any){
    return this.http.post(environment.apiBaseUrl + '/login', authCredentials);
  }

  home(){
    //to call home url from backend
  }

  //General function
  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload){
      return true;
    }
    else{
      return false
    }
  }

  getUser(id: any){
    return this.http.get(environment.apiBaseUrl + '/user/userInfo');
  }

  rentRequest(bookCredentials: any){
    return this.http.post(environment.apiBaseUrl + '/book/rent', bookCredentials);
  }

  getBook: string="";

  bookNameRecieve(bookName: any){
    this.getBook = bookName;
  };
}
