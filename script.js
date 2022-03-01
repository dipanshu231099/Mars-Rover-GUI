var cf1 = $('#cf1'),
cf2 = $('#cf2');

var cf1_frame = $('#cf1-frame'),
cf2_frame = $('#cf2-frame');

var cf1_data = $('#cf1-data'),
cf2_data = $('#cf2-data');

cf1_frame.hide();
cf2_frame.hide();
cf1_data.hide();
cf2_data.hide();

cf1.on('click', function() {
    if($(this).is(':checked')) {
        cf1_frame.show();
        cf1_data.show();
    } else {
        cf1_frame.hide();
        cf1_data.hide();
    }
})

cf2.on('click', function() {
    if($(this).is(':checked')) {
        cf2_frame.show();
        cf2_data.show();
    } else {
        cf2_frame.hide();
        cf2_data.hide();
    }
})