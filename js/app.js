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
function getDatosRegisterUser(){
    const userRegister={
        emailRegister: "fernandocovalle@gmail.com",
        nameRegister : "Fernando",
        lastNameRegister: "Coronado",
        passwordRegister : "fer123",
        passwordRegisterConfirm : "fer123",
    }
    userRegister.emailRegister=document.getElementById("input-email").value;
    userRegister.nameRegister=document.getElementById("input-name").value;
    userRegister.lastNameRegister=document.getElementById("input-last-name").value;
    userRegister.passwordRegister=document.getElementById("input-password").value;
    userRegister.passwordRegisterConfirm=document.getElementById("input-password-confirm").value;

    if(userRegister.passwordRegister === userRegister.passwordRegisterConfirm){
        console.log("Datos Registrados");
        console.log(userRegister);
    }else{
        console.log("Las contraseñas no coinciden");
    }
}