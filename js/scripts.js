


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var nums = $("#number").val();
    console.log(nums);
    var result = [];



    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === "a") {
        result.push("beep");
      } else {
        result.push(nums[i]);
      }
    }
console.log(result);






  });
});
