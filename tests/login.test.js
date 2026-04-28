const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

function runTest(name, assertion) {
  try {
    assertion();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

runTest("o formulario possui campos de email e senha", () => {
  assert.match(html, /<input[^>]*type="email"[^>]*>/i);
  assert.match(html, /<input[^>]*type="password"[^>]*>/i);
});

runTest("o botao do formulario envia com o texto Entrar", () => {
  assert.match(html, /<button[^>]*type="submit"[^>]*>\s*Entrar\s*<\/button>/i);
});
