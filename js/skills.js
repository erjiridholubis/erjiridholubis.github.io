$(document).ready(function () {
  let animated = ['primary','success','info','warning','danger','secondary']
  let dskills = ""
  $.getJSON('/js/json/skills.json', function (data) {
    // console.log(data)
    $.each(data, function (key, val) {
      dskills += '<button type="button" class="btn btn-outline-'+val['color']+' disabled m-2"><i class="'+val['icon']+'"></i> '+val['title']+'</button>'
      // dskills += '<div class="row justify-content-center mb-4 text-'+val['color']+'"><div class="col-md-5"><h5 class="text-uppercase"><i class="'+val['icon']+'" aria-hidden></i> '+val['title']+' </h5></div><div class="col-md-6"><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-'+val['color']+'" role="progressbar" aria-valuenow="'+val['rate']+'" aria-valuemin="0" aria-valuemax="100" style="width: '+val['rate']+'%">'+val['rate']+'%</div></div></div></div>'
    })
    $('#my_skills').html(dskills)
  })
})
