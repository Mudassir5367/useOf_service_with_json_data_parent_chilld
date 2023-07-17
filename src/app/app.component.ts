import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <iframe [src]="safeUrl"></iframe>
  `,
})
export class AppComponent {
   url: string = 'https://www.w3schools.com';
   safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  title = 'practice';
  value:any;
  friends = [
    {
       "id":0,
       "name":"Verna Gonzales"
    },
    {
       "id":1,
       "name":"Natalia Odom"
    },
    {
       "id":2,
       "name":"Avis Roach"
    }
 ]
 getSelectedValue(event:any){
  console.log(event.target.value);
  this.value = event.target.value
 }
}

