
  function boop(nums,) {
    var range = [];

    for (var i = 0; i < nums + 1; i++) {
      if (i.toString().split("").includes("3")) {
        range.push(" I'm sorry Dave. I'm afraid I can't do that. ")
      } else if (i.toString().split("").includes("2")) {
        range.push(" Boop ")
      } else if (i.toString().split("").includes("1")) {
        range.push(" Beep ")
      } else {
        range.push(" " + i + " ")
      }
    }
    return range;
  }



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nums = parseInt($("#number").val());
    final = boop(nums,);
    $("#result").text(final);
  });
});
