// let guests = []

export function addGuest(event) {
    event.preventDefault()
    let guest = {
        fName: document.getElementById("fName").value,
        lName: document.querySelector("#lName").value
    }

    if (guest.fName.trim() && guest.lName.trim()) {
        // guests.push(guest)

        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${guest.fName}</td>
        <td>${guest.lName}</td>
        `
        document.querySelector("tbody").appendChild(row)
    }
    
    this.reset()
}