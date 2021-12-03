import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../models/CarouselItem';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: CarouselItem[] = [];

  previousSlide: CarouselItem | null = null;
  currentSlide: CarouselItem | null = null;
  nextSlide: CarouselItem | null = null;

  previousElement: HTMLElement | null = null;
  currentElement: HTMLElement | null = null;
  nextElement: HTMLElement | null = null;

  isAnimating: boolean = false;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  canSlide = () => this.slides.length >= 2;

  ngOnInit(): void {
    this.currentSlide = this.slides[0];

    if (this.slides.length > 1) {
      this.previousSlide = this.slides[1];
      this.nextSlide = this.slides[1];
    }

    if (this.slides.length > 2) {
      this.previousSlide = this.slides[this.slides.length - 1];
    }
  }

  private updateNext(): void {
    if (this.nextSlide) {
      this.previousSlide = this.currentSlide;
      this.currentSlide = this.nextSlide;
      this.nextSlide = this.slides[this.slides.indexOf(this.nextSlide) + 1];

      if (!this.nextSlide) {
        this.nextSlide = this.slides[0];
      }
    }
  }

  updatePrevious(): void {
    if (this.previousSlide) {
      this.nextSlide = this.currentSlide;
      this.currentSlide = this.previousSlide;
      this.previousSlide = this.slides[this.slides.indexOf(this.previousSlide) - 1];

      if (!this.previousSlide) {
        this.previousSlide = this.slides[this.slides.length - 1];
      }
    }
  }

  next(): void {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;

    if (this.previousSlide == null || this.currentSlide == null || this.nextSlide == null) {
      return;
    }

    const slideElement = document.getElementById('carousel-slide');
    if (slideElement == null) {
      return;
    }

    const elems: HTMLCollectionOf<Element> = slideElement.getElementsByClassName('carousel-item');
    if (elems.length == 0) {
      return;
    }

    for (let i = 0; i < elems.length; i++) {
      const elem = elems.item(i);
      if (elem == null) {
        continue;
      }
      elem.classList.add('slide-right');
    }

    setTimeout(() => {
      this.updateNext();

      for (let i = 0; i < elems.length; i++) {
        const elem = elems.item(i);
        if (elem == null) {
          continue;
        }
        elem.classList.remove('slide-right');
      }

      this.isAnimating = false;
    }, 500);
  }

  previous(): void {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;

    if (this.previousSlide == null || this.currentSlide == null || this.nextSlide == null) {
      return;
    }

    const slideElement = document.getElementById('carousel-slide');
    if (slideElement == null) {
      return;
    }

    const elems: HTMLCollectionOf<Element> = slideElement.getElementsByClassName('carousel-item');
    if (elems.length == 0) {
      return;
    }

    for (let i = 0; i < elems.length; i++) {
      const elem = elems.item(i);
      if (elem == null) {
        continue;
      }
      elem.classList.add('slide-left');
    }

    setTimeout(() => {
      this.updatePrevious();

      for (let i = 0; i < elems.length; i++) {
        const elem = elems.item(i);
        if (elem == null) {
          continue;
        }
        elem.classList.remove('slide-left');
      }

      this.isAnimating = false;
    }, 500);
  }
}
