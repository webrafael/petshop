import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.maxLength(20),
        Validators.minLength(6),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data) => {
          console.log(data)
        },
        (err) => {
          console.log(err)
        }
      );
  }
}
