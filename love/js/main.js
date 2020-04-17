function CountUp(initDate, id, msg) {
    this.beginDate = new Date(initDate);
    this.msg = msg;
    this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
    this.hours = 0, this.minutes = 0, this.seconds = 0;
    this.updateNumOfDays();
    this.calculate(id);
}

CountUp.prototype.updateNumOfDays = function() {
    var dateNow = new Date();
    var currYear = dateNow.getFullYear();
    if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
        this.numOfDays[1] = 29;
    }
    var self = this;
    setTimeout( function() {self.updateNumOfDays(); }, (new Date((currYear + 1), 1, 1) - dateNow));
}

CountUp.prototype.datePartDiff = function(then, now, MAX){
    var diff = now - then - this.borrowed;
    this.borrowed = 0;
    if ( diff > -1 ) return diff;
    this.borrowed = 1;
    return (MAX + diff);
}

CountUp.prototype.countDay = function(then, now){
    var diff = now - then - this.borrowed;
    // this.borrowed = 0;
    // if ( diff > -1 ) return diff;
    // this.borrowed = 1;
    return (diff);
}

CountUp.prototype.formatTime = function() {
    this.seconds = this.addLeadingZero(this.seconds);
    this.minutes = this.addLeadingZero(this.minutes);
    this.hours = this.addLeadingZero(this.hours);
}

CountUp.prototype.addLeadingZero = function(value) {
    return value < 10 ? ("0" + value) : value;
}
  
CountUp.prototype.calculate = function (id) {
    var currDate = new Date();
    var prevDate = this.beginDate;
    var oneDay = 86400000;

    var diffDays = Math.round(Math.abs((currDate.getTime() - prevDate.getTime())/(oneDay)));

    this.seconds = this.datePartDiff(prevDate.getSeconds(), currDate.getSeconds(), 60);
    this.minutes = this.datePartDiff(prevDate.getMinutes(), currDate.getMinutes(), 60);
    this.hours = this.datePartDiff(prevDate.getHours(), currDate.getHours(), 24);
    // this.days = this.countDay(prevDate.getDate(), currDate.getDate());
    // this.months = this.datePartDiff(prevDate.getMonth(), currDate.getMonth(), 12);
    // this.years = this.datePartDiff(prevDate.getFullYear(), currDate.getFullYear(), 0);
    this.formatTime();
    var countainer = document.getElementById(id);
    countainer.innerHTML = 
    // " <strong>" + this.months + "</strong> <small>tháng</small>" +
    // " <strong>" + this.days + "</strong> <small>ngày</small>" +
    " <strong>" + this.hours + "</strong> <small>giờ</small>" +
    " <strong>" + this.minutes + "</strong> <small>phút</small>" +
    " <strong>" + this.seconds + "</strong> <small>giây</small>" +
    " <strong> " + this.msg + " </strong>";
    var self = this;
    var countDays = document.getElementById("count-days");
    countDays.innerHTML = " <strong>" + diffDays + "</strong> <small>days</small>"
    setTimeout(function () { self.calculate(id); }, 1000);
}

new CountUp('11 03 2019 00:00:00', 'counter', "");

showDiff();

function showDiff(){
    var date1 = new Date("2019/11/3 00:00:00");   
    var date2 = new Date();
    //Customise date2 for your required future time
    
    var diff = (date2 - date1)/1000;
    var diff = Math.abs(Math.floor(diff));
    
    var years = Math.floor(diff/(365*24*60*60));
    var leftSec = diff - years * 365*24*60*60;
  
    var month = Math.floor(leftSec/((365/12)*24*60*60));
    var leftSec = leftSec - month * (365/12)*24*60*60;    
    
    var days = Math.floor(leftSec/(24*60*60));
    var leftSec = leftSec - days * 24*60*60;

    document.getElementById("time-diff").innerHTML = 
    (years ? (years + " năm ") : ' ')
    + (month ? (month + " tháng ") : ' ')
    + (days ? (days + " ngày") : ' ');
}
