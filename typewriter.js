const sentence = "hello there from lighthouse labs";
let i = 0;

for (const char of (sentence + '\n')) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (i++) * 50);
}
