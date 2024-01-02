const btnE1 = document.getElementById("btn");
const emojinameE1 = document.getElementById("emoji-name");



const emoji = [];


async function getEmoji(){
    let response = await fetch("http://emoji-api.com/emojis?access_key=61276a402e38c1e8c634e2827d005d777f8d70f2");

    data = await response.json();
    
    for (let i=0;i<1500;i++){
        emoji.push({
          emojiname:data[i].character,
          emojiCode:data[i].unicodeName,
        });
    }
}

getEmoji();
btnE1.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnE1.innerText=emoji[randomNum].emojiname;
    emojinameE1.innerText=emoji[randomNum].emojiCode;

});
