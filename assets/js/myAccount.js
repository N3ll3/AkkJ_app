const routes = require("../../public/js/fos_js_routes.json");
import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

Routing.setRoutingData(routes);

$(".deleteUser").on("click", function(e) {
  let button = $(this);
  let response = confirm("Are you sure ?");

  if (response == true) {
    const id = button.data("id");
    e.preventDefault();
    $.post(Routing.generate("delete_user", { id: id }))
      .done(function() {
        button.closest("tr").remove();
        alert("The user is deleted.");
      })
      .fail(function() {
        alert("User deletion failed");
      });
  } else {
    return false;
  }
});
