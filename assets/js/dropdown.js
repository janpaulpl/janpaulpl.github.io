window.onload = () => {
  const main = document.getElementById("main");
  const nav = document.getElementById("nav");

  const profileContactToggle = document.getElementById("contact-toggle");
  const profileContact = document.getElementById("contact");

  profileContactToggle.onclick = () => {
    const isClosed = profileContact.style.height === "0em" || !profileContact.style.height;

    profileContact.style.height = isClosed ? "13em" : "0em";

  }

  main.onscroll = () => {
    if (main.scrollTop > 10) {
      nav.classList.add("nav-scrolled")
    }else {
      nav.classList.remove("nav-scrolled")
    }
  }
}

