import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonSlides } from '@ionic/angular';
import {ViewChild} from '@angular/core';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonSlides]);

@Component({
  selector: 'inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;
  public title:string;
  constructor() {
    this.title = 'Initial_title';
   }
  onSlideChangeStart(slide) {
    // You can use the slide parameter to get info from it or just use the slider reference to know the index of the active slide
    let currentIndex = this.slider.getActiveIndex();
    this.title = "Slider " + currentIndex;
  }
  ngOnInit() {
  }

}
