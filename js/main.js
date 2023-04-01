let Dev = document.getElementById('dev');
let Aiden = document.getElementById('aiden')
let memberinfo = document.getElementById('member-info');

function showDevInfo() {
    document.getElementById('member-name').textContent = 'Dev Pandya';
    document.getElementById('member-role').textContent = 'Developer';
    document.getElementById('bio').textContent = "Introducing Dev Pandya, a web designer with a sharp eye for detail and a talent for problem-solving. Like Sherlock Holmes, Dev has a knack for uncovering hidden design opportunities and creating solutions that are both beautiful and functional. With Dev on your team, your website will be a true masterpiece.";
    Dev.style.backgroundImage = "url('images/dev_teampage.jpg')";
    Aiden.style.backgroundImage = "url('images/aiden_colourless.jpg')";

    memberinfo.style.display = "block";
}

function showAidenInfo() {
    document.getElementById('member-name').textContent = 'Aiden Wotton';
    document.getElementById('member-role').textContent = 'Designer';
    document.getElementById('bio').textContent = 'My name is Aiden, and I am the guy who comes up with awesome designs. I enjoy both designing and coding, and have experience with both. I live in London, Ontario, and I’m currently enrolled in Interactive Media Design at Fanshawe College. I’ve been a founding member of D-Zyne alongside Dev, and we’ve been working hard at D-Zyne studios for just over a year.';
    Aiden.style.backgroundImage = "url('images/aiden_teampage.jpg')";
    Dev.style.backgroundImage = "url('images/dev_colourless.jpg')";
    

    memberinfo.style.display = "block";

}

function aidenHover() {
    Aiden.style.backgroundImage = "url('images/aiden_teampage.jpg')";
}

function aidenRestore() {
    Aiden.style.backgroundImage = "url('images/aiden_colourless.jpg')";
}

Dev.addEventListener('click', showDevInfo);

Aiden.addEventListener('click', showAidenInfo);

