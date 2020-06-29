import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  files=[];
  file;

  change(event){
    console.log("changes occur !....");
    
    
    this.file=event.target.files[0].name;
    console.log(this.file);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
