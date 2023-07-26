// fieldset.js - Export the function to create a <fieldset> element with a <legend>

export function createFieldsetWithLegend(text,horizontal_padding) {
    // Create the fieldset element
    const newFieldset = document.createElement('fieldset');

    // Create the legend element
    const newLegend = document.createElement('legend');
    newLegend.textContent = text;

    // Append the legend to the fieldset
    newFieldset.appendChild(newLegend);
    //console.log(horizontal_padding)

    // Apply Tailwind CSS classes to the fieldset and legend
    newFieldset.classList.add('w-1/2','border', 'py-4', 'rounded', 'flex-auto');
    newLegend.classList.add('w-11/12','py-2','bg-white', 'text-blue-700', 'font-bold', 'text-lg', 'text-center','rounded','drop-shadow-md');

    return newFieldset;
}
