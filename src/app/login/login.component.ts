import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { LOGIN } from '../shared/url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  error: string | null = "";
  hidepassword = false;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      // remember: [false]
    })
  }

  submit() {
    if (this.form.valid) {
      this.doLogin();
      // this.submitEM.emit(this.form.value);
    }
  }

  doLogin(){
    // this.spiner=true;
    this.api.post(LOGIN,this.form.value).subscribe(res=>{
      this.authService.setLocalStorage('token', res.token);
      this.authService.setLocalStorage('userData', res.user);
      this.router.navigate(['/']);      
    },err =>{
      this.error=err.error[0]
      console.log(this.error);      
    })
  }

}
