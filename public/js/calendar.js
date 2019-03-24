// var startDateTextBox = $('#rent_datetimepicker');
// var endDateTextBox = $('#end_datetimepicker');

// startDateTextBox.datetimepicker({ 
//   controlType: 'select',
//   oneLine: true,
//   timeFormat: 'hh:mm tt',

//   changeMonth: true,
//   changeYear: true,
//   minDate: 0,

//   onSelect: function (selectedDateTime){
//     endDateTextBox.datetimepicker('option', 'minDate', $(this).datetimepicker('getDate') );
//     $('#rent_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

//     if (endDateTextBox.val() != '') {
//       var testStartDate = startDateTextBox.datetimepicker('getDate');
//       var testEndDate = endDateTextBox.datetimepicker('getDate');
//       if (testStartDate > testEndDate) { 
//         endDateTextBox.datetimepicker('setDate', testStartDate);
//       }
//     } else {
//       endDateTextBox.val(selectedDateTime);
//     }
//   }
// });

// endDateTextBox.datetimepicker({ 
//   controlType: 'select',
//   oneLine: true,
//   timeFormat: 'hh:mm tt',

//   changeMonth: true,
//   changeYear: true,
//   minDate: 0,

//   onSelect: function (selectedDateTime){
//     $('#end_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));
//     if (startDateTextBox.val() != '') {
//       var testStartDate = startDateTextBox.datetimepicker('getDate');
//       var testEndDate = endDateTextBox.datetimepicker('getDate');
//       if (testStartDate > testEndDate) {
//         startDateTextBox.datetimepicker('setDate', testEndDate);
//       }
//     } else {
//       startDateTextBox.val(selectedDateTime);
//     }
//   }
// });

// $(function() {
//   $("#rent_time, #end_time").datetimepicker();
// });


var startDateTextBox = $('#rent_datetimepicker');
var endDateTextBox = $('#end_datetimepicker');

// $.timepicker.datetimeRange(
// 	startDateTextBox,
// 	endDateTextBox,
// 	{
// 		minInterval: (1000*60*10), // 1hr
// 		dateFormat: 'yyyy MM dd', 
// 		timeFormat: 'hh:mm tt',
// 		start: {}, // start picker options
// 		end: {} // end picker options					
// 	}
// );

startDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  stepMinute: 10,

  changeMonth: true,
  changeYear: true,
  
  minDate: new Date(parseInt(new Date().getTime()/1000/600)*600*1000+(600*1000)),

  onSelect: function (selectedDateTime){
    endDateTextBox.datetimepicker('option', 'minDate', $(this).datetimepicker('getDate') );
    $('#rent_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

    var testStartDate = startDateTextBox.datetimepicker('getDate');
    var testEndDate = endDateTextBox.datetimepicker('getDate');
    if (testStartDate >= testEndDate) { 
      endDateTextBox.datetimepicker('setDate', testStartDate);
    }
    $('#end_time').datetimepicker("setDate", endDateTextBox.datetimepicker("getDate"));
  }
});

endDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  stepMinute: 10,
  
  changeMonth: true,
  changeYear: true,

  minDate: new Date(parseInt(new Date().getTime()/1000/600)*600*1000+(600*1000)),

  onSelect: function (selectedDateTime){
    $('#end_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));
    var testStartDate = startDateTextBox.datetimepicker('getDate');
    var testEndDate = endDateTextBox.datetimepicker('getDate');
    if (testStartDate >= testEndDate) {
      startDateTextBox.datetimepicker('setDate', testEndDate);
    }
    $('#rent_time').datetimepicker("setDate", startDateTextBox.datetimepicker("getDate"));
  }
});

$(function() {
  $("#rent_time, #end_time").datetimepicker();
});