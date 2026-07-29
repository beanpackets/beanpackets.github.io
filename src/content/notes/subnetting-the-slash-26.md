---
title: 'Subnetting without the panic: what finally made /26 click'
date: 2026-07-12
summary: 'I kept trying to memorize subnet tables. What actually worked was counting backwards from 256 and never touching a calculator.'
tags: ['CCNA', 'Subnetting']
---

For a while I did subnetting the worst possible way. Memorize a chart, then panic when the question didn't look like the chart. The fix was embarrassingly simple. Stop memorizing, start counting.

## The one number that matters

Every subnet question comes down to block size, and block size is always `256 - (the interesting octet of the mask)`.

That's the whole trick.

Take `192.0.2.0/26`. A /26 is `255.255.255.192`, so the interesting octet is 192:

```
256 - 192 = 64
```

Block size 64. The networks step by 64 in the last octet:

```
192.0.2.0    network
192.0.2.63   broadcast
192.0.2.64   network
192.0.2.127  broadcast
192.0.2.128  network
192.0.2.191  broadcast
192.0.2.192  network
192.0.2.255  broadcast
```

Four subnets, 64 addresses each, 62 usable hosts each after dropping the network and broadcast addresses.

## Working it backwards

The exam question is usually "which subnet does this host belong to?" Given `192.0.2.100/26`:

1. Mask is /26, interesting octet 192, block size 64.
2. Count by 64 until you pass 100. 0, 64, **128**. Passed it, so back up one.
3. Network is `192.0.2.64`. Broadcast is one below the next network: `192.0.2.127`.
4. Usable range is `192.0.2.65` to `192.0.2.126`.

No calculator, no chart. About eight seconds once it's habit.

## Where I still slow down

/30s on point-to-point links. Block size 4, two usable hosts, and I still catch myself counting on my fingers to confirm `198.51.100.9` sits in `198.51.100.8/30` with `.10` as the only other usable address. Correct, just not automatic yet.

The other one is remembering the interesting octet moves. For a /18 the block size lands in the **third** octet. Same `256 - 192 = 64`, but now the subnets step `203.0.113.0` and the third octet climbs by 64. Same arithmetic, different column.

Every subnetting question I've gotten wrong was because I did the math in the wrong octet. Not because I did the math wrong.

## What's working

Ten questions a day, written by hand, no calculator, mask picked at random between /8 and /30. Writing it out is doing something clicking through a quiz app wasn't. Probably just that it's slow enough to notice my own mistakes.
