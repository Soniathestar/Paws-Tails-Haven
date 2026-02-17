alert("JS is working");
const heading = document.getElementById("Headerone");
const text = heading.textContent;
heading.textContent = "";

for(let char of text) {
    const span = document.createElement("span");

    if(char === " "){
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = char;
    }
    span.style.display = "inline-block"


    function showService(type) {
  const detailsText = document.getElementById('detailstext');
  const detailsBox = document.getElementById('servicedetails');

  const info = {
    grooming: "At Paws&Tails, our grooming includes a full bubble bath, nail trimming, and a stylish haircut to make your pet the talk of the neighborhood.",
    boarding: "Our boarding haven provides a safe, comforable and caring environment where your dog feels right at home. With regular feeding,daily playtime and constant supervision, we ensure that your furry friend is relaxed, happy and well cared for while you are away",
    training: "Our training programs focus on positive reinforcment to help dogs develop good behavior, confidence and obedience.Each session is tailored to your dog's personality and learning pace, strengthening the bond between you and your compainion",
    adoption:"We are dedicated to giving dogs a second chance through responsible adoption and rehoming.By careful matching of dogs with loving families, we help create lasting bonds and happy forever homes",
    photography:"Our dog photography sessions capture your dog's unique pesonality in a calm and friendly setting. From playful moments to gentle expressions, we create timeless memories you'll treasure forever!"
  };

  if (info[type]){
    detailsText.innerText = info[type];
  detailsBox.style.animation = 'none';
  detailsBox.offsetHeight; 
  detailsBox.style.animation = null;
  }else {
  console.error("Service type not found"+ type);
} 
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    message: document.getElementById("additional notes").value
  };

  // Save to local storage
  localStorage.setItem("serviceRequest", JSON.stringify(formData));

  alert("✅ Your request has been saved!");

  form.reset();
});
