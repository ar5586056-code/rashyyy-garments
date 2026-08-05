const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});

const shopNow = document.querySelector(".hero button");

shopNow.addEventListener("click", () => {
  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
});
