
//import $ from 'jquery';
//import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
//
//
//class RevealOnScroll {
//   constructor(){
//       
//      this.itemsToReveal = $(".feature-item");
//      this.itemsToReveal.ready(function(){
//          $(window).scroll(function(){
//              if (this.scrollTop() > 100) {
//                this.itemsToReveal.addClass("feature-item--is-visible");
//              }else{
//                  this.itemsToReveal.removeClass("feature-item--is-visible");
//              }
//          });
//      }); 
//
//       this.itemsToReveal.addEventListener("scroll", revealItem());
//       
//       function revealItem(){
//           this.itemsToReveal.addClass("feature-item--is-visible");
//       }
//       var currentItem = this;
//       this.hideInitially();
//       this.createWaypoints();
//   }
    
//   hideInitially(){
//       this.itemsToReveal.addClass("reveal-item");
//   }
//    
//   createWaypoints() {
//       this.itemsToReveal.each(function(){
//           var currentItem = this;
//           new waypoint({
//               element: currentItem,
//               handler: function() {
//                  currentItem.addClass("reveal-item--is-visible");
//               },
//               offset: 85%
//          });
//       });
//   }
  
//}

//export default RevealOnScroll;