const body = document.querySelector("body");
const myImg = document.querySelector("#point");

body.addEventListener("mousemove", (e) => {

    /* Below console's print same result

    console.log("Just Y: "+e.y);
    console.log("Client Y: "+e.clientY);
    console.log("Page Y: "+e.pageY);

    console.log("Just X: "+e.x);
    console.log("Client X: "+e.clientX);
    console.log("Page X: "+e.pageX);

    */

    myImg.style.top = `${e.y - 20}px`; // set top position {e.y}, {e.clientX}, {e.pageX}
    myImg.style.left = `${e.x - 10}px`; // Set left position {e.x}, {e.clientX}, {e.pageX}
    myImg.style.display = 'block'; 
});

/*
Important Points and Links:

=> ! Ensure the image is positioned absolutely or fixed

=> Tailwind CSS => https://tailwindcss.com/
=> W3 School Link => https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove
=> mdn link mousemove event => https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
=> mousemove logo image png => https://www.google.com/search?sca_esv=0517884da1645327&sca_upv=1&sxsrf=ADLYWILuOeE4Ta5AnwZfHP9OdjFOWeLhKw:1718286351972&q=mousemove+logo+image+png&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2joZDvir2QxhZkTA8rK1etu4ohtqlTKXOQ56HmFa2r_epq2RbbM1SDK6eEc9crFqbSnud8wN4XSfS6PJyHzxA3cSfXZkBLxJ9sIfdwpsP1KrElOIL-Ch8uIaUWyVJ98xg49rEmkS&sa=X&ved=2ahUKEwiNyIa929iGAxUeVqQEHab6CtgQtKgLegQIDBAB&biw=1366&bih=607&dpr=1
*/