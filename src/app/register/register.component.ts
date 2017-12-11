import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: any ={

  };
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }
  post() {
    this.registerService.saveUser(this.registerData);
    console.log(this.registerData);
  }

}
