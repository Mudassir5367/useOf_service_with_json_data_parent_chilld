import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() friendData:any; 
  @Input() selectedValue:any;
  constructor() { }

  ngOnInit(): void {
  }
  
 

}
