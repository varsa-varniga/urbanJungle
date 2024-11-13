/*
const images = [
    'hero 2.jpg', 
    'hero 3.jpg',
    'hero 4.jpg',
    'hero-1.jpg'
  ];
  
  let currentImageIndex = 0; // Keep track of the current image index
  const heroSection = document.querySelector('.hero'); // Select the hero section
  const intervalTime = 7000; // Time in milliseconds for each slide (5000ms = 5s)
  
  // Function to change the background image
  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image
    heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`; // Update the background image
  }
  
  // Start the interval for changing images
  setInterval(changeBackgroundImage, intervalTime);
  */
  

function updateBreadcrumb(selectedItem) {
    document.getElementById('breadcrumb').innerHTML = `Home / ${selectedItem}`;
}


window.onload = function() {
    // Hide all plant sections at the start
    document.getElementById('plantSection').classList.add('hidden');
    document.getElementById('bonsai-plants').classList.add('hidden');
    document.getElementById('succulentsSection').classList.add('hidden');
    document.getElementById('airPurifyingSection').classList.add('hidden');
};

document.addEventListener("DOMContentLoaded", function () {
    const plantsButton = document.getElementById('bestpick-plants'); // ID of the Best Picks Plants item
    const bestPicksSection = document.getElementById('best-picks'); // ID of Best Picks section
    const plantsSection = document.getElementById('plantSection'); // ID of Plants section
    const plantbackbutton=document.getElementById('plantbackbutton');

    // Add event listener to "Plants" button in "Best Picks"
    plantsButton.addEventListener('click', function () {
        // Hide the Best Picks section
        bestPicksSection.classList.add('hidden');
        // Show the Plants section
        plantsSection.classList.remove('hidden');
    });

    plantbackbutton.addEventListener('click', function () {
        // Hide the Best Picks section
        bestPicksSection.classList.remove('hidden');
        // Show the Plants section
        plantsSection.classList.add('hidden');
    });



});


//bonsai
document.addEventListener("DOMContentLoaded", function () {
    const bonsaiSection = document.getElementById("bonsai-plants");
    const bonsaiButton = document.getElementById("bonsai"); 
    const bonsaiBackButton = bonsaiSection.querySelector("#bonsaiBackButton");
    

    // Show only the Bonsai section when Bonsai is clicked
    bonsaiButton.addEventListener("click", function () {
        bonsaiSection.classList.remove("hidden");
        plantsSection.classList.add('hidden');
    });

    // Go back to the main view when the back button is clicked
    bonsaiBackButton.addEventListener("click", function () {
        bonsaiSection.classList.add("hidden");
        plantsSection.classList.remove('hidden');
    });
});








