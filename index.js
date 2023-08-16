// Allow user to add rows to a table dynamically

function addMeal() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount-1;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("dayOfWeek").value;
    document.getElementById("dinnerPlannerTable").rows[id].cells.item(0).setAttribute("style", "color: #e76f51;");
    row.insertCell(1).innerHTML = document.getElementById("date").value;
    row.insertCell(2).innerHTML = document.getElementById("protein").value;
    row.insertCell(3).innerHTML = document.getElementById("veggie").value;
    row.insertCell(4).innerHTML = document.getElementById("starch").value;
    row.insertCell(5).innerHTML = document.getElementById("howMany").value;

    // let actions = row.insertCell(6)  // set a variable to the 6th cell that will hold the button
    // actions.appendChild(deleteButton(id++))  // append the button and increment the id
    row.insertCell(6).appendChild(deleteButton(id++)) 

    alert(`'Id', ${id}`);
}

// Allow user to delete rows of a table dynamically
function deleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        alert(`Deleted row with id: item-${id}`);
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