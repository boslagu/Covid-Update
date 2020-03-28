import { Component } from '@angular/core';
import { myApiService } from './services/myapi.service'
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _myApiService: myApiService){}
  title = 'covid-update';
  
  startPoint : number =0;
  endPoint : number =50;
  
  nextPage(){
    this.startPoint += 50;
    this.endPoint +=50;
    scroll(0,0);
  }
  

  lst:Comments[];

  ngOnInit(){
    this._myApiService.getcomments()
    .subscribe(
      data=>{
        this.lst = data;
      }
    )

  }
}
