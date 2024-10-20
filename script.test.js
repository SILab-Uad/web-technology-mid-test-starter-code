const { generatePassword } = require('./script'); // Adjust the path based on your file structure

describe('Password Generator', () => {
    test('generates a password of the specified length', () => {
        const length = 12;
        const upper = true;
        const lower = true;
        const numbers = true;
        const special = true;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toHaveLength(length);
    });

    test('includes at least one uppercase letter when selected', () => {
        const length = 12;
        const upper = true;
        const lower = false;
        const numbers = false;
        const special = false;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toMatch(/[A-Z]/); // At least one uppercase letter
    });

    test('includes at least one lowercase letter when selected', () => {
        const length = 12;
        const upper = false;
        const lower = true;
        const numbers = false;
        const special = false;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toMatch(/[a-z]/); // At least one lowercase letter
    });

    test('includes at least one number when selected', () => {
        const length = 12;
        const upper = false;
        const lower = false;
        const numbers = true;
        const special = false;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toMatch(/[0-9]/); // At least one number
    });

    test('includes at least one special character when selected', () => {
        const length = 12;
        const upper = false;
        const lower = false;
        const numbers = false;
        const special = true;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toMatch(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/); // At least one special character
    });

    test('returns an error message if no character types are selected', () => {
        const length = 12;
        const upper = false;
        const lower = false;
        const numbers = false;
        const special = false;

        const password = generatePassword(length, upper, lower, numbers, special);
        expect(password).toBe('Error: No character types selected.'); // Adjust based on your implementation
    });
});
