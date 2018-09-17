import { Component, Injector, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {

  //myGroup: FormGroup;
  //constructor(injector: Injector, private fb: FormBuilder) {}
  totalItems = 64;
  currentPage = 4;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
  constructor(){
  	console.log("alo re");
  }

  ngOnInit() {
  	console.log("ng init");
  }

}
