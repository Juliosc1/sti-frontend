
age();

function age(){
    console.log("running age");
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3001/highscore")
    //xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        let data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data){
    let appElement = document.getElementById("highscoreTable")
    let aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].score))
    aTable.appendChild(createRow(data[1].name, data[1].UserPoints))
    aTable.appendChild(createRow(data[2].name, data[2].score))
    aTable.appendChild(createRow(data[3].name, data[3].score))
    aTable.appendChild(createRow(data[4].name, data[4].score))
    aTable.appendChild(createRow(data[5].name, data[5].score))
}

function createRow(name, score){
    let aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(UserPoints))
    return aRow
}

function createCell(content){
    let aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
} 

/* function createHead(name, score){
    let aHead = document.createElement("th")
    aHead.appendChild(createCell(name))
    aHead.appendChild(createCell(score))
    return aHead
} */



/*Highscore table version 2*/
function addRow() {
				  
	var myName = document.getElementById("playerName");
	var table = document.getElementById("highscoreTable");
 
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
 
	row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
	row.insertCell(1).innerHTML= myName.value;
	row.insertCell(2).innerHTML= UserPoints;

}

function deleteRow(obj) {
  
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("highscoreTable");
    table.deleteRow(index);
    
}
/*HIGHSCORE VERSION 3*/

const inpKey = document.getElementById("inpKey");
var inpValue = UserPoints;
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = UserPoints;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};


for (let i = 0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value}<br />`;
} 