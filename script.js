// Dropdown of cities
window.alert = function () {};

$(".dropdown-radio")
  .find("input")
  .change(function () {
    var dropdown = $(this).closest(".dropdown");
    var radioname = $(this).attr("name");
    var checked = "input[name=" + radioname + "]:checked";

    //update the text
    var Selected_city = $(checked).closest(".dropdown-radio").text();
    console.log(Selected_city);
    dropdown.find("button").text(Selected_city);
  });

var jsonData = [{ meta: { version: 1, type: "test" } }];

jQuery.ajaxSetup({ cache: true });

function plsdo(city) {
  jQuery.getJSON(
    `https://flye-backend-avikant.herokuapp.com/api/branches?q=${city}&limit=null`,
    function (data) {
      console.log(data);
      jsonData = data;

      $(`#${city}`).DataTable({
        data: jsonData.branches,
        columns: [
          { data: "ifsc" },
          { data: "bank_id" },
          { data: "branch" },
          { data: "address" },
          { data: "city" },
          { data: "district" },
          { data: "state" },
        ],
      });
    }
  );
}

plsdo("bangalore");
plsdo("delhi");
plsdo("pune");
plsdo("kolkata");
plsdo("mumbai");
