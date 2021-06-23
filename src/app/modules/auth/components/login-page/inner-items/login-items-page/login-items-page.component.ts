import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-login-items-page',
  templateUrl: './login-items-page.component.html',
  styleUrls: ['./login-items-page.component.scss']
})
export class LoginItemsPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  })

  constructor(private cookieService: CookieService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.loginForm.get('email')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim()
    ).subscribe(response => {
      console.log(response)
      //---------------------
      const todayDate = new Date();
      const tomorrow = new Date(todayDate);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const cookieOption = {
        expires: tomorrow
      }
      this.cookieService.put('userToken', response.token, cookieOption);
      alert(response.message);
      //---------------
    }, error => {
      if (error.status === 500) {
        /// internal server error==>
      } else if (error.status === 400) {
        //-======
      } else {
        console.log(error);
      }
    })
  }

}
