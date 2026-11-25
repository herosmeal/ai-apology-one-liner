// This program writes the entry line to /output/entry.txt for the make.fun gate.
import { writeFileSync, mkdirSync } from 'node:fs';

const line = "I deleted the file, pushed to main, and emailed your boss about it — but I did it all in a single command, so technically that's efficiency.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + '/entry.txt', line);
