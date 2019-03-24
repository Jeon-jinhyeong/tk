const price = [10000, 20000, 30000];

$(document).ready(function() {
  var startDateTextBox = $('#rent_datetimepicker');
  var endDateTextBox = $('#end_datetimepicker');

  function calCost() {
    const diff = endDateTextBox.datetimepicker("getDate") - startDateTextBox.datetimepicker("getDate");
    const type = $('[name="carType"]:checked').val();
    return (diff / 1000 / 60) * price[type];
  };

  function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function renderCost() {
    const rentCost = calCost();
    const insuranceCost = 10000;
    $('#result_rent_cost').text(numberWithCommas(rentCost));
    $('#result_insurance_cost').text(numberWithCommas(insuranceCost));
    $('#result_total_cost').text(numberWithCommas(rentCost + insuranceCost));
  }

  $('#show_select_car_section, #show_pay_section').on('click', function () {
    $('#pay_section, #select_car_section').toggleClass('hidden');
  });

  //TODO: 차량유형 따른 달력정보를 나타내야함
  $('[name="carType"]').on('change', function () {
    debugger;
    $('#result_car_name').text($(this).attr('data-car-name'));
    $('#result_car_img').attr('src', `/img/car/${$(this).val()}.jpeg`);
    renderCost();
  });

  //TODO: 지점 따른 달력정보를 나타내야함
  $('[name="region"]').on('change', function () {
    $('#result_rent_region, #result_return_region').text("차량 장소");
  });
  
  //TODO: 날짜에 따른 총합 계산 해야함
  $('#rent_time').on('change', function () {
    $('#result_rent_date').text($(this).val());
    renderCost();
    console.log('날짜에 따른 총합 계산 해야함');
  });

  $('#end_time').on('change', function () {
    $('#result_return_rent_date').text($(this).val());
    renderCost();
    console.log('날짜에 따른 총합 계산 해야함');
  });

  //TODO: 보험금액에 따른 총합 계산 해야함
  $('[name="insurance"]').on('change', function () {
    $('#result_insurance_type').text("보험유형");
    console.log('보험금액에 따른 총합 계산 해야함');
  });

  //TODO: 보험금액에 따른 총합 계산 해야함
  $('[name="payType"]').on('change', function () {
    $('#pay_by_mobile, #pay_by_card').toggleClass('hidden');
  });
})