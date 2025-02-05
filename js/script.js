document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайт загружен!");
    
    // Добавляем небольшую анимацию появления блока hero
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        hero.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
});
