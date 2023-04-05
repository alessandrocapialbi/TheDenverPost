const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list')
toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})