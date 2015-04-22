App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
  this.resource('home');
  this.resource('work');
  this.resource('contact');

});


// App.SlickSlideshowComponent = Ember.Component.extend({
//   setup: function() {
//     $(".rslides").responsiveSlides(); }
// });


App.SlickSlideshowComponent = Ember.Component.extend({
  setup: function() {
    this.$().slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }.on('didInsertElement')
});


//
//   function() {
//     this.$().slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     });
//   }.on('didInsertElement')
// });
