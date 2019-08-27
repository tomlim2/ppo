$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  function randomNum(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};

  $(window).scroll(function(){
    var num = $(window).scrollTop();
    $(".hero-img").css({
      "transform": "translateY(" + Math.max(- num/40, -200) + "px)",
      });
  });

// start nav
  var scrlls1img= 0;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>scrlls1img){
        $(".headerNav").addClass("fixed");
      }else{
        $(".headerNav").removeClass("fixed");
      }
  });
  var home1 = "WORKS"
  $( ".home" ).append(home1);
  var menuAbout = "ABOUT"
  $( "#menu-about" ).append(menuAbout);
  var intro = "<p>Hi, I am Tom, a visual designer living in San Francisco, and have focused on experimenting mixture of graphic, animation, and programming, so my majority of graphic design work is screen-based media. I make 2D/3D motion, and branding.<br/><br/>-</p>";
  var contact = "<p><a href=\"https://linkedin.com/in/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>LinkedIn</a> | <a href=\"https://www.instagram.com/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>Instagram</a><br/><a href=\"https://drive.google.com/open?id=1XDcTl86O49hO0jwnfDbGLP6JKT7-Tmmi\" download>Resume</a> | <a href=\"https://mail.google.com/mail/?view=cm&fs=1&to=tomandlim@gmail.com\" target=\"_blank\" >E-mail</a><br/><br/>-</p>";
  var info1 = "<p><span class=\"empha\">Training</span><br/> BFA Graphic Design with high distinction - California College of the Arts, Spring 2019</p>";
  var info2 = "<p><span class=\"empha\">Awards</span><br/> Student To Watch - Graphic Design USA, Spring 2019</p>";

  $( "#menu-about" ).click(function() {
    $('.about-section').toggleClass('about-open');
    $( "#menu-about" ).toggleClass("selected");
  });
  $( ".contact" ).append(intro,contact,info1,info2);
});
