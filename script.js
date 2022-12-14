

const nameOrd = document.getElementById("username"); 
const losenOrd = document.getElementById("pass");

if (!checkLoginStatus()) {   
    console.log('Need to login')
    document.getElementById("login").style.display = "block"
    document.getElementById("inloggad").style.display = "none"
    clearContent()

} else {
    console.log('Do not need to login')
    document.getElementById("login").style.display = "none"
    generateContent()
}

function login() { 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    if (user == "Sara" && pass == "qwe123") { 
        generateContent()
        performLogin();
    } else {
        alert("fel namn eller lösenord prova igen");
    }
}


function performLogin() { 
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
    document.getElementById("login").style.display = "none"
    document.getElementById("inloggad").style.display = "flex"
}

function performLogout() { 
    clearContent()
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
    document.getElementById("login").style.display = "block"
    document.getElementById("inloggad").style.display = "none"
}

function checkLoginStatus() { 
    return Boolean(JSON.parse(localStorage.getItem('isLoggedIn')))
}

function generateContent() {  
    const wellcomeMessage = 'välkommen, du är nu inloggad det är test';
    const content = `
    <div id="inloggad" class="center">
        <h1>${wellcomeMessage}</h1>
        <button id="btnUt" onclick="performLogout()">Logga Ut</button>
    </div>`;

    document.querySelector('#content').innerHTML = content;
    // document.getElementById('content').innerHTML = content;  // diferent types to set the html code
    // document.getElementById('content').insertAdjacentHTML(
    //     "beforeend", document.getElementById('content').innerText
    // );
    // document.getElementById('content').insertAdjacentHTML(
    //     "afterbegin", document.getElementById('content').innerText
    // );
    
}

function clearContent() {
    document.getElementById('inloggad').innerHTML = '';
}

// var box = document.createElement('div'); // generate html if status true another way to do it
// box.setAttribute('id', 'inloggad');
// box.setAttribute('class', 'center');
// var tagH1 = document.createElement("h1");
// box.appendChild(tagH1);
// var message = document.createTextNode("välkommen, du är nu inloggad det är test");
// tagH1.appendChild(message);
// var btnUt = document.createElement("button");
// btnUt.setAttribute('id', 'btnUt');
// btnUt.addEventListener("click", performLogout);
// btnUt.innerHTML = "Logga Ut";
// box.appendChild(btnUt);
// //document.body.appendChild(box);
// var insertbefor = document.getElementById("center");
// document.body.insertBefore(box, insertbefor);
