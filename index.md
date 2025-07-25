---
layout: about
post: ./_includes/publication.html
---

# About 
{: .no-collapse}
I'm an incoming CS PhD student in the [POPV research group](https://www.bu.edu/cs/research-groups/popv/) at Boston University co-advised by [Ankush Das](https://ankushdas.github.io) and [Marco Gaboardi](https://cs-people.bu.edu/gaboardi/). I did my undergrad at [Cornell University](https://journals.library.cornell.edu/index.php/CURJ/article/view/696), where I studied Computer Science and Philosophy.

You can find links to some of my hobbies in the navigation bar of this site. I enjoy [digital photography](https://janpaul.pl/photography.html), and am an aspiring amateur birder after being motivated by [Cornell's Ornithology Lab](https://www.birds.cornell.edu/home/). I am also an avid enthusiast of 20th century history, with some favorite topics of interest being [Irish revolutionary history](https://archive.org/details/nationnotrabblei0000ferr), Polish shock therapy via the [Balcerowicz Plan](https://polishhistory.pl/the-balcerowicz-plan-an-economic-leap-into-the-unknown/), and the fall of [Francoist Spain](https://origins.osu.edu/milestones/death-franco-spanish-civil-war).

# Research

I am not convinced by the demanding workflow of current suite of languages that require manual work in a specification language on top of the implementation language. These offload the intellectual challenge of coming up with static guarantees to developers, many of whom either don't have the domain-specific expertise or the *time* to become reasonable proof engineers. *This has motivated my main interests: programming languages, formal methods for software engineering, and automated reasoning*. 

To address this issue, I develop type systems to guarantee behavioral soundness while easing/eliminating the need of directly specifying code behavior. I want to assure all well-*typed* and well-*constructed* programs imply well-*behaved* programs. I primarily make use of gradual, dependent/refinement, and probabilistic/plausibilistic types, in tandem with proof mining, automation, and repair.

## (WIP) I am currently working on:
<u>Plausibilistic type systems</u>: Qualitative notion of probabilistic type systems (such as [PReST](https://dl.acm.org/doi/10.1145/3729317)) using [Halpern's plausibility measures](https://www.cs.cornell.edu/home/halpern/papers/plaus.pdf) for a more generalized belief model enriched with default reasoning. Started playing around with this idea with [Sound Default-Typed Scheme](https://conf.researchr.org/home/icfp-splash-2025/scheme-2025).

<u>Gradual refinement types</u>: Generalizing [Igarashi's notion of gradual session types](https://homepages.inf.ed.ac.uk/wadler/papers/gradsess/gradsess.pdf) to refinement types.

<u>Automatic type-based verification</u>: Automating refinement type systems with monadic effects with [Hiroshi's Constraint Horne Clauses solver](https://arxiv.org/pdf/1610.06768).

## I have previously worked on:
<u>NetQIR</u>: I interned with the [NASA Langley's Formal Methods Research Program](https://shemesh.larc.nasa.gov/fm/index.html) as part of the Safety-Critical Avionics Systems Branch under the advisory of [Alwyn Goodloe](https://shemesh.larc.nasa.gov/people/aeg/). We mechanized proofs in Rocq that guarantee correct behaviors behind a well-behaved implementation of a Software Defined Delay-Tolerant Network algorithm written in [P4](https://p4.org/) for [NASA's Interplanetary Overlay Network framework](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/interplanetary-overlay-network/). These guarantees are then provided to the user at the type level when written in our DSL, [NetQIR](https://popl25.sigplan.org/details/CoqPL-2025-papers/1/Formal-Verification-of-a-Software-Defined-Delay-Tolerant-Network), which compiles a subset of P4 to our verified representation for machine checking.

<u>Gradual Verification</u>: I'm a 2× [CMU REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) alumni. I worked under the advisory of [Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) in developing a [Gradual Verifier](http://www.cs.cmu.edu/~aldrich/papers/vmcai2018-gradual-verification.pdf), seeking to bridge the gap between static and dynamic verification. I worked on the first ever gradual verification tool -- [Gradual C0](https://arxiv.org/abs/2210.02428) -- and made use of gradual verification for [blockchain programming languages](https://popl24.sigplan.org/details/prisc-2024-papers/2/Gradual-Verification-for-Smart-Contracts).

<u>Calyx</u>: I worked with the  [Computer Architecture & Programming Abstractions group](https://capra.cs.cornell.edu/) at Cornell while advised by [Adrian Sampson](https://www.cs.cornell.edu/~asampson/). I studied how to reason about modelling concurrency at the hardware-level for FPGA programming in [Calyx](https://calyxir.org/) using [symbolic execution and KATs](https://github.com/calyxir/calyx/issues/2278).
> Interested in any of my ongoing research, past projects, or research philosophy? [Feel free to reach out](mailto:research@janpaul.pl)! I am also an active SIGPLAN community member, so you can probably catch me at any of the big-four SIGPLAN conferences.

# Community
I'm a member of the [Audio/Video team](https://www.sigplan.org/AV) for [SIGPLAN conferences](https://www.sigplan.org/Conferences/). While this is just volunteering work, we've come to put a considerable amount of time and effort into making conferences run as smoothly as possible! Feel free check out [SIGPLAN's official YouTube Channel](https://www.youtube.com/@acmsigplan) if you're interested in some *cool* PL videos.

<script>
  // Define an array of friends' links and their names
  const friends = [
    { name: 'Song', url: 'https://s-ye.github.io/me/' },
    { name: 'Inle', url: 'https://imbush.github.io/' },
    { name: 'Sid', url: 'https://sholalkere.github.io/' },
    { name: 'Ben', url: 'https://camto.github.io/' },
    { name: 'Sina', url: 'https://sinearc.github.io/' },
    { name: 'Elaine', url: 'https://samoyed.blog/' },
    { name: 'Alex', url: 'https://www.eecs.tufts.edu/~abai02/'},
    { name: 'John', url: 'https://j-hui.com/'},
    { name: 'Chris', url: 'https://flyingrocksquirrel.github.io/'},
    { name: 'Max', url: 'https://github.com/MaxCan-Code'},
    { name: 'Espada', url: 'https://github.com/GUIpsp'},
    { name: 'Nicole', url: 'https://ipv3.org/'},
    { name: 'Dexter', url: 'https://qtrp.org/'},
    { name: 'Nicola', url: 'https://nicolaassolini98.github.io/'},
    {name: 'Eduardo', url: 'https://github.com/eduardo-imadeira'},
    {name: 'Ethan', url: 'https://ethanrange.com/'},
    {name: 'Apoorv', url: 'https://cs.uiowa.edu/~aningle'},
    {name: 'Eloise', url: 'https://github.com/fdeitylink'}
  ];

  // Function to choose a random friend and return the URL
  function getRandomFriendURL() {
    const randomIndex = Math.floor(Math.random() * friends.length);
    return friends[randomIndex].url;
  }

  // Function to handle the link click (normal and middle-click)
  function handleLinkClick(event) {
    const randomFriendURL = getRandomFriendURL();

    // If middle mouse button is clicked or Ctrl/Command key is pressed, open in a new tab
    if (event.button === 1 || event.ctrlKey || event.metaKey) {
      window.open(randomFriendURL, '_blank'); // Open in a new tab
    } else {
      // For normal clicks, redirect in the same tab
      window.location.href = randomFriendURL;
    }

    event.preventDefault(); // Prevent default behavior of link
  }
</script>

> <p> Tired of my site? Click <a href="#" onmousedown="handleLinkClick(event);">here</a> for a random one of my friends.</p>

<center>
<img width="25%" src="assets/img/Tokuhiro_Kawai.jpg">
</center>

<center>
<a href="https://www.thegreatcat.org/the-cat-in-art-and-photos-2/cats-asian-art/tokuhiro-kawai-1971-present-japanese" style="font-size: 14px; font-family: 'Lora'">Idea of a Certain Cat 2004 -Tokuhiro Kawai (川井徳寛)</a>
</center>
