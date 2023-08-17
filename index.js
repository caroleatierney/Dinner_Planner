// Allow user to add rows to a table dynamically

function addMeal() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id}`);

    let cell1 = row.insertCell(0)
    cell1.innerHTML = document.getElementById("dayOfWeek").value;
    cell1.style.color = "#e76f51";
    cell1.style.fontWeight = "bold"

    row.insertCell(1).innerHTML = document.getElementById("date").value;
    row.insertCell(2).innerHTML = document.getElementById("protein").value;
    row.insertCell(3).innerHTML = document.getElementById("veggie").value;
    row.insertCell(4).innerHTML = document.getElementById("starch").value;
    row.insertCell(5).innerHTML = document.getElementById("howMany").value;
    row.insertCell(6).appendChild(deleteButton(id))

    document.getElementById('dayOfWeek').value = '';
    document.getElementById('date').value = '';
    document.getElementById('protein').value = '';
    document.getElementById('veggie').value = '';
    document.getElementById('starch').value = '';
    document.getElementById('howMany').value = '';

    // alert(`'Id added:', ${id}`); // display id just added
}

// Allow user to delete rows of a table dynamically
function deleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        // alert(`Deleted row with id: item-${id}`); // display item id of row being deleted
        let rowToDelete = document.getElementById(`item-${id}`);
        console.log(rowToDelete)
        rowToDelete.parentNode.removeChild(rowToDelete);
    };
    return btn;
}

function deleteTest(id) {
    alert(`Deleted row with id: ${id}`);
    let rowToDelete = document.getElementById(`${id}`);
    console.log(rowToDelete)
    rowToDelete.parentNode.removeChild(rowToDelete);
}