import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html'
})
export class ImageViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let img=setTimeout(() => { document.getElementById("closeimageview").click() }, 15000)
    let timer=setInterval(() => {
      let x = document.getElementById("inner").style.width;
      let y = Number(x.slice(0, x.length - 1));
      document.getElementById("inner").style.width = y + .06667 + "%";
    }, 10)
    setTimeout(()=>{clearInterval(timer);clearInterval(img)},15000)
  }
  

}
