import { headingActionButton } from "../layouts/headingActionButtons.js";

export const headingItem = () => {
    const nestedFieldsetInnerDiv = document.createElement('div')
    const headingTextFieldDiv = document.createElement('div')
    const headingTextFieldButtonDiv = document.createElement('div')
    const headingTextFieldButtonInnerDivFirst = document.createElement('div')
    const headingTextFieldButtonInnerDivSecond = document.createElement('div')

    const inputFieldHeading = document.createElement('input');
    inputFieldHeading.type = 'text';
    inputFieldHeading.placeholder = 'Write your heading ...';
    inputFieldHeading.id = 'headingInputTextFieldId';


    headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Left','fa-align-left','rounded-l-md','headingTextLeftButtonId','left'))
    headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Center','fa-align-center','rounded-0','headingTextCenterButtonId','center'))
    headingTextFieldButtonInnerDivFirst.appendChild(headingActionButton('Right','fa-align-right','rounded-r-md','headingTextRightButtonId','right'))

    headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Blue','fa-palette','rounded-l-md','headingTextBlueButtonId','blue'))
    headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Black','fa-palette','rounded-0','headingTextBlackButtonId','black'))
    headingTextFieldButtonInnerDivSecond.appendChild(headingActionButton('Green','fa-palette','rounded-r-md','headingTextGreenButtonId','green'))

    headingTextFieldButtonDiv.appendChild(headingTextFieldButtonInnerDivFirst)
    headingTextFieldButtonDiv.appendChild(headingTextFieldButtonInnerDivSecond)
    headingTextFieldDiv.appendChild(inputFieldHeading)
    nestedFieldsetInnerDiv.appendChild(headingTextFieldDiv)
    nestedFieldsetInnerDiv.appendChild(headingTextFieldButtonDiv)

    const classNamesHeadingInputField = 'w-full px-4 py-2 bg-white border-0 border-slate-300 rounded-md shadow-sm placeholder-slate-400';
    const classNamesHeadingInputFieldArray = classNamesHeadingInputField.split(' ');

    inputFieldHeading.classList.add(...classNamesHeadingInputFieldArray)
    headingTextFieldButtonDiv.classList.add('flex','mt-4','space-x-60')
    headingTextFieldDiv.classList.add('pr-3.5')
    return nestedFieldsetInnerDiv;
}