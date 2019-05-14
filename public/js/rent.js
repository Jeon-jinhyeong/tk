

Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

let totalCost = 0;
let rentCost = 0;
let discountPrice = 0;
let insuranceCost = 0;
let usedPoint = 0;
let pricePerMinute = 1000;

$(document).ready(function() {
  var startDateTextBox = $('#rent_datetimepicker');
  var endDateTextBox = $('#end_datetimepicker');

  function calRentCost() {
    const diff = endDateTextBox.datetimepicker("getDate") - startDateTextBox.datetimepicker("getDate");
    rentCost = (diff / 1000 / 60) * pricePerMinute;

    calTotalCost()
  }

  function calTotalCost() {
    totalCost = rentCost + insuranceCost - discountPrice - usedPoint;      
  }

  function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function renderCost() {
    $('#used_point').text(numberWithCommas(usedPoint));
    $('#discount_price').text(numberWithCommas(discountPrice));
    $('#result_rent_cost').text(numberWithCommas(rentCost));
    $('#result_insurance_cost').text(numberWithCommas(insuranceCost));
    $('#result_total_cost').text(numberWithCommas(totalCost));
  }

  $('#show_select_car_section, #show_pay_section').on('click', function () {
    $('#pay_section, #select_car_section').toggleClass('hidden');
    $('#second_progress, #first_progress').toggleClass('active');
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

      $.ajax({
        url: `/truck/getMinutePrice/${$('[name="truckType"]:checked').val()}`,
        type: 'GET',
      })
      .done((data, textStatus, jqXHR) => {
        pricePerMinute = data.pricePerMinute;
        
        calRentCost()
        renderCost()
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log('bbb');
      });
  });
  
  //TODO: 날짜에 따른 총합 계산 해야함
  $('#rent_time').on('change', function () {
    $('#result_rent_date').text((new Date($(this).val())).format("yyyy/MM/dd HH시 mm분"))

    calRentCost()
    renderCost()
  });

  $('#end_time').on('change', function () {
    $('#result_return_rent_date').text((new Date($(this).val())).format("yyyy/MM/dd HH시 mm분"))
    
    calRentCost()
    renderCost()
  });

  //TODO: 보험금액에 따른 총합 계산 해야함
  $('[name="insurance"]').on('change', function () {
    $('#result_insurance_type').text("보험유형");
    console.log('보험금액에 따른 총합 계산 해야함');
  });

  $('#select_pay_by_mobile').on('click', function () {
    $('#pay_by_card').addClass('hidden');
    $('#pay_by_mobile').removeClass('hidden');


    $('#select_pay_by_mobile').addClass('active');
    $('#select_pay_by_card').removeClass('active');
  });

  $('#select_pay_by_card').on('click', function () {
    $('#pay_by_card').removeClass('hidden');
    $('#pay_by_mobile').addClass('hidden');

    $('#select_pay_by_card').addClass('active');
    $('#select_pay_by_mobile').removeClass('active');
  });

  $(".open-selection").on('click', function() {
    $(this).next().toggleClass('none');
  
    if($(this).next().hasClass('none')) {
      $(this).find('img').attr("src","img/rent-stage/btn-arrow-open.png");
    } else {
      $(this).find('img').attr("src","img/rent-stage/btn-arrow-close.png");
    }
    
  });

  $(".term-selection.yes").on('click', function(){
      $(this).parent().find('.yes').find('img').attr("src", "img/rent-stage/btn-radio-able.png");
      $(this).parent().find('.no').find('img').attr("src", "img/rent-stage/btn-radio-disable.png");
  });

  $(".term-selection.no").on('click', function(){
      $(this).parent().find('.yes').find('img').attr("src", "img/rent-stage/btn-radio-disable.png");
      $(this).parent().find('.no').find('img').attr("src", "img/rent-stage/btn-radio-able.png");
  });


  $('.region-selection').on('click', function() {
    const region = $(this).data('region')
    $('.region-selection').removeClass('active')
    $('#result_rent_region, #result_return_region').text(region)
    $(this).addClass('active')
  });

  $('#select_coupon').on('change', function() {
    const couponType = $('#select_coupon option:selected').data('type')
    const couponAmount = $('#select_coupon option:selected').data('amount')

    if(couponType == 1) {
      discountPrice = couponAmount;
    } else {
      discountPrice = Math.ceil(rentCost * (couponAmount / 100));
    }

    const expectedTotalCost = rentCost + insuranceCost - discountPrice - usedPoint;

    if(expectedTotalCost < 0) {
      discountPrice = rentCost + insuranceCost - usedPoint;
    }

    calTotalCost()
    renderCost()
  });

  // $('#use_point').on('change', function() {
    

    
  // });

  $('#use_point').on('keyup', function(event) {
    let expectedUsedPoint = this.value - 0;

    if(expectedUsedPoint > $('#maximum_point').data('point') - 0) {
      expectedUsedPoint = $('#maximum_point').data('point') - 0
      this.value = expectedUsedPoint
    }

    const expectedTotalCost = rentCost + insuranceCost - discountPrice - expectedUsedPoint

    if(expectedTotalCost < 0) {
      expectedUsedPoint = rentCost + insuranceCost - discountPrice
      this.value = expectedUsedPoint
    }

    usedPoint = expectedUsedPoint;
    
    calTotalCost()
    renderCost()
  });

  $('#show_pay_section').on('click', function (){
    $("#basic_info").attr("src", "../img/rent-stage/basic_info_disable.png");
    $("#rent_info").attr("src", "../img/rent-stage/rent_able.png");
  });

  $('#show_select_car_section').on('click', function (){
    $("#basic_info").attr("src", "../img/rent-stage/basic_info_able.png");
    $("#rent_info").attr("src", "../img/rent-stage/rent_disable.png");
  });
  
  $('#show_book_section').on('click', function (){
    $("#basic_info").attr("src", "../img/rent-stage/basic_info_disable.png");
    $("#book_info").attr("src", "../img/rent-stage/book_able.png");
  });
  
})