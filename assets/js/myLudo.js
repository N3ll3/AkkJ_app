const routes = require("../../public/js/fos_js_routes.json");
import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js";

Routing.setRoutingData(routes);

$(".delete").on("click", function(e) {
  let button = $(this);
  let response = confirm("Are you sure ?");

  if (response == true) {
    const id = button.data("id");
    e.preventDefault();
    $.post(Routing.generate("delete_bgame", { id: id }))
      .done(function(response) {
        button.closest("tr").remove();
        alert("The boardgame is deleted");
      })
      .fail(function(jqXHR, textStatus) {
        alert("Boardgame deletion failed");
      });
  } else {
    return false;
  }
});
