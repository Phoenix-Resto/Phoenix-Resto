function toggleContent(event, contentId) {
    event.preventDefault();
    var contentDiv = document.getElementById(contentId);
    if (contentDiv.style.display === "block") {
        contentDiv.style.display = "none"; // Show content
    } else {
        contentDiv.style.display = "block"; // Hide content
        contentDiv.scrollIntoView({ behavior: 'smooth' })
    } 
}

function toggleImage(event, imageId) {
    const images = document.querySelectorAll('.hiddenImage');
            images.forEach(image => {
                image.style.display = 'none';
            });
    var image = document.getElementById(imageId);
    if (image.style.display === "block") {
        image.style.display = "none"; // Show content
    } else {
        image.style.display = "block"; // Hide content
        image.scrollIntoView({ behavior: 'smooth' })
    }
}
