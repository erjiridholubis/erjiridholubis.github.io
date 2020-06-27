$(document).ready(function() {
  $.getJSON('/js/json/about.json', function (data) {
    let year = (new Date).getFullYear()
    let lead = data.lead
    let dlead = ""
    let sosmed = data.sosmed
    let dsosmed = ""
    let about = data.about
    let dabout = ""

    $.each(lead, function(key, val) {
      dlead += " | "+val+" | "
    })
    $.each(sosmed, function(key,val) {
      dsosmed += '<a class="fa-2x text-secondary p-2 btn" href="'+val+'" class="'+key+'" title="'+key+'"><i class="fab fa-'+key+'"></i></a>'
    })
    $.each(about, function(key, val) {
      dabout += "<p>"+val+"</p>"
    })

    $('#sosmed').html(dsosmed)
    $('.lead').html(dlead)
    $('#about_me').html(dabout)

    $('#address').html(data.address)
    $('#myemail').html(data.email)
    $('#phone').html(data.phone)

    $('#nav-title').append(data.title)
    $('.title').html(data.title)
    $('.logo').attr("src",data.logo)
    $('#footer').html("&copy Copyright "+year+" <a class='text-secondary btn btn-link' style='text-decoration:none' href='https://erjiridholubis.github.io'>"+data.title+"</a>")

    $('#meta_title').attr('content','Portfolio '+data.title)
    $('#meta_description').attr('content',data.description)
    $('#meta_author').attr('content',data.title)
    $('#meta_subject').attr('content','tutorial')
    $('#meta_og_title').attr('content',data.title)
    $('#meta_og_url').attr('content','https://erjiridholubis.github.io')
    $('#meta_og_image').attr('content','/img/logo.png')
    $('#meta_og_description').attr('content',data.description)
    $('#meta_og_sitename').attr('content','Portfolio '+data.title)
    $('#meta_og_selection').attr('content','portfolio')
    $('#meta_og_tag').attr('content','erji ridho lubis, portfolio, programmer, blogger, youtuber')
    $('#meta_og_publisher').attr('content',data.title)

  })

})
