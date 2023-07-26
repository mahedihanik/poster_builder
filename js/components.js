// fieldset.js - Export the function to create a <fieldset> element with a <legend>
import { actionButton } from './actionButton.js';

export function createFieldsetWithLegend(text) {
    // Create the fieldset element
    const newFieldset = document.createElement('fieldset');

    // Create the legend element
    const newLegend = document.createElement('legend');
    newLegend.textContent = text;

    const heading = document.createElement('h4')
    const actionButtonsDiv = document.createElement('div')

    // Append the legend to the fieldset
    newFieldset.appendChild(newLegend);
    newFieldset.appendChild(heading);
    newFieldset.appendChild(actionButtonsDiv)

    actionButtonsDiv.appendChild(
        actionButton(
            'Heading',
            'heading_button',
            'bg-yellow-100',
            'text-yellow-500',
            'hover:bg-yellow-400'
        )
    )
    actionButtonsDiv.appendChild(
        actionButton(
            'Image',
            'image_button',
            'bg-green-100',
            'text-green-500',
            'hover:bg-green-400'
        )
    )
    actionButtonsDiv.appendChild(
        actionButton(
            'Description',
            'description_button',
            'bg-blue-100',
            'text-blue-500',
            'hover:bg-blue-400'
        )
    )

    // Apply Tailwind CSS classes to the fieldset and legend
    newFieldset.classList.add('w-1/2','border', 'py-4', 'rounded', 'flex-auto');
    newLegend.classList.add('w-11/12','py-2','bg-white', 'text-black-700', 'font-bold', 'text-lg', 'text-center','rounded','drop-shadow-md');
    heading.classList.add('text-black-700', 'font-bold', 'text-lg', 'text-center')
    actionButtonsDiv.classList.add('flex' ,'flex-nowrap','px-8','mt-2','space-x-2')
    return newFieldset;
}
