import { Component } from '@angular/core';
import { Comments } from './classes/comments';
import { myApiService } from './services/myapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _myApiService: myApiService){}
  
  lst:Comments[];
  title = 'covid-update';
  
  startPoint : number =0;
  endPoint : number =50;
  
  nextPage(){
    this.startPoint += 50;
    this.endPoint +=50;
    scroll(0,0);
  }
  viewAll(){
    this.startPoint = 0;
    this.endPoint = this.lst.length;
    scroll(0,0);
  }
  


  ngOnInit(){
    this._myApiService.getcomments()
    .subscribe(
      data=>{
        this.lst = data;
      }
    )

  }
}
