let guests = []

export function addGuest(event) {
    event.preventDefault()
    let guest = {
        fName: document.getElementById("fName").value,
        lName: document.querySelector("#lName").value
    }

    if (guest.fName.trim() && guest.lName.trim()) {
        if (localStorage.getItem('guests')){
            guests = JSON.parse(localStorage.getItem('guests'))
            guests.push(guest)
        } else {
            guests.push(guest)

        }
        
        localStorage.setItem("guests", JSON.stringify(guests))

        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${guest.fName}</td>
        <td>${guest.lName}</td>
        `
        document.querySelector("tbody").appendChild(row)
    }
    
    this.reset()
}

export function loadGuests(){
    if (localStorage.getItem('guests')){
        let guests = JSON.parse(localStorage.getItem('guests'))
        for (let guest of guests){
            let row = document.createElement("tr")
            row.innerHTML = `
            <td>${guest.fName}</td>
            <td>${guest.lName}</td>
            `
            document.querySelector("tbody").appendChild(row)
        }
    }
}