import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('alert') alert;
  showAlert() {
    console.log(this.alert.nativeElement.value);
  }
   
 

 title = 'movie-app';

}