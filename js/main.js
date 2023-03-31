document.getElementById('dev').addEventListener('click', showDevInfo);
document.getElementById('aiden').addEventListener('click', showAidenInfo);
let memberinfo = document.getElementById('member-info')







function showDevInfo() {
    document.getElementById('member-name').textContent = 'Dev Pandya';
    document.getElementById('member-role').textContent = 'Brings designs to life through front-end dev, always trying new hobbies.';
    document.getElementById('bio').textContent = "Introducing Dev Pandya, a web designer with a sharp eye for detail and a talent for problem-solving. Like Sherlock Holmes, Dev has a knack for uncovering hidden design opportunities and creating solutions that are both beautiful and functional. With Dev on your team, your website will be a true masterpiece.";

    memberinfo.style.display = "block";
}

function showAidenInfo() {
    document.getElementById('member-name').textContent = 'Aiden Wotton';
    document.getElementById('member-role').textContent = 'Front-end guru and resident comic book illustrator.';
    document.getElementById('bio').textContent = 'As a developer, Mr. Aiden Wotton knows how to cook up some killer code. With a passion for technology that rivals Walter Whites love for chemistry, Aiden has been breaking bad programming habits and creating innovative solutions for years. When hes not busy coding, youll find Aiden binge-watching his favorite TV show or tinkering with his latest tech gadgets. With his exceptional skills and attention to detail, Aiden is the one you want in your corner when youre looking to take your web development game to the next level. So why settle for mediocre when you can have Aiden Wotton on your team?';

    memberinfo.style.display = "block";

}

