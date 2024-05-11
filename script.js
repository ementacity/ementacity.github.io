document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("order-form");
    var totalCostElement = document.getElementById("total-cost");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var totalCost = 0;

        // Iterate through each checkbox and calculate the total cost
        var checkboxes = form.querySelectorAll("input[type=checkbox]:checked");
        checkboxes.forEach(function(checkbox) {
            totalCost += parseInt(checkbox.value);
        });

        // Display the total cost
        totalCostElement.textContent = "Общая стоимость заказа: $" + totalCost;
    });
});
