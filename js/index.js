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