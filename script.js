var cf1 = $('#cf1'),
cf2 = $('#cf2'),
cf3 = $('#cf3'),
cf4 = $('#cf4'),
cf5 = $('#cf5');

var cf1_frame = $('#cf1-frame'),
cf2_frame = $('#cf2-frame'),
cf3_frame = $('#cf3-frame'),
cf4_frame = $('#cf4-frame'),
cf5_frame = $('#cf5-frame');

var cf1_data = $('#cf1-data'),
cf2_data = $('#cf2-data'),
cf3_data = $('#cf3-data'),
cf4_data = $('#cf4-data'),
cf5_data = $('#cf5-data');

cf1_frame.hide();
cf2_frame.hide();
cf3_frame.hide();
cf4_frame.hide();
cf5_frame.hide();

cf1_data.hide();
cf2_data.hide();
cf3_data.hide();
cf4_data.hide();
cf5_data.hide();

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

cf3.on('click', function() {
    if($(this).is(':checked')) {
        cf3_frame.show();
        cf3_data.show();
    } else {
        cf3_frame.hide();
        cf3_data.hide();
    }
})

cf4.on('click', function() {
    if($(this).is(':checked')) {
        cf4_frame.show();
        cf4_data.show();
    } else {
        cf4_frame.hide();
        cf4_data.hide();
    }
})

cf5.on('click', function() {
    if($(this).is(':checked')) {
        cf5_frame.show();
        cf5_data.show();
    } else {
        cf5_frame.hide();
        cf5_data.hide();
    }
})