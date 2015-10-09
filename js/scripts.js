$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favorite1Input = $("input#favorite1").val();
    var favorite2Input = $("input#favorite2").val();
    var favorite3Input = $("input#favorite3").val();
    var favorite14nput = $("input#favorite4").val();
    var favorite5Input = $("input#favorite5").val();

    $(".favorite1").text(favorite1Input);
    $(".favorite2").text(favorite2Input);
    $(".favorite3").text(favorite3Input);
    $(".favorite4").text(favorite4Input);
    $(".favorite5").text(favorite5Input);

    $("#list").show();

    event.preventDefault();
  });
});
