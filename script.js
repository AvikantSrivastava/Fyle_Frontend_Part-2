// Dropdown of cities

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

//   Populating the table

// fetch("https://flye-backend-avikant.herokuapp.com/api/branches?q=bangalore&limit=100")
//   .then((response) => response.json())
//   .then((data) => {
//     let tableStructure = `<table id="example" class="table table-striped table-bordered" style="width:100%">
//         <thead>
//           <tr>
//            <th>IFSC</th>
//            <th>Bank ID</th>
//            <th>Branch</th>
//            <th>Address</th>
//            <th>City</th>
//            <th>District</th>
//            <th>State</th>
//           </tr>
//         </thead>
//           <tbody id="tbody"></tbody>
//         <tfoot>
//           <tr>
//            <th>IFSC</th>
//            <th>Bank ID</th>
//            <th>Branch</th>
//            <th>Address</th>
//            <th>City</th>
//            <th>District</th>
//            <th>State</th>
//           </tr>
//         </tfoot>
//         </table>
//       `;
//     document.getElementById("result").innerHTML = tableStructure;
//     let tableBody = document.getElementById("tbody");
//     for (let i = 0; i < Object.keys(data.branches).length; i++) {
//       let tr = "";
//       tr += `<tr>
//             <td>${data.branches[i].ifsc}</td>
//             <td>${data.branches[i].bank_id}</td>
//             <td>${data.branches[i].branch}</td>
//             <td>${data.branches[i].address}</td>
//             <td>${data.branches[i].city}</td>
//             <td>${data.branches[i].district}</td>
//             <td>${data.branches[i].state}</td>

//           </tr>`;
//       tableBody.innerHTML += tr;
//     }
//   })
//   .catch((error) => console.error(error));

var jsonData = [
    { "meta": { "version": 1, "type": "test" } }
];

jQuery.ajaxSetup({ cache:true });

jQuery.getJSON('https://flye-backend-avikant.herokuapp.com/api/branches?q=varanasi&limit=null', function(data){
    console.log(data);
    jsonData = data;

    $('#result').DataTable({
        "data": jsonData.branches,
        "columns": [
                { "data": "ifsc" },
            { "data": "bank_id" },
            { "data": "branch" },
            { "data": "address" },
            { "data": "city" },
            { "data": "district" },
        { "data": "state" }]
    });
});


