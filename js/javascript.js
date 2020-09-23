const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Bar
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
      }
    })
    burger.classList.toggle('toggle');
  });

  // Burger animation

}

navSlide();


// const sections = document.querySelectorAll("section");
// const bubble=document.querySelector('.bubble');
// const options = {
//   threshold: 0.7
// };
//
// let observer = new IntersectionObserver(navCheck, options);
//
// function navCheck(entries) {
//   entries.forEach(entry => {
//     const className = entry.target.className;
//     console.log(className);
//     const activeAnchor = document.querySelector(`[data-page=${className}]`);
//     const gradientIndex = entry.target.getAttribute('data-index');
//     const coord = activeAnchor.getBoundingClientRect();
//     const directions = {
//       height: coord.height,
//       width: coord.width,
//       top: coord.top,
//       left: coord.left
//     };
//     if (entry.isIntersecting) {
//       bubble.style.setProperty('left', `${directions.left}px`),
//         bubble.style.setProperty('top', `${directions.top}px`),
//         bubble.style.setProperty('width', `${directions.width}px`),
//         bubble.style.setProperty('height', `${directions.height}px`)
//     }
//   });
// }
//
// sections.forEach(section => {
//   observer.observe(section);
// });
//
//
//
// //add function to showMore btn
//
// if (window.matchMedia("(max-width: 500px)").matches) {
//
// 	$(".show-link").click(function() {
//
//
// //	$(".project-2").css("margin-left", "0px");
//
// 	for(var i = 3; i < 7; i++) {
//
// 		if(document.querySelector(".project-" + i).style.display === "none") {
//
// 			document.querySelector(".project-" + i).style.display = "block";
//
// 			document.querySelector(".project-2").style.marginRight = "0px";
//
// 			$(".more").addClass("toggle");
//
// 			$(".less").removeClass("toggle");
//
//
// 		} else {
//
// 			document.querySelector(".project-" + i).style.display = "none";
// //			document.querySelector(".project-2").style.marginRight = "90px";
//
//
// 			$(".more").removeClass("toggle");
// 			$(".less").addClass("toggle");
//
//
// 		}
//
// }
// 	});
//
// 	} else {
//
// 		$(".show-link").click(function() {
//
//
// 	for(var i = 3; i < 7; i++) {
//
// 		if(document.querySelector(".project-" + i).style.display === "none") {
//
// 			document.querySelector(".project-" + i).style.display = "block";
//
// 			document.querySelector(".project-2").style.marginLeft = "0px";
//
// 			$(".more").addClass("toggle");
//
// 			$(".less").removeClass("toggle");
//
//
// 		} else {
//
// 			document.querySelector(".project-" + i).style.display = "none";
//
// 						document.querySelector(".project-2").style.marginLeft = "60px";
//
// 			$(".more").removeClass("toggle");
// 			$(".less").addClass("toggle");
//
// 		}
//
//
//
//
// 	}
// });
//
// }
//
// // add function to mobile nav icons
//
// document.querySelector('.nav-icon').addEventListener('click', function()  {
//
// 	document.querySelector('.menu').classList.add('opened');
// 	document.querySelector('.menu').classList.remove('closed');
//
// 	document.querySelector('.close').style.display = 'block';
//
// });
//
// document.querySelector('.close').addEventListener('click', function() {
//
// 	document.querySelector('.menu').classList.remove('opened');
// 	document.querySelector('.menu').classList.add('closed');
//
// 	document.querySelector('.close').style.display = 'none';
//
//
// });
