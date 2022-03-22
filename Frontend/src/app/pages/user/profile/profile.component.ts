import { Component, OnInit } from '@angular/core';
import { ChangePasswordModel } from './profile.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    changePasswordModel: ChangePasswordModel;

    changePasswd: boolean = false;
    proceed: boolean = false;

    constructor() {
        this.initModel();
    }

    initModel() {
        this.changePasswordModel = new ChangePasswordModel();
    }

    ngOnInit(): void {
    }

    onChangePassword() {
        this.changePasswd = true;
    }

    onProceed() {
        if (this.changePasswordModel.currentPassword == 'sysadmin') {
            this.proceed = true;
        } else {
            alert('Please enter correct password !!!');
        }
    }

    onCancel() {
        this.changePasswd = false;
        this.proceed = false;
    }

    onUpdate() {
        if (this.changePasswordModel.newPassword &&
            (this.changePasswordModel.newPassword == this.changePasswordModel.confirmPassword)) {
            alert('Password changed successfully');
            this.changePasswd = false;
            this.proceed = false;
        } else {
            alert('Password do not match !!!');
        }
    }

}
