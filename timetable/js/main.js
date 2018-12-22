$(function() {
    $('button.add').on('click', function() {
        let lesson = $('#lesson').val();
        let lastLesson = lesson.substr(lesson.length - 1);
        let subject = $('.subject').val();
        let date = $('.date').val();
        let position = $('.position').val();

        let t2 = $('.t2');
        let t3 = $('.t3');
        let t4 = $('.t4');
        let t5 = $('.t5');
        let t6 = $('.t6');

        let openDiv = '<div class="add-subject">';
        let closeDiv = '</div>';
        let openP = '<p>';
        let closeP = '</p>';
        let height = 36;
        let addDate = 't' + date;

        if (lesson != '' && subject != '' && date != '' && position != '') {
            t2.append(openDiv + openP + subject + closeP + openP + position + closeP + closeDiv)
                .find('.add-subject')
                .css('height', height * lastLesson + 'px');
        }
        // let subject = $('.add-subject');
        // console.log(height * tietCuoi + 'px');
    });

})
