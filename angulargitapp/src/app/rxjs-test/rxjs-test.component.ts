import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsTestComponent implements OnInit {

  public text: string;
  public ph: string;

  constructor(public changeDetector: ChangeDetectorRef) {
    this.ph = "Select Items";
    changeDetector.detach();
    
  }

  ngOnInit() {
    fromEvent(document.getElementById('name'), 'change')
      .subscribe((e: Event) => {
        this.text = e.target['value'];
        this.changeDetector.detectChanges();
      });
    this.changeDetector.detectChanges();
  }

}
