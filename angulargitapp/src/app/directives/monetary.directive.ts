import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMonetary]'
})
export class MonetaryDirective {

  constructor(private _element:ElementRef) { 
    _element.nativeElement.value = `$${_element.nativeElement.value}`;
  }

  @HostListener('blur') onblur() {
    this.setDollar();
  }

  private setDollar() {
    if(this._element.nativeElement.value.toString() == "") {
      this._element.nativeElement.value = "$0";
    }
    else if(!this._element.nativeElement.value.toString().startsWith("$")) {
      this._element.nativeElement.value = `$${this._element.nativeElement.value}`;
    }
  }

}
