import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought: exactly one word, the first that comes to mind.
// "defenestration" — surprising, vivid (a body out of a window), and witty
// in sound and sense. Chosen, not filler. Deterministic and offline: the
// same single word on every run, no randomness, no network, no clock.
const WORD = "defenestration";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
