function getFormvalue(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();
    
    // Get the values of first name and last name from the form
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;

    // Display the full name in an alert
    alert(firstName + " " + lastName);
}
