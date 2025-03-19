const screen = {
   userProfile: document.querySelector(".profile-data"),
   renderUser(user){
         this.userProfile.innerHTML = `<div class= "info"><img src ="${
              user.avatar_url
         }" alt = "foto do perfil do usuário" /> 
              <div class = "data">
                <h1>${
                  user.name ?? "Não possuí nome cadastrado, tente outro 😁"
                }</h1>
                <p>${user.bio ?? "Não possuí bio cadastrado, tente outro 😁"}</p>
              </div>
              </div>`

              let respositoriesItens = "";
              user.respositories.forEach((repo) => 
                respositoriesItens += `<li><a href = "${repo.html_url}" target= "_blank"> ${repo.name}</a></li>`
              ) 

              if(user.respositories.length > 0){
                this.userProfile.innerHTML += `
                <div class= "repositories section">
                <h2>Repositórios</h2>
                <ul>${respositoriesItens}</ul>
                </div>`;
              }
    },

    renderUserNotFound(){
      this.userProfile.innerHTML = `<h3>Usuário não encontrado, tente novamente!</h3>`
    }
}
 export { screen }