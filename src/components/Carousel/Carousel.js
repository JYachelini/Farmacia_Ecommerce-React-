export default function Carousel({ photo1, photo2, photo3, photo4, photo5 }) {
  document.addEventListener("DOMContentLoaded", () => {
    var img = document.querySelectorAll(".carousel__photo");
    var totalImg = img.length;
    var slide = 0;
    var moving = true;

    // Set classes
    function setIntitialClasses() {
      // Selecciona el anterior, actual y siguiente item
      // Se asume que hay por lo menos 3 items

      img[totalImg - 1].classList.add("prev");
      img[0].classList.add("active");
      img[1].classList.add("next");
    }

    // Set event listeners
    function setEventListeners() {
      var next = document.querySelector(".carousel__button--next");
      var prev = document.querySelector(".carousel__button--prev");

      next.addEventListener("click", moveNext);
      prev.addEventListener("click", movePrev);
    }

    function disableInteraction() {
      //Setea 'moving' a true a la misma duracion que la transition

      moving = true;

      setTimeout(function () {
        moving = false;
      }, 500);
    }

    function moveCarouselTo(slide) {
      // Checkea si el carousel esta en movimiento
      if (!moving) {
        // Deshabilita temporalmente
        disableInteraction();

        var newPrevious = slide - 1;
        var newNext = slide + 1;
        var oldPrevious = slide - 2;
        var oldNext = slide + 2;

        // Checkea si el carousel tiene más de 3 imagenes

        if (totalImg - 1 > 3) {
          // Checkea y actualiza si los nuevos slides estan fuera de los limites
          if (newPrevious <= 0) {
            oldPrevious = totalImg - 1;
          } else if (newNext >= totalImg - 1) {
            oldNext = 0;
          }

          // Checkea y actualiza si el slide esta al principio o al final
          if (slide === 0) {
            newPrevious = totalImg - 1;
            oldPrevious = totalImg - 2;
            oldNext = slide + 1;
          } else if (slide === totalImg - 1) {
            newPrevious = slide - 1;
            newNext = 0;
            oldNext = 1;
          }

          img[oldPrevious].className = "carousel__photo";
          img[oldNext].className = "carousel__photo";

          img[newPrevious].className = "carousel__photo prev";
          img[slide].className = "carousel__photo active";
          img[newNext].className = "carousel__photo next";
        }
      }
    }

    // Handler siguiente navegación
    function moveNext() {
      // Checkea si se esta moviendo
      if (!moving) {
        // Si esta en el ultimo slide, se resetea a 0, sino +1
        if (slide === totalImg - 1) {
          slide = 0;
        } else {
          slide++;
        }

        // Mueve el carousel para actualizar el slide
        moveCarouselTo(slide);
      }
    }

    // Handler previa navegación
    function movePrev() {
      // Checkea si se esta moviendo
      if (!moving) {
        // Si es el primer slide, lo setea como ultima, sino -1
        if (slide === 0) {
          slide = totalImg - 1;
        } else {
          slide--;
        }

        // Mueve el carousel para actualizar el slide
        moveCarouselTo(slide);
      }
    }

    function initCarousel() {
      setIntitialClasses();
      setEventListeners();

      moving = false;
    }

    initCarousel();
  });

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={photo1} alt="" className="carousel__photo initial" />
        <img src={photo2} alt="" className="carousel__photo" />
        <img src={photo3} alt="" className="carousel__photo" />
        <img src={photo4} alt="" className="carousel__photo" />
        <img src={photo5} alt="" className="carousel__photo" />

        <div className="carousel__button--next"></div>
        <div className="carousel__button--prev"></div>
      </div>
    </div>
  );
}
