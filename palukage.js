var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
    allElements.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                replaceText(child);
            }
        });

    });
}

function replaceText (node) {
    let value = node.nodeValue;
    if (value.includes("muslimer"))
	{		
        value = value.replace(/muslimer/gi, 'pandekager');
    }
	if(value.includes("Paludan"))
	{
		value = value.replace(/Paludan/gi, 'Klump');
	}
	if (value.includes("muslim"))
	{
		value = value.replace(/muslim/gi, 'Pandekage');
	}
	if (value.includes("muslimerne"))
	{
		value = value.replace(/muslimerne/gi, 'Pandekagerne');
	}
	if(value.includes("Rasmus Paludan"))
	{
		value = value.replace(/Rasmus Paludan/gi, 'Rasmus Klump');
	}

    node.nodeValue = value;
}

window.onload = findAndReplace();