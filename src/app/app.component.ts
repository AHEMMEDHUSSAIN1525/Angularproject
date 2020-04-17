import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('Terminalinput')component;
  Terminal:string='';
  count:number=0;
  showAlert() {
    
    this.count=this.count+1;
    this.Terminal="You clicked" +" " +this.count +"times";
    console.log(this.component.nativeElement.value);
    
  }

}