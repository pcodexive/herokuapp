import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { REGISTER } from '../shared/url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  error: string | null = "";
  hideCpassword = false;
  hidepassword = false;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required, Validators.minLength(4)]],
      cpassword:[null,[Validators.required]],
      // remember: [false]
    }, {validator: this.checkIfMatchingPasswords('password', 'cpassword')})
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordConfirmationInput.errors && !passwordConfirmationInput.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  submit() {
    if (this.form.valid) {
      this.doRegister();
      // this.submitEM.emit(this.form.value);
    }
  }

  doRegister(){
    // this.spiner=true;
    this.api.post(REGISTER,this.form.value).subscribe(res=>{
      this.authService.setLocalStorage('token', res.token);
      this.authService.setLocalStorage('userData', res.user);
      this.router.navigate(['/']);      
    },err =>{
      this.error=err.error[0]
      console.log(this.error);      
    })
  }
}
