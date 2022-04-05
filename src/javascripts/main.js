// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'
import { addGuest, loadGuests } from './guestForm'
import { tictactoe } from './ticTacToe'
import { getGithubUsers, getTop10Movies } from './apiFunctions'
import '../top10.dat'

console.log("Hello world!")

if (document.querySelector("#week10")) {
    document.querySelector("#guestForm").onsubmit = addGuest
    window.onload = loadGuests
}

if (document.querySelector("#week11")) {
    window.onload = tictactoe
}

if (document.querySelector("#week12")) {
    getGithubUsers()
    getTop10Movies()
}