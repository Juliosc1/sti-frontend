function age(){
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        let data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data){
    let appElement = document.getElementById("app")
    let aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))
    aTable.appendChild(createRow(data[3].name, data[3].points))
}

function createRow(name, points){
    let aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow
}

function createCell(content){
    let aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}




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
