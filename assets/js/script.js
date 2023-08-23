const choice = document.querySelector(".choice-input");

const textContainer = document.querySelector(".text-container");
const texts = document.querySelectorAll(".text");

const createTags = input => {
  const tags = input.split(',').filter(tag => {
    if(tag.trim() !== '')
      return tag.trim();
  });

  textContainer.innerHTML = '';

  tags.forEach(tag => {
    const span = document.createElement("span");
    span.classList.add("text");
    span.innerText = tag;
  
    textContainer.appendChild(span);
  });
}

const handleRandom = () => {
    const interval = setInterval(() => {
      const randomTag = randomTagPicker();
      randomTag.classList.add("active");
  
      setTimeout(() => {
        randomTag.classList.remove("active");
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      const randomTag = randomTagPicker();
      randomTag.classList.add("active");
    }, 4000);

}

const handleChoices = e => {
  // if(e.target.value.length > 2) // avoid for less than 3 characters 
  createTags(e.target.value);

  if(e.key === 'Enter'){
    choice.value = '';
    handleRandom();
  }
}

choice.addEventListener("keyup", (e) => handleChoices(e));

function randomTagPicker(){
  const texts = document.querySelectorAll(".text");
  return texts[Math.floor(Math.random() * texts.length)];
}

