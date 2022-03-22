import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalConstants } from '../../../core/shared/constants/global.constants';
import { HttpService } from '../../../core/shared/http/http.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';

import { AuthService } from '../../../core/service/auth.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

import CustomValidator from '../../../core/shared/validators/custom-validators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../auth.module.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    submitted: boolean;
    redirectUrl: string;
    errorMessage: string;
    isError: boolean;
    token: string;
    registerdUsers: any = [];

    constructor(
        private router: Router,
        private httpService: HttpService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder,
        private socialAuthService: SocialAuthService,
        private authService: AuthService
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
    }

    initForm() {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                CustomValidator.emailValidator
            ]
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10)
            ]
            ],
            rememberMe: ['']
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onLogin() {
        this.submitted = true;
        this.isError = false;
        if (this.loginForm.invalid) {
            return;
        }

        //  this.httpService.post(GlobalConstants.LOGIN_URL, this.loginForm.value)
        //   .subscribe((data: any) => {
        //     if (data['Status'] === 'OK') {
        //       this.router.navigate(['/two-factor-auth']);
        //     }
        //   });


        // if (localStorage.getItem('registerdUsers')) {
        //     this.registerdUsers = JSON.parse(localStorage.getItem('registerdUsers') || '{}');
        //     let found = this.registerdUsers.some((el: any) => {
        //         return el.username === this.f['username'].value && el.password === this.f['password'].value;
        //     });
        //     if (!found) {
        //         this.isError = true;
        //         this.errorMessage = 'Invalid Username/password';
        //     } else {
        //         this.router.navigate(['/two-factor-auth']);
        //     }
        // }
    }

    socialLogin(provider: any) {
        let loginProvider: any;
        if (provider === 'google') {
            loginProvider = GoogleLoginProvider;
        } else if (provider === 'facebook') {
            loginProvider = FacebookLoginProvider;
        }
        this.socialAuthService.signIn(loginProvider.PROVIDER_ID)
            .then(
                () => {
                    this.token = 'success';
                    this.redirectUrl = '/dashboard-test';
                    this.authService.setRedirectUrl(this.redirectUrl);
                    this.authService.auth(this.token);
                }
            );
    }

    resetForm() {
        this.submitted = false;
        this.loginForm.reset();
    }



}