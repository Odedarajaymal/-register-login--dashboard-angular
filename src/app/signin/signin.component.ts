import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {User} from '../user'
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signin : FormGroup
  user: User
  message = false
  error: {
    error: string
  }
  constructor(private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signin = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    })
    
  }
  onSubmit(e){
    e.preventDefault()
    this.user  = this.signin.value
    this.authservice.Signin(this.user).subscribe((data)=>{
       
       if(data){
        this.message = true
        this.router.navigate(['/product'])
       }
     
        this.signin.reset()
    }, (error) =>{
         this.error = error.error
         console.log(error.error) 
    })
 }

}
