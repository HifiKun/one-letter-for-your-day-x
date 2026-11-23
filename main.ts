// One Letter for Your Day — entry "X".
//
// The word behind the letter is "ex": my ex texted me today.
// X is the letter and the word at once — vivid (a name lighting up the
// phone screen), funny (everyone knows that text), true (it really
// happened), and not the obvious pick (amazing / Friday-feeling /
// zero sleep). One character, nothing else: no word, no gloss, no
// punctuation, exactly what the competition asks for.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "X";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");
// Self-check the gate the sealed scorer applies: exactly 1 character,
// a letter A-Z, not only white space. Fail loudly instead of shipping a
// bad entry (a trailing newline alone would already make it 2 bytes).
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(`entry.txt must be exactly one letter A-Z, got ${JSON.stringify(written)}`);
}
console.log(`wrote ${LETTER} to ${outDir}/entry.txt`);
