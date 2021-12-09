function getDataLogin(){
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
function getDataRegisterUser(){
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
function getDataRegisterClient(){
    const clientRegister={
        CUI:"2953634360713",
        name:"Fernando",
        lastName:"Coronado",
        email:"fernandocovalle@gmail.com",
        date:"17/07/2000",
        homeAddress: "9Av 2-34 Zona 1,Quetzaltenango"
    }
    clientRegister.CUI=document.getElementById("input-CUI").value;
    clientRegister.name=document.getElementById("input-name").value;
    clientRegister.lastName=document.getElementById("input-last-name").value;
    clientRegister.email=document.getElementById("input-email").value;
    clientRegister.date=document.getElementById("input-date-of-birth").value;
    clientRegister.homeAddress=document.getElementById("input-home-address").value;

    console.log("Registro Exitoso!");
    console.log(clientRegister);
}