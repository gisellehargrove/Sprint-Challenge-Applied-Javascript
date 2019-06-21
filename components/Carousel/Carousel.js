class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.images = this.element.querySelectorAll('.carousel-img');
    this.position = 0;
    this.images[this.position].style.display = 'flex';
    this.leftButton.addEventListener('click', () => {
        this.selectImg('left')
    })

    this.rightButton.addEventListener('click', () => {
          this.selectImg('right')
      })

  }
  selectImg(direction) {
    if (direction === 'left') {
      if(this.position === 0){
        this.position = this.images.length - 1;
      } else {
        this.position--;
      }
    } else {
      if(this.position === this.images.length) {
        this.position = 0;
      } else {
        this.position++;
      }
    }
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
