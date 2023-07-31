import { actionButton } from './actionButton.js';
import { headingActionButton } from "./headingActionButtons.js";
import { itemsLayout } from "./itemsLayout.js";
import { headingItem } from "./headingItem.js";
import { imageItem } from "./imageItem.js";
import { descriptionItem } from "./descriptionItem.js";

export function createFieldsetWithLegend(text,type) {
    // Create the fieldset element
    const newFieldset = document.createElement('fieldset');
    // Create the legend element
    const newLegend = document.createElement('legend');
    newLegend.textContent = text;
    const para = document.createElement('p');

    if (type === 'components'){

        // const nestedFieldset = document.createElement('fieldset');
        // nestedFieldset.id = 'headingFieldsetId'
        // // Create the legend element
        // const nestedLegend = document.createElement('legend');
        // nestedLegend.textContent = 'Heading';

        const heading = document.createElement('h4')
        heading.innerHTML = 'Items';
        const actionButtonsDiv = document.createElement('div')

        // const nestedFieldsetDiv = document.createElement('div')
        // const nestedFieldsetInnerDiv = document.createElement('div')
        // const headingTextFieldButtonDiv = document.createElement('div')
        // const headingTextFieldButtonInnerDivFirst = document.createElement('div')
        // const headingTextFieldButtonInnerDivSecond = document.createElement('div')
        //
        // // const crossButton = document.createElement('button');
        // // crossButton.innerHTML = 'X';
        // // crossButton.id = 'crossButtonId';
        // const inputFieldHeading = document.createElement('input');
        // inputFieldHeading.type = 'text';
        // inputFieldHeading.placeholder = 'Write your heading ...';
        // inputFieldHeading.id = 'headingInputTextFieldId';
        //
        //
        // headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Left','fa-align-left','rounded-l-md'))
        // headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Center','fa-align-center','rounded-0'))
        // headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Right','fa-align-right','rounded-r-md'))
        //
        // headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Blue','fa-palette','rounded-l-md'))
        // headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Black','fa-palette','rounded-0'))
        // headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Green','fa-palette','rounded-r-md'))
        //
        // headingTextFieldButtonDiv.appendChild(headingTextFieldButtonInnerDivFirst)
        // headingTextFieldButtonDiv.appendChild(headingTextFieldButtonInnerDivSecond)


        // nestedFieldset.appendChild(crossButton)
        // nestedFieldset.appendChild(nestedLegend)
        // nestedFieldsetInnerDiv.appendChild(inputFieldHeading)
        // nestedFieldset.appendChild(nestedFieldsetInnerDiv)
        // nestedFieldset.appendChild(headingTextFieldButtonDiv)


        // nestedFieldsetDiv.appendChild(nestedFieldset);
        //
        // nestedFieldsetDiv.appendChild(crossButton);
        newFieldset.appendChild(itemsLayout('Heading','headingFieldsetId','headingCrossButtonId',headingItem()))
        newFieldset.appendChild(itemsLayout('Poster Image','imageFieldsetId','imageCrossButtonId',imageItem()))
        newFieldset.appendChild(itemsLayout('Description','descriptionFieldsetId','descriptionCrossButtonId',descriptionItem()))

        newFieldset.appendChild(heading);
        newFieldset.appendChild(actionButtonsDiv)

        actionButtonsDiv.appendChild(actionButton('Heading', 'heading_button', 'bg-yellow-100', 'text-yellow-500', 'hover:bg-yellow-400'))
        actionButtonsDiv.appendChild(actionButton('Image', 'image_button', 'bg-green-100', 'text-green-500', 'hover:bg-green-400'))
        actionButtonsDiv.appendChild(actionButton('Description', 'description_button', 'bg-blue-100', 'text-blue-500', 'hover:bg-blue-400'))


        // nestedFieldsetDiv.classList.add('relative','px-8','mt-2')
        // nestedFieldset.classList.add('pl-5','border', 'py-4','rounded');
        // nestedLegend.classList.add('py-1','px-4','bg-slate-200', 'text-black', 'text-xs','rounded-full');

        heading.classList.add('text-black-700', 'font-bold', 'text-lg','text-center')
        // inputFieldHeading.classList.add('w-full','px-4','py-2','bg-white', 'border-0', 'border-slate-300', 'rounded-md','shadow-sm', 'placeholder-slate-400')
        actionButtonsDiv.classList.add('flex' ,'flex-nowrap','px-8','mt-2','space-x-2')
        //crossButton.classList.add('bg-white','text-red-500','w-6','h-6','rounded-full','absolute', 'top-0' ,'right-6')

        // headingTextFieldButtonDiv.classList.add('flex','mt-4','space-x-60')
        //
        // nestedFieldsetInnerDiv.classList.add('pr-4')
        newFieldset.appendChild(newLegend);

    }else if (type === 'preview'){

        const previewDiv = document.createElement('div')
        const contentsPreviewDiv = document.createElement('div')
        // const imagePreviewDiv = document.createElement('div')
        // const descriptionPreviewDiv = document.createElement('div')
        const downloadDiv = document.createElement('div')

        const headingPreviewDivParagraph = document.createElement('p')
        const posterImagePreviewDivImage = document.createElement('img')
        const descriptionPreviewDivParagraph = document.createElement('textarea')
        const downloadPoster = document.createElement('a')

        contentsPreviewDiv.id = 'contentsPreviewDivId'
        headingPreviewDivParagraph.id = 'headingPreviewDivParagraphId'
        posterImagePreviewDivImage.id = 'posterImagePreviewDivImageId'
        descriptionPreviewDivParagraph.id = 'descriptionPreviewDivParagraphId'
        descriptionPreviewDivParagraph.rows = 4;
        downloadPoster.id = 'posterDownloadId'
        downloadPoster.innerText = 'Download'

        contentsPreviewDiv.appendChild(headingPreviewDivParagraph)
        contentsPreviewDiv.appendChild(posterImagePreviewDivImage)
        contentsPreviewDiv.appendChild(descriptionPreviewDivParagraph)
        downloadDiv.appendChild(downloadPoster)


        previewDiv.appendChild(contentsPreviewDiv)
        // previewDiv.appendChild(imagePreviewDiv)
        // previewDiv.appendChild(descriptionPreviewDiv)
        previewDiv.appendChild(downloadDiv)

        const downloadClassList = 'text-white hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2';
        const downloadClassListArray = downloadClassList.split(' ')
        previewDiv.classList.add('px-12')
        headingPreviewDivParagraph.classList.add('text-5xl','text-orange-600','mt-8')
        posterImagePreviewDivImage.classList.add('mt-6')
        descriptionPreviewDivParagraph.classList.add('resize-none','bg-inherit','mt-2')
        downloadPoster.classList.add(...downloadClassListArray)
        downloadDiv.classList.add('absolute' ,'bottom-24')

        newFieldset.appendChild(newLegend)
        newFieldset.appendChild(previewDiv)

    }

    newFieldset.classList.add('w-1/2','border', 'py-4', 'rounded', 'flex-auto');
    newLegend.classList.add('w-11/12','py-2','bg-white', 'text-black-700', 'font-bold', 'text-lg', 'text-center','rounded','drop-shadow-md');
    return newFieldset;
}
