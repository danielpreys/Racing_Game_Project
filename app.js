// OOP Racing Game example boilerplate code


$(document).ready(function() {
  $(document).on('keydown', function(e) {
  
    var endText = $('.endText').position();
 //Assign A and B keycodes   
   var carArray = [65, 66];
    
    $.each(carArray, function( index, value ) {
    
      if (e.keyCode === value && endText.left > $('.player'+ index).position().left){ 
          $('.player'+ index).css('left', '+=50px');
      }
      
    });
  
  });
  
  $(document).on('keyup', function(e) {
    //console.log(e);
    
    var endText = $('.endText').position();
    
   var carArray = [65, 66];
    
    $.each(carArray, function( index, value ) {

      if (endText.left <= $('.player'+ index).position().left){
        alert('Car '+ (index + 1) +' wins!');
      }
    });
  });
  
 //Reset players 
  $('.reset').on('click', function(e){
    var carArray = [65, 66];
    
    
    $.each(carArray, function( index, value ) {
      $('.player'+ index).css('left', '50px');
    });
   });
  
  
  
});