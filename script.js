const buttonReadMore = document.querySelector(".slider__read-more");
const buttonReadMoreStart = buttonReadMore.cloneNode(true);
const hiddenBlocksMd = document.querySelectorAll(".hidden-md");
const hiddenBlocksLg = document.querySelectorAll(".hidden-lg");

const clickReadMore = () => {
    let buttonClicked = false;

    return function() {
        for (let i = 0; i < hiddenBlocksMd.length; i++) {
            hiddenBlocksMd[i].classList.toggle("hidden-md");
        }
    
        for (let i = 0; i < hiddenBlocksLg.length; i++) {
            hiddenBlocksLg[i].classList.toggle("hidden-lg");
        }

        if (buttonClicked) {
            buttonReadMore.innerHTML = buttonReadMoreStart.innerHTML;
        } else {
            buttonReadMore.innerHTML = "Скрыть";
        }

        buttonClicked = !buttonClicked;
    }
}

buttonReadMore.addEventListener("click", clickReadMore());