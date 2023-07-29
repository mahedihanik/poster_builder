export function imageItem (){

    // <div className="flex items-center justify-center w-full">
    //     <label htmlFor="dropzone-file"
    //            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    //         <div className="flex flex-col items-center justify-center pt-5 pb-6">
    //             <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
    //                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    //                       d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
    //             </svg>
    //             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
    //                 drag and drop</p>
    //             <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    //         </div>
    //         <input id="dropzone-file" type="file" className="hidden"/>
    //     </label>
    // </div>
    // const svgNS = "http://www.w3.org/2000/svg";
    // const svgElement = document.createElementNS(svgNS, "svg");
    //
    // // Set attributes for the SVG element
    // svgElement.setAttribute("class", "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400");
    // svgElement.setAttribute("aria-hidden", "true");
    // svgElement.setAttribute("xmlns", svgNS);
    // svgElement.setAttribute("fill", "none");
    // svgElement.setAttribute("viewBox", "0 0 20 16");
    //
    // // Create the path element and set its attributes
    // const pathElement = document.createElementNS(svgNS, "path");
    // pathElement.setAttribute("stroke", "currentColor");
    // pathElement.setAttribute("stroke-linecap", "round");
    // pathElement.setAttribute("stroke-linejoin", "round");
    // pathElement.setAttribute("stroke-width", "2");
    // pathElement.setAttribute("d", "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2");
    //
    // // Append the path element to the SVG element
    // svgElement.appendChild(pathElement);

    const nestedFieldsetInnerDiv = document.createElement('div')
    const fileLabel = document.createElement('label')
    const fileDiv = document.createElement('div')
    const paragraphOne = document.createElement('p')
    const paragraphOneSpan = document.createElement('span')
    const paragraphTwo = document.createElement('p')
    const inputFieldImage = document.createElement('input');
    const icon = document.createElement('i')
    inputFieldImage.type = 'file';
    inputFieldImage.id = 'headingInputTextFieldId';

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