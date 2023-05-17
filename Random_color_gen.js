// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Greet function
const greet = (name, number, color) => {
  const h1 = document.createElement('h1');
  h1.textContent = `Welcome ${name} ${number} ${color}`;
  h1.style.color = color; // Set the provided color
  document.body.appendChild(h1);
};

// Call the greet function multiple times
for (let i = 0; i < 5; i++) {
  const color = getRandomColor(); // Generate a random color
  greet("Name", i + 1, color); // Pass the color argument to greet
}
