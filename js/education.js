$(document).ready(function () {
  let animated = ['primary','success','info','warning','danger','secondary']
  let deducation = ""
  $.getJSON('/js/json/education.json', function (data) {
    $.each(data, function (key, val) {
      deducation += '<div class="row mb-5"><div class="col-md-12"><span class="text-muted">'+val['graduated']+'</span></div><div class="col-md-12"><h5 class=" text-'+animated[Math.floor(Math.random()*animated.length)]+'">'+val['title']+'</h5><p>'+val['majors']+'</p></div></div>'
    })
    $('#my_education').html(deducation)
  })
})
