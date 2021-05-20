const auth = firebase.auth();


const signInSection = document.getElementById("signInSection");
const SignOutSection = document.getElementById("SignOutSection");

const btnCreate = document.getElementById('btn_create');
const btnSign = document.getElementById('btn_sigin');
const btnSigout = document.getElementById('btn_sigout');

const fnameElement = document.getElementById('txt_FName');
const lnameElement = document.getElementById('txt_LName');
const emailElement = document.getElementById('txt_EmailId');
const passElement = document.getElementById('txt_password');
const massegeElement = document.getElementById('message');

btnCreate.onclick = () =>{
    var email = emailElement.value;
    var password = passElement.value;
    auth.createUserWithEmailAndPassword(email,password).then( () =>{
        massegeElement.innerHTML ="Account Created successfully";
        massegeElement.hidden = true;
    }).catch((err) =>{
        massegeElement.innerHTML =err.massege;
        massegeElement.hidden = false;
    })
}

btnSign.onclick = () =>{
    var email = emailElement.value;
    var password = passElement.value;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
          signInSection.hidden= false;
          signInSection.hidden = true;
        })
      .catch((err) => {
        massegeElement.innerHTML = err.massege;
        massegeElement.hidden = false;
      });

}
