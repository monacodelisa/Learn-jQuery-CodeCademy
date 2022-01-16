$(document).ready(() => {
  $('.menu').on('mouseover', () => {
    $('.nav-menu').show();
  }).on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  $('.btn').on('mouseover', (e) => {
    $(e.currentTarget).addClass('btn-hover');
  }).on('mouseleave', (e) => {
    $(e.currentTarget).removeClass('btn-hover');
  })

$('.postText').on('keyup', (event) => {
  const post = $(event.currentTarget).val();
  const remaining = 140 - post.length
    if (remaining <=0) {
      $('.wordcount').addClass('red');
    } 
    else {
      $('.wordcount').removeClass('red');
    }
  $('.characters').html(remaining);
});

$('.postText').focus();

}); 
