import { actionButton } from '../layouts/actionButton.js';
import { itemsLayout } from "../layouts/itemsLayout.js";
import { headingItem } from "../components/headingItem.js";
import { imageItem } from "../components/imageItem.js";
import { descriptionItem } from "../components/descriptionItem.js";

export const createFieldsetWithLegend = (text,type) => {
    // Create the fieldset element
    const newFieldset = document.createElement('fieldset');
    // Create the legend element
    const newLegend = document.createElement('legend');
    newLegend.textContent = text;
    if (type === 'components'){

        const heading = document.createElement('h4')
        heading.id = 'itemHeadingId';
        heading.innerHTML = 'Items';
        const actionButtonsDiv = document.createElement('div')

        newFieldset.appendChild(itemsLayout('Heading','headingFieldsetId','headingCrossButtonId',headingItem()))
        newFieldset.appendChild(itemsLayout('Poster Image','imageFieldsetId','imageCrossButtonId',imageItem()))
        newFieldset.appendChild(itemsLayout('Description','descriptionFieldsetId','descriptionCrossButtonId',descriptionItem()))

        newFieldset.appendChild(heading);
        newFieldset.appendChild(actionButtonsDiv)

        actionButtonsDiv.appendChild(actionButton('Heading', 'heading_button', 'bg-yellow-100', 'text-yellow-500', 'hover:bg-yellow-400'))
        actionButtonsDiv.appendChild(actionButton('Image', 'image_button', 'bg-green-100', 'text-green-500', 'hover:bg-green-400'))
        actionButtonsDiv.appendChild(actionButton('Description', 'description_button', 'bg-blue-100', 'text-blue-500', 'hover:bg-blue-400'))

        heading.classList.add('text-black-700', 'font-bold', 'text-lg','text-center')
        actionButtonsDiv.classList.add('flex' ,'flex-nowrap','px-8','mt-2','space-x-2')
        newFieldset.appendChild(newLegend);

    }else if (type === 'preview'){

        const previewDiv = document.createElement('div')
        const contentsPreviewDiv = document.createElement('div')
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
        previewDiv.appendChild(downloadDiv)

        const downloadClassList = 'text-white hover:cursor-pointer bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2';
        const downloadClassListArray = downloadClassList.split(' ')
        previewDiv.classList.add('px-12')
        headingPreviewDivParagraph.classList.add('text-5xl','text-black-600','mt-8')
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
