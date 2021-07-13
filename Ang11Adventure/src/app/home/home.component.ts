import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;

  info = new FormGroup({
    firstName: new FormControl('', Validators.required),

    lastName: new FormControl('', Validators.required),

    age: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),
  });

  countClick() {
    this.clickCounter++;
  }

  students = [
    {
      name: 'David',

      age: 32,
    },
    {
      name: 'jime',

      age: 28,
    },
    {
      name: 'sabrina',

      age: 26,
    },
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.info.valid) {
      var a = this.info.value;

      console.log(a);
    }
  }
}
