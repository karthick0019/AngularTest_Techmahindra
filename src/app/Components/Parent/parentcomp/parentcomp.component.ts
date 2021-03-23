import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit { 
  
  IsSuffuleClicked=false;
  IsSortClicked=false;  
  suffuledisable=true;
  sortdisable=false;
  GridData:any;
  ListData:any;
  
  FirstGridData = [
    {
      title: 1 ,
      color:"color1"
    },
    {
      title: 2  ,
      color:"color2"   
    },
    {
      title: 3   ,
      color:"color3"  
    },
    {
      title: 4   ,
      color:"color4" 
    },
    {
      title: 5   ,
      color:"color5" 
    },
    {
      title: 6   ,
      color:"color6"  
    },
    {
      title: 7   ,
      color:"color7"
    },
    {
      title: 8   ,
      color:"color8"
    },
    {
      title: 9   ,
      color:"color9"
    },

  ];
  SecondArraylist = [
    {
      title: 1 ,
      color:"color1"
    },
    {
      title: 2  ,
      color:"color2"   
    },
    {
      title: 3   ,
      color:"color3"  
    },
    {
      title: 4   ,
      color:"color4" 
    },
    {
      title: 5   ,
      color:"color5" 
    },
    {
      title: 6   ,
      color:"color6"  
    },
    {
      title: 7   ,
      color:"color7"
    },
    {
      title: 8   ,
      color:"color8"
    },
    {
      title: 9   ,
      color:"color9"
    },

  ];
  

  constructor() { }

  ngOnInit(): void {
    this.GridData=this.shuffledata(this.FirstGridData);
    this.ListData=this.shuffledata(this.SecondArraylist);
  }
  shuffledata(array) 
  {
    var c_index = array.length,
     temp_Value, r_Index;
    while (0 !== c_index) {
      r_Index = Math.floor(Math.random() * c_index);
      c_index -= 1;
      temp_Value = array[c_index];
      array[c_index] = array[r_Index];
      array[r_Index] = temp_Value;
    }
    return array;
  }
  onSuffule()
  {  
    
   if(!this.IsSuffuleClicked)
    {
      this.shuffledata(this.GridData); 
      this.IsSuffuleClicked=true;
    }
    else
    {
      this.shuffledata(this.ListData); 
      this.suffuledisable=true;
      this.sortdisable=false;
      this.IsSuffuleClicked=false;
    }
  }
  onSort() { 
    if(!this.IsSortClicked)
    {
      this.GridData.sort((a, b)=> {return (a.title) - (b.title)});
      this.IsSortClicked=true;
    }
    else
    {
      this.ListData.sort((a, b)=> {return (a.title) - (b.title)});
      this.sortdisable=true;
      this.suffuledisable=false;
      this.IsSortClicked=false;
    }    
  }
}
