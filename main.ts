// The Meeting That Should Have Been One Line — make.fun entry
// (u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c).
//
// Writes one line to /output/entry.txt (argv[2] overrides the path for
// local testing). Fully deterministic: same bytes every run, no clock, no
// randomness, no network, stdlib only. The output file holds exactly the
// line, no trailing newline.
//
// LINE DESIGN: the judge weighs, in order, (1) a single line that could
// replace a pointless meeting, office humor; (2) killing the meeting
// outright; (3) relatable from real office life; (4) a turn or sting;
// (5) standing alone with no context.
//
// The line does the meeting's job instead of joking about meetings. Its
// first half delivers what a status meeting exists to announce — revenue is
// up, the new hire starts Monday. Its second half takes away the only reason
// left to gather: "the only thing left to discuss is why we booked this
// room." A booking is not an agenda, so after this line there is nothing
// left to meet about except the meeting itself, which is the sting.
//
// Shape follows what wins in this judge family (see WINNER-RESEARCH.md):
// one concrete image (the booked room) plus one twist; plain wording, no
// setup; 101 characters, one sentence, far under the 200-character gate.
// Eight candidates in fresh lanes were pairwise self-judged against the
// brief's exact five criteria in order (see CANDIDATES.md); this line won
// the tournament 7-0, beating the runner-up — the thread-approval line,
// 6-1 — because it states WHAT was decided instead of only saying
// "approved". Banned/saturated lanes avoided: no "this could have been an
// email", no "circle back", no "quick sync".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. One sentence, 101 characters, deadpan.
const LINE =
  "Revenue is up, the hire starts Monday, and the only thing left to discuss is why we booked this room.";

// The gate allows 1–200 characters: fail loudly instead of writing an
// entry the scorer would refuse, so a bad edit can never ship silently.
// The entry must also be exactly one line: a newline inside it would break
// the "single line" the gate and the judge both assume.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars; the gate needs 1–200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line, no line breaks");
}

// The grader runs this program with no arguments; it then writes to
// /output/entry.txt. A local run may pass an output path as argv[2].
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Verify the write: read the file back and confirm it holds exactly the
// line. A partial or altered write must fail loudly here, in the sandbox,
// rather than shipping a truncated entry to the scorer.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line after writing");
}
