function addRow() {
    let Row = document.getElementById("myTable");
    
    let newRow = Row.insertRow(0);
    let newCell = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    newCell.innerHTML = "cell";
    newCell2.innerHTML = "cell";
    
    row.addRow();
}

function myFunction() {
    let x = document.getElementById("myTable");
    x.deleteRow(0);
}
