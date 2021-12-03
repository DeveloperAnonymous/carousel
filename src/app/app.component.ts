import { Component } from '@angular/core';
import { CarouselItem } from './models/CarouselItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carousel';

  slides = [
    new CarouselItem(0, "First", "This is the first item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(1, "Second", "This is the second item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(2, "Third", "This is the third item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(3, "Fourth", "This is the fourth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(4, "Fifth", "This is the fifth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(5, "Sixth", "This is the sixth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(6, "Seventh", "This is the seventh item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(7, "Eighth", "This is the eighth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(8, "Ninth", "This is the ninth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(9, "Tenth", "This is the tenth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(10, "Eleventh", "This is the eleventh item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(11, "Twelfth", "This is the twelfth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(12, "Thirteenth", "This is the thirteenth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(13, "Fourteenth", "This is the fourteenth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(14, "Fifteenth", "This is the fifteenth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(15, "Sixteenth", "This is the sixteenth item", "https://picsum.photos/id/237/200/300"),
  ];
}
