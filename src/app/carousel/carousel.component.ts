import { Component, Input, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { CarouselItem } from '../models/CarouselItem';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: CarouselItem[] = [];

  previousSlides: CarouselItem[] | null = null;
  currentSlides: CarouselItem[] | null = null;
  nextSlides: CarouselItem[] | null = null;

  previousElement: HTMLElement | null = null;
  currentElement: HTMLElement | null = null;
  nextElement: HTMLElement | null = null;

  isAnimating: boolean = false;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  private SLIDES_PER_PAGE = 4;

  canSlide = () => this.slides.length >= this.SLIDES_PER_PAGE;

  ngOnInit(): void {
    this.currentSlides = this.slides.slice(0, Math.min(this.SLIDES_PER_PAGE, this.slides.length));

    if (this.canSlide()) {
      this.nextSlides = this.slides.slice(Math.min(3, this.slides.length));
    }

    if (this.canSlide() && this.currentSlides.length < this.SLIDES_PER_PAGE * 2) {
      const diff = (this.SLIDES_PER_PAGE * 2) - this.currentSlides.length;
      this.nextSlides = this.slides.slice(this.SLIDES_PER_PAGE)
      this.nextSlides = this.nextSlides.concat(this.currentSlides.slice(0, diff));
      this.previousSlides = this.nextSlides.slice();
    }

    if (this.SLIDES_PER_PAGE * 3 <= this.slides.length) {
      this.previousSlides = this.slides.slice(-this.SLIDES_PER_PAGE);
      this.nextSlides = this.slides.slice(this.SLIDES_PER_PAGE, (this.SLIDES_PER_PAGE * 2));
    }
  }

  private updateNext(): void {
    if (this.nextSlides) {
      this.previousSlides = this.currentSlides;
      this.currentSlides = this.nextSlides;

      const lastNextSlide = this.nextSlides.slice(-1)[0];
      const nextSlideIndex = this.slides.indexOf(lastNextSlide) + 1;
      const possibleNextSlides = this.slides.slice(nextSlideIndex, Math.min(nextSlideIndex + this.SLIDES_PER_PAGE, this.slides.length));

      this.nextSlides = possibleNextSlides;
      if (possibleNextSlides.length < this.SLIDES_PER_PAGE) {
        this.nextSlides = possibleNextSlides.concat(this.slides.slice(0, this.SLIDES_PER_PAGE - possibleNextSlides.length));
      }
    }
  }

  updatePrevious(): void {
    if (this.previousSlides) {
      this.nextSlides = this.currentSlides;
      this.currentSlides = this.previousSlides;

      const firstPreviousSlide = this.previousSlides[0];
      const previousSlideIndex = this.slides.indexOf(firstPreviousSlide);
      const possiblePreviousSlides = this.slides.slice(Math.max(previousSlideIndex - this.SLIDES_PER_PAGE, 0), previousSlideIndex);

      this.previousSlides = possiblePreviousSlides;
      if (possiblePreviousSlides.length < this.SLIDES_PER_PAGE) {
        const missingSlides = this.SLIDES_PER_PAGE - possiblePreviousSlides.length;
        this.previousSlides = this.slides.slice(-missingSlides).concat(possiblePreviousSlides);
      }
    }
  }

  next(): void {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;

    if (this.previousSlides == null || this.currentSlides == null || this.nextSlides == null) {
      return;
    }

    const slideElement = document.getElementById('carousel-slide');
    if (slideElement == null) {
      return;
    }

    const elems: HTMLCollectionOf<Element> = slideElement.getElementsByClassName('carousel-items');
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

    if (this.previousSlides == null || this.currentSlides == null || this.nextSlides == null) {
      return;
    }

    const slideElement = document.getElementById('carousel-slide');
    if (slideElement == null) {
      return;
    }

    const elems: HTMLCollectionOf<Element> = slideElement.getElementsByClassName('carousel-items');
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
