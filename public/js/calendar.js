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

startDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  changeMonth: true,
  changeYear: true,
  minDate: 0,

  onSelect: function (selectedDateTime){
    endDateTextBox.datetimepicker('option', 'minDate', $(this).datetimepicker('getDate') );
    $('#rent_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

    var testStartDate = startDateTextBox.datetimepicker('getDate');
    var testEndDate = endDateTextBox.datetimepicker('getDate');
    if (testStartDate > testEndDate) { 
      endDateTextBox.datetimepicker('setDate', testStartDate);
    }
  }
});

endDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  changeMonth: true,
  changeYear: true,
  minDate: 0,

  onSelect: function (selectedDateTime){
    $('#end_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));
    var testStartDate = startDateTextBox.datetimepicker('getDate');
    var testEndDate = endDateTextBox.datetimepicker('getDate');
    if (testStartDate > testEndDate) {
      startDateTextBox.datetimepicker('setDate', testEndDate);
    }
  }
});

$(function() {
  $("#rent_time, #end_time").datetimepicker();
});