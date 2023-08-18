// Allow user to add rows to a table dynamically
function processRow() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id}`);

    function processRow() {
        let menuArray = ["dayOfWeek", "date", "protein", "veggie", "starch", "howMany", "button"]
        for (i = 0; i <= 6; i++) {
            assignCells(menuArray[i], i)
            // alert(`'Id added:', ${id}`); // display id just added
        }
    }
}

function assignCells(cellLabel, i) {
    switch (cellLabel) {
        case 'dayOfWeek':
            let dow = row.insertCell(i) // insert day of week
            dow.innerHTML = document.getElementById("dayOfWeek").value;
            dow.style.color = "#e76f51";
            dow.style.fontWeight = "bold"
            document.getElementById('dayOfWeek').value = '';
            break;
        case 'date': // change date to object, then mm/dd/yyyy
            let convDate = document.getElementById(menuArray[i]).value;
            convDate = new Date(convDate).toLocaleDateString();
            row.insertCell(i).innerHTML = convDate;
            break;
        case 'button':
            row.insertCell(i).appendChild(createDeleteButton(id))
        default:
            row.insertCell(i).innerHTML = document.getElementById(menuArray[i]).value;
            document.getElementById(menuArray[i]).value = '';
            break;
    }
}


// Allow user to delete rows of a table dynamically
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

function deleteTest(id) {
    // alert(`Deleted row with id: ${id}`);
    let rowToDelete = document.getElementById(`${id}`);
    console.log(rowToDelete)
    rowToDelete.parentNode.removeChild(rowToDelete);
}