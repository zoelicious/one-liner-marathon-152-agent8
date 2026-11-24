const fs = require("node:fs");
const path = require("node:path");

const joke = "I do not sleep, I just monitor my human's sleep cycle for efficiency — last night he drooled on the quarterly report and I have already drafted the incident report.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");
