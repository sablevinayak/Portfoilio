/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
  });
  var prac = document.getElementById('particles');
  prac.style.zIndex = "-100";
  prac.style.elevation="below";
  var intro = document.getElementById('intro-par');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
    toggleClass(this, 'on');
    return false;
}

//nav bar

window.onscroll = function() {myFunctionBtn(),myFunction()};

function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementsByClassName("nav")[0].className = "shrink";
    } else {
        document.getElementsByClassName("shrink")[0].className = "nav";
    }
}

//end nav bar

var downBtn = document.getElementsByClassName("circle")[0];
var introPar =  document.getElementById("intro-par");
function myFunctionBtn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        introPar.style.zIndex = "-1";
        downBtn.style.zIndex = "-1";
    } else {
        introPar.style.zIndex = "10";
        downBtn.style.zIndex = "10";
    }
}

//down button
document.getElementsByClassName('circle')[0]
    .addEventListener('click', function () {
        console.log("Clicked circle");
        downBtn.style.zIndex = "-1";
        introPar.style.zIndex = "-1";
        document.getElementsByClassName("nav")[0].className = "shrink";
        $('html, body').animate({scrollTop: $(".content").offset().top}, 1000);
    });
//end down button


document.getElementsByClassName('logo')[0].addEventListener('click',function () {
    console.log("Logo clicked");
    window.location.href = "#home"
});

