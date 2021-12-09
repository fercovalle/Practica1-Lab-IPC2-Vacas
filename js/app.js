function getDatosLogin(){
    const userLogin = {
        email : "fernandocovalle@gmail.com",
        password: "fer123",
    }
    userLogin.email=document.getElementById("email-login").value;
    userLogin.password=document.getElementById("password-login").value;
    console.log(userLogin);

    /*
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    console.log("email: "+email+" password: " +password);*/
}