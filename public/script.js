
var fetch = function () {
    var city = $('input').val();
    $.get({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d703871f861842b79c60988ccf3b17ec",
        success: function (data) {
            var d = new Date();
            var date = new Date();
            var elem = {
                city: data.name,
                temp: data.main.temp,
                tempF: (data.main.temp * 9 / 5 + 32),
                time: function DisplayCurrentTime() {
                    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                    time = hours + ":" + minutes + ":" + seconds;
                    return time;
                },
                date: date.getDate() + '/' + (d.getDay() + 1) + '/' + d.getFullYear(),
                // author: data.items[0].volumeInfo.authors[0],
                // img: data.items[0].volumeInfo.imageLinks.thumbnail
            }

            //Send function
            var source = $('#temp-container').html();
            var template = Handlebars.compile(source);
            var newHTML = template(elem);

            // // append our new html to the page

            $('.form-group').append(newHTML);
        },
        error: function (data) {
            console.log('Error: ' + data);
        }
    }
    );
}
$('button').on('click', fetch);
$('body').on('click', '.fa-trash-o', function () {
    // $('#temp-container').remove();
    // $(this).closest ( "div" ).remove( "#temp-container" );
    $(this).remove();
    console.log('sdfsdf');
});


// $.get('/someURL', {
//     success: function(data) {
//       console.log(data);
//     },
//     error: function(data) {
//       console.log('Error: ' + data);
//     }