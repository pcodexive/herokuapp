import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { REGISTER } from '../shared/url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  error: string | null = "";

  @Output() submitEM = new EventEmitter();
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
      cpassword:[null,[Validators.required]],
      // remember: [false]
    })
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
      localStorage.clear();
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);      
    },err =>{
      this.error=err.error[0]
      console.log(this.error);      
    })
  }
}
