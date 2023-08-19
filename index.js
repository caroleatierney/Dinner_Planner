// Allow user to add rows to a table dynamically
function processRow() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id}`);
    // alert(`'Id added:', ${id}`); // display id just added

    let cellArray = ["dayOfWeek", "date", "protein", "veggie", "starch", "howMany", "button"]
    for (i = 0; i <= 5; i++) {
        switch (cellArray[i]) {
            case 'dayOfWeek':
                let dayCell = row.insertCell(i) // insert day of week
                dayCell.innerHTML = document.getElementById("dayOfWeek").value;
                dayCell.style.color = "#e76f51";
                dayCell.style.fontWeight = "bold"
                document.getElementById('dayOfWeek').value = '';
                break;
            case 'date': // change date to object, then mm/dd/yyyy
                let convDate = document.getElementById(cellArray[i]).value;
                convDate = new Date(convDate).toLocaleDateString();
                row.insertCell(i).innerHTML = convDate;
                document.getElementById(cellArray[i]).value = '';
                break;
            case 'button': // appending after cell intended
            // row.insertCell(i).appendChild(createDeleteButton(id))
            default:
                row.insertCell(i).innerHTML = document.getElementById(cellArray[i]).value;
                document.getElementById(cellArray[i]).value = '';
                break;
        }
    }
    row.insertCell(6).appendChild(createDeleteButton(id)) // would like this in the case
}

// Allow user to delete rows of a table dynamically (newly added rows)
function createDeleteButton(id) {
    var btn = document.createElement('button');
    btn.className = 'btn btn-info'
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

// This is the delete used for the default tables
function deleteRow(id) {
    // alert(`Deleted row with id: ${id}`);
    let rowToDelete = document.getElementById(`${id}`);
    console.log(rowToDelete)
    rowToDelete.parentNode.removeChild(rowToDelete);
}