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

      $("#loader").hide();
      $("#myAnswers").fadeIn("slow");
    }
  );
}

$("#loader").fadeIn("slow");
$("#myAnswers").hide();

plsdo("bangalore");
plsdo("delhi");
plsdo("pune");
plsdo("kolkata");
plsdo("mumbai");

// window.alert = function () {};
$("#myAnswers > div").hide();

$(function () {
  $("#QuestionOptions").change(function () {
    $("#myAnswers > div").hide();
    $("#myAnswers")
      .find("#" + $(this).val())
      .fadeIn("slow");
  });
});
