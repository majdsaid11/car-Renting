document.getElementById('carRentalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Optionally, you can redirect the user to a "Thank you" page or display a success message.
});
function showCarCompanies() {
    var carType = document.getElementById("carType").value;
    var carCompanySelect = document.getElementById("carCompany");
    var carCompaniesContainer = document.getElementById("carCompaniesContainer");

    // Clear previous options
    carCompanySelect.innerHTML = "";

    if (carType === "sedan") {
        // Add options for sedan car companies
        var sedanCompanies = ["Toyota", "Honda", "BMW","Mercedes-Benz"];
        addOptions(carCompanySelect, sedanCompanies);
    } else if (carType === "suv") {
        // Add options for SUV car companies
        var suvCompanies = ["Ford", "Chevrolet", "Jeep","Dodge"];
        addOptions(carCompanySelect, suvCompanies);
    } else if (carType === "Sport") {
        // Add options for truck companies
        var truckCompanies = ["Ford", "Chevrolet", "Toyota","volvo","lumberghini","BMW","Mercedes-Benz"];
        addOptions(carCompanySelect, truckCompanies);
    }

    // Show the car company select dropdown
    carCompaniesContainer.style.display = "block";
}

function addOptions(selectElement, optionsArray) {
    optionsArray.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.textContent = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}