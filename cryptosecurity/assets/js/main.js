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
    $(".btn-user").click(
        function() {
            if ($(".popup-login").css('display') == 'none') {
            $(".popup-login").fadeIn(300);
        }else {
            $(".popup-login").fadeOut(300);
        } 
        }
      
    );
    $(".popup-login").hover(
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
        $("#navbar").css("background", "rgba(6,24,38,1)");
        $(".navbar-mobil").css("background", "rgba(6,24,38,1)");
    } else {
        $("#navbar").css("background", "transparent");
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




const handleMouseEnter = (e) => {
    if (!e.target.dataset.expand) {
      return;
    }
  
    navsVisited += 1;
  
    if (navsVisited === 1) {
      expandMenu.classList.add("new--expand");
      menus.forEach((menu) => menu.classList.add("first"));
      indicator.classList.add("first");
    } else {
      expandMenu.classList.remove("new--expand");
      menus.forEach((menu) => menu.classList.remove("first"));
      indicator.classList.remove("first");
    }
  
    navLinks.forEach((navLink) => {
      if (navLink === e.target) {
        navLink.classList.add("hover");
        currentNav = navLink;
      } else {
        navLink.classList.remove("hover");
      }
    });
  
    const navLinkCenter = Math.floor(
      e.target.offsetLeft + e.target.clientWidth / 2
    );
  
    indicator.style.transform = `translateX(${navLinkCenter}px)`;
    indicator.style.opacity = "1";
  
    const targetMenu = document.querySelector(`#${e.target.dataset.expand}`);
    const targetCoords = targetMenu.getBoundingClientRect();
    const { width: targetWidth, height: targetHeight } = targetCoords;
  
    expandMenu.style.width = targetWidth + "px";
    expandMenu.style.height = targetHeight + "px";
  
    const prevMenu = targetMenu.previousElementSibling;
  
    targetMenu.classList.remove("prev");
  
    if (prevMenu) {
      prevMenu.classList.add("prev");
    }
  
    menus.forEach((menu) => {
      if (menu.id === targetMenu.id) {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
    });
  
    expandMenu.classList.add("expand");
  };
  
  const handleMouseLeave = (e) => {
    if (isMouseOnMenu || e.y > 50) {
      return;
    }
  
    forceInitialState();
  };
  
  const forceInitialState = () => {
    expandMenu.classList.remove("expand", "active");
    currentNav.classList.remove("hover");
    menus.forEach((menu) => menu.removeAttribute("class"));
    indicator.style.opacity = "0";
    currentNav = null;
    navsVisited = 0;
  };
  
  const expandMenu = document.querySelector(".header__expandMenu");
  const menus = expandMenu.querySelectorAll(".menu__container > *");
  const navLinks = document.querySelectorAll(".nav--link");
  const indicator = document.querySelector(".tip");
  let isMouseOnMenu = false;
  let currentNav;
  let navsVisited = 0;
  
  const {
    height: menuHeight,
    width: menuWidth,
  } = expandMenu.getBoundingClientRect();
  
  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseenter", handleMouseEnter);
  });
  
  expandMenu.addEventListener("mouseenter", () => {
    if (expandMenu.style.opacity === "1") {
      isMouseOnMenu = true;
    }
  });
  
  expandMenu.addEventListener("mouseleave", (e) => {
    if (e.y > 70) {
      isMouseOnMenu = false;
      forceInitialState();
    }
  });
  
  document.querySelector(".nav__links").addEventListener("mouseleave", handleMouseLeave);
  

    /*MENU DESPLEGABLE*/
window.addEventListener('DOMContentLoaded', (event) => {
  var button = document.getElementById("carrito");
  var sidebar = document.getElementById("sidebar-cart")

      button.addEventListener('click', function() {
          sidebar.classList.toggle("opened")
      })
      var buttons = document.getElementsByClassName("toggle-cart");
      var sidebar = document.getElementById("sidebar-cart")
      for (let butto of buttons) {
          butto.addEventListener('click', function() {
              sidebar.classList.toggle("opened")
          })
      }
  
})
$(document).ready(function() {
  $('#btn-aplicar-codigo').click(function() {
      $('#codigo-success').fadeIn(300)
  })
  $('#close-alert-codigo').click(function() {
      $('#codigo-success').fadeOut(300)
  })
  $('.mas, .menos').click("on", function(e) {
      e.preventDefault();
      let cantidad = $(this).siblings('.cantidad');
      let min = parseInt(cantidad.attr('min'));
      let max = parseInt(cantidad.attr('max'));
      let current_value = parseInt(cantidad.val());
      let classname = $(this).attr("class");
      if (classname === "menos") {
          if (current_value == min) {
              return;
          } else {
              cantidad.val(current_value - 1);
          }
      } else {
          if (current_value == max) {
              return;
          } else {
              cantidad.val(current_value + 1);
          }
      }
  })
  $('.cantidad').change(function() {
      let min = parseInt($(this).attr('min'));
      let max = parseInt($(this).attr('max'));
      if (parseInt($(this).val()) < min) {
          $(this).val(min)
      } else if (parseInt($(this).val()) > max) {
          $(this).val(max)
      }
  })
})

$('#btn-newsletter').click(function() {
  $('.placaNewsletter').css('display', 'block')
  $('.placaNewsletter').html(`
<lottie-player style="" id="loti" src="https://assets1.lottiefiles.com/packages/lf20_m00cedtl.json" background="rgb(255,255,255,0)" speed="1" autoplay></lottie-player>
<p class="mb-0">Enviado Correctamente</p>
`)
$('.contenedor-der').addClass("sended")
$('.placaNewsletter').fadeIn(200)
})



$( document ).ready(function() {

  $('.selectpicker').selectpicker();
 

})









    