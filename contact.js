const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewerName").value;
    const text = document.getElementById("reviewText").value;
    
    const div = document.createElement("div");
    div.classList.add("review-item");
    div.innerHTML = `<strong>${name}:</strong> ${text}`;
    
    reviewsList.prepend(div);
    reviewForm.reset();
    alert("Thank you for your review!");
});