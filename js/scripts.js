// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// slider-activation-Results
const swiper = new Swiper(".result-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider-activation-Results
const swiperTwo = new Swiper(".interview-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider-activation-Results
const swiperThree = new Swiper(".intervidew-res", {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider-activation-Results
const swiperFour = new Swiper(".wirefarme-slider", {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider-activation-Results
const swiperFive = new Swiper(".proto-slider", {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  // offcanvasmenu
  $(".burger-inner").click(function () {
    $(this).toggleClass("toggle");
    $(".offcanvas-wrapper").toggleClass("active");
  });
  $(".offcanvas-close-a").click(function () {
    $(".burger-inner").removeClass("toggle");
    $(".offcanvas-wrapper").removeClass("active");
  });

  // sticky-js
  $(".header").sticky({ topSpacing: 0 });

  // light-box
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
});



// SCROOLING ANIMAITON
function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition// - startPosition;
	var startTime = null;	
	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}
	function ease(t, b, c, d, s){
    if (s == undefined) s = .70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}  	
	requestAnimationFrame(animation);
}

let gotocontact = document.querySelectorAll('.goto-contact');
gotocontact.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    smoothScroll('#contact-section', 1000);
  });
});

let gotoWork = document.querySelectorAll('.goto-work');
gotoWork.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    smoothScroll('#work', 1000);
  });
});


// CUSTOM TOOLTIP
let contactTooltip = document.querySelectorAll('.contact-tooltip')
contactTooltip.forEach(tool => {
  let span = document.createElement("SPAN")
  span.classList.add('tooltip-text');
  span.textContent = "Contact";
  tool.append(span)
  if (!tool.classList.contains("active")) {  
    tool.addEventListener("mouseenter", ()=>{      
        tool.classList.add('show')        
    })
    tool.addEventListener("mouseleave", ()=>{          
        tool.classList.remove('show')        
    })
  }
  tool.addEventListener("click", ()=>{
    if (tool.classList.contains('active')) {
      tool.classList.remove('active')
    }else{      
      tool.classList.add('active')
    }
  })
  window.addEventListener('click', (e)=>{
    let target = e.target
    if (!target.closest(".contact-tooltip")) {
      tool.classList.remove('active')
    }
  })
});