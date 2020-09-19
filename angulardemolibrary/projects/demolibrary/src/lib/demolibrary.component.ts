import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylib-demolibrary',
  template: `
    <p>
      demolibrary works!
    </p>
  `,
  styles: []
})
export class DemolibraryComponent implements OnInit {

  constructor() {
    console.log("DEMO LIBRARY CONSUMED");
   }

  ngOnInit() {
  }

}
