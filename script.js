

// Initial array
let numbers = [1, 2, 3, 4, 5];

// Display the initial array on the webpage
document.addEventListener('DOMContentLoaded', () => {
    const initialArrayDiv = document.getElementById('initial-array');
    initialArrayDiv.innerText = numbers.join(", ");
});


//we made function of each array method() seperately
// Function to display array length
function displayLength() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Array Length: ${numbers.length}`;
}

// Function to display array toString()
function displayToString() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Array toString(): ${numbers.toString()}`;
}

// Function to display array at()
function displayAt() {
    const outputDiv = document.getElementById('output');
    const firstElement = numbers.at(0);
    const lastElement = numbers.at(-1);
    outputDiv.innerHTML = `First Element (at 0): ${firstElement} <br> Last Element (at -1): ${lastElement}`;
}

// Function to display array join()
function displayJoin() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Joined String: ${numbers.join(", ")}`;
}

// Function to pop an element
function popElement() {
    const outputDiv = document.getElementById('output');
    const poppedElement = numbers.pop();
    outputDiv.innerHTML = `Popped Element: ${poppedElement} <br> Array after pop: ${numbers.join(", ")}`;
}

// Function to push an element
function pushElement() {
    const outputDiv = document.getElementById('output');
    numbers.push(6);
    outputDiv.innerHTML = `Array after push: ${numbers.join(", ")}`;
}

// Function to shift an element
function shiftElement() {
    const outputDiv = document.getElementById('output');
    const shiftedElement = numbers.shift();
    outputDiv.innerHTML = `Shifted Element: ${shiftedElement} <br> Array after shift: ${numbers.join(", ")}`;
}

// Function to unshift an element
function unshiftElement() {
    const outputDiv = document.getElementById('output');
    numbers.unshift(0);
    outputDiv.innerHTML = `Array after unshift: ${numbers.join(", ")}`;
}

// Function to delete an element
function deleteElement() {
    const outputDiv = document.getElementById('output');
    delete numbers[2]; // Deletes the element at index 2
    outputDiv.innerHTML = `Array after delete: ${numbers.join(", ")}`;
}

// Function to concatenate arrays
function concatArrays() {
    const outputDiv = document.getElementById('output');
    const newArray = numbers.concat([7, 8, 9]);
    outputDiv.innerHTML = `Concatenated Array: ${newArray.join(", ")}`;
}

// Function to copy within the array
function copyWithinArray() {
    const outputDiv = document.getElementById('output');
    const copiedArray = numbers.copyWithin(0, 3);
    outputDiv.innerHTML = `Copied Array: ${copiedArray.join(", ")}`;
}

// Function to flatten an array
function flatArray() {
    const outputDiv = document.getElementById('output');
    const nestedArray = [1, [2, 3], [4, [5]]];
    const flattenedArray = nestedArray.flat();
    outputDiv.innerHTML = `Flattened Array: ${flattenedArray.join(", ")}`;
}

// Function to splice the array
function spliceArray() {
    const outputDiv = document.getElementById('output');
    const splicedArray = numbers.splice(1, 2, 10, 11);
    outputDiv.innerHTML = `Array after splice: ${numbers.join(", ")}`;
}

// Function to slice the array
function sliceArray() {
    const outputDiv = document.getElementById('output');
    const slicedArray = numbers.slice(1, 3);
    outputDiv.innerHTML = `Sliced Array: ${slicedArray.join(", ")}`;
}
