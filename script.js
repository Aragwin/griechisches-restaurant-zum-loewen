//animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-down');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsUp = document.querySelectorAll('.hidden-up');
hiddenElementsUp.forEach((el) => observer.observe(el));

const hiddenElementsUpDelay = document.querySelectorAll('.hidden-up-delay');
hiddenElementsUpDelay.forEach((el) => observer.observe(el));

const hiddenElementsOpacity = document.querySelectorAll('.hidden-opacity');
hiddenElementsOpacity.forEach((el) => observer.observe(el));