    const storedName = localStorage.getItem("storedName");
        const loading = document.getElementById('loading');

    document.getElementById("nameDisplay").textContent = storedName;

    // Custom messages array (you can modify this)
    const messages = [
        {text: "Please Cantik banget woee!!", gif: "/assets/image/message/1.gif"},
        {text: "Hari ini lu kok bisa se cantik ini si!!", gif: "/assets/image/message/2.gif"},
        {text: "Woe lah emang boleh se cute ini", gif: "/assets/image/message/3.gif"},
        {text: "Definisi cantik yang bener bener cantik1!", gif: "/assets/image/message/4.gif"},
        {text: "Menyegarkan sekali melihat kecantikan ini", gif: "/assets/image/message/5.gif"},
        {text: "Are u kidding me !!, cute banget woee", gif: "/assets/image/message/6.gif"},
        {text: "For u yang borong semua hal indah di dunia", gif: "/assets/image/message/7.gif"},
        {text: "Bahkan cantik nya dunia taakan secantik dirimu bruh", gif: "/assets/image/message/8.gif"},
        {text: "Boleh peluk ga siee njirr", gif: "/assets/image/message/9.gif"},
        {text: "Bisa gila gueh gara gara kecantikan lu njir", gif: "/assets/image/message/10.gif"},
        {text: "Bocil satu ini emang ga ngotak kalo soal keimutan", gif: "/assets/image/message/11.gif"},
        {text: "HIDUP KEIMUTAN YANG ABSOLUTE!!", gif: "/assets/image/message/12.gif"},
        {text: "MK otak gw melihat keimutan ini", gif: "/assets/image/message/13.gif"},
        {text: "MK melihat keimutan yang ga ngotak ini", gif: "/assets/image/message/14.gif"},
        {text: "Yang pasti terjadi sama orang yang liat foto ini", gif: "/assets/image/message/15.gif"},
        {text: "Lumpuh oleh indah nya kecantikan manusia satu ini", gif: "/assets/image/message/16.gif"},
        {text: "Yey cantikk nya sampe menembus layar bruh...", gif: "/assets/image/message/17.gif"},
        {text: "Emang udah cantik dari sono nya si yak", gif: "/assets/image/message/18.gif"},
        {text: "Otw melihat bocil yang ga ngotak cantik nya", gif: "/assets/image/message/19.gif"},
        {text: `Cantik, Imut, Lucu, Lembut, ${storedName}`, gif: "/assets/image/message/20.gif"},
    ];


    const fileInput = document.getElementById('fileInput');
    const displayImage = document.getElementById('displayImage');
    const uploadForm = document.getElementById('uploadForm');
    const deleteButton = document.getElementById('deleteButton');
    const resultSection = document.getElementById('resultSection');
    const dynamicText = document.getElementById('dynamicText');

    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                displayImage.src = event.target.result;
                displayImage.style.display = 'block';
                deleteButton.style.display = 'inline-block';
                // Hide file input when image is uploaded
                document.querySelector('.upload-area').style.display = 'none';
            };
            
            reader.readAsDataURL(file);
        }
    });

    deleteButton.addEventListener('click', function() {
        fileInput.value = '';
        displayImage.src = '';
        displayImage.style.display = 'none';
        deleteButton.style.display = 'none';
        // Show file input when image is deleted
        document.querySelector('.upload-area').style.display = 'block';
    });


    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loading.style.display = 'block';

        setTimeout(function() {
            uploadForm.style.display = 'none';
            document.querySelector('.title').style.display = 'none';
            document.querySelector('p.title').style.display = 'none';
            loading.style.display = 'none';
            
            const randomIndex = Math.floor(Math.random() * messages.length);
            dynamicText.textContent = messages[randomIndex].text;
            document.getElementById('resultGif').src = messages[randomIndex].gif;
            
            resultSection.style.display = 'block';
        }, 3000);
    });
