---
layout: about
post: ./_includes/publication.html
---

# About
I'm an incoming CS PhD student in the [POPV research group](https://www.bu.edu/cs/research-groups/popv/) at Boston University co-advised by [Ankush Das](https://ankushdas.github.io) and [Marco Gaboardi](https://cs-people.bu.edu/gaboardi/).

At one time, I did my undergrad at [Cornell University](https://journals.library.cornell.edu/index.php/CURJ/article/view/696), where I studied Computer Science, Mathematics, and Analytical Philosophy.

> I view my philosophical preparation in formal epistemology and logics as an essential framework to aid navigate my main technical interests: programming languages, automated reasoning, and formal methods for software engineering.

Personally, I'm an avid cinephile and audiophile, for which you can find a rabbit-hole of information at the top right of this page. I also enjoy [digital photography](https://janpaul.pl/photography.html), and am amateurly practicing birding after getting inspired by [Cornell's Ornithology Lab](https://www.birds.cornell.edu/home/). Some day, I want to learn to [shoot/develop film](https://qph.cf2.quoracdn.net/main-qimg-3c723b666a25d581b7c3ab149655626e), get a [US Amateur Radio License](http://www.arrl.org/what-is-ham-radio), and successfully pick an [Abloy Protec2](https://www.locksmithledger.com/locks/article/12438396/abloy-protec2-the-ultimate-locking-solution).

# Research

I am uninspired by our current suite of languages that make use of manually specified formal specs. These tend to offload the intellectual challenge of coming up with exhaustive static guarantees to developers, those which don't have the domain-specific expertise or simply *time* to become reasonable proof engineers.

> I develop type systems to guarantee behavioral soundness while easing the need/complexity of directly mechanizing code. I want to assure all well-*typed* and well-*constructed* programs imply well-*behaved* programs.

Previously, during my undergrad, I worked on—broadly—three projects:

- <u>RocqNet</u>: Advised by [Alwyn Goodloe](https://shemesh.larc.nasa.gov/people/aeg/) at [NASA's Langley Formal Methods](https://shemesh.larc.nasa.gov/fm/index.html), we mechanized proofs with Coq that model correct behaviors behind a well-behaved implementation of a Software Defined Delay-Tolerant Network's Match-Action pipeline algorithm for NASA's Interplanetary Overlay Network framework. The well-behavedness of the algorithm comes from it being implemented in our networks DSL.

- <u>Calyx</u>: Advised by [ Adrian Sampson](https://www.cs.cornell.edu/~asampson/) at the [Computer Architecture & Programming Abstractions group](https://capra.cs.cornell.edu/). Here, I studied how to reason about modelling hardware-level parallelism for [Calyx](https://calyxir.org/) using symbolic execution and KATs.

- <u>Gradual Verification</u>: I'm a 2× [CMU REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) alumni. I worked under [Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) in developing a [Gradual Verifier](http://www.cs.cmu.edu/~aldrich/papers/vmcai2018-gradual-verification.pdf), seeking to bridge the gap between static and dynamic verification. I worked on the first ever gradual verification tool -- [Gradual C0](https://arxiv.org/abs/2210.02428) -- and made use of gradual verification for [blockchain programming languages](https://popl24.sigplan.org/details/prisc-2024-papers/2/Gradual-Verification-for-Smart-Contracts).

# Community

I'm a member of the [Audio/Video team](https://www.sigplan.org/AV) for [SIGPLAN conferences](https://www.sigplan.org/Conferences/). While this is just volunteering work, I've come to put a considerable amount of time into it, so feel free check out [SIGPLAN's official YouTube Channel](https://www.youtube.com/@acmsigplan) if you're interested in some cool PL videos!

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

> <p> Tired of my site? Click <a href="#" onmousedown="handleLinkClick(event);">here</a> for a random one of my friends.</p>

<center>
<img width="25%" src="assets/img/Tokuhiro_Kawai.jpg">
</center>

<center>
<a href="https://www.thegreatcat.org/the-cat-in-art-and-photos-2/cats-asian-art/tokuhiro-kawai-1971-present-japanese" style="font-size: 14px; font-family: 'Lora'">Idea of a Certain Cat 2004 -Tokuhiro Kawai (川井徳寛)</a>
</center>
