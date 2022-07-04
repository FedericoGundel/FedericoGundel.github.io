// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".navbar").toggleClass("bg-red");
    });
    /*
    changeColorNavbar();
*/
    $("#open").click(function() {
        $(".menu-open").css("left", "0");
    });
    $("#close").click(function() {
        $(".menu-open").css("left", "-100%");
    });
    $(".btn-user").click(
        function() {
            if ($("#popup-logi").css('display') == 'none') {
            $("#popup-logi").fadeIn(300);
        }else {
            $("#popup-logi").fadeOut(300);
        } 
        }
      
    );
    $("#popup-logi").hover(
        function() {},
        function() {
            setTimeout(() => {
                if ($(".btn-user:hover").length > 0) {
                    console.log("Estoy en boton");
                } else {
                    $("#popup-logi").fadeOut(300);
                }
            }, 100);
        }
    );

});

$(window).scroll(function() {
    changeColorNavbar();
});
$(window).resize(function() {
    changeColorNavbar();
});

function changeColorNavbar() {
    if ($(window).scrollTop() > 80) {
       
        $(".navbar-mobil").css("background", "linear-gradient(90deg, rgba(0,104,179,1) 0%, rgba(47,182,225,1) 100%)");
    } else {
        
        $(".navbar-mobil").css("background", "transparent");
    }
}


// ------------------------------------------------------------
// AUTOMATIC DROPDOWN
// ------------------------------------------------------------
$(".dropdown").hover(function() {
    if ($(window).width() > 1200) {
        $("a", this).addClass("show");
        $("a", this).attr("aria-expanded", "true");
        $(".dropdown-menu", this).addClass("show");
        $(".dropdown-menu", this).attr("data-bs-popper", "none");
    }
}, function() {
    if ($(window).width() > 1200) {
        $("a", this).removeClass("show");
        $("a", this).attr("aria-expanded", "false");
        $(".dropdown-menu", this).removeClass("show");
        $(".dropdown-menu", this).removeAttr("data-bs-popper");
    }
});

// ------------------------------------------------------------
// NEWSLETTER
// ------------------------------------------------------------
$('#btn-newsletter').click(function() {
    $('.placaNewsletter').css('display', 'flex')
    $('.placaNewsletter').html(`
    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_m00cedtl.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"    autoplay></lottie-player>
  <p>Enviado Correctamente</p>
  `)
})