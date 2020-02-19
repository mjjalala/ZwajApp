import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model :any={};
  constructor(private authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }
 login(){
   this.authService.login(this.model).subscribe(
     next=>{this.alertify.success("تم الدخول بنجاح")},
     error=>{this.alertify.error(error)}
   )
 }

 LoggedIn(){
   const token=localStorage.getItem('token');
   return !! token
 }
 LoggedOut(){
localStorage.removeItem('token');
this.alertify.message('تم الخروج')
 }
 
}
