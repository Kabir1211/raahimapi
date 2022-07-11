$(document).ready(()=>{
    const sendRequest = (code) => {
        const url = `https://api.zippopotam.us/pk/${code}`
        $.get(url, function(response) {
            $("#State").text("City:  " + response.places['0']['state'])
            $("#Place").text("Area:  " + response.places['0']['place name'])
            $("#Longitude").text("Longitude:  " + response.places['0']['longitude'] + "°")
            $("#Latitude").text("Latitude:  " + response.places['0']['latitude'] + "°")

        })

    }

    $("#form1").submit(function(e) {
        e.preventDefault();
        const code = $("#postal").val();
        console.log(code)
        sendRequest(code);
    })
})