export const imageItem = () => {
    const nestedFieldsetInnerDiv = document.createElement('div')
    const fileLabel = document.createElement('label')
    const fileDiv = document.createElement('div')
    const paragraphOne = document.createElement('p')
    const paragraphOneSpan = document.createElement('span')
    const paragraphTwo = document.createElement('p')
    const inputFieldImage = document.createElement('input');
    const icon = document.createElement('i')
    inputFieldImage.type = 'file';
    inputFieldImage.id = 'headingInputImageFieldId';
    inputFieldImage.accept = 'image/png, image/gif, image/jpeg, image/svg+xml';

    paragraphOneSpan.innerHTML = 'Click to upload or drag and drop';
    paragraphTwo.innerHTML = 'SVG, PNG, JPG or GIF (MAX. 800x400px)';

    paragraphOne.appendChild(paragraphOneSpan)
    fileDiv.appendChild(icon)
    fileDiv.appendChild(paragraphOne)
    fileDiv.appendChild(paragraphTwo)
    fileLabel.appendChild(fileDiv)
    fileLabel.appendChild(inputFieldImage)
    nestedFieldsetInnerDiv.appendChild(fileLabel)
    const divClasses = 'flex items-center justify-center w-full pr-4';
    const labelClasses = 'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
    const innerDivClasses = 'flex flex-col items-center justify-center pt-5 pb-6';
    const paragraphOneClasses = 'mb-2 text-sm text-gray-500 dark:text-gray-400';
    const paragraphTwoClasses = 'text-xs text-gray-500 dark:text-gray-400';
    const divClassesArray = divClasses.split(' ');
    const labelClassesArray = labelClasses.split(' ');
    const innerDivClassesArray = innerDivClasses.split(' ');
    const paragraphOneClassesArray = paragraphOneClasses.split(' ');
    const paragraphTwoClassesArray = paragraphTwoClasses.split(' ');
    nestedFieldsetInnerDiv.classList.add(...divClassesArray)
    fileLabel.classList.add(...labelClassesArray)
    fileDiv.classList.add(...innerDivClassesArray)
    paragraphOne.classList.add(...paragraphOneClassesArray)
    paragraphTwo.classList.add(...paragraphTwoClassesArray)
    icon.classList.add('fa-solid' ,'fa-cloud-arrow-up','fa-2xl')
    inputFieldImage.classList.add('hidden')

    return nestedFieldsetInnerDiv;
}