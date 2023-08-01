export const actionButton = (buttonText, buttonId, buttonBackgroundColor, buttonTextColor, hoverButtonBackgroundColor) => {
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    button.setAttribute('id',buttonId)
    button.classList.add('w-1/2',buttonBackgroundColor, hoverButtonBackgroundColor, 'text-sm', buttonTextColor, 'hover:text-black','py-3', 'px-3', 'rounded-md','shadow-lg')
    return button;
}