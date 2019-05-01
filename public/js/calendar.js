var startDateTextBox = $('#rent_datetimepicker');
var endDateTextBox = $('#end_datetimepicker');

startDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  stepMinute: 10,

  changeMonth: true,
  changeYear: true,
  
  dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], //
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//
  minDate: new Date(parseInt(new Date().getTime()/1000/600)*600*1000+(600*1000)),

  onSelect: function (selectedDateTime){
    $('#rent_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));

    endDateTextBox.datetimepicker('option', 'minDate', $(this).datetimepicker('getDate') );
    endDateTextBox.datetimepicker('option', 'minDateTime', $(this).datetimepicker('getDate') );

    const testStartDate = startDateTextBox.datetimepicker('getDate');
    const testEndDate = endDateTextBox.datetimepicker('getDate');

    if (testStartDate >= testEndDate) { 
      endDateTextBox.datetimepicker('setDate', testStartDate);
    }
    
    $('#end_time').datetimepicker("setDate", endDateTextBox.datetimepicker("getDate"));
    endDateTextBox.datetimepicker("option","maxDate","");
  }
});

let start;
let end;
endDateTextBox.datetimepicker({ 
  controlType: 'select',
  oneLine: true,
  timeFormat: 'hh:mm tt',

  stepMinute: 10,
  
  changeMonth: true,
  changeYear: true,
  
  dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],//
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//
  minDate: new Date(parseInt(new Date().getTime()/1000/600)*600*1000+(600*1000)),
  

  onSelect: function (selectedDateTime){
    $('#end_time').datetimepicker("setDate", $(this).datetimepicker("getDate"));
    
    const testStartDate = startDateTextBox.datetimepicker('getDate');
    const testEndDate = endDateTextBox.datetimepicker('getDate');
    
    if (testStartDate >= testEndDate) {
      startDateTextBox.datetimepicker('setDate', testEndDate);
    }

    start = startDateTextBox.datetimepicker('getDate');
    end = $(this).datetimepicker("getDate");

    $('#rent_time').datetimepicker("setDate", startDateTextBox.datetimepicker("getDate"));
    endDateTextBox.datetimepicker("option","maxDate",$(this).datetimepicker("getDate"));
    
    let arr = $('a.ui-state-default');
    changeStartEndColor(arr);
  }
});

function changeStartEndColor(arr){
    $.each(arr, function(i, value){
      if($(value).text()==start.getDate()){
        $(value).attr("style","color:red !important");
      } else if($(value).text()==end.getDate()){
        $(value).attr("style","color:red !important");
      }
    }); 
  }

$(function() {
  $("#rent_time, #end_time").datetimepicker({
    minDate: new Date(parseInt(new Date().getTime()/1000/600)*600*1000+(600*1000))
  });

  $(".ui_tpicker_time_label").text("시간");//
});