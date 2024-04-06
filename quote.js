const url = "https://type.fit/api/quotes";
const para = document.querySelector("#p");
const whatsapp = document.getElementById("whatsapp");
const quotebtn = document.querySelector("#quotebtn");
const author = document.querySelector("#authorname");

quotebtn.addEventListener("click", async () => {
    let response = await fetch(url);
    let data = await response.json();
    let random = Math.floor(Math.random() * data.length);
    let usefuldata = data[random].text;
    let usefuldataauthor = data[random].author || 'Unknown'; // Handling cases where the author might be null
    para.innerText = usefuldata;
    author.innerText = `~ ${usefuldataauthor}`;
});

whatsapp.addEventListener("click", () => {
    let quote = para.innerText;
    let quoteAuthor = author.innerText;
    let whatsappURL = `whatsapp://send?text=${quote},${quoteAuthor}width=600 height=300`;
    window.open(whatsappURL);
    console.log(whatsappURL);
});
