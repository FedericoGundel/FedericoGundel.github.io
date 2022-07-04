// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".navbar").toggleClass("bg-red");
    });
    changeColorNavbar();

    $("#open").click(function() {
        $(".menu-open").css("left", "0");
    });
    $("#close").click(function() {
        $(".menu-open").css("left", "-100%");
    });
    $(".btn-user").hover(
        function() {
            $(".popup-login").fadeIn(300);
        },
        function() {
            setTimeout(() => {
                if ($(".popup-login").is(":hover")) {
                    console.log("Estoy en popup");
                } else {
                    $(".popup-login").fadeOut(300);
                }
            }, 100);
        }
    );
    $(".popup-login").hover(
        function() {},
        function() {
            setTimeout(() => {
                if ($(".btn-user").is(":hover")) {
                    console.log("Estoy en boton");
                } else {
                    $(".popup-login").fadeOut(300);
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
        $(".navbar").css("background", "#022f96");
        $(".navbar-mobil").css("background", "#022f96");
    } else {
        $(".navbar").css("background", "transparent");
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
function loadHead(id) {
    const head1 = document
      .getElementById(id)
    const head = document
      .getElementById(id)
      .shadowRoot.getElementById('animation')
      .getElementsByTagName('svg')[0].children[1].children[0].children[0].children[0];
      const head3 = document
      .getElementById(id)
      .shadowRoot.getElementById('animation')
      .getElementsByTagName('svg')[0].children[1].children[1].children[0].children[0];
      const head2 = document
      .getElementById(id)
      .shadowRoot.getElementById('animation')
      .getElementsByTagName('svg')[0].children[1].children[2].children[0].children[0];
    const head4 = document
        .getElementById(id)
        .shadowRoot.getElementById('animation')
        .getElementsByTagName('svg')[0].children[1].children[1].children[0]
        console.log(head4);
    head.setAttribute("fill","rgb(255,255,255,0)")
    head2.setAttribute("fill","#13cbe7")
    head3.setAttribute("fill","#13cbe7")
    head4.setAttribute("fill","#13cbe7e3")
    head1.style.opacity="1"
  }
$('#btn-newsletter').click(function() {
    $('.placaNewsletter').css('display', 'block')
    $('.placaNewsletter').html(`
  <lottie-player style="opacity:0;" id="loti" src="assets/images/97401-check-tick.json" background="rgb(255,255,255,0)" speed="1" autoplay></lottie-player>
  <p class="mb-0">Enviado Correctamente</p>
  `)
  $('.section-newsletter').addClass("sended")
  setTimeout(function(){loadHead("loti")},200)
})
function openCity(evt, cardMenus) {
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cardMenus).style.display = "block";
    evt.currentTarget.className += " active";
}
/*MENU DESPLEGABLE*/
window.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.getElementsByClassName("toggle-cart");
    var sidebar = document.getElementById("sidebar-cart")
    for (let button of buttons) {
        button.addEventListener('click', function() {
            sidebar.classList.toggle("opened")
        })
    }
})
document.addEventListener("DOMContentLoaded",function(){
 
    $(".modal-check").on('shown.bs.modal', function(){
        $('.guardado').html('<lottie-player style="opacity:0;" id="loti2" src="assets/images/97401-check-tick.json" background="rgb(255,255,255,0)" speed="1" autoplay></lottie-player><p>Enviado Correctamente</p>')
setTimeout(function(){loadHead("loti2")},200)
$('.borrar-loti').html('<lottie-player style="opacity:0;" id="loti3" src="https://assets3.lottiefiles.com/packages/lf20_vvrfedzr.json" background="rgb(255,255,255,0)" speed="0.5" autoplay></lottie-player><p>Eliminado Correctamente</p>')
setTimeout(function(){loadHead("loti3")},200)

});
    
})