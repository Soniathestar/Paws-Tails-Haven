alert("JS is working");

const heading = document.getElementById("Headerone");
if (heading) {
  const text = heading.textContent;
  heading.textContent = "";

  for (let char of text) {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }

    span.style.display = "inline-block";
    heading.appendChild(span);
  }
}


// SERVICES CARD DETAILS
function showService(type) {
  const detailsText = document.getElementById("detailstext");
  const detailsBox = document.getElementById("servicedetails");

  if (!detailsText || !detailsBox) return;

  const info = {
    grooming:
      "At Paws&Tails Haven, grooming is more than just a bath. It is a relaxing, pampering experience tailored to your dog's unique needs. Our gentle, experienced groomers ensure every pup feels calm, comfortable and cared for from start to finish. From refreshing baths and stylish trims to nail care and coat treatments, we help your dog look great, feel fresh and walk out wagging with confidence.",
    boarding:
      "Leaving our dog behind doesn't have to be stressful. Our boarding facilities offer a safe, cozy, home-like environment where your dog receives plenty of love, playtime and attention. With clean spaces, regular exercise and personalized care routines, we treat every guest like family, so you can travel with peace of mind knowing your dog is happy and well cared for.",
    training:
      "Our training programs are designed to strengthen the bond between you and your dog while building confidence and good behavior. Whether working with a playful puppy or an adult dog in need of guidance, our positive reinforcement approach encourages learning in a fun and supportive way. From basic obedience to behavior improvement, we help dogs become well-mannered.",
    adoption:
      "At Paws&Tails Haven, we believe every dog deserves a loving forever home. Our adoption and rehoming program focuses on carefully matching dogs with families that suit their personality, energy level, and needs. We support both the dog and the adopter throughout the transition, ensuring a smooth and joyful beginning to a lifelong bond filled with love and companionship.",
    photography:
      "Capture the heart, personality, and charm of your furry friend with our professional dog photography sessions. Whether playful, shy, or full of sass, we create a relaxed environment that allows your dog's true character to shine. The result? Beautiful, timeless photos you will treasure forever, perfect for keepsakes, gifts, or celebrating your dog's story."
  };

  if (info[type]) {
    detailsText.textContent = info[type];

    detailsBox.style.animation = "none";
    detailsBox.offsetHeight;
    detailsBox.style.animation = null;
  }
}


const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name")?.value,
      email: document.getElementById("email")?.value,
      phone: document.getElementById("phone")?.value,
      service: document.getElementById("service")?.value,
      message: document.getElementById("message")?.value
    };

    localStorage.setItem("serviceRequest", JSON.stringify(formData));

    alert("Your service request has been submitted successfully!");
    form.reset();
  });
}
