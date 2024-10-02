---
layout: about
post: ./_includes/publication.html
---

# About
I'm a Senior (applying to Doctoral Programs!) at [Cornell University](https://www.cornell.edu/) working towards degrees in [Computer Science](https://cis.cornell.edu/) with a concentration in [Programming Languages](https://pl.cs.cornell.edu/) & [Philosophy](https://philosophy.cornell.edu/) with a concentration in [Logic advised by Dr. Harold T. Hodes](https://philosophy.cornell.edu/harold-theodore-hodes).

My main research interest involves developing practical frameworks for program verification by creating a set of _canonical_ and _reusable_ representations for domain-specific programs to ease the need to directly mechanize code with automated theorem provers. You can find my [research statement here!](https://janpaul.pl/assets/pdfs/research_stmt.pdf)

## Research

I'm currenty working with [Dr. Alwyn Goodloe](https://shemesh.larc.nasa.gov/people/aeg/) at [NASA's Langley Formal Methods](https://shemesh.larc.nasa.gov/fm/index.html). We're mechanizing proofs with Coq that model correct behaviors behind a _well-behaved_ implementation of a Software Defined Delay-Tolerant Network's Match-Action pipeline algorithm for NASA’s Interplanetary Overlay Network framework. The well-behavedness of the algorithm comes from it being implemented in our networks DSL: _NetQIR_ !

I'm also working with [Dr. Adrian Sampson](https://www.cs.cornell.edu/~asampson/) in the [Calyx project](https://calyxir.org/). Here, I'm figuring out how to model hardware-level parallelism using Kleene Algebra with Tests.

In addition, I'm a 2× [CMU REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) alumni. I worked under [Dr. Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) in developing a [Gradual Verifier](http://www.cs.cmu.edu/~aldrich/papers/vmcai2018-gradual-verification.pdf), seeking to bridge the gap between static and dynamic verification. I worked on the first ever gradual verification tool -- [Gradual C0](https://arxiv.org/abs/2210.02428) -- and made use of gradual verification for [blockchain programming languages](https://popl24.sigplan.org/details/prisc-2024-papers/2/Gradual-Verification-for-Smart-Contracts).

## Community

Outside of Cornell, I'm part of the Audio/Visual team for [SIGPLAN conferences](https://www.sigplan.org/AV). While this is just volunteering work, I've come to put a considerable amount of time into it, so feel free check out [SIGPLAN's official YouTube Channel](https://www.youtube.com/@acmsigplan) if you're interested in some cool PL videos!

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
    { name: 'Max', url: 'https://conf.researchr.org/profile/conf/maxsun'},
    { name: 'Espada', url: 'https://x.com/guiespada'}
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

<!-- Add the button or clickable link somewhere in your HTML -->
<p>Tired of my site? Click <a href="#" onmousedown="handleLinkClick(event);">here</a> for a random one of my friends.</p>

<center>
<img width="25%" src="assets/img/Tokuhiro_Kawai.jpg">
</center>

<center>
<a href="https://www.thegreatcat.org/the-cat-in-art-and-photos-2/cats-asian-art/tokuhiro-kawai-1971-present-japanese" style="font-size: 14px; font-family: 'Lora'">Idea of a Certain Cat 2004 -Tokuhiro Kawai (川井徳寛)</a>
</center>
