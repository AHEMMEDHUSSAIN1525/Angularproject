import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'movie-app';

 lists=[
  
   {
    Label:"Tollywood",
    Movie:" Mirchi ",
    Hero:"Prabhas"
    },

    {
      Label:"Bollywood",
      Movie:"War",
      Hero:"Hritik Roshan"
    },

    {
        Label:"Hollywood",
        Movie:"Terminator",
        Hero:"Arnold"
    },

    {
          Label:"Kollywood",
          Movie:"KGF",
          Hero:"Yash"
    },
   
];
additem(newitemLabel){
  var newlist={
    Label:"Industry",
    Movie:newitemLabel,
    Hero:" "
  }
  this.lists.push(newlist);
  };
  deleteitem(table){
    this.lists=this.lists.filter(t=>t.Label!==table.Label);
  }
}
