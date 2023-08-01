export const descriptionItem = () => {
    const nestedFieldsetInnerDiv = document.createElement('div')
    const textarea = document.createElement('textarea')
    textarea.id = 'descriptionTextAreaId';
    textarea.rows = 4;
    textarea.placeholder = 'Write your own thoughts here ...';
    const classNamesTextarea = 'w-full px-4 py-2 bg-white border-0 border-slate-300 rounded-md shadow-sm placeholder-slate-400';
    const classNamesTextareaArray = classNamesTextarea.split(' ');
    textarea.classList.add(...classNamesTextareaArray)
    nestedFieldsetInnerDiv.classList.add('pr-4')
    nestedFieldsetInnerDiv.append(textarea)
    return nestedFieldsetInnerDiv;
}