$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$("#weatherSearch").submit(function(event){
    event.preventDefault();
    console.log("hello")
    console.log(document.getElementById("wSearch").value)
    searchWeather(document.getElementById("wSearch").value)
})

function searchWeather(city) {
    // var endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`;
    var endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.apiKey}&units=imperial`;
    fetch(endpoint)
    .then((res) => res.json())
    .then((data) => { 
        console.log(data)
        // grab first five days' info and append them to the page
        console.log(data.list)
        for (let i = 0; i < 5; i++) {
            console.log(data.list[i])
            $("#rightContent").append(`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Day ${i+1}</h5>
                <p class="card-text">Temperature right now: ${data.list[i].main.temp}</p>
                <p class="card-text">Today's high: ${data.list[i].main.temp_max}</p>
                <p class="card-text">Today's Low: ${data.list[i].main.temp_min}</p>
                
                </div>
            </div>`)
        }
    })
}
