$(document).ready(function() {
  var startDateTextBox = $('#rent_datetimepicker');
  var endDateTextBox = $('#end_datetimepicker');

  function calCost(pricePerMinute) {
    const diff = endDateTextBox.datetimepicker("getDate") - startDateTextBox.datetimepicker("getDate");

    return (diff / 1000 / 60) * pricePerMinute;
  };

  function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function renderCost() {
    $.ajax({
      url: `/truck/getMinutePrice/${$('[name="truckType"]:checked').val()}`,
      type: 'GET',
    })
    .done((data, textStatus, jqXHR) => {
      const pricePerMinute = data.pricePerMinute;
      
      const rentCost = calCost(pricePerMinute);
      const insuranceCost = 10000;
      $('#result_rent_cost').text(numberWithCommas(rentCost));
      $('#result_insurance_cost').text(numberWithCommas(insuranceCost));
      $('#result_total_cost').text(numberWithCommas(rentCost + insuranceCost));
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log('bbb');
    });
  }

  $('#show_select_car_section, #show_pay_section').on('click', function () {
    $('#pay_section, #select_car_section').toggleClass('hidden');
  });

  //TODO: 차량유형 따른 달력정보를 나타내야함
  $('[name="truckType"]').on('change', function () {
    const carName = $(this).attr('data-car-name');
    
    switch(carName) {
      case '다마스':
      $('#damas_img').attr("src", "/img/selection-truck/damas-on.png")
      $('#labbo_img').attr("src", "/img/selection-truck/labo-off.png")
      $('#porter_img').attr("src", "/img/selection-truck/porter-off.png")
      break;
      case '라보':
      $('#damas_img').attr("src", "/img/selection-truck/damas-off.png")
      $('#labbo_img').attr("src", "/img/selection-truck/labo-on.png")
      $('#porter_img').attr("src", "/img/selection-truck/porter-off.png")
      break;
      case '포터2':
      $('#damas_img').attr("src", "/img/selection-truck/damas-off.png")
      $('#labbo_img').attr("src", "/img/selection-truck/labo-off.png")
      $('#porter_img').attr("src", "/img/selection-truck/porter-on.png")
      break;
    }
    $('#result_car_name').text($(this).attr('data-car-name'));
    $('#result_car_img').attr('src', `/img/car/${$(this).val()}.jpeg`);
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