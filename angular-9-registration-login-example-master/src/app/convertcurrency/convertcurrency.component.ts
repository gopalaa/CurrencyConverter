import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-convertcurrency',
  templateUrl: './convertcurrency.component.html',
  styleUrls: ['./convertcurrency.component.less']
})

export class ConvertcurrencyComponent  {
 //private http: HttpClient;
 posts: any[];
  constructor(http: HttpClient){
    http.get('http://localhost:8000/currency-exchange/from/USD/to/INR')
           .subscribe(response =>{
            
           });

  }
  name = new FormControl('');

  updateName() {
    
    this.name.setValue('Nancy');
  }
}

