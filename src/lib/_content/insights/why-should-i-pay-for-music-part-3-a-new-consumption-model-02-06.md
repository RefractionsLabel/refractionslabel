---
title: "Why Should I Pay for Music?, Part 3: A New Consumption Model"
date: 2026-06-02T12:00:00.000+01:00
description: >
  When the wheel of fashion turns once more, and the MP3 player returns to the
  drawer from whence it came, how does the desire for intentionality live on? As
  a member of Gen Z myself, this desire for intentionality is something I have
  personally felt. Over the past year or so I have iteratively developed a
  system that addresses not just this urge, but other elements of how I consume
  music that I felt the modern digital music industry had not adequately dealt
  with. In part 1 of this series, I explored my own attitudes towards music
  consumption, and expressed the following: To this day I still sit with a
  tension when it comes to paying for music — a discomfort with something that
  feels unnatural to me.
author: Joe Parker
---
In part 2 of this series, we looked at the recent resurrection of the MP3 player, and how this trend embodies a wider growing desire for increased intentionality in the music listening process. Whilst certainly a clear renaissance for the pocket player, part of this may well be driven by the parallel renaissance of Y2K fashion amongst Gen Z. When the wheel of fashion turns once more, and the MP3 player returns to the drawer from whence it came, how does this desire for intentionality live on?

As a member of Gen Z myself, this desire for intentionality is something I have personally felt. Over the past year or so I have iteratively developed a system that addresses not just this urge, but other elements of how I consume music that I felt the modern digital music industry had not adequately dealt with.

In part 1 of this series, I explored my own attitudes towards music consumption, and expressed the following:

> *To this day I still sit with a tension when it comes to paying for music — a discomfort with something that feels unnatural to me.*

Now don’t get me wrong, I have always been willing to spend money on music, having regularly bought vinyl and attended music events for the past decade. I like paying for music, but there has always been a gap between the cost of digital music and my perceived value of it that I have not been able to bridge. The homogeneity of a digital file, the ubiquity of free access, the spaceless nature of something that occupies nothing more than a few microns of flash memory in the real world; these are features of something as abundant, as present, and as economically valueless as the air we breathe.

I suppose piracy has been my mother tongue, the native language with which I communicated with music in my formative years. It is, and probably always will be to some extent, the lens through which my engagement with music takes place. Today however, as somebody who feels both a personal responsibility to pay for what I consume, and a professional obligation to find solutions to the value gap of digital music, I find myself seeking to learn a second language, the lingua franca of the industry inside which I now operate: money.

Though piracy may be my mother tongue, the way I have consumed music has not remained static. Like most people, I eventually moved my consumption habits over to music streaming. Gabe Newell of Valve once said that “piracy is almost always a service problem and not a pricing problem”. Just as Steam converted many pirates into paying customers of video games by outcompeting the piracy experience, Spotify had done the same for me with music. For years I was content with paying for a music subscription, and was happy in the knowledge that I had finally found a way to bridge the value gap.

This happiness with streaming was never absolute however. I was always uncomfortable with how little remuneration rights holders received from consumption on the platform, believing that the low subscription fees undersold the true value of the service. I remember first hearing about Deezer’s User-Centric Payment System (UCPS) initiative back in 2019, and keenly awaiting the introduction of a fairer payment model across DSPs. Alas, it is now 2026 and UCPS has never come to pass, with platforms still operating a payment model that funnels most of your subscription fee to music you’ve never listened to, much of which is controlled and administered by the majors.

Beyond my economic grievances, a more fundamental problem with music streaming slowly presented itself over the years. Unlike Steam, where users purchase games (or, more accurately, licenses), with Spotify you own nothing. Your subscription fee grants you access to a music catalogue and a license to listen, but it is only ever access to a music library that isn’t yours — one which you cannot control, and could lose access to at any moment. The inability for me to add music to this library which was not already present, or to stop music from being removed, made it clear to me that this was not a true successor to the 20th century concept of a music library, but instead an inferior substitute — one which has done away with intentionality and replaced it with algorithmic optimisation.

These two issues ultimately proved to be the primary motivators for my ditching of Spotify, and the subsequent development of the system I now use. In the interest of preventing this Insight from turning into something resembling a setup guide, I will try and keep the overview of this system brief.

My music library, including both my pre- and post-Spotify collection, currently lives on an old Mac Mini operating as a Jellyfin server. From this server I can stream my library losslessly, at home or elsewhere, via wifi or data, to whatever device I desire, just as any other streaming service. This library is built primarily by piracy, with new music regularly downloaded and added as and when I come across it. As I stream, a plugin tracks what I have listened to, when and for how long. Every month, I take this raw data, run it through Claude, and process it to return all of the tracks that have met certain criteria (currently 8+ plays of at least 30s). All of the music that meets these criteria is then purchased, usually via Bandcamp or Beatport depending on availability.

Using this system, this year to May I have spent £208.79 on recorded music. In comparison, if I were still using Spotify, I would have spent £64.95 over the same period. This represents a 221% increase in expenditure, using a system that has been developed to retain the benefits of both piracy and streaming, whilst removing many of the drawbacks inherent to both. With it, I have the freedom to engage with and build my library in my native language, and a stronger and much fairer system of remuneration for music that I have genuinely engaged with. This is a living project, one which is subject to change at any time. The criteria set are what currently feel to me to be reflective of meaningful engagement, but are by no means set in stone. I recognise the grey zone I sit in with this system, being simultaneously the consumer and arbiter of value, but it is to me a much more practical balance of ownership, consumption and remuneration than those which I engaged with previously. I have, in effect, implemented my own UCPS, but one with no upper limit to how much I spend on music in a given month.

With my system, the average purchase price for a track averages at £1.64. After VAT (20%) and platform fees (averaged at 12.5%), the rights holder receives a figure of £1.20. If we take the common estimate of one stream being worth $0.004 (whilst not how Spotify payment calculations actually work, it at least allows for an indicative figure), it would take 404 streams for the rights holder to receive the same payment from Spotify. With my system, it takes only 8 — 98% fewer streams. What’s more, with my system, 73.1% of the money I spend makes it to the rights holders of the music I have actually listened to. With Spotify, after VAT (20%) and platform fees (30%), only 58% of your subscription enters the collective pot, with the lion’s share then distributed to music you never listened to.

As this system has evolved, I’ve found myself wondering if it could function as a music consumption model for a new DSP in the market. Would it be too complex for those who aren’t as obsessed with the business of music as I am? Would the open-ended nature of monthly spend scare people off? Could it be gamed? How would rights holders view it? These questions all remain unanswered for now, but someday in the future I may well seek to answer them.

**[Click here to read Why Should I Pay for Music?, Part 1: Raised on Piracy](https://refractionslabel.com/insights/why-should-i-pay-for-music-part-1-raised-on-piracy-07-04)**

**[Click here to read Why Should I Pay for Music?, Part 2: Returning to Intentionality](https://refractionslabel.com/insights/why-should-i-pay-for-music-part-2-returning-to-intentionality-05-05)**

Want future insights delivered straight to your inbox? Subscribe to the Refractions mailing list.
