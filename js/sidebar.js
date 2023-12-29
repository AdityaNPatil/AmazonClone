// 📁 OPEN SIDE BAR ON CLICKING THE MENU OPEN ICON
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
const menuOpenBtn = document.querySelector(" .menuOpen");
menuOpenBtn.addEventListener("click", showSidebar);

// 📁 CLOSE SIDE BAR ON CLICKING THE MENU CLOSE ICON
function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
const menuCloseBtn = document.querySelector(".sidebar .menuClose");
menuCloseBtn.addEventListener("click", closeSidebar);