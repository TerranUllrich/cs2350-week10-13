export function getTop10Movies() {
    fetch("/top10.dat")
        .then(
            (res) => {
                if (res.ok){
                    return res.json()
                } else {
                    throw Error("Failed to get file")
                }
            }
        )
        .then(
            (mov) => {
                for (let m of mov){
                    let cardHTML = `
                        <div class="card">
                            <img src="${m.poster}" alt="${m.title}'s avatar" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.title}</h5>
                                <p class="card-text">${m.plot}</p>
                            </div>
                        </div>
                    `
                    let card = document.createElement("div")
                    card.classList.add("col")
                    card.innerHTML = cardHTML
                    document.querySelector(".top10").appendChild(card)
                }
            }
        )
        .catch()
}
export function getGithubUsers() {
    fetch("https://api.github.com/users")
        .then(
            (res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw Error("API Call Failed")
                }
            }
        )
        .then(
            (users) => {
                for (let user of users) {
                    let cardHTML = `
                        <div class="card">
                            <img src="${user.avatar_url}" alt="${user.login}'s avatar" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${user.login}</h5>
                                <p class="card-text">URL: ${user.html_url}</p>
                            </div>
                        </div>
                    `
                    let cardCol = document.createElement("div")
                    cardCol.classList.add("col")
                    cardCol.innerHTML = cardHTML

                    document.querySelector(".github").appendChild(cardCol)
                }
            }
        )
        .catch(
            (err) => {
                document.querySelector(".github").innerHTML = `
                    <p class="text-danger">API CALL FAILED: ${err}</p>
                `
            }
        )
}