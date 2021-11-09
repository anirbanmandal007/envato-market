import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCountComponent } from './project-count/project-count.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { LatestWorksComponent } from './latest-works/latest-works.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { JobHistoryComponent } from './job-history/job-history.component';
import { ServiceOffersComponent } from './service-offers/service-offers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutMeComponent,
    ProjectCountComponent,
    SkillsetComponent,
    LatestWorksComponent,
    JobHistoryComponent,
    ServiceOffersComponent,
    TestimonialsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
