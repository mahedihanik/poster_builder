// main.js - Import the createFieldsetWithLegend function and use it

import {createFieldsetWithLegend} from './src/pages/components.js';

const appDiv = document.getElementById('app');
const fieldsetWithLegend1 = createFieldsetWithLegend('Components','components');
const fieldsetWithLegend2 = createFieldsetWithLegend('Preview','preview');

// Apply Tailwind CSS classes to the div wrapping the fieldset
appDiv.classList.add('p-14', 'bg-gray-100', 'flex', 'space-x-14');

// Add the fieldset to the appDiv
appDiv.appendChild(fieldsetWithLegend1);
appDiv.appendChild(fieldsetWithLegend2);


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('headingFieldsetId').classList.add('hidden')
    document.getElementById('imageFieldsetId').classList.add('hidden')
    document.getElementById('descriptionFieldsetId').classList.add('hidden')
    document.getElementById('headingCrossButtonId').classList.add('hidden')
    document.getElementById('imageCrossButtonId').classList.add('hidden')
    document.getElementById('descriptionCrossButtonId').classList.add('hidden')
    checkHiddenClass();
})

document.getElementById('heading_button').addEventListener('click', () => {
    document.getElementById('headingFieldsetId').classList.remove('hidden')
    document.getElementById('headingCrossButtonId').classList.remove('hidden')
    document.getElementById('heading_button').classList.add('hidden')
    checkHiddenClass();
});

document.getElementById('headingCrossButtonId').addEventListener('click', () => {
    document.getElementById('heading_button').classList.remove('hidden')
    document.getElementById('headingFieldsetId').classList.add('hidden')
    document.getElementById('headingCrossButtonId').classList.add('hidden')
    checkHiddenClass();
});


document.getElementById('image_button').addEventListener('click', () => {
    document.getElementById('imageFieldsetId').classList.remove('hidden')
    document.getElementById('imageCrossButtonId').classList.remove('hidden')
    document.getElementById('image_button').classList.add('hidden')
    checkHiddenClass();
});


document.getElementById('imageCrossButtonId').addEventListener('click', () => {
    document.getElementById('image_button').classList.remove('hidden')
    document.getElementById('imageFieldsetId').classList.add('hidden')
    document.getElementById('imageCrossButtonId').classList.add('hidden')
    checkHiddenClass();
});



document.getElementById('description_button').addEventListener('click', () => {
    document.getElementById('descriptionFieldsetId').classList.remove('hidden')
    document.getElementById('descriptionCrossButtonId').classList.remove('hidden')
    document.getElementById('description_button').classList.add('hidden')
    checkHiddenClass();
});


document.getElementById('descriptionCrossButtonId').addEventListener('click', () => {
    document.getElementById('description_button').classList.remove('hidden')
    document.getElementById('descriptionFieldsetId').classList.add('hidden')
    document.getElementById('descriptionCrossButtonId').classList.add('hidden')
    checkHiddenClass();
});



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



document.getElementById('posterDownloadId').addEventListener('click', function() {
    // Get the div element and the image inside it
    const div = document.getElementById('contentsPreviewDivId');
    const image = div.querySelector('img');

    const textElementHeading = document.getElementById('headingPreviewDivParagraphId');
    const textHeading = textElementHeading.textContent;

    const headingComputedStyle = window.getComputedStyle(textElementHeading);
    const headingFontSize = headingComputedStyle.fontSize;
    const headingFontColor = headingComputedStyle.color;

    const textElementDescription = document.getElementById('descriptionPreviewDivParagraphId');
    const textHeadingDescription = textElementDescription.textContent;

    const descriptionComputedStyle = window.getComputedStyle(textElementDescription);
    const descriptionFontSize = descriptionComputedStyle.fontSize;
    const descriptionFontColor = descriptionComputedStyle.color;

    // Create a new canvas element
    const canvas = document.createElement('canvas');
    canvas.width = div.clientWidth;
    canvas.height = div.clientHeight;

    const ctx = canvas.getContext('2d');

    // Draw the text on the canvas with the retrieved font size
    ctx.font = `${headingFontSize} Arial`; // Customize font style and size
    ctx.fillStyle = headingFontColor; // Customize text color
    ctx.fillText(textHeading, 10, 40); // Customize text position
        // Draw the image on the canvas
    ctx.drawImage(image, 0, 50, image.width, 450); // Adjust the y-coordinate as needed for the desired spacing

    // Draw the text on the canvas with the retrieved font size
    ctx.font = `${descriptionFontSize} Arial`; // Customize font style and size
    ctx.fillStyle = descriptionFontColor; // Customize text color
    ctx.fillText(textHeadingDescription, 10, image.height + 30); // Customize text position
        // Convert canvas to data URL
    document.getElementById('posterDownloadId').href = canvas.toDataURL();
    document.getElementById('posterDownloadId').download = 'combined_image.png'; // Customize the file name and extension
    //img.src = image.src;
});

const checkHiddenClass = () => {
    if (document.getElementById('heading_button').classList.contains('hidden') && document.getElementById('description_button').classList.contains('hidden') && document.getElementById('image_button').classList.contains('hidden')){
        document.getElementById('itemHeadingId').classList.add('hidden')
    }else {
        document.getElementById('itemHeadingId').classList.remove('hidden')
    }

}
document.getElementById('headingTextCenterButtonId').addEventListener('click', () => {
    //const position = document.getElementById('headingTextCenterButtonId').value;
    removeTextAlignClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-center')
});
document.getElementById('headingTextLeftButtonId').addEventListener('click', () => {
    removeTextAlignClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-left')
});

document.getElementById('headingTextRightButtonId').addEventListener('click', () => {
    removeTextAlignClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-right')
});


document.getElementById('headingTextBlueButtonId').addEventListener('click', () => {
    //const position = document.getElementById('headingTextCenterButtonId').value;
    removeTextColorClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-blue-600')
});
document.getElementById('headingTextBlackButtonId').addEventListener('click', () => {
    removeTextColorClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-black-600')
});

document.getElementById('headingTextGreenButtonId').addEventListener('click', () => {
    removeTextColorClasses();
    document.getElementById('headingPreviewDivParagraphId').classList.add('text-green-600')
});
const removeTextAlignClasses = () => {
    const elementTextPosition = document.getElementById('headingPreviewDivParagraphId');
    elementTextPosition.classList.remove('text-center');
    elementTextPosition.classList.remove('text-left');
    elementTextPosition.classList.remove('text-right');
}

const removeTextColorClasses = () => {
    const elementColor = document.getElementById('headingPreviewDivParagraphId');
    elementColor.classList.remove('text-blue-600');
    elementColor.classList.remove('text-black-600');
    elementColor.classList.remove('text-green-600');
}


