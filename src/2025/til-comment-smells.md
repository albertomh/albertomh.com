---
layout: post
title: 'TIL: comment smells'
blurb: On moving expectations out of comments and surfacing them as code.
createdAt: '2025-05-14'
path: /2025/til-comment-smells
attribution: 'Image: Fig. 113 from <a href="https://archive.org/details/plainhometalkabo00foot/page/n11/mode/2up" target="_blank"><em>Plain Home Talk</em> (1896)</a> by Edward B. Foote, out of copyright.'
tags: ['post', 'til']
---

Do you know that feeling of revelation when someone labels a concept you haven't quite put your finger on yet?

I recently experienced it when Matt Godbolt introduced me to the idea of 'comment smells'. This was in his talk titled 'Correct by Construction: APIs That Are Easy to Use and Hard to Misuse', which is worth a listen in its entirety.

Matt brings up comments in code that instruct callers of an API to invoke additional setup or teardown tasks for said API to work.
Rather than burdening callers with reading & acting on instructions held in comments, he urges programmers to surface these constraints in the API itself, i.e. via code, contracts and function signatures.  
Turn messages for humans into messages for the compiler (preferably ones that raise compile-time errors!).

Matt identifies 'apologetic comments' as an anti-pattern, and as prime candidates for elimination and encoding into the API itself.

The whole talk is worth watching, even for someone who's never written a line of C++ in their life.  
The talk is <a href="https://youtu.be/nLSm3Haxz0I" target="_blank">available on YouTube</a>, and it is <a href="https://youtu.be/nLSm3Haxz0I?feature=shared&t=1870" target="_blank">at 31:10</a> that 'comment smells' are tackled.
