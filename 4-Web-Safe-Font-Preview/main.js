$(document).ready(() => {
  $("#text").on('keyup', (event)=> {
    $('.preview').html($(event.currentTarget).val());
    $("#font").change((event)=>{
      $('.preview').css("font-family",$(event.currentTarget).val())
    }); 
    $("#weight").change((event)=>{
      $('.preview').css("font-weight",$(event.currentTarget).val())   
    });
  });
  $("#size").on('keyup', (event)=> {
    let fontSize = $(event.currentTarget).val() +'px'
    $('.preview').css("font-size", fontSize)   
  });
});

