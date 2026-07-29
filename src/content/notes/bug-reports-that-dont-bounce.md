---
title: "Bug reports that don't bounce back"
date: 2026-07-24
summary: 'Escalating to engineering is easy. Escalating so nobody has to ask you a follow-up question is the actual skill.'
tags: ['Help Desk', 'Escalation']
---

The fastest way to make a Tier 1 escalation useless is to write "user says the page is broken" and hit submit. It comes back within the hour asking which page, which user, which browser. Now the ticket has cost two people time instead of one.

Here's the shape I hold every escalation to.

## Five things, every time

**1. What was expected, and what happened instead.** Two sentences, both concrete. "Expected the export to download a CSV. Got a spinner that never resolves." Not "export is broken."

**2. Steps to reproduce, numbered, from a clean state.** From logged out if possible. I've avoided a lot of "cannot reproduce" replies just by starting the steps at sign in rather than three screens deep.

**3. Scope.** One user or several? One browser or all of them? One account or the whole org? If I haven't checked, I say so. An honest unknown is fine. An implied "all users" that turns out to be one misconfigured account is not.

**4. Environment.** Browser and version, OS, and whether it survives an incognito window. Incognito is the highest-value line in anything I write. It separates a real defect from a cache or extension problem before anyone else looks at it.

**5. Evidence.** Screenshot with the console open, or the exact error text typed out, not paraphrased. A 500 and a 403 go to completely different people.

## Reproduce first, or say you couldn't

If I can reproduce it, I say so and how. If I can't, I say that too, plus what I tried. "Could not reproduce on Chrome 141 / Windows 11 in incognito, user is on Safari" is useful information. Silence on that point is what triggers the follow-up question.

## The part that isn't about the ticket

Every escalation is a message to a person with their own queue. A ticket that answers the obvious questions before they're asked gets picked up faster. Not because of a policy. Because it's the one they can actually start on.

Same discipline pays off in the knowledge base. Three tickets in a month describing the same login failure isn't three tickets. It's one article and a root cause worth chasing.
