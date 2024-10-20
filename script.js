// Add event listener to the generate button
document.getElementById('generate').addEventListener('click', function() {
    // Get user inputs
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

    // Call the function to generate the password
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);

    // Display the generated password
    document.getElementById('passwordDisplay').innerText = password;
});

// Function to generate password - INCOMPLETE
function generatePassword(length, upper, lower, numbers, special) {
    // Character sets
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase letters
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters
    const numberChars = '0123456789'; // Numbers
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'; // Special characters

    // Create an available characters string based on user input
    let availableChars = '';

    // TODO: Build availableChars based on user selections (use conditions to check for 'upper', 'lower', etc.)

    // Check if any character types are selected
    // TODO: If none are selected, return an error message

    // Generate the password
    let password = '';
    // TODO: Implement password generation logic. Use Math.random() to select characters from availableChars

    return password; // Return the generated password
}
