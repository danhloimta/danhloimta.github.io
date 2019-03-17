// show timer

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
    startTime()
    }, 500);
}

startTime();

$(function() {
    $('.d-tab li.nav-item a').click(function() {
        $('.d-tab li.nav-item a').removeClass('active');
        $(this).addClass('active');
    });

    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('.switchToggle label').on('click', function() {
        $(this).parent().parent().parent().parent().toggleClass('active');
    });

    $('.switchToggle.active').each(function() {
        $(this).parent().parent().parent().addClass('active');
    });

    $('.switchToggle input').on('click', function() {
        $(this).attr('checked', !$(this).attr('checked'));
    });

    var clicked = false;
    $('#m-switch').on('click', function() {
        $('.switchToggle input').prop('checked', !clicked);
        clicked = !clicked;
    });
});
