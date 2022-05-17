import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  /**
   * Holds the Product object.
   */
  @Input() product: any;

  /**
   * Holds the initial image index value of the product
   */
  currentIndex = 0;

  /**
   * Holds the array of images belongs to the current product.
   */
  images: string[] = [];

  /**
   * Flag to determine the image element is hovered or not, to show/hide previous and next icon of images.
   */
  isHovered = false;

  constructor() {}

  /**
   * Default ngOnInit lifecycle hook, Used to initialize product images. 
   */
  ngOnInit(): void {
    this.images = this.product.images;
  }

  /**
   * Returns the URL for the media at the current index.
   * If there are no media files provided, then function returns undefined.
   */
  getCurrentMedia(): string {
    if (this.images.length === 0) {
      return 'undefined';
    }
    return this.images[this.currentIndex];
  }

  /**
   * Only show navigation (arrows and pagination container) if more than one image
   *
   * @returns true if there are more than 1 image.
   */
  showNavigation(): boolean {
    return this.images.length > 1;
  }

  /**
   * Called when the previous arrow is clicked.  If the current index is the first one, then
   * cycle back to the last one
   */
  previous(): void {
    if (this.images.length > 0) {
      this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    }
  }

  /**
   * Called when the next arrow is clicked.  If the current index is the last one, then
   * cycle back to the first one
   */
  next(): void {
    if (this.images.length > 0) {
      this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    }
  }

  /**
   * Called when check details button is clicked.
   */
  onCheckDetails(): void {
    alert(this.product.name + " check details clicked");
  }
}
