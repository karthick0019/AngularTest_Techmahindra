import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomone',
  templateUrl: './childcomone.component.html',
  styleUrls: ['./childcomone.component.css']
})
export class ChildcomoneComponent implements OnInit {

  @Input() GridData: any;
  constructor() { }

  ngOnInit(): void {
  
  }


}
