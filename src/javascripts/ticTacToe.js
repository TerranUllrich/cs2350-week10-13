export function tictactoe() {
    let count = 0

    document.querySelectorAll("td").forEach((td) => {
        td.onclick = (event) => {
            if (count % 2 == 0) {
                /* Place x */
                event.target.innerHTML = "X"
            } else {
                /* Place O */
                event.target.innerHTML = "O"
            }
            count++
        }
    })
}