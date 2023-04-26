function change_icon() {
  if(document.getElementById("mode").src == "https://media.discordapp.net/attachments/861779234812461066/1100616207725506670/black-circle-emoji_dark.png?width=192&height=192"){
    document.getElementById("mode").src = "https://media.discordapp.net/attachments/861779234812461066/1100616218282577990/white-circle-emoji_light.png?width=192&height=192";
    document.getElementById("mode-sec").style.color = "#282828";
  }
  else {
    document.getElementById("mode").src = "https://media.discordapp.net/attachments/861779234812461066/1100616207725506670/black-circle-emoji_dark.png?width=192&height=192"
    document.getElementById("mode-sec").style.color = "#e6d2b5";
  }
}

function change_style() {
  if(document.getElementById("substack").classList.contains("substack")) {
    elements = document.getElementsByClassName("substack")
    for(let i=0; i < elements.length; i++) {
      elements[i].classList.toggle('substack_dark');
    }
  }
  if(document.getElementById("default").classList.contains("default")) {
    elements = document.getElementsByClassName("default")
    for(let i=0; i < elements.length; i++) {
      elements[i].classList.toggle('default_dark');
    }
  }
  if(document.getElementById("heading").classList.contains("heading")) {
    elements = document.getElementsByClassName("heading")
    for (let i =0; i < elements.length; i++) {
      elements[i].classList.toggle('heading_dark');
    } 
  }
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function change_headshot() {
  if(document.getElementById("headshot").src == "https://media.discordapp.net/attachments/861779234812461066/1100542963253260328/headshot_2.png?width=576&height=604") {
    document.getElementById("headshot").src = "https://media.discordapp.net/attachments/861779234812461066/1100541875934462074/headshot.jpg?width=576&height=604"
  }
  else if(document.getElementById("headshot").src == "https://media.discordapp.net/attachments/861779234812461066/1100541875934462074/headshot.jpg?width=576&height=604") {
    document.getElementById("headshot").src = "https://media.discordapp.net/attachments/861779234812461066/1100542953799307264/headshot_3.png?width=576&height=604"
  }
  else {
    document.getElementById("headshot").src = "https://media.discordapp.net/attachments/861779234812461066/1100542963253260328/headshot_2.png?width=576&height=604"
  }
}