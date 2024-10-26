const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 1;


const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 1) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}
nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);


const cardMessage = document.querySelector(".cardMessage");
let textarea = document.querySelector(".cardMessage .textarea");
let sendButton = document.querySelector("#send");
    if (textarea.checkValidity()) {
      cardMessage.classList.add("sent");
      fetch("/proccess.php", {
        method: "POST",
        body: JSON.stringify({text: textarea.value })
      });
    }
});

function checkHashOnLoad() {

  var hash = new URL(decodeURIComponent(window.location)).hash;
  if (hash) {
    const targetId = hash;
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      document.querySelectorAll(".is-active").forEach(activeElement => {
        activeElement.classList.remove("is-active");
      });
      buttons.forEach(btn => {
        btn.classList.remove("is-active");
      });
      const matchingButton = document.querySelector(`button[data-section="${targetId}"]`);
      if (matchingButton) {
        matchingButton.classList.add("is-active");
      }

      targetSection.classList.add("is-active");
      
      const cardElement = targetSection.closest(".card");
      if (cardElement) {
        cardElement.classList.add("is-active");
      }
    }
  }
}
checkHashOnLoad();
