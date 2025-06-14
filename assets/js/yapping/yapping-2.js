const textImagePairs = [
  {
    text: "Jadi gini cuii...",
    image: "/assets/image/yapping/3.gif",
  },
  {
    text: "Tolong pahammi kata kata gue...",
    image: "/assets/image/yapping/4.gif",
  },
  {
    text: "Mungkin di sini gw juga teralu ikut campur ya",
    image: "/assets/image/yapping/5.gif",
  },
  {
    text: "Gw juga ga tau kehidupan lu di sana gimna",
    image: "/assets/image/yapping/6.gif",
  },
  {
    text: "Tapi yang pasti gw tau kalo itu berat",
    image: "/assets/image/yapping/7.gif",
  },
  {
    text: "Lu tau, tiap hari gw selalu kepikiran mulu..",
    image: "/assets/image/yapping/8.gif",
  },
  {
    text: "Pasti lu mikir kaya ngapain atau apalah",
    image: "/assets/image/yapping/9.gif",
  },
  {
    text: "Ya gw juga bingung kenapa cuma kek...",
    image: "/assets/image/yapping/10.gif",
  },
  {
    text: "Sedih aja gitu",
    image: "/assets/image/yapping/11.gif",
  },
  {
    text: "Lu di sana bahagia kann ??",
    image: "/assets/image/yapping/12.gif",
  },
  {
    text: "Please apapun kondisi nya...",
    image: "/assets/image/yapping/13.gif",
  },
  {
    text: "Jangan sampe lu tinggal makan atau sampe lupa jaga kesehatan",
    image: "/assets/image/yapping/14.gif",
  },
  {
    text: "Ntah ni kapan lu bacanya",
    image: "/assets/image/yapping/15.gif",
  },
  {
    text: "Kalo lu ngerasa capek",
    image: "/assets/image/yapping/16.gif",
  },
  {
    text: "Lu baca ini lagi okkei!!",
    image: "/assets/image/yapping/17.gif",
  },
  {
    text: "Biar lu tau..",
    image: "/assets/image/yapping/18.gif",
  },
  {
    text: "Kalo gw selalu dukung dan selalu ada di sisi lu",
    image: "/assets/image/yapping/19.gif",
  },
  {
    text: "Gw oon kalo soal ekspresiin perasaan",
    image: "/assets/image/yapping/20.gif",
  },
  {
    text: "Kadang suka over yang bikin muak orang",
    image: "/assets/image/yapping/21.gif",
  },
  {
    text: "Makanya, kalo lu ngeraasa capek...",
    image: "/assets/image/yapping/22.gif",
  },
  {
    text: "Tolong lebih andelin gw yaa",
    image: "/assets/image/yapping/22.gif",
  },
  {
    text: "Gw bakal selalu da buat loee",
    image: "/assets/image/yapping/23.gif",
  },
  {
    text: "Gapapa sesekali buat ngeluh tau",
    image: "/assets/image/yapping/24.gif",
  },
  {
    text: "Gapapa sesekali buat nangis juga",
    image: "/assets/image/yapping/25.gif",
  },
  {
    text: "Karna gw paling tau seberapa berushaa nya lu",
    image: "/assets/image/yapping/26.gif",
  },
  {
    text: "Dan seberapa keras nya lu ke diri lu sendiri",
    image: "/assets/image/yapping/27.gif",
  },
  {
    text: "Soo, jangan ragu buat keluhin semua nya yaa",
    image: "/assets/image/yapping/28.gif",
  },
  {
    text: "Gw bangga sama lu yang udah berusha semaksimal mungkin sampai sekaranng",
    image: "/assets/image/yapping/29.gif",
  },
  {
    text: "So proud of u...",
    image: "/assets/image/yapping/30.gif",
  },
  {
    text: "Maaf ya gw malah ngasi yanng beginian",
    image: "/assets/image/yapping/31.gif",
  },
  {
    text: "Padahal lu gammau sedih",
    image: "/assets/image/yapping/32.gif",
  },
  {
    text: "Gw cuma mau lu lebih terbuka aja sebenernya..",
    image: "/assets/image/yapping/33.gif",
  },
  {
    text: "Yaudah segitu aja deh wkwkwk..",
    image: "/assets/image/yapping/34.gif",
  },
  // Add more text-image pairs as needed
];

const section = document.querySelector(".section-1");
const textElement = section.querySelector("span");
const imageElement = section.querySelector("img");
const nextButton = document.getElementById("nextButton");

nextButton.style.display = "none";

let currentPairIndex = 0;
let pauseBetween = 4000; // Changed to 3 seconds

function typeWriter() {
  const pair = textImagePairs[currentPairIndex];

  // Set image immediately
  imageElement.src = pair.image;

  // Typing animation
  textElement.textContent = pair.text;

  // Move to next pair
  currentPairIndex = (currentPairIndex + 1) % textImagePairs.length;

  if (currentPairIndex === 0) {
    // Redirect after last pair
    setTimeout(() => {
      window.location.href = "/main/yapping/options.html";
    }, pauseBetween);
  } else {
    setTimeout(typeWriter, pauseBetween);
  }
}

typeWriter();

