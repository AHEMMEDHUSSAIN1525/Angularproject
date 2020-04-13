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
additem(newitemMovie){
  var newlist={
    Label:"Industry ",
    Movie:newitemMovie,
    Hero:"Not found "
  }
  this.lists.push(newlist);
  };
  deleteitem(table){
    this.lists=this.lists.filter(t=>t.Movie!==table.Movie);
  }
}
