function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="options"]:checked').value;
  var foodOptions = getSelectedOptions("food");
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var form = document.getElementById("form");

  if (foodOptions.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  var table = document.getElementById("result");

  var newRow = table.insertRow(-1);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = address;
  cell4.innerHTML = pincode;
  cell5.innerHTML = gender;
  cell6.innerHTML = state;
  cell7.innerHTML = country;

  form.reset();
}


function getSelectedOptions(selectId) {
  var selectedOptions = [];
  var selectElement = document.getElementById(selectId);

  for (var i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].selected) {
      selectedOptions.push(selectElement.options[i].value);
    }
  }

  return selectedOptions;
}