/*
// air-purifying plants 
document.querySelector('#air-purifying').addEventListener('click', function() {
    const airPurifyingSection = document.getElementById('air-purifying-plants');
    const plantTypesSection = document.getElementById('plant');
    const heroSection = document.querySelector('.hero');
    const aboutsec = document.getElementById('aboutsection');


    // Hide plant types and hero sections, show air-purifying section
    plantTypesSection.classList.add('hidden');
    heroSection.classList.add('hidden');
    airPurifyingSection.classList.remove('hidden');
    aboutsec.classList.add('hidden');
});

// Back button functionality to restore initial view
document.getElementById('back-button').addEventListener('click', function() {
    const airPurifyingSection = document.getElementById('air-purifying-plants');
    const plantTypesSection = document.getElementById('plant');
    const heroSection = document.querySelector('.hero');
    const aboutsec = document.getElementById('aboutsection');

    // Hide air-purifying section and show hero and plant types sections
    airPurifyingSection.classList.add('hidden');
    plantTypesSection.classList.remove('hidden');
    heroSection.classList.remove('hidden');
    aboutsec.classList.remove('hidden');
});




//succulents
document.addEventListener("DOMContentLoaded", function () {
    const succulentSection = document.getElementById("succulent");
    const plantTypesSection = document.getElementById("plant");
    const heroSection = document.querySelector(".hero"); // Assuming you have a hero section
    const succulentButton = document.getElementById("succulents"); // The succulent item in the plant types section
    const sbackButton = succulentSection.querySelector("#succulents-back-button");
    const aboutsec = document.getElementById('aboutsection');

    // Show only the Bonsai section when Bonsai is clicked
    succulentButton.addEventListener("click", function () {
        succulentSection.classList.remove("hidden");
        plantTypesSection.classList.add("hidden");
        aboutsec.classList.add('hidden');
        heroSection.classList.add("hidden");
    });

    // Go back to the main view when the back button is clicked
    sbackButton.addEventListener("click", function () {
        succulentSection.classList.add("hidden");
        plantTypesSection.classList.remove("hidden");
        aboutsec.classList.remove('hidden');
        if (heroSection) heroSection.classList.remove("hidden");
    });
});



//flowering plants
document.addEventListener("DOMContentLoaded", function () {
    const flowerSection = document.getElementById("flower");
    const plantTypesSection = document.getElementById("plant");
    const heroSection = document.querySelector(".hero"); // Assuming you have a hero section
    const flowerButton = document.getElementById("flowering plants"); 
    const fbackButton = flowerSection.querySelector("#flowers-back-button");
    const aboutsec = document.getElementById('aboutsection');

    // Show only the Flowering section when Flowering Plants is clicked
    flowerButton.addEventListener("click", function () {
        flowerSection.classList.remove("hidden");
        plantTypesSection.classList.add("hidden");
        aboutsec.classList.add("hidden");
        heroSection.classList.add("hidden");
    });

    // Go back to the main view when the back button is clicked
    fbackButton.addEventListener("click", function () {
        flowerSection.classList.add("hidden");
        plantTypesSection.classList.remove("hidden");
        aboutsec.classList.remove("hidden");
        if (heroSection) heroSection.classList.remove("hidden");
    });
});


//ORNAMENTAL PLANTS

document.addEventListener("DOMContentLoaded", function () {
    const fancySection = document.getElementById("fancy");
    const plantTypesSection = document.getElementById("plant");
    const heroSection = document.querySelector(".hero"); // Assuming you have a hero section
    const fancyButton = document.getElementById("ornamental plants"); 
    const fancybackButton = fancySection.querySelector("#fancy-back-button");
    const aboutsec = document.getElementById('aboutsection');

    // Show only the Flowering section when Flowering Plants is clicked
    fancyButton.addEventListener("click", function () {
        fancySection.classList.remove("hidden");
        plantTypesSection.classList.add("hidden");
        aboutsec.classList.add("hidden");
        heroSection.classList.add("hidden");
    });

    // Go back to the main view when the back button is clicked
    fancybackButton.addEventListener("click", function () {
        fancySection.classList.add("hidden");
        plantTypesSection.classList.remove("hidden");
        aboutsec.classList.remove("hidden");
        if (heroSection) heroSection.classList.remove("hidden");
    });
});

//Medicinal plants
document.addEventListener("DOMContentLoaded", function () {
    const medicineSection = document.getElementById("medicine");
    const plantTypesSection = document.getElementById("plant");
    const heroSection = document.querySelector(".hero"); // Assuming you have a hero section
    const medicineButton = document.getElementById("medicinal plants"); 
    const medicinebackButton = medicineSection.querySelector("#medicine-back-button");
    const aboutsec = document.getElementById('aboutsection');

    // Show only the Flowering section when Flowering Plants is clicked
    medicineButton.addEventListener("click", function () {
        medicineSection.classList.remove("hidden");
        plantTypesSection.classList.add("hidden");
        aboutsec.classList.add("hidden");
        heroSection.classList.add("hidden");
    });

    // Go back to the main view when the back button is clicked
    medicinebackButton.addEventListener("click", function () {
        medicineSection.classList.add("hidden");
        plantTypesSection.classList.remove("hidden");
        aboutsec.classList.remove("hidden");
        if (heroSection) heroSection.classList.remove("hidden");
    });
});
*/



// reviews
const reviews = [
    {
        photo: 'customer/customer 3.jpg',
        text: '“During covid, all deliveries became online..food, plants, groceries..wait..plants? Who would have thought?...well...Urban Jungle did and is best at it. They make sure that we get the greenest and lushest plants so that we can love & care for them as they do.”',
        rating: '★★★★★',
        author: '– Anirudh Nambiar'
    },
    {
        photo: 'customer/customer 7.jpg',
        text: '“Urban Jungle has changed my entire perception of online plant shopping. The plants were delivered in perfect condition and the containers were really beautiful. Highly recommend it!”',
        rating: '★★★★★',
        author: '– Priya Sharma'
    },
    {
        photo: 'customer/customer 4.jpg',
        text: '“The service is incredible and the plants are so healthy and green. Thank you Urban Jungle for making my home greener and more beautiful.”',
        rating: '★★★★★',
        author: '– Rahul Mehta'
    },
    {
        photo: 'customer/customer 6.jpg',
        text: '“Absolutely loved the variety and the condition of the plants I received from Urban Jungle. It made my gardening journey even more exciting!”',
        rating: '★★★★★',
        author: '– Sneha Kapoor'
    },
    {
        photo: 'customer/customer 5.jpg',
        text: '“The quality of plants from Urban Jungle is unmatched. They truly care about delivering happiness through greenery.”',
        rating: '★★★★★',
        author: '– Vikruthi menon'
    }
];


let currentIndex = 0;

// Function to update the review content
function updateReview() {
    const review = reviews[currentIndex];
    const photo = document.getElementById("reviewer-photo");
    const reviewText = document.getElementById("review-text");
    const reviewRating = document.getElementById("review-rating");
    const reviewAuthor = document.getElementById("review-author");

    photo.classList.remove("active");
    
    // Update the content after a short delay to allow the opacity transition
    setTimeout(() => {
        photo.src = review.photo;
        reviewText.innerText = review.text;
        reviewRating.innerText = review.rating;
        reviewAuthor.innerText = `– ${review.author}`;
        photo.classList.add("active");
    }, 300);
}

// Function to handle review change
function changeReview(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    } else if (currentIndex >= reviews.length) {
        currentIndex = 0;
    }
    updateReview();
}