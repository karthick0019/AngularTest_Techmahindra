import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomtwo',
  templateUrl: './childcomtwo.component.html',
  styleUrls: ['./childcomtwo.component.css']
})
export class ChildcomtwoComponent implements OnInit {
 
  @Input() ListData: any;
 

  constructor() { }

  ngOnInit(): void {

  }
  

}
