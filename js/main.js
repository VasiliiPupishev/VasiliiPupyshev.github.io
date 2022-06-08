window.onload = function() {
	"use strict";
    
    document.querySelector('.preloader').classList.add('hide-preloader');

    setTimeout(function(){
        document.querySelectorAll("#intro .animation-container").forEach(function(e) {
            setTimeout(function(){
                e.classList.add('run-animation');
            }, e.dataset.animationDelay);
        });

    }, 700 );
    
    var subline = document.getElementsByClassName('subline')[0];
    var age = calculateAge(1998, 6, 22);
    var age = `🐗 ${age} ${plural(age)}`
    subline.insertAdjacentHTML('afterbegin', age);
};

$('#div').css({ transform: 'scale(.5)' });
document.addEventListener('DOMContentLoaded', function(){
	"use strict";
    
    document.querySelector('a.smooth-scroll').addEventListener('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

    });
    
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", { 
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
	
	sr.reveal(".scroll-animated-from-left", { 
        duration: 600,
        delay: 0,
        origin: "left",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
	
	sr.reveal(".scroll-animation-fade-up", { 
        duration: 600,
        delay: 0,
        origin: "top",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
});

function calculateAge(year, month, day) {
    var birthday = new Date(year, month, day);
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function plural(number) {  
    cases = [2, 0, 1, 1, 1, 2];  
    titles = ['год', 'года', 'лет'];
    return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5] ];  
}

function example_item_pressed(number) {
	var elem = document.getElementById('example_' + number);
	var elem_cont = document.getElementById('info_' + number);
	var elem_bg = document.getElementById('bg_' + number);
	if(elem.style.display == 'none'){
		elem.style.display = 'block';
		elem_cont.style.display = 'none';
		elem_bg.style.display = 'none';
	}else{
		elem.style.display = 'none';
		elem_cont.style.display = 'block';
		elem_bg.style.display = 'block';
	}
}

function init(){
	for (let i = 1; i <= 6; i++){
		var elem = document.getElementById('example_' + i.toString());
		var elem_cont = document.getElementById('info_' + i.toString());
		var elem_bg = document.getElementById('bg_' + i.toString());
		elem.style.display = 'none';
		elem_cont.style.display = 'block';
		elem_bg.style.display = 'block';
	}
}

init();
item_1.addEventListener("click", function(){example_item_pressed('1')});
item_2.addEventListener("click", function(){example_item_pressed('2')});
item_3.addEventListener("click", function(){example_item_pressed('3')});
item_4.addEventListener("click", function(){example_item_pressed('4')});
item_5.addEventListener("click", function(){example_item_pressed('5')});
item_6.addEventListener("click", function(){example_item_pressed('6')});
var elem_cont1 = document.getElementById('info_7');
var elem_bg1 = document.getElementById('bg_7');
elem_cont1.style.display = 'block';
elem_bg1.style.display = 'block';
//item_7.addEventListener("click", function(){window.open('https://github.com/VasiliiPupishev/FinalDance', '_blank').focus(););
/*item_8.addEventListener("click", function(){example_item_pressed('8')}); */