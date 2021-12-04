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
    new CarouselItem(0, "1. First", "This is the first item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(1, "2. Second", "This is the second item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(2, "3. Third", "This is the third item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(3, "4. Fourth", "This is the fourth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(4, "5. Fifth", "This is the fifth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(5, "6. Sixth", "This is the sixth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(6, "7. Seventh", "This is the seventh item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(7, "8. Eighth", "This is the eighth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(8, "9. Ninth", "This is the ninth item", "https://picsum.photos/id/237/200/300"),
    new CarouselItem(9, "10. Tenth", "This is the tenth item", "https://picsum.photos/id/237/200/300"),
  ];
}
