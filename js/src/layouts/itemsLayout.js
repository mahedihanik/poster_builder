export function itemsLayout (legendText,fieldSetId,crossButtonId,item){
    const nestedFieldset = document.createElement('fieldset');
    nestedFieldset.id = fieldSetId
    // Create the legend element
    const nestedLegend = document.createElement('legend');
    nestedLegend.textContent = legendText;
    const nestedFieldsetInnerDiv = document.createElement('div')
    const nestedFieldsetDiv = document.createElement('div')

    const crossButton = document.createElement('button');
    crossButton.innerHTML = 'X';
    crossButton.id = crossButtonId;

    //nestedFieldset.appendChild(crossButton)
    nestedFieldset.appendChild(nestedLegend)
    nestedFieldset.appendChild(item)
    nestedFieldsetDiv.appendChild(nestedFieldset);
    nestedFieldsetDiv.appendChild(crossButton);


    nestedFieldsetDiv.classList.add('relative','px-8','mt-2')
    nestedFieldset.classList.add('pl-5','border', 'py-4','rounded');
    nestedLegend.classList.add('py-1','px-4','bg-slate-200', 'text-black', 'text-xs','rounded-full');
    crossButton.classList.add('bg-white','text-red-500','w-6','h-6','rounded-full','absolute', 'top-0' ,'right-6')

    return nestedFieldsetDiv;
}