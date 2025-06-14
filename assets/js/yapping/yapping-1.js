const textImagePairs = [
    {
        text: "Wawww ternyata lu mau denger yapping gw",
        image: "/assets/image/yapping/1.gif"
    },
    {
        text: "Baca ya sampe abis..",
        image: "/assets/image/yapping/2.gif"
    },
    // Add more text-image pairs as needed
];

const section = document.querySelector('.section-1');
const textElement = section.querySelector('span');
const imageElement = section.querySelector('img');

function showTextImagePair(pair) {
    textElement.textContent = pair.text;
    imageElement.src = pair.image;
}

let currentPairIndex = 0;

function nextPair() {
    const pair = textImagePairs[currentPairIndex];
    showTextImagePair(pair);
    currentPairIndex = (currentPairIndex + 1) % textImagePairs.length;
    
    if (currentPairIndex === 0) {
        // Redirect to yapping-2.html after 3 seconds
        setTimeout(function() {
            window.location.href = '/main/yapping/yapping-2.html';
        }, 3000);
    } else {
        setTimeout(nextPair, 2000);
    }
}

nextPair();

