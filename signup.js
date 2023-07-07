let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let trimName = name.value.split(" ").join("");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender = document.form.gender;
    let nameFormat = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input = document.querySelectorAll(".input");
    let small = document.getElementById("small");
    let smallPhone = document.getElementById("smallPhone");
    let smallEmail = document.getElementById("smallEmail");
    let smallPassword = document.getElementById("smallPassword");
    let smallCheck = document.getElementById("smallCheck")
    let userEmail = localStorage.getItem("email");
    let Incorrect = document.getElementById("Incorrect");
    let formDiv = document.getElementById("form");

    for (const item of input) {
        if (item.value === "" ) {
            // item.style.display = "none";
            item.style.border = "1px solid red";
            
            setTimeout(() => {
                item.style.border = "1px solid black";
            }, 5000);
            if (name.value === "" && email.value === "" && phone.value === "" && password.value === "" && gender.value === "") {
                Incorrect.style.display = "block";
                let formDiv = document.getElementById("form");
                formDiv.style.animation = "shake 0.5s";
               formDiv.style.animationIterationCount = "infinite";

         var keyframes = `@keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }`;

var styleSheet = document.createElement("style");
styleSheet.innerHTML = keyframes;
document.head.appendChild(styleSheet);
            
 
setTimeout(() => {
    formDiv.style.animation = "none";
}, 5000);}
            if (name.value === "" ) {
                small.style.display = "block"
                small.innerText = "Name is Required!!";
                setTimeout(() => {
                    small.style.display = "none"
                }, 5000);
            }
            if (email.value === "" ) {
                smallEmail.style.display = "block"
                smallEmail.innerText = "Email is Required!!"
                setTimeout(() => {
                    smallEmail.style.display = "none"
                }, 5000);
            }
            if (phone.value === "" ) {
                smallPhone.style.display = "block"
                smallPhone.innerText = "Phone Number is Required!!"
            setTimeout(() => {
                smallPhone.style.display = "none"
            }, 5000);
            }
            if (password.value === "" ) {
                smallPassword.style.display = "block"
            smallPassword.innerText = "Password is Required!!"
            setTimeout(() => {
                smallPassword.style.display = "none"
            }, 5000);
            }
            if (gender.value === "") {     
            smallCheck.style.display = "block"
            smallCheck.innerText = "Gender is Required!!"
            setTimeout(() => {
                smallCheck.style.display = "none"
            }, 5000);
            }
        } else if (!trimName.match(nameFormat)) {
            small.style.display = "block";
            name.style.border = "1px solid red";
            setTimeout(() => {
                small.style.display = "none";
                item.style.border = "1px solid black";
            }, 5000);
        } else if (!email.value.match(emailPattern)) {
            smallEmail.style.display = "block";
            email.style.border = "1px solid red";
            setTimeout(() => {
                smallEmail.style.display = "none";
                email.style.border = "1px solid black";
            }, 5000);
        } else if (phone.value.length !== 11 && ("+" + phone.value).length !== 14) {
            smallPhone.style.display = "block";
            phone.style.border = "1px solid red";
            setTimeout(() => {
                smallPhone.style.display = "none";
                phone.style.border = "1px solid black";
            }, 5000);
        } else if (!male.checked && !female.checked) {
            smallCheck.style.display = "block";
            setTimeout(() => {
                smallCheck.style.display = "none"
            }, 5000)
        } else if (password.value.length < 8){
            smallPassword.style.display = "block";
            password.style.border = "1px solid red";
            setTimeout(() => {
                smallPassword.style.display = "none";
                password.style.border = "1px solid black";
            }, 5000);
        } else if (userEmail === email.value) {
            exists.style.display = "block";
            setTimeout(() => {
                exists.style.display = "none"
                window.location.replace("./login.html")
            }, 5000);
        } else {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("phone", phone.value);
            localStorage.setItem("password", password.value);
            for (const gen of gender) {
                if (gen.checked) {
                    localStorage.setItem("gender", gen.value)
                }
            }
            window.location.replace("./index.html");
        }
    }
}
);