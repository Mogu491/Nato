const fs = require("fs");
const path = require("path");

// Kunin lahat ng .jpg/.png sa current folder
const files = fs.readdirSync(".").filter(f => /\.(jpg|jpeg|png)$/i.test(f));

const IMAGES = files.map(file => {
  const ext = path.extname(file).slice(1); // kunin extension (jpg/png)
  const data = fs.readFileSync(file);
  const base64 = Buffer.from(data).toString("base64");
  return `data:image/${ext};base64,${base64}`;
});

// Isulat sa output.txt
fs.writeFileSync("output.txt", JSON.stringify(IMAGES, null, 2));
console.log("Done! Check output.txt");
