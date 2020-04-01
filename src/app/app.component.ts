import { Component } from '@angular/core';
import { collectionData } from './classes/comments';
import { myApiService } from './services/myapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _myApiService: myApiService){}
  
  searchNationality:string;
  nationalityResult:number = null;
  lst:collectionData[];
  requestContainer:collectionData[];
  title = 'covid-update';
  
  startPoint : number =0;
  endPoint : number =50;
  
  nextPage(){
    this.startPoint += 50;
    this.endPoint +=50;
    scroll(0,0);
  }
  previousPage(){
    if (this.startPoint != 0){
      this.startPoint -= 50;
      this.endPoint -= 50;
      scroll(0,0);
    }
  }
  viewAll(){
    this.startPoint = 0;
    this.endPoint = this.lst.length;
    scroll(0,0);
  }
  filterTable(list, searchValue){
    if (searchValue != ""){
      var cnt = 0;
      this.lst = list.filter(res=>{
        if (res.nationality.toLocaleLowerCase().match(searchValue.toLocaleLowerCase())){
          cnt++;
        }
        return res.nationality.toLocaleLowerCase().match(searchValue.toLocaleLowerCase());
      })
      this.nationalityResult = cnt;
    }else{
      this.nationalityResult = null;
      this.lst = this.requestContainer;
      return this.lst ;
    }
  }




  ngOnInit(){
    this._myApiService.getData()
    .subscribe(
      data=>{
        this.lst = data;
        this.requestContainer = data;
        // console.log(data);
      }
    )

  }
}
