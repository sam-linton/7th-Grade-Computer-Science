function toggleShowElement(element) {
    if (element) {
        console.log(`display = ${element.style.display}`);
        if (element.style.display === 'none') {
            console.log('detecting none')
            element.style.display = 'block';
        }
        else {
            console.log('detecting block')
            element.style.display = 'none';
        }
    }
}

function setupAccordians() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    for (let accordionHeader of accordionHeaders) {
        let panel = accordionHeader.nextElementSibling;
        panel.style.display = 'none';

        accordionHeader.addEventListener('click', function (e) {
            panel = this.nextElementSibling;
            toggleShowElement(panel);
        });
    }
}

setupAccordians();