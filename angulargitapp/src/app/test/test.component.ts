import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  public inputList = [];

  @Input()
  public num = 0;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(JSON.parse(this._route.snapshot.queryParams["data"]))
  }

  public addToList() {
    const lastIndex = this.inputList.length;
    this.inputList.push({
      id: lastIndex + 1,
      name : `Name ${lastIndex + 1}`
    });
    this.num++;
    console.log(`Value of Num in Child: ${this.num}`);
  }

  public deleteFromList(index) {
    this.inputList.splice(index,1);
    this.num--;
    console.log(`Value of Num in Child: ${this.num}`);
  }

}
