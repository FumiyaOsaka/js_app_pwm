/************************************/
/**********now_datetime_area*********/
/************************************/

document.addEventListener('DOMContentLoaded',
  function(){
    let now_ = document.getElementById("now_datetime");
    window.setInterval(setNowDate(now_), 5000);
  }
);

function formatdate(date, format) {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  format = format.replace(/hh/, date.getHours());
  format = format.replace(/mm/, date.getMinutes());
  return format;
}

function setNowDate(now_datetime){
  now_datetime.innerHTML = formatdate(new Date(), 'YYYY/MM/DD  hh:mm');
}

