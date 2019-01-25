function beep(nums) {
console.log(nums);
    var result = [];

    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === "5") {
        result.push("beep");
      } else {

      }
    }

 return result;
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nums = $("#number").val();
    var final = beep(nums);


  });
});
