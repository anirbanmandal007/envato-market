import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  isMenuOpen = false;
  isWindowScrolled = false;
  isMobileOrTabletView = false;
  customOptions: OwlOptions = {
    margin: 0,
    autoplay:true,
    smartSpeed: 500,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: false
  }

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    if(window.innerWidth < 992) {
      this.isMobileOrTabletView = true;
    }
  }

  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isWindowScrolled = window.scrollY > 50 ? true : false;
  }

}
