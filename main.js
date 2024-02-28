/* ============ chats section ============ */
let contact = document.getElementById("leftsectionchatcs");
let Name = ["muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom"]
let counter = 0;
for(let i = 0; i<= 50; i++){
    let element = document.createElement("div");
    let inElemen = document.createElement("div");
    let inEleme = document.createElement("div");
    inElemen.appendChild(inEleme)
    let text = document.createElement("p");
    text.innerText = Name[counter];
    inEleme.appendChild(text)
    element.appendChild(inElemen);
    counter++;
    contact.appendChild(element);
}

let section = document.getElementById("section");


let story_container = document.getElementById("story_container");
let y = 0;
let idName = ["muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom"]
for(let x = 0; x <= 100; x++){
    let element = document.createElement("div");
    let inElemen = document.createElement("div");
    let inEleme = document.createElement("div");
    inElemen.appendChild(inEleme)
    let text = document.createElement("p");
    text.innerText = idName[y];
    inEleme.appendChild(text)
    element.appendChild(inElemen);
    y++;
    story_container.appendChild(element);
}


let prev = document.getElementById("prev");
let next = document.getElementById("next");
let val = 0;
next.addEventListener("click", ()=>{
    val+= 160;
    story_container.style.transform = "translateX("+ -val+"px)";
})


prev.addEventListener("click", ()=>{
    val-= 160;
    story_container.style.transform = "translateX("+ -val+"px)";
})
let mainSection = document.getElementById("mainSection");
mainSection.addEventListener("scroll", ()=>{
    // let value  = window.scrollY;
    prev.classList.toggle("d_none", window.scrollY > 100);
    next.classList.toggle("d_none", window.scrollY > 100);
});
/* ======== POST SECTION ========== */

let postname = ["muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom", "bou","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom","muhim", "mubin", "ruhin", "sharmin", "afrin", "rashik", "mithun", "nishie", "rony", "minu", "nuralom"]

let timeArry = ["1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","7 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "2h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>",,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","7 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "2h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>","1 d.<ion-icon name='earth-outline'></ion-icon>" ,"Sopnserd.<ion-icon name='earth-outline'></ion-icon>", "5h.<ion-icon name='earth-outline'></ion-icon>", "2h.Dhaka.<ion-icon name='earth-outline'></ion-icon>" ,"2 d.<ion-icon name='earth-outline'></ion-icon>","3 d.<ion-icon name='earth-outline'></ion-icon>","4 d.<ion-icon name='earth-outline'></ion-icon>","6 d.<ion-icon name='earth-outline'></ion-icon>"]

let post_section  = document.getElementById("post_section");
let postCounter = 0;

for(let x = 0; x <= 100; x++){
    let container = document.createElement("div")
    let container_2 = document.createElement("div");
    let pro  = document.createElement("div");
    container_2.appendChild(pro);
    let name = document.createElement("div");
    let text = document.createElement("h5");
    text.innerText = postname[postCounter];
    let tag = document.createElement("div");
    let time = document.createElement("div");
    time.innerHTML = timeArry[postCounter];
    tag.appendChild(time)
    text.appendChild(tag);
    name.appendChild(text);
    pro.appendChild(name);
    container.appendChild(container_2);
    postCounter++;
    post_section.appendChild(container);
    let LP = document.createElement("div");
    let dote = document.createElement("span");
    let doteText = "...";
    dote.innerText = doteText;
    let close = document.createElement("h3");
        close.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        LP.appendChild(dote)
        LP.appendChild(close)
    container_2.appendChild(LP);
    let img  = document.createElement("div");
    container.appendChild(img);
    let bottom = document.createElement("div");
    let icon_1 = "<ion-icon name='happy-outline'></ion-icon>";
    let like = document.createElement("div");
    like.innerHTML  = icon_1 +"Like";
    bottom.appendChild(like);
    let icon_2 = "<ion-icon name='chatbubbles-outline'></ion-icon>";
    let comment = document.createElement("div");
    comment.innerHTML = icon_2 +"Comment"
    bottom.appendChild(comment);
    let icon_3 = "<ion-icon name='arrow-redo-outline'></ion-icon>";
    let share = document.createElement("div");
    share.innerHTML = icon_3 + "Share"
    bottom.appendChild(share);
    container.appendChild(bottom);
}


