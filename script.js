const links = {
  github: 'LucasmMartinsM', //https://github.com/LucasmMartinsM
  youtube: 'channel/UCCe_gT11Wm5WoWwC_yPrFdA', //https://www.youtube.com/channel/UCCe_gT11Wm5WoWwC_yPrFdA
  instagram: '_lucasmartins99', //https://www.instagram.com/_lucasmartins99/
  facebook: 'profile.php?id=100002423610123', //https://www.facebook.com/profile.php?id=100002423610123
  twitter: 'LucasMartinsm99' //https://twitter.com/LucasMartinsm99
}

function clicar() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
      corpo.style.background = 'hsl(203, 82%, 15%)'
    })
}

/*function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}
getGitHubProfileInfos()*/
