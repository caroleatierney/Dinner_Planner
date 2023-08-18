// Allow user to add rows to a table dynamically
function addMeal() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id}`);

    let cell0 = row.insertCell(0)     // insert day of week
    cell0.innerHTML = document.getElementById("dayOfWeek").value;
    cell0.style.color = "#e76f51";
    cell0.style.fontWeight = "bold"
    document.getElementById('dayOfWeek').value = '';

    // insert rest of data from buttons
    let menuArray = ["date", "protein", "veggie", "starch", "howMany"]
    for (i = 0; i<=4; i++) {
        if (menuArray[i] == "date") {
            // change date to object, then mm/dd/yyyy
            let convDate = document.getElementById(menuArray[i]).value; 
            convDate = new Date(convDate).toLocaleDateString();
            row.insertCell(i + 1).innerHTML = convDate;
        } else {
            row.insertCell(i + 1).innerHTML = document.getElementById(menuArray[i]).value;
        }
        document.getElementById(menuArray[i]).value = '';
    }
    row.insertCell(6).appendChild(createDeleteButton(id))
    // alert(`'Id added:', ${id}`); // display id just added
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