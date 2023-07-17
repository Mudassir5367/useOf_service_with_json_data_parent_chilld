import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {
post:any=[];
frndId:any;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
this.taskService.getData().subscribe((data)=>{
  console.log('Get: ', data);
  this.post = data
  

})
  }
getId(arr:any){
this.post.forEach((data:any)=>{
  this.frndId=data.friends.filter((x:any)=>{
    if(x.id>1){
      console.log(x);
      
      return x
    }
  })
  console.log('frndId: ', this.frndId);

})
  
}


}
