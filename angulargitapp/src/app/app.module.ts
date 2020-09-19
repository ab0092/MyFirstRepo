import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UtilServicesModule } from 'UtilServices';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { MonetaryDirective } from './directives/monetary.directive'
import { HttpModule } from '@angular/http';
import { PrintComponent } from './print/print.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { DemoComponent } from './demo/demo.component';

const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'print', component: PrintComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MonetaryDirective,
    PrintComponent,
    RxjsTestComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    UtilServicesModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
