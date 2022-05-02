// function myFunction(){
 
//     var navDrop =  document.getElementById("myScrollspy");
//     if(navDrop.clicked ==true) {
//         document.getElementById("myScrollspy").style.backgroundColor = "transparent";
        
//     }
//     else{
//         document.getElementById("myScrollspy").style.backgroundColor = "#fff";   
//     }
// }


// var navDrop =  document.getElementById("myScrollspy");

// navDrop.onclick = function () {
//     navDrop.style.backgroundColor = "transparent";
   
// }

// navDrop.onclick = function () {
//     navDrop.style.backgroundColor = "#fff"; 
// }

//   Number Count

function startCount() {
    // number count for stats, using jQuery animate

$('.count-number').each(function () {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({
      countNum: $this.text()
  }).animate({
          countNum: countTo
      },

      {
          duration: 3500,
          easing: 'linear',
          step: function () {
              $this.text(Math.floor(this.countNum));
          },
          complete: function () {
              $this.text(this.countNum);
              //alert('finished');
          }

      });


});
};

$(window).scroll(function () {
  startCount();
});

startCount();

// End Number Count

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1500,
    fluidSpeed: true,
    dots: false,
    stagepadding: 50,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 3
        },
        1024: {
            items: 4
        },
        1040: {
            items: 6
        }
    }
})

// End Owl Carousel

// AOS mobile Turn-Off

// AOS.init({
//     disable: function() {
//       var maxWidth = 800;
//       return window.innerWidth < maxWidth;
//     }
//   });

AOS.init({disable: 'mobile'});


// End AOS mobile Turn-Off