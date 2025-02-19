export default function decorate(block) {
    const marquee = document.createElement('marquee');
    marquee.textContent = block.textContent;
    block.innerHTML = '';
    block.appendChild(marquee);
}