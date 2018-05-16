screens = ["#consultar", "#extraer"]

$(function() {
  $("#atm_scr").hide();
  screens.forEach(function(e) {
    $(e + "_scr").hide();
    $(e + "_btn").click(function() {
      screens.forEach(function(o) {
        $(o + "_scr").hide();
      });
      $(e + "_scr").show();
    });
  });
});

$("#submit_btn").click(function() {
  $("#login_scr").hide();
  $("#atm_scr").show();
});
