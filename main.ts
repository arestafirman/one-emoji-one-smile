// One Emoji, One Smile — entry program.
//
// Authored choice: 👐 OPEN HANDS SIGN (U+1F450).
// Two open hands are a gesture of welcome and embrace: the first thing a
// stranger reads is warmth and openness, no words needed. It is friendly
// without being intimate, playful without irony, and it reads the same
// across ages and backgrounds — a deliberate pick, not the first smiley
// that comes to mind.
//
// The program writes exactly that one emoji to /output/entry.txt:
// no trailing newline, UTF-8, deterministic, fully offline, no
// dependencies, no randomness, no clock reads. One character, 4 bytes —
// inside the gate's 1-to-8-character window, and nothing else in the file.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "👐"; // U+1F450 OPEN HANDS SIGN — 4 bytes in UTF-8: f0 9f 91 90

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
