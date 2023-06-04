import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  
  getid: string="";
  recievedName = this.userService.getBook;

  ngOnInit(): void {
    var token = this.userService.getToken();
    if(token){
      var payload = atob(token.split('.')[1]);
      console.log(payload)
      this.getid = payload.substring(9, 33);
    }
    // console.log(this.getid)
    // this.userInfo = this.userService.getUser(this.getid);
  }

  

  model = {
    username: '',
    title: '',
    useraddress: '',
    userphone: '',
    userid: '',
    todate: '',
    fromdate: ''
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.userService.rentRequest(form.value).subscribe(
      res => {
        console.log(res);
        alert('Your request is successfully submitted');
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err);
      }
    );
  }

}
