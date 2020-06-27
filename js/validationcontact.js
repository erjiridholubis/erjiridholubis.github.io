function FormValidateWhatsapp() {
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let whatsapp = document.getElementById("whatsapp").value
  let message = document.getElementById("message").value
  let br = "%0A"

  if (name=="" || email=="" || whatsapp=="" || message=="") {
    alert("Form harus diisi dengan lengkap !")
  } else {
    messagevalid = message.replace(/\r?\n/g, br)
    let data = "Nama : "+name+br+"Email : "+email+br+"Whatsapp : "+whatsapp+br+"Pesan : "+br+messagevalid
    let phone = "6282280847476"
    window.location = "https://api.whatsapp.com/send?phone="+phone+"&text="+data
  }
}
function FormValidateEmail() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let whatsapp = document.getElementById("whatsapp").value
    let message = document.getElementById("message").value
    let br = "%0A"

    if (name=="" || email=="" || whatsapp=="" || message=="") {
      alert("Form harus diisi dengan lengkap !")
    } else {
      messagevalid = message.replace(/\r?\n/g, br)
      let data = "Nama : "+name+br+"Email : "+email+br+"Whatsapp : "+whatsapp+br+"Pesan : "+br+messagevalid
      let mailto = "erjiridholubis@gmail.com"
      let subject = "Newsletter from "+ name
      window.open('mailto:'+mailto+'?subject='+subject+'&body='+data)
    }
}
