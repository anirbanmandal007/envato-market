import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-latest-works',
  templateUrl: './latest-works.component.html',
  styleUrls: ['./latest-works.component.scss']
})
export class LatestWorksComponent implements OnInit {

  private urls: string[] = [
    'https://karmen-vue.netlify.app/assets/img/work/w1.jpg',
    'https://karmen-vue.netlify.app/assets/img/work/w2.jpg',
    'https://karmen-vue.netlify.app/assets/img/work/w3.jpg',
    'https://karmen-vue.netlify.app/assets/img/work/w4.jpg',
    'https://karmen-vue.netlify.app/assets/img/work/w5.jpg',
    'https://karmen-vue.netlify.app/assets/img/work/w6.jpg',
  ];

    public get images(): IMasonryGalleryImage[] {
        return this.urls.map(m => <IMasonryGalleryImage>{
            imageUrl: m
    });
    }
  constructor() { }

  ngOnInit(): void {
  }

}
