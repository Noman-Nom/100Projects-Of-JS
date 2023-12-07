document.getElementById('imageInput').addEventListener('change', handleImage);

function handleImage(e) {
    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = function() {
        // Set canvas size to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get image data
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        
        // Apply image negative
        applyNegative(imageData);

        // Put the modified image data back to the canvas
        ctx.putImageData(imageData, 0, 0);
    };

    // Load the selected image
    img.src = URL.createObjectURL(e.target.files[0]);
}

function applyNegative(imageData) {
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // Invert each color channel
        data[i] = 255 - data[i];         // Red
        data[i + 1] = 255 - data[i + 1]; // Green
        data[i + 2] = 255 - data[i + 2]; // Blue
        // Alpha channel (data[i + 3]) is not modified for simplicity
    }
}
