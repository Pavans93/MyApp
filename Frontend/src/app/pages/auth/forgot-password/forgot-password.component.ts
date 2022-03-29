// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// import { LoaderService } from '../../../core/shared/service/loader.service';
// import { RedirectService } from '../../../core/shared/service/redirect.service';

// import CustomValidator from 'src/app/core/shared/validators/custom-validators';

// @Component({
//     selector: 'app-forgot-password',
//     templateUrl: './forgot-password.component.html',
//     styleUrls: ['./forgot-password.component.scss', '../auth.module.scss']
// })

// export class ForgotPasswordComponent implements OnInit {

    // forgotPasswordForm: FormGroup;
    // resetForm: FormGroup;

    // submitted: boolean;
    // rfSubmitted: boolean;

//     redirectUrl: string;
//     captcha: any;
//     statusTxt: any;
//     allCharacters: any = [];
//     captchaValue: any;
//     showEmail: boolean = true;
//     showSms: boolean = false;
//     errorMessage: string;
//     isError: boolean = false;

// showForgotPasswordForm: boolean = true;


//     constructor(
//         private router: Router,
//         private loader: LoaderService,
//         private redirectService: RedirectService,
//         private formBuilder: FormBuilder
//     ) {
//         this.initForm();
// this.initResetForm();

//     }

//     ngOnInit(): void {
//         this.redirectService.setRedirectUrl();
//         this.getCaptcha();
//     }

//     initForm() {
//         this.submitted = false;
//         this.forgotPasswordForm = this.formBuilder.group({
//             username: ['', [
//                 Validators.required,
//                 CustomValidator.emailValidator
//             ]
//             ],
//             newPassword: ['', [
//                 Validators.required,
//                 Validators.minLength(6),
//                 Validators.maxLength(10)
//             ]
//             ],
//             confirmPassword: ['', Validators.required],
//             captchaText: [''],
//             captchaValue: ['', [
//                 Validators.required,
//             ]
//             ],
//         },
//             {
//                 validators: [CustomValidator.stringMatch('captchaText', 'captchaValue'), CustomValidator.stringMatch('newPassword', 'confirmPassword')]
//             }
//         );
//     }

//     get f() {
//         return this.forgotPasswordForm.controls;
//     }

//     getCaptcha() {
//         this.captcha = document.querySelector(".captcha");
//         this.statusTxt = document.querySelector(".status-text");
//         this.allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
//             'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
//             'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//             't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//         for (let i = 0; i < 6; i++) {
//             let randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
//             this.forgotPasswordForm.patchValue({ 'captchaText': this.captcha.innerText += `${randomCharacter}` });
//         }
//     }

//     reloadCaptcha() {
//         this.removeCaptchaContent();
//         this.getCaptcha();
//     }

//     removeCaptchaContent() {
//         this.forgotPasswordForm.patchValue({ 'captchaValue': null });
//         this.captcha.innerText = "";
//     }

//     onReset() {
//         this.submitted = true;
//         if (this.forgotPasswordForm.invalid) {
//             return;
//         }
//         this.isError = true;
//         this.errorMessage = 'Error in password reset';
//         console.log(JSON.stringify(this.forgotPasswordForm.value, null, 2));
//     }

//     resetForm() {
//         this.submitted = false;
//         this.forgotPasswordForm.reset();
//     }

// }

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
    resetForm: FormGroup;

    submitted: boolean;
    rfSubmitted: boolean;

    redirectUrl: string;
    captcha: any = {};
    allCharacters: any = [];
    captchaValue: any;
    showEmail: boolean = true;
    showPhone: boolean = false;
    errorMessage: string;
    isError: boolean = false;
    showForgotPasswordForm: boolean = true;

    constructor(
        private router: Router,
        private loader: LoaderService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder
    ) {
        this.initForm();
        this.initResetForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
        this.setReceiveMode();
        setTimeout(() => {
        this.getCaptcha();
        }, 1);
    }

    initForm() {
        debugger
        this.submitted = false;
        this.forgotPasswordForm = this.formBuilder.group({
            receiveMode: ['emailRadio', Validators.required],
            email: [''],
            phone: [''],
            captchaText:[''],
            captchaValue: ['', [Validators.required, Validators.maxLength(6)]],
        },
            {
                validators: [CustomValidator.stringMatch('captchaText', 'captchaValue')]
            }
        
        );
    }

    initResetForm(){
        this.rfSubmitted = false;
        this.resetForm = this.formBuilder.group({
            otp: ['', [
                Validators.required,
            ]
            ],
            newPassword: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10)
            ]
            ],
            confirmPassword: ['', Validators.required],
        },
        {
            validators: [CustomValidator.stringMatch('newPassword', 'confirmPassword')]
        }
        
        );
    }

    get f() {
        debugger
        return this.forgotPasswordForm.controls;
    }

    get rf() {
        return this.resetForm.controls;
    }

    // setReceiveMode(event: any) {
    //     if (event && event.target.value) {
    //         if (event.target.value === 'emailRadio') {
    //             this.showEmail = true;
    //             this.showSms = false;
    //         } else {
    //             this.showEmail = false;
    //             this.showSms = true;
    //         }
    //     }
    // }

    getCaptcha() {
        debugger
        this.captcha = document.querySelector(".captcha") || {};
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

    sendOtp() {
        debugger
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.showForgotPasswordForm = false;
        // this.isError = true;
        // this.errorMessage = 'Error in password reset';
        // console.log(JSON.stringify(this.forgotPasswordForm.value, null, 2));
    }

    onReset(){
        debugger
        this.rfSubmitted = true;
        console.log(JSON.stringify(this.resetForm.value, null, 2));
    }

    formReset() {
        this.submitted = false;
        this.forgotPasswordForm.reset();
    }
    
    setReceiveMode() {
        if(this.showForgotPasswordForm){
        const emailControl: any = this.forgotPasswordForm.get('email');
        const phoneControl: any = this.forgotPasswordForm.get('phone');

        if (this.forgotPasswordForm.value.receiveMode === 'emailRadio') {
            this.showEmail = true;
            this.showPhone = false;
            this.forgotPasswordForm.patchValue({ 'phone': null });
            emailControl.setValidators([Validators.required, CustomValidator.emailValidator]);
            phoneControl.setValidators(null);
        }
        else if (this.forgotPasswordForm.value.receiveMode === 'smsRadio') {
            this.showEmail = false;
            this.showPhone = true;
            this.forgotPasswordForm.patchValue({ 'email': null });
            emailControl.setValidators(null);
            phoneControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidator.numbersOnlyValidator]);
        }
        else if (this.forgotPasswordForm.value.receiveMode === 'callRadio') {
            this.showEmail = false;
            this.showPhone = true;
            this.forgotPasswordForm.patchValue({ 'email': null });
            emailControl.setValidators(null);
            phoneControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidator.numbersOnlyValidator]);
        }
            emailControl.updateValueAndValidity();
            phoneControl.updateValueAndValidity();
    }
}
}