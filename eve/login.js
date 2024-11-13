
const defaultUsername = "Chronicle";
const defaultPassword = "Chronicle";


document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    if (username === defaultUsername && password === defaultPassword) {
       
        window.location.href = "index.html";
    } else {
     
        alert("Invalid login. Please try again.");
    }
});
