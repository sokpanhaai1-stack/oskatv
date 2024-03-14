function updateDateTime() {
  var now = new Date();
  var localOffset = now.getTimezoneOffset() * 60000; // Convert local timezone offset to milliseconds
  var gmt7Offset = 7 * 60 * 60000; // GMT+7 offset in milliseconds
  var gmt7Time = new Date(now.getTime() + localOffset + gmt7Offset);

  var hours = gmt7Time.getHours();
  var minutes = gmt7Time.getMinutes();
  var day = gmt7Time.getDate();
  var month = gmt7Time.getMonth() + 1; // JavaScript months are 0-11
  var year = gmt7Time.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  var formattedTime =
    hours +
    ":" +
    minutes +
    " | " +
    day +
    "/" +
    month +
    "/" +
    year +
    " | (Phnom Penh Time)";
  document.getElementById("datetime").innerHTML = formattedTime;
}

setInterval(updateDateTime, 1000);
