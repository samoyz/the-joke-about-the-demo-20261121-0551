import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI agent fixed the demo crash, then proved the fix by crashing the app somewhere completely new.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
