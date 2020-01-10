$(".accmenu").hide();
$('#account_name').text('Xuân Tùng');
$('#account_mail').text('tungcan2000@gmail.com');

function showmenu() {
  $(".accmenu").toggle();
}

function hidemenu() {
  $(".accmenu").hide();
}
var countDownDate = new Date("Jan 25, 2020 0:0:0").getTime();
// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("ngay").innerHTML = days;
  document.getElementById("gio").innerHTML = hours;
  document.getElementById("phut").innerHTML = minutes;
  document.getElementById("giay").innerHTML = seconds;
  var date = new Date();
  var data = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  document.getElementById("date").innerHTML = data;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
