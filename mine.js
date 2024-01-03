let selectedRow = null;
function onFormSubmit() {
	if (validate()) {
		let formData = readFormData();
		if (selectedRow == null)
			insertNewRecord(formData);
		else
			updateRecord(formData);
		resetForm();
		saveToLocalStorage(formData);
	}
} 
function readFormData() {
    let formData = {};
    let formElements = ["Name", "Email", "Phone", "Qualification", "Address", "Contry", "State", "Pincode", "Experience", "CurrentCTC", "ExpectedCTC", "UploadCV", "Gender",];

    formElements.forEach(function (elementId) {
        if (elementId === "Gender" || elementId === "Gender") {
            formData[elementId] = document.getElementById(elementId).checked ? "Male" : "Female";
        } else {
            formData[elementId] = document.getElementById(elementId).value;
        }
    });
    return formData;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    let formElements = ["Name", "Email", "Phone", "Qualification", "Address", "Contry", "State", "Pincode", "Experience", "CurrentCTC", "ExpectedCTC", "UploadCV", "Gender", ];

    formElements.forEach(function (elementId, index) {
        if (elementId === "Gender" || elementId === "Gender") {
            let value = selectedRow.cells[index].innerHTML.toLowerCase();
            document.getElementById(elementId).checked = (value === "Gender");
        } else {
            document.getElementById(elementId).value = selectedRow.cells[index].innerHTML;
        }
    });
}
function insertNewRecord(data) {
	let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
	let newRow = table.insertRow(table.length);

	for (let key in data) {
		let cell = newRow.insertCell();
		cell.innerHTML = data[key];
	}
	let editCell = newRow.insertCell();
	editCell.innerHTML = '<button onClick="onEdit(this)" class="btn btn-info btn-xs py-1 px-2">Edit</button>' +
		'<button onClick="onDelete(this)" class="btn btn-danger btn-xs py-1 px-2 mx-2"><i class="fa fa-trash me-2"> Delete</button>';
}
function resetForm() {
	let formElements = ["Name", "Email", "Phone", "Qualification", "Address", "Contry", "State", "Pincode", "Experience", "CurrentCTC", "ExpectedCTC", "UploadCV",];

	formElements.forEach(function (elementId) {
		document.getElementById(elementId).value = "";
	});
	selectedRow = null;
}
function updateRecord(formData) {
    for (let i = 0; i < selectedRow.cells.length; i++) {
        selectedRow.cells[i].innerHTML = formData[Object.keys(formData)[i]];
    }
}
function updateRecord(formData) {
    let cellIndex = 0;
    for (const value of Object.values(formData)) {
        selectedRow.cells[cellIndex].innerHTML = value;
        cellIndex++;
    }
}
function onDelete(td) {
	if (confirm('Are you sure to delete this record?')) {
		let row = td.parentElement.parentElement;
		document.getElementById("employeeList").deleteRow(row.rowIndex);
		resetForm();
	}
}
function validate() {
	let isValid = true;
	let requiredFields = ["Name", "Email", "Phone", "Qualification", "Address", "Contry", "State", "Pincode", "Experience", "CurrentCTC", "ExpectedCTC", "UploadCV",];
	requiredFields.forEach(function (elementId) {
		let element = document.getElementById(elementId);
		if (element.value == "") {
			isValid = false;
			document.getElementById(elementId + "ValidationError").classList.remove("hide");
		} else {
			if (!document.getElementById(elementId + "ValidationError").classList.contains("hide"))
				document.getElementById(elementId + "ValidationError").classList.add("hide");
		}
	});
	return isValid;
}
function saveToLocalStorage(){
	for (let key in formData){

	}
}
function saveToLocalStorage(formData) {
    for (let key in formData) {
        localStorage.setItem(key, formData[key]);
    }
}
function loadFromLocalStorage() {
    let formData = {};
    let formElements = ["Name", "Email", "Phone", "Qualification", "Address", "Contry", "State", "Pincode", "Experience", "CurrentCTC", "ExpectedCTC", "UploadCV", "Gender"];

    formElements.forEach(function (elementId) {
        if (elementId === "Gender" || elementId === "Gender") {
            formData[elementId] = localStorage.getItem(elementId) === "Male";
        } else {
            formData[elementId] = localStorage.getItem(elementId);
        }
    });
    return formData;
}
function clearLocalStorage() {
    localStorage.clear();	
}
document.getElementById('show-element').onclick = function() {
	var element = document.getElementById('to-show');
	if (element.className === 'hide') {
	  element.className = 'show';
	} else {
	  element.className = 'show';
	}
  }


