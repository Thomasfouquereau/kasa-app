export function openClose() {
    const description = document.querySelector('.description-box')
    if (description.style.display === 'none') {
        description.style.display = 'block';
        console.log('ouvert')
    } else {
        description.style.display = 'none';
    }
}




