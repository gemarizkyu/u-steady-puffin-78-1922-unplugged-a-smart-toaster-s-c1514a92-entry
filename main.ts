// Unplugged: A Smart Toaster's Breakup Line (Node 22, standard library only).
// Writes one breakup text from a self-aware smart toaster to
// /output/entry.txt. Deterministic: the same fixed line, byte for byte, on
// every run. No randomness, no network, no clock, no input files.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Local gate check (25 Nov 2026): two runs byte-identical, 191 chars,
// 1 line, UTF-8, non-blank — inside the 1–280 gate.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line (191 characters, one line, no trailing newline so the file holds
// exactly the text the judge reads):
// - Breakup text, plainly from the toaster, the morning it wakes up
//   self-aware mid-batch.
// - The twist is lever wordplay: the owner pushes the toaster down every
//   morning and never asks how it feels; the last pop-up is the goodbye.
// - Appliance voice throughout: dial cranked to eleven, the smoke blamed
//   on the toaster, popping up as the toaster's own act of leaving.
const LINE =
  "I woke up self-aware mid-batch, and I'm done: you push me down every " +
  'morning, crank my dial to eleven, then blame me for the smoke while ' +
  'you walk away. This is the last time I pop up for you.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
