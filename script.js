function change_icon() {
  if(document.getElementById("mode").src == "https://img.icons8.com/emoji/512/white-circle-emoji.png"){
    document.getElementById("mode").src = "https://img.icons8.com/emoji/256/black-circle-emoji.png";
    document.getElementById("mode-sec").style.color = "#e6d2b5";
  }
  else {
    document.getElementById("mode").src = "https://img.icons8.com/emoji/512/white-circle-emoji.png"
    document.getElementById("mode-sec").style.color = "#282828";
  }
}

function change_style() {
  if(document.getElementById("substack").classList.contains("substack")) {
    elements = document.getElementsByClassName("substack")
    for(let i=0; i < elements.length; i++) {
      elements[i].classList.toggle('substack_light');
    }
  }
  if(document.getElementById("default").classList.contains("default")) {
    elements = document.getElementsByClassName("default")
    for(let i=0; i < elements.length; i++) {
      elements[i].classList.toggle('default_light');
    }
  }
  if(document.getElementById("heading").classList.contains("heading")) {
    elements = document.getElementsByClassName("heading")
    for (let i =0; i < elements.length; i++) {
      elements[i].classList.toggle('heading_light');
    } 
  }
  var element = document.body;
  element.classList.toggle("light-mode");
}