function showPopup(title) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupCard').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupCard').style.display = 'none';
}