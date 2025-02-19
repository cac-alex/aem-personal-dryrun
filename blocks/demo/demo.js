export default function decorate(block) {
    const text = block.innerHTML;
    const newElement = document.createElement('marquee');
    newElement.innerHTML = text;
    block.innerHTML = '';
    block.appendChild(newElement);
}