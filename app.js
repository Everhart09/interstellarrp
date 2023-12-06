let menu = document.getElementById('mitems');
let icon = document.getElementById('micon')

function toggleNav() {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex'
  }else {
    menu.style.display = 'none'
  }
}