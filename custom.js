$(".save").click(function () {
  //console.log("saved.!");
  showMessage("Saving successful!");
});
$(".update").click(function () {
  //console.log("update.!");
  showMessage("Updating successful!");
});
$(".delete").click(function () {
  //console.log("delete.!");
  showMessage("Deletion successful!");
});
function showMessage(data) {
  //console.log("Function without parameters!");
  $(".message").html(data).slideDown(1000).delay(2000).slideUp(1000);
}
