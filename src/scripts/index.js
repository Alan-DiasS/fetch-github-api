import { getUser } from '/src/scripts/services/user.js';
import { respositories } from "/src/scripts/services/respositories.js";
import {user} from "/src/scripts/services/objects/user.js";
import {screen} from "/src/scripts/services/objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value
  if(validateEmptyInput(userName)) return;
  getUserProfile(userName);
});


document.getElementById("input-search").addEventListener(`keyup`, (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterkeyPressed = key === 13;

  if (isEnterkeyPressed) {
    validateEmptyInput(userName);
    getUserProfile(userName);
  }
});

function validateEmptyInput(userName){
  if(userName.length === 0 ){
    alert("preencha o campo com usuário válido do GitHUb!")
    return true;
  }
}

async function getUserProfile(userName) {

 const userResponse = await getUser(userName);
 if(userResponse.message === "Not Found"){
   screen.renderUserNotFound(); return
 }
 const repositoriesResponse = await respositories(userName);
 user.setInfo(userResponse)
 user.setRespositories(repositoriesResponse)
 screen.renderUser(user);

}

