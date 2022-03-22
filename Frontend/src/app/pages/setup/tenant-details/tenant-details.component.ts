import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../../../core/shared/service/file-upload.service';

@Component({
    selector: 'app-tenant-details',
    templateUrl: './tenant-details.component.html',
    styleUrls: ['./tenant-details.component.scss']
})

export class TenantDetailsComponent implements OnInit {

    tenantForm: FormGroup;

    submitted: boolean;
    errorMessage: string;
    isError: boolean = false;
    disableDbFields: boolean = true;

    constructor(
        private formBuilder: FormBuilder,
        private fileUploadService: FileUploadService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.submitted = false;
        this.tenantForm = this.formBuilder.group({
            name: ['', Validators.required],
            abbreviation: ['', Validators.required],
            address: ['', Validators.required],
            zipcode: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            mobile: ['', Validators.required],
            email: ['', Validators.required],
            domain: ['', Validators.required],
            database: this.formBuilder.group({
                default: ['true', Validators.required],
                details: this.formBuilder.group({
                    url: [{ value: "", disabled: true }, Validators.required],
                    username: [{ value: "", disabled: true }, Validators.required],
                    password: [{ value: "", disabled: true }, Validators.required]
                })
            })
        });
    }

    get f() {
        return this.tenantForm.controls;
    }

    onChangeOfDefault() {
        const isChecked = this.tenantForm.controls['database']['controls']['default'].value;
        if (isChecked) {
            this.f['database']['controls']['details']['controls']['url'].disable();
            this.f['database']['controls']['details']['controls']['username'].disable();
            this.f['database']['controls']['details']['controls']['password'].disable();

            this.f['database']['controls']['details']['controls']['url'].patchValue(null);
            this.f['database']['controls']['details']['controls']['username'].patchValue(null);
            this.f['database']['controls']['details']['controls']['password'].patchValue(null);
        } else {
            this.f['database']['controls']['details']['controls']['url'].enable();
            this.f['database']['controls']['details']['controls']['username'].enable();
            this.f['database']['controls']['details']['controls']['password'].enable();
        }
    }

    uploadFile(event: any) {
        this.fileUploadService.populateDataFromFile(event, this.tenantForm)

        setTimeout(() => {
            if (!this.tenantForm.controls['database']['controls']['default'].value) {
                this.f['database']['controls']['details']['controls']['url'].enable();
                this.f['database']['controls']['details']['controls']['username'].enable();
                this.f['database']['controls']['details']['controls']['password'].enable();
            }
        }, 100);
    }

    formReset() {
        this.submitted = false;
        this.tenantForm.reset();
    }

    onSave() {
        this.submitted = true;
        if (this.tenantForm.invalid) {
            return;
        }
        console.log(JSON.stringify(this.tenantForm.value, null, 2));
    }

}
