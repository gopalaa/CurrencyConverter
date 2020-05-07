import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    posts: any[];
    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            currenc1: ['', Validators.required],
            currenc2: ['', Validators.required],
            amt: ['', Validators.required],
            converted: ['']

        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        //console.log(this.f.currenc1.value)

       this.accountService.convert(this.f.currenc1.value,this.f.currenc2.value,this.f.amt.value)
        .subscribe(e1=>{
           
           this.posts=e1.conversionMultiple;
           console.log(e1.conversionMultiple);
           
           

         }, error =>{
           alert('An Unexpected error occured.');
           console.log(error);
     });

    }
}