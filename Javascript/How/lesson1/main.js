/**
 * Gioi thieu 1 so ham built-in
 * 1.Alert
 * 2.console
 * 3.Vonfirm
 * 4.Prompt
 * 5.Set timeout
 * 6.Set interval
 */

var fullName = 'Duong Quang Khai'

console.warn(fullName)
console.error(fullName)
console.log(fullName)

// confirm('Xac nhan ban du tuoi !')

// prompt('Xac nhan ban du tuoi')

// setTimeout(function() {
//     alert("Thong bao")
// }, 1000)

setInterval(function() {
    console.log("Day la log " + Math.random())  
}, 1000)