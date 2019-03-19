$(document).ready(function() {
  $('#show_select_car_section, #show_pay_section').on('click', function () {
    $('#pay_section, #select_car_section').toggleClass('hidden');
  });

  //TODO: 차량유형 따른 달력정보를 나타내야함
  $('[name="carType"]').on('change', function () {
    console.log('차량유형 따른 달력정보를 나타내야함');
    $('#result_car_name').text("차량명");
    $('#result_car_img').attr('src', '차량 사진'); // 변경해야함
  });

  //TODO: 지점 따른 달력정보를 나타내야함
  $('[name="region"]').on('change', function () {
    $('#result_rent_region, #result_return_region').text("차량 장소");
    console.log('지점 따른 달력정보를 나타내야함');
  });
  
  //TODO: 날짜에 따른 총합 계산 해야함
  $('#rent_datetimepicker').on('change', function () {
    $('#result_rent_date').text("대여일");
    console.log('날짜에 따른 총합 계산 해야함');
  });

  $('#end_datetimepicker').on('change', function () {
    $('#result_return_rent_date').text("반납일");
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