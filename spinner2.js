let timeout = 100;
let spinnerChar = ['|', '/', '-', '\\'];

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChar[i % 4]}   `);
  }, timeout);
  timeout += 200;
}


// ... fill in the rest yourself ...
