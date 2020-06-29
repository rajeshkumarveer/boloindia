import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html'
})
export class ImageViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{document.getElementById("closeimageview").click()},15000)
  }

}
