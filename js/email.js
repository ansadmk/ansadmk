

function send() {
    var params={
        name: document.getElementById('nameinput1').value,
        email: document.getElementById('nameinput2').value,
        message: document.getElementById('nameinput3').value
    }
    if (params.name=="" || params.email==""||params.message=="" ) {
        alert('The fields are empty ')
    } else {
        
    
    emailjs.send('service_l7m3jnr', 'template_gdujmck', params,'wgAUpL0wFErpW2mqR')
    .then(function(response) {
        document.getElementById('nameinput1').value=""
        document.getElementById('nameinput2').value=""
        document.getElementById('nameinput3').value=""
        alert('Sent successfully')
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
}



