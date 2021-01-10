$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');

	    // $('.top').classList.remove("open");
			console.log("clicked");

	});
$('.prev-slide').click(function(){
	var message = document.getElementsByClassName("message");
	var top = document.getElementsByClassName("top");
	for (i = 0; i < top.length; i++) {
					 top[i].classList.remove('open');
			 }
	for (i = 0; i < message.length; i++) {
		 			message[i].classList.remove('pull');
		 	}
});

$('.btn1').click(function(){
	var container = document.getElementById("cont");
	var cv = document.getElementById("CV");
	if (container.style.display == 'none') {
		container.style.display = 'flex';
		document.getElementById("btn1").innerHTML = "Show CV...";
	}
	else {
		container.style.display = 'none';
		cv.style.marginTop = '-90px';
		document.getElementById("btn1").innerHTML = "Show Overview...";
	}
	if ($(cv).is(":hidden")) {
		cv.removeAttribute("hidden");
	}
	else {
		cv.setAttribute("hidden", "true");
	}
});

$('.card-1').click(function(){
	let modal = document.getElementById('mpomodel');
	modal.style.display = 'none';
	// setAttribute("hidden", "true");
})
$('.btn').click(function(){
	let modal1 = document.getElementById('mpomodel');
	modal1.style.display = 'block';
})


let card__content = document.getElementsByClassName('card__content');
for (var i = 0; i < card__content.length; i++) {
  var element = card__content[i];
  var heading = element.getElementsByClassName('card__heading');
  var detail = element.getElementsByClassName('btn1-2');
  for (var j = 0; j < heading.length; j++) {
    if (heading[j].innerHTML != "Status: Completed " && heading[j].innerHTML !="Status: Coming Soon ") {
      var id = document.getElementById(detail[j].id).id;
      var el = document.getElementById(id);
      el.style.display = 'none';
    }
  }
}

// Project background
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


})
