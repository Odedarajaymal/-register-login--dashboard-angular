import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   signup : FormGroup
    user: User
    message = false
    error: {
      error: string
    }
  constructor(private authservice:AuthService) { }       

  ngOnInit(): void {
    this.signup = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    })
  }

  onSubmit(e){
     e.preventDefault()
       this.user  = this.signup.value
       this.authservice.Signup(this.user).subscribe(()=>{
           this.message = true
           this.signup.reset()
       }, error =>{
            this.error = error.error
       }) 
   
 
  }
}
