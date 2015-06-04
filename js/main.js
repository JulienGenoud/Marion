var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'about.html',
      controller  : 'aboutController'
    })


    .when('/work', {
      templateUrl : 'work.html',
      controller  : 'workController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
  // $(".rslides").responsiveSlides();
  $("#home").addClass('active');
  $("#work").removeClass('active');
  $("#about").removeClass('active');
  $("#contact").removeClass('active');

  $(document).ready(function(){
       $('.your-class').slick({
          arrows: true,
         //
        // dots: true,
           infinite: true,
           speed: 500,
           cssEase: 'linear',
           slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          });
     });
});

scotchApp.controller('aboutController', function($scope) {

  $("#home").removeClass('active');
  $("#work").removeClass('active');
  $("#about").addClass('active');
  $("#contact").removeClass('active');

});

scotchApp.controller('contactController', function($scope) {
  $("#home").removeClass('active');
  $("#work").removeClass('active');
  $("#about").removeClass('active');
  $("#contact").addClass('active');
  });

scotchApp.controller('workController', function($scope) {
  $("#home").removeClass('active');
  $("#work").addClass('active');
  $("#about").removeClass('active');
  $("#contact").removeClass('active');



  // function newwindow() {
  //                 var showme = document.getElementById("port");
  //                 showme.style.visibility = "visible";
  //             }
  //

              // $('.gallery ul li a').click(function() {
              //      return false;
              //  });
              //

  $('.gallery ul li a').click(function() {
       var itemID = $(this).attr('href');
      //  $(".port").show();
       $('.gallery ul').addClass('item_open');
       $(itemID).addClass('item_open');
       $(itemID).show();
       return false;
   });
   $('.close').click(function() {

     var itemID = $(this).attr('href');
     $(itemID).hide();

      // var itemID = $(this).attr('href');
      //  $(itemID).show();
      //  $('.port, .gallery ul').hide();
      //  $('.port, .gallery ul').removeClass('item_open');
       return false;
   });

   $(".gallery ul li a").click(function() {
       $('html, body').animate({
           scrollTop: parseInt($("#top").offset().top)
       }, 400);
   });



  });
