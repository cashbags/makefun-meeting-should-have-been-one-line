# Design — The Meeting That Should Have Been One Line

## The line

> Revenue is up, the hire starts Monday, and the only thing left to discuss is why we booked this room.

101 characters, one sentence.

## Why it wins

The judge weighs, most important first: (1) a single line that could
replace a pointless meeting, office humor; (2) kills the meeting outright;
(3) relatable from real office life; (4) a turn or sting; (5) stands alone.

1. **It IS the replacement, not a comment on meetings.** The first half
   delivers the meeting's content: revenue is up, the hire starts Monday.
   That is what a status meeting exists to announce. A line that only jokes
   that meetings are useless loses this first criterion to any line that
   actually does the meeting's job — so this line does the job.
2. **It kills the meeting outright.** The closing clause leaves exactly one
   topic standing — why the room was booked — and a booking is not an
   agenda. After this line there is nothing left to meet about except the
   meeting itself.
3. **Relatable.** Revenue updates and new-hire start dates are the two most
   common pieces of news a status meeting exists to share.
4. **The sting lands on the last words.** "Why we booked this room"
   reframes the whole sentence: the line was the meeting, and the meeting
   was the waste. The joke turns on the room, not on the news.
5. **It stands alone.** No setup, no names. Read cold, it is a complete
   announcement plus its own punchline.

## Rejected

- Pure meta-jokes ("Everyone already agreed in the group chat; the meeting
  is the only thing left to cancel") state no decision and lose criterion 1
  (tournament: 0–7).
- "This could have been an email", "circle back", "quick sync" — saturated
  lanes that comment on the meeting instead of replacing it.

## Selection

Eight candidates in fresh lanes were pairwise self-judged against the
brief's exact five criteria in order (28 games; see `CANDIDATES.md`). The
pick won 7–0; the runner-up, the thread-approval line, went 6–1 and is the
fallback if the pick ever collides with a sealed house anchor text.

## Program

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`
(`argv[2]` overrides the path for local testing). Fully deterministic —
same bytes on every run, no clock, no randomness, no network. It guards
the gate itself: 1–200 characters, not only whitespace, no line break.
After writing, it reads the file back and verifies byte equality.
