


export function element(strings, ...values){
    const htmlString = strings.reduce((result,str,i) => {
       return result + values[i-1] + str
    });
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    return template.content.firstElementChild;
}