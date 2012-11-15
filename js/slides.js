$(document).ready(function() {
  $(".border-radius").on("change", "input", function() {
    var parent     = $(this).parents(".border-radius"),
        example    = parent.find(".example"),
        inputs     = parent.find("input"),
        index      = inputs.index($(this)),
        new_value  = $(this).val(),
        setting    = "";

    parent.find("pre .border-radius-value").children().eq(index).text(new_value);
    parent.find("p .border-radius-value").eq(index).text(new_value);

    inputs.each(function() {
      setting += $(this).val() + "px ";
    });

    example.css("border-radius", setting);
  });

  $(".transition-duration").on("change", "input", function() {
    var parent     = $(this).parents(".transition-duration"),
        new_value  = $(this).val();

    parent.find(".number").text(new_value);
    parent.find("p .value").text(new_value);
    parent.find(".example").css("transition-duration", new_value + "s");
  });

  $(".nth-child-table").on("click", "input[type='button']", function() {
    var parent     = $(this).parents(".nth-child-table"),
        new_value  = parent.find("input[type='text']").val(),
        rows       = parent.find("tbody tr:nth-child(" + new_value + ")");

    parent.find("tbody tr").css("background-color", "");
    rows.css("background-color", "red");
  });
});