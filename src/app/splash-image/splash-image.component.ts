import { Component, OnInit } from '@angular/core';
import { UnsplashService } from "../unsplash.service";



@Component({
  selector: 'app-splash-image',
  templateUrl: './splash-image.component.html',
  styleUrls: ['./splash-image.component.css']
})
export class SplashImageComponent implements OnInit {

  url:string = "";

  constructor( private splash: UnsplashService ) {
    this.getPhoto()
   }

   getPhoto(){
     this.splash.getPhoto().subscribe((resp) => {
       this.url = resp.urls.regular
    });
   }

  ngOnInit(): void {
    
  }

}
