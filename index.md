---
layout: about
post: ./_includes/publication.html
---

# About
I'm an incoming CS PhD student! At one time, I did my undergraduate at Cornell University, where I studied Computer Science, Mathematics, and earned a degree in Philosophy with a concentration in Philosophy of Mathematics and Logic supervised by [Dr. Harold T. Hodes](https://philosophy.cornell.edu/harold-theodore-hodes).

I view my philosophical preparation in formal epistemology and logics as an essential framework to aid navigate my main technical interests: program synthesis and repair, programming languages theory, and formal methods for software engineering.

Personally, I'm an avid cinephile and audiophile, for which you can find a rabbit-hole of information at the top right of this page. I also enjoy [digital photography](https://janpaul.pl/photography.html), and am amateurly practicing birding after getting inspired by [Cornell's Ornithology Lab](https://www.birds.cornell.edu/home/). Some day, I want to learn to [shoot/develop film](https://qph.cf2.quoracdn.net/main-qimg-3c723b666a25d581b7c3ab149655626e), get a [US Amateur Radio License](http://www.arrl.org/what-is-ham-radio), and successfully pick an [Abloy Protec2](https://www.locksmithledger.com/locks/article/12438396/abloy-protec2-the-ultimate-locking-solution).

## Research

I find most tools for formal verification make it too uninspiring and difficult to prioritize static guarantees, especially when lightweight methods provide reasonable results in their stead (at the cost of runtime overhead). My current research involves developing practical frameworks for specification-driven program verification to ease the need/complexity of directly mechanizing code. I want to assure all well-*typed* and well-*constructed* programs imply well-*behaved* programs.

Previously, during my undergrad, I worked on—broadly—three projects:

- *RocqNet* : Advised by [Dr. Alwyn Goodloe](https://shemesh.larc.nasa.gov/people/aeg/) at [NASA's Langley Formal Methods](https://shemesh.larc.nasa.gov/fm/index.html), we mechanized proofs with Coq that model correct behaviors behind a well-behaved implementation of a Software Defined Delay-Tolerant Network's Match-Action pipeline algorithm for NASA's Interplanetary Overlay Network framework. The well-behavedness of the algorithm comes from it being implemented in our networks DSL.

- *Calyx* : Advised by [Dr. Adrian Sampson](https://www.cs.cornell.edu/~asampson/) at the [Computer Architecture & Programming Abstractions group](https://capra.cs.cornell.edu/). Here, I studied how to reason about modelling hardware-level parallelism for [Calyx](https://calyxir.org/) using symbolic execution and KATs.

- *Gradual Verification* : I'm a 2× [CMU REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) alumni. I worked under [Dr. Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) in developing a [Gradual Verifier](http://www.cs.cmu.edu/~aldrich/papers/vmcai2018-gradual-verification.pdf), seeking to bridge the gap between static and dynamic verification. I worked on the first ever gradual verification tool -- [Gradual C0](https://arxiv.org/abs/2210.02428) -- and made use of gradual verification for [blockchain programming languages](https://popl24.sigplan.org/details/prisc-2024-papers/2/Gradual-Verification-for-Smart-Contracts).

## Community

I'm a member of the Audio/Visual team for [SIGPLAN conferences](https://www.sigplan.org/AV). While this is just volunteering work, I've come to put a considerable amount of time into it, so feel free check out [SIGPLAN's official YouTube Channel](https://www.youtube.com/@acmsigplan) if you're interested in some cool PL videos!

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
    { name: 'Espada', url: 'https://mastodon.social/@GUIpsp@types.pl'}
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
