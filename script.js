function calculateAge() {
    // Get the birthdate from the input
    const birthDate = new Date(document.getElementById('birthdate').value);
    
    // Check if the birthDate is valid
    if (!birthDate || isNaN(birthDate)) {
        document.getElementById('ageResult').innerText = "Please enter a valid date.";
        return;
    }

    // Get the current date
    const today = new Date();
    
    // Calculate the difference in years
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Check if the birthday has occurred this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    
    // If the birthday hasn't occurred yet this year, subtract one from the age
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the result
    document.getElementById('ageResult').innerText = "You are " + age + " years old.";
}
