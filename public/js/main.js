$(document).ready(function(){

  $('#menu > .btn').on('click', function(event){
    $('#menu > .btn').removeClass('selected');
    $(event.target).addClass('selected');
  });
})
