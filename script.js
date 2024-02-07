function toggleAnswer(elementId, imageElement) {
    let answer = document.getElementById(elementId);
    let imageSrc = imageElement.querySelector('img').src;

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        imageElement.querySelector('img').src = imageSrc.replace('icon-minus.svg', 'icon-plus.svg');
    } else {
        answer.style.display = 'block';
        imageElement.querySelector('img').src = imageSrc.replace('icon-plus.svg', 'icon-minus.svg');
    }
}
