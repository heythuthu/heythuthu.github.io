// //function fadeImage() {
//   //$('img').fadeToggle();
// //}
//
// //function setup() {
//   //$('#img').hover(fadeImage);
// }
//
// //$(document).ready(setup);
//
//
// //$(".picture").click(function() {
//    //$(this).attr('width', '400');
//     //$(this).attr('height', '300');
// });
//
//
// // $(".picture").on('click', function (".picture")
// //     {
// //         $(this).width(1000);
// //     });
//
//

// $(document).ready(function(){
//   function enlargeImage() {
//     $('.picture').on('click', function()
//       {
//         alert()
//         $(this).width(1000);
//       })
//     }
// })

function fadeImage() {
  $('.picture').fadeTo(300, 1);
}

function setup() {
  $(this).hover(fadeImage)
  }

$(document).ready(setup)

// $(document).ready(function() {
//   $(".picture").click(function() {
//     $(this).width(1040).height(732)
//   })
// })
