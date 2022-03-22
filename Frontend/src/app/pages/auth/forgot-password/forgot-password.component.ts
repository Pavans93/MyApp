import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoaderService } from '../../../core/shared/service/loader.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';

import CustomValidator from 'src/app/core/shared/validators/custom-validators';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss', '../auth.module.scss']
})

export class ForgotPasswordComponent implements OnInit {

    forgotPasswordForm: FormGroup;

    submitted: boolean;

    redirectUrl: string;
    captcha: any;
    statusTxt: any;
    allCharacters: any = [];
    captchaValue: any;
    showEmail: boolean = true;
    showSms: boolean = false;
    errorMessage: string;
    isError: boolean = false;

    constructor(
        private router: Router,
        private loader: LoaderService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
        this.getCaptcha();
    }

    initForm() {
        this.submitted = false;
        this.forgotPasswordForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                CustomValidator.emailValidator
            ]
            ],
            newPassword: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10)
            ]
            ],
            confirmPassword: ['', Validators.required],
            captchaText: [''],
            captchaValue: ['', [
                Validators.required,
            ]
            ],
        },
            {
                validators: [CustomValidator.stringMatch('captchaText', 'captchaValue'), CustomValidator.stringMatch('newPassword', 'confirmPassword')]
            }
        );
    }

    get f() {
        return this.forgotPasswordForm.controls;
    }

    getCaptcha() {
        this.captcha = document.querySelector(".captcha");
        this.statusTxt = document.querySelector(".status-text");
        this.allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 6; i++) {
            let randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
            this.forgotPasswordForm.patchValue({ 'captchaText': this.captcha.innerText += `${randomCharacter}` });
        }
    }

    reloadCaptcha() {
        this.removeCaptchaContent();
        this.getCaptcha();
    }

    removeCaptchaContent() {
        this.forgotPasswordForm.patchValue({ 'captchaValue': null });
        this.captcha.innerText = "";
    }

    onReset() {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.isError = true;
        this.errorMessage = 'Error in password reset';
        console.log(JSON.stringify(this.forgotPasswordForm.value, null, 2));
    }

    resetForm() {
        this.submitted = false;
        this.forgotPasswordForm.reset();
    }

}