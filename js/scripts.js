

function beep(nums) {
  var range = [];
  for (var i = 0; i < nums + 1; i++) {
    if (nums.toString().includes("3")) {
      range.push("I'm sorry Dave. I'm afraid I can't do that.")
      return range;
    } else if (nums.toString().includes("2")) {
      range.push("boop")
      return range;
    } else if (nums.toString().includes("1")) {
      range.push("beep")
      return range;
    }
    else {
      function boop(nums) {

      };
      }
    }
  }
    // console.log(i);
    function boop(nums) {
      var range = [];


      for (var i = 0; i < nums + 1; i++) {
        if (i.toString().split("") == "1") {
          range.push("beep")

        } else if (i.toString().split("") == "2") {
          range.push("boop")

        } else if (i.toString().split("") == "3") {
          range.push("I'm sorry Dave. I'm afraid I can't do that.")

        } else {
          range.push(i)


        }
      }
      return range;
    }



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nums = parseInt($("#number").val());
    console.log(nums);
    final = beep(nums);
    console.log(final);
    final2 = boop(nums);
    console.log(final2);
  });
});
