var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var mood = document.querySelector('.mood');

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Sidoarjo,id&appid=3d2bf4920f84fd2059751bbe45a62b3a'
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    if (tempValue <= 296) {
      var moodValue = '(>^_^<)';
    } else if (tempValue <= 297) {
      var moodValue = '(^<^)';
    } else if (tempValue <= 299) {
      var moodValue = '(＾▽＾)';
    } else if (tempValue <= 300) {
      var moodValue = '(>^.^<)';
    } else if (tempValue <= 301) {
      var moodValue = '(#^.^#)';
    } else if (tempValue <= 302) {
      var moodValue = '(*^.^*)';
    } else if (tempValue <= 303) {
      var moodValue = '(^.^)';
    } else if (tempValue <= 304) {
      var moodValue = '(^=^)';
    } else if (tempValue <= 305) {
      var moodValue = '(^_^)';
    } else if (tempValue <= 306) {
      var moodValue = '(*^_^*)';
    } else if (tempValue <= 307) {
      var moodValue = '(=_=)';
    } else if (tempValue <= 308) {
      var moodValue = '(°_°)';
    } else if (tempValue <= 309) {
      var moodValue = '(￣m￣)';
    } else if (tempValue <= 310) {
      var moodValue = '(＠_＠)';
    } else {
      var moodValue = '(Ｔ▽Ｔ)';
    }

    desc.innerHTML = descValue;
    temp.innerHTML = Math.trunc(tempValue - 273) + '\u00B0C';
    mood.innerHTML = moodValue;
  });
