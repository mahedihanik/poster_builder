// main.js - Import the createFieldsetWithLegend function and use it

import { createFieldsetWithLegend } from './components.js';

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
