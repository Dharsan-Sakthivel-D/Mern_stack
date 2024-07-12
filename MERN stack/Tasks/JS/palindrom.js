function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function checkPalindrom() {
    let inputString = document.getElementById('inputString').value;
    let resultElement = document.getElementById('result');
    
    if (!inputString.trim()) {
        resultElement.textContent = 'Please enter a string.';
        console.log('Please enter a string.'); // Log to console for debugging
        return;
    }
    
    console.log(`Checking if "${inputString}" is a palindrome...`);
    
    let isPal = isPalindrome(inputString);
    
    if (isPal) {
        resultElement.textContent = `"${inputString}" is a palindrome.`;
        console.log(`"${inputString}" is a palindrome.`);
    } else {
        resultElement.textContent = `"${inputString}" is not a palindrome.`;
        console.log(`"${inputString}" is not a palindrome.`);
    }
}
