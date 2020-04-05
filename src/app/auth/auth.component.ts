import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router } from '@angular/router'

import { AuthService, AuthResponseData } from "./auth.service";

@Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{

        isLoginMode = true;
        isLoading = false;
        error: string = null;
        authForm: FormGroup;

        constructor(private authService: AuthService, private router: Router) {}

        ngOnInit(){
                this.initForm();
        }

        private initForm(){
                let userLogin ='';
                let userPass='';

                this.authForm = new FormGroup(
                        {
                        'login': new FormControl(userLogin, [Validators.required, Validators.email]),
                        'pass': new FormControl(userPass, [Validators.required, Validators.minLength(6)]),
                });
        }

        onSwitchMode() {
                this.isLoginMode = !this.isLoginMode;
        }

        onSubmit(form: FormGroup) {
                if (!form.valid) {
                        return;
                }
                const email = form.controls['login'].value;
                const password = form.controls['pass'].value;
                let authObs: Observable<AuthResponseData>;

                this.isLoading = true;

                if (this.isLoginMode) {
                        authObs = this.authService.login(email, password);
                } else {
                        authObs = this.authService.signup(email, password);
                }
                authObs.subscribe(
                        resData => {
                                this.isLoading = false;
                                this.router.navigate(['/recipes']);
                        },
                        errorMessage => {
                                this.error = errorMessage;
                                this.isLoading = false;
                        }
                )
                form.reset();
        }
}