// JQUERY FOR SLIDING NAVIGATION

$(document).ready(function () {
    $('a[href*=#]').each(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash),
                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;

                <!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE DIV--->   
                $(this).click(function () {
                    $(".topnav a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, 1000);
                    return false;
                });
            }
        }
    });

});


// Function for responsive menu 

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";

    } else {
        x.className = "topnav";

    }
}


// Functions for work gallery
// Credit for tutorial I used to help me out here: 
// https://www.w3schools.com/howto/howto_js_lightbox.asp

var workIndex = 1;

function openGallery() {
    document.getElementById('galleryDisplay').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    document.getElementById('galleryDisplay').style.display = "none";
    document.body.style.overflow = "auto";
}

function currentWork(n) {
    buildWorkDisplay(workIndex = n);
}

//function navWork() {
    // Not sure I want to make this slides just yet.
//}

function buildWorkDisplay(n) {
    var i;
    var content = document.getElementsByClassName("galleryItem");
    
    if(n > content.length) {
        workIndex = 1;
    }
    
    if ( n < 1 ) {
        workIndex = content.length;
    }
    
    for ( i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    
    content[workIndex-1].style.display = "block";
    
}











