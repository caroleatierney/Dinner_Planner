

function addMeal() {

    // var oRows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    // var iRowCount = oRows.length;
    // alert('Your table has ' + iRowCount + ' rows.');
    
    var tableRowCount = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr').length;
    alert('Your table has ' + tableRowowCount + ' rows.');

    const table = document.getElementById("dinnerPlannerTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = "new cell 1";
    cell2.innerHTML = "new cell 2";
    cell3.innerHTML = "new cell 3";
    cell4.innerHTML = "new cell 4";
    cell5.innerHTML = "new cell 5";
    cell6.innerHTML = "new cell 6";
}
