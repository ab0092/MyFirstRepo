import { Component, OnInit } from '@angular/core';
// import { DemolibraryComponent } from 'demolibrary';
import { UtilServicesService } from 'UtilServices';
import { Subject, merge, Observable, of, forkJoin } from 'rxjs';
import { Route, Router } from '@angular/router';
import { delay, reject } from 'q';
import { ValuesService } from './services/values.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private list = [];
  private list2 = [];
  public listForTest = [];
  public numForTest: number = 1;

  constructor(private _Serv: UtilServicesService, private _route:Router,
    private _valuesService: ValuesService) {
    console.log("HELLO WORLD 2");
    // const x = new DemolibraryComponent();
    console.log("SUM OF NUMS ARE", _Serv.add(1, 2, 3));
    this.list = [{ x: 88, y: 99 }, { x: 8, y: 99 }];
    this.list2 = this.list.map((e) => Object.assign({},e));
  }

  ngOnInit() {
    //this.fillList();
    //this.printPage();
    console.log(this.isMondayDate(new Date("04/03/2020")))
    // console.log("04/03/2020 =>",this.getMondayDate(new Date("04/03/2020")))
    // console.log("03/01/2020 => ",this.getMondayDate(new Date("03/01/2020")))
    // console.log("06/18/2020 => ",this.getMondayDate(new Date("06/18/2020")))
    let d = new Date();
    let results = '';
    while(d <= new Date("12/31/2020")) {
      results += `Input ${d} | Monday Date Output => ${this.getMondayDate(d)} \n`
      d = new Date(d.setDate(d.getDate() + 1));
    }
    d = new Date("12/31/2020");
    results += `Input ${d} | Monday Date Output => ${this.getMondayDate(d)}`;
    // console.log(results);
  }

  private rxjsfun(): void {
    const s1 = of("HELLO");
    const s2 = of("WORLD");
    const s3 = of("EXAMPLE");
    forkJoin(s1,s2,s3).subscribe((response)=>{
      const [Res1, Res2, Res3]= response;
      console.log(`Res1=> ${Res1}`);
      console.log(`Res2=> ${Res2}`);
      console.log(`Res3=> ${Res3}`);
    })
    
  }

  public foo() {
    this.list[0].x = 888;
    // console.log("List 1",this.list);
    // console.log("List 2",this.list2);
    this.rxjsfun();
    const S1 = this._valuesService.getValues();
    const S2 = this._valuesService.getValuesDynamic('1');
    const S3 = this._valuesService.getValuesDynamic('2');
    const p1 = new Promise((resolver,reject)=>{
      setTimeout(() => {
        resolver(99);  
      }, 5000);
      //reject("error occured");
    });
    
    console.time("TIME TAKEN");
    forkJoin(S1,S2,S3,p1).subscribe((res)=> {
      const [Res1,Res2,Res3,Res4] = res;
      console.log("values 1 =>",Res1);
      console.log("values 2 =>",Res2);
      console.log("values 3 =>",Res3);
      console.log("values 4 =>",Res4);
      console.timeEnd("TIME TAKEN");
    },err=> console.log(err));
  }

  public Nav() {
    this._route.navigate(['test'],{queryParams:{data:JSON.stringify({id:99})}});
  }

  private fillList() {
    for (let index = 0; index < 5; index++) {
      this.listForTest.push({
        id: index + 1,
        name: `Name ${index + 1}`
      });
    }

    
  }
  public CheckValue() {
    console.log(this.listForTest);
    console.log(`Value of Num in Parent: ${this.numForTest}`);
  }

  private printPage() {
    //`${document.location.host}/print`
    const printWindow = window.open('',"_blank");
    if(!printWindow) {
      if(confirm(`Print preview page has been blocked please change browser setting to allow popup and then click on Ok to retry or Cancel to proceed without viewing the preview`)){
        setTimeout(() => {
          this.printPage();
        }, 1000); 
      } else {

      }
    } else {
      printWindow.document.body.innerHTML = document.body.innerHTML;
      printWindow.print();
    }
  }

  public isMondayDate(date: Date): boolean {
    if (date instanceof Date) {
      return date.getDay() === 1;
    } else {
      return false;
    }
  }

  public getMondayDate(date: Date): Date {
    if (date instanceof Date) {
      let dayOfWeek = date.getDay();
      const dayOfMonth = date.getDate();
      const daysInMonth = function (datetoCalculateDays) {
        const month = datetoCalculateDays.getMonth();
        let dayInMonth = 1;
        while (true) {
          if ((new Date(datetoCalculateDays.getFullYear(),
            datetoCalculateDays.getMonth(), dayInMonth))
            .getMonth() !== month) {
            break;
          }
          dayInMonth++;
        }
        return dayInMonth;
      };

      if (dayOfWeek === 0) { // Sunday = 0
        dayOfWeek = 7;
      }
      // (dayOfWeek - 1) => Exclude current day of week
      const daysAhead = dayOfWeek - 1;
      if ((dayOfMonth - daysAhead) < 0) { // Switch to Previous month

        let daysElapsedinCurrentMonth = 0;
        if (dayOfWeek > dayOfMonth) {
          while ((daysElapsedinCurrentMonth + 1) < dayOfMonth) {
            daysElapsedinCurrentMonth++;
          }
        }

        if (date.getMonth() === 0) {
          return new Date(date.getFullYear() - 1, // YEAR
            11, // MONTH
            // Days in Previous Month + Days Elpsed in Current Month
            ((daysInMonth(new Date(date.getFullYear() - 1, 11, 1))) + daysElapsedinCurrentMonth)
            - daysAhead); // DAY
        } else {
          return new Date(date.getFullYear(), // YEAR
            (date.getMonth() - 1), // MONTH
            // Days in Previous Month + Days Elapsed in Current Month
            ((daysInMonth(new Date(date.getFullYear(), date.getMonth() - 1, 1))) 
            + daysElapsedinCurrentMonth) - daysAhead); // DAY
        }
      } else {
        return new Date(date.getFullYear(), date.getMonth(), (dayOfMonth - daysAhead));
      }
    }
  }

  public changeChildValue() {
    this._valuesService.$obser.next('Hi There');
  }


}
