var startDateTextBox = $('#rent_datetimepicker')
var endDateTextBox = $('#end_datetimepicker')

const dayTitles = ['월', '화', '수', '목', '금', '토', '일']
const monthTitles = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

const defaultDatetimepickerParams = {
  oneLine: true,
  controlType: 'select',
  dateFormat: 'yy/mm/dd',
  timeFormat: 'HH시 mm분',
  timeText: '',
  pick12HourFormat: false,

  stepMinute: 10,

  changeMonth: true,
  changeYear: true,

  dayNamesMin: dayTitles,
  monthNamesShort: monthTitles,

  minDate: new Date(parseInt(new Date().getTime() / 1000 / 600) * 600 * 1000 + (600 * 1000))
};

const startDatetimepickerParams = Object.create(defaultDatetimepickerParams);
const endDatetimepickerParams = Object.create(defaultDatetimepickerParams);

startDatetimepickerParams.onSelect = function (selectedDateTime) {
  $('#rent_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

  endDateTextBox.datetimepicker('option', 'minDate', $(this).datetimepicker('getDate'));
  endDateTextBox.datetimepicker('option', 'minDateTime', $(this).datetimepicker('getDate'));

  const testStartDate = startDateTextBox.datetimepicker('getDate');
  const testEndDate = endDateTextBox.datetimepicker('getDate');

  if (testStartDate >= testEndDate) {
    endDateTextBox.datetimepicker('setDate', testStartDate);
  }

  $('#end_time').datetimepicker("setDate", endDateTextBox.datetimepicker("getDate"));
  endDateTextBox.datetimepicker("option", "maxDate", "");
}

endDatetimepickerParams.onSelect = function (selectedDateTime) {
  $('#end_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

  const testStartDate = startDateTextBox.datetimepicker('getDate');
  const testEndDate = endDateTextBox.datetimepicker('getDate');

  if (testStartDate >= testEndDate) {
    startDateTextBox.datetimepicker('setDate', testEndDate);
  }

  $('#rent_time').datetimepicker("setDate", startDateTextBox.datetimepicker("getDate"));
  startDateTextBox.datetimepicker("option", "maxDate", $(this).datetimepicker("getDate"));
}

startDateTextBox.datetimepicker(startDatetimepickerParams);
endDateTextBox.datetimepicker(endDatetimepickerParams);

$(function () {
  $("#rent_time, #end_time").datetimepicker({
    minDate: new Date(parseInt(new Date().getTime() / 1000 / 600) * 600 * 1000 + (600 * 1000))
  });

  // $(".ui_tpicker_time_label").text("시간"); //
});