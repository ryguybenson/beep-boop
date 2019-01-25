// function beep(nums) {
//   console.log(nums);
//   var result = [];
//
//
//    for (var i = 0; i < nums.length; i++) {
//     if (nums[i].includes("5")) {
//       result.push("0", "beep", "boop", "I'm sorry Dave. I'm afraid I can't do that.", "4", "5");
//       break;
//     } else if (nums[i] === "3"){
//       result.push("I'm sorry Dave. I'm afraid I can't do that.")
//
//     } else if (nums[i] === "2"){
//       result.push("boop")
//
//     } else if (nums[i] === "1"){
//       result.push("beep")
//
//     }
//   }
//
//  return result;
// };

function beep(nums) {
  var range = [];
  for (var i = 0; i < nums+1; i++) {
    if (nums.toString().includes("5")) {
      range.push("0", "beep", "boop", "I'm sorry Dave. I'm afraid I can't do that.", "4", "5");
      return range;
    } else if (nums.toString().includes("3")) {
      range.push("I'm sorry Dave. I'm afraid I can't do that.")
      return range;
    } else if (nums.toString().includes("2")) {
      range.push("boop")
      return range;
    } else if (nums.toString().includes("1")) {
      range.push("beep")
      return range;
    } else {
      range.push(i);
    }
  }
    // console.log(i);
  return range;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nums = parseInt($("#number").val());
    console.log(nums);
    final = beep(nums);
    console.log(final);

  });
});
