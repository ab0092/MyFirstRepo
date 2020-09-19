import { Component, OnInit } from '@angular/core';
//import * as jspdf from 'jspdf';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() { 

  }

  generatePdf() {
    // var data = document.getElementsByTagName('app-print')[0];  
    // html2canvas(data).then(canvas => {  
    //   // Few necessary setting options  
    //   var imgWidth = 208;   
    //   var pageHeight = 295;    
    //   var imgHeight = canvas.height * imgWidth / canvas.width;  
    //   var heightLeft = imgHeight;  
  
    //   const contentDataURL = canvas.toDataURL('image/png')  
    //   let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    //   var position = 2;  
    //   pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight)  
    //   pdf.save('MYPdf.pdf'); // Generated PDF 
    //   //pdf.output('dataurlnewwindow');
    //   //window.open(pdf.output('bloburl'))  
    // }); 
  }

  ngOnInit() {
    // alert("print loaded")
  }

}
