$(document).ready(function () {
  let dexperience = ""
  let djob = ""
  let jobs = []
  $.getJSON('/js/json/experience.json', function (data) {
    $.each(data, function (key, val) {
      let rjob = val['job'].length
      // $.each(val['job'], function (key2, val2) {
      //   jobs += '<li>'+ val2 +'</li>'
      // })
    // jobs += '<li>'+ val['job'][key] +'</li>'
      dexperience += '<div class="col-md-6 mb-4"><div class="card"><div class="card-body"><h4 class="card-title">'+val['title']+'</h4><p class="card-text"><p>'+val['description']+'</p><small class="text-muted">Tugas dan Pekerjaan : </small><ul type="circle" id="job">'+val['job']+'</ul></p></div></div></div>'
    })
    $('#my_experience').html(dexperience)
  })
})
