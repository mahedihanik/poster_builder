// main.js - Import the createFieldsetWithLegend function and use it

import {createFieldsetWithLegend} from './components.js';

const appDiv = document.getElementById('app');
const fieldsetWithLegend1 = createFieldsetWithLegend('Components','components');
const fieldsetWithLegend2 = createFieldsetWithLegend('Preview','preview');

// Apply Tailwind CSS classes to the div wrapping the fieldset
appDiv.classList.add('p-14', 'bg-gray-100', 'flex', 'space-x-14');

// Add the fieldset to the appDiv
appDiv.appendChild(fieldsetWithLegend1);
appDiv.appendChild(fieldsetWithLegend2);

// document.getElementById('crossButtonId').addEventListener('click', () => {
//     document.getElementById('headingFieldsetId').remove()
//     document.getElementById('crossButtonId').remove()
// });

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('headingInputTextFieldId');
    const previewContainer = document.getElementById('headingPreviewDivParagraphId');

    textInput.addEventListener('input', () => {
        previewContainer.textContent = textInput.value;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("headingInputImageFieldId");
    const imagePreview = document.getElementById("posterImagePreviewDivImageId");
    imageInput.addEventListener("change", () => {
        // Check if a file is selected
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
                // Set the data URL as the source of the image preview
                imagePreview.src = event.target.result;
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(imageInput.files[0]);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('descriptionTextAreaId');
    const previewContainer = document.getElementById('descriptionPreviewDivParagraphId');

    textInput.addEventListener('input', () => {
        previewContainer.textContent = textInput.value;
    });
});

// document.getElementById('posterDownloadId').addEventListener('click', function() {
//     // Get the div element and the image inside it
//     const div = document.getElementById('contentsPreviewDivId');
//     const image = div.querySelector('img');
//
//     const textElementHeading = document.getElementById('headingPreviewDivParagraphId');
//     const textHeading = textElementHeading.textContent;
//
//     const computedStyle = window.getComputedStyle(textElementHeading);
//     const fontSize = computedStyle.fontSize;
//
//     // Create a new canvas element
//     const canvas = document.createElement('canvas');
//     canvas.width = div.clientWidth;
//     canvas.height = div.clientHeight;
//
//     const ctx = canvas.getContext('2d');
//
//     // Draw the div's content (text and image) on the canvas
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(image, 0, 0, image.width, image.height);
//     ctx.font = `${fontSize} Arial`; // Customize font style and size
//     ctx.fillStyle = '#EE4B2B'; // Customize text color
//     ctx.fillText(textHeading, 10, image.height + 30); // Customize text position
//
//     // Convert canvas to data URL
//     // Create an anchor element to trigger the download
//     //const downloadLink = document.createElement('a');
//     document.getElementById('posterDownloadId').href = canvas.toDataURL();
//     document.getElementById('posterDownloadId').download = 'combined_image.png'; // Customize the file name and extension
//
//     // Trigger the download
//     //document.getElementById('posterDownloadId').click();
// });


document.getElementById('posterDownloadId').addEventListener('click', function() {
    // Get the div element and the image inside it
    const div = document.getElementById('contentsPreviewDivId');
    const image = div.querySelector('img');

    const textElementHeading = document.getElementById('headingPreviewDivParagraphId');
    const textHeading = textElementHeading.textContent;

    const computedStyle = window.getComputedStyle(textElementHeading);
    const fontSize = computedStyle.fontSize;
    const fontColor = computedStyle.color;

    // Create a new canvas element
    const canvas = document.createElement('canvas');
    canvas.width = div.clientWidth;
    canvas.height = div.clientHeight;

    const ctx = canvas.getContext('2d');

    // Draw the text on the canvas with the retrieved font size
    ctx.font = `${fontSize} Arial`; // Customize font style and size
    ctx.fillStyle = fontColor; // Customize text color
    ctx.fillText(textHeading, 10, 40); // Customize text position
        // Draw the image on the canvas
    ctx.drawImage(image, 0, 50, image.width, 450); // Adjust the y-coordinate as needed for the desired spacing

    // Draw the text on the canvas with the retrieved font size
    ctx.font = `${fontSize} Arial`; // Customize font style and size
    ctx.fillStyle = fontColor; // Customize text color
    ctx.fillText(textHeading, 10, image.height + 30); // Customize text position
        // Convert canvas to data URL
        document.getElementById('posterDownloadId').href = canvas.toDataURL();
        document.getElementById('posterDownloadId').download = 'combined_image.png'; // Customize the file name and extension

        // Trigger the download
        //document.getElementById('posterDownloadId').click();


    // Set the image source to start loading it
    //img.src = image.src;
});

