// function to Expands the clicked box
function toggleBox(box) {
  const boxes = document.querySelectorAll(".box");
  if (!box.classList.contains("expanded")) {
    boxes.forEach((b) => b.classList.remove("expanded"));
    box.classList.add("expanded");


     // Get the price of the selected box
     const price = parseFloat(box.getAttribute("data-price"));

     // Update the total dynamically
     const totalElement = document.querySelector(".bottom-delivery-price h2");
     totalElement.textContent = `Total: $${price.toFixed(2)} USD`;
  }
}

// Close expanded boxes when clicking outside
document.addEventListener("click", (event) => {
  const boxes = document.querySelectorAll(".box");
  const clickedInsideBox = event.target.closest(".box");

  // Remove the "expanded" class from all boxes
  if (!clickedInsideBox) {
    boxes.forEach((b) => b.classList.remove("expanded"));
  }
});
// for changing the color of the box
function changeColor(event, color) {
  event.stopPropagation();
  event.target.closest(".box").style.backgroundColor = color;
}

// Change the size of a box
function changeSize(event, size) {
    event.stopPropagation(); // for stopp event

    // Adjust the box width based on the selected size
  const box = event.target.closest(".box");
  if (size === "large") {
    box.style.width = "300px";
  } else if (size === "medium") {
    box.style.width = "250px";
  } else {
    box.style.width = "200px";
  }
}

//greeting function
const greeting = ()=>{
    alert("Thanks for click! Code by Vishal saini, have a good day!")
}