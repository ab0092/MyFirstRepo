import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public value: string;
  public user: FormGroup;

  constructor(private service: ValuesService) {
    service.$obser.subscribe((e) => this.value = e);
    this.user = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      gender: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.user);
    console.log(this.user.value);
  }

}
