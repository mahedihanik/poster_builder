export const headingActionButton = (innerHtml,icon,rounded,id,value) => {
    const buttonIconTag = document.createElement('i');
    const buttonTextSpanTag = document.createElement('span');
    const buttonIconSpanTag = document.createElement('span');

    const button = document.createElement('button');
    button.id = id;
    button.value = value;
    buttonTextSpanTag.innerHTML=innerHtml;
    buttonIconSpanTag.appendChild(buttonIconTag);

    buttonIconTag.classList.add('fa-solid',icon)
    buttonTextSpanTag.classList.add('pl-2')

    button.appendChild(buttonIconSpanTag)
    button.appendChild(buttonTextSpanTag)
    button.classList.add('bg-white','px-4','py-1','text-sm',rounded,'shadow-sm','border')

    return button;

}