var leapYear = function(year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) && (year >0);
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    if(!isNaN(year) && year>=0) {
      var result = leapYear(year);

      $(".year").text(year);
      $("#next").hide();
      $("#prev").hide();
      $(".error").hide();

      if (!result) {                 // same as writing if (result === false)
        $(".not").text("not");
        for(var nextLeapYear = year; nextLeapYear <= year+4; nextLeapYear++) {
          if(leapYear(nextLeapYear))
            $(".nextLeapYear").text(nextLeapYear);
          $("#next").show();
        }
        for(var prevLeapYear = year; prevLeapYear >= year-4; prevLeapYear--) {
          if(leapYear(prevLeapYear))
            $(".prevLeapYear").text(prevLeapYear);
          $("#prev").show();
        }
      } else {
        $(".not").text("");
      }

      $("#result").show();
    } else {
      $("#result").hide();
      $(".error").show();
    }
    event.preventDefault();
  });
});
