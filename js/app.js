App = Ember.Application.create({});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
  this.resource('home');
  this.resource('work');
  this.resource('contact');

});




App.YourView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	// perform your jQuery logic here
      $(".rslides").responsiveSlides();

    });
  }
});

//
// App.ApplicationView = Ember.View.extend({
//     didInsertElement : function(){
//         var that = this;
//         Ember.run.next(function(){
//           $(".rslides").responsiveSlides();
//         });
//     }
// });

//
// $(function() {
// });



// App.SlickSlideshowComponent = Ember.Component.extend({
//   setup: function() {
//     $(".rslides").responsiveSlides(); }
// });

//
// App.SlickSlideshowComponent = Ember.Component.extend({
//   setup: function() {
//     this.$().slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     });
//   }.on('didInsertElement')
// });


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
