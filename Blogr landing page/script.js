function openBtn() {
    var element = document.getElementById('menu-btn');
    var menu = document.getElementById('menu-section');
    let menuOpen = false;
    element.classList.toggle('open');
    menu.classList.toggle('open');
}
function productOpen(){
    var product = document.getElementById('product-menu');
    var arrow = document.getElementById('arrow-down-prod');
    arrow.classList.toggle('open');
    product.classList.toggle('open');
}
function companyOpen() {
    var company = document.getElementById('company-menu');
    var arrow = document.getElementById('arrow-down-comp');
    company.classList.toggle('open');
    arrow.classList.toggle('open');
}
function connectOpen() {
    var connect = document.getElementById('connect-menu');
    var arrow = document.getElementById('arrow-down-conn');
    connect.classList.toggle('open');
    arrow.classList.toggle('open');
}
function openDeskMenuProduct() {
    var product = document.getElementById('item-box-product');
    var arrow = document.getElementById('arrow-desk-product');
    arrow.classList.toggle('open');
    product.classList.toggle('open');
}
function openDeskMenuCompany() {
    var company = document.getElementById('item-box-company');
    var arrow = document.getElementById('arrow-desk-company');
    company.classList.toggle('open');
    arrow.classList.toggle('open');
}
function openDeskMenuConnect() {
    var connect = document.getElementById('item-box-connect');
    var arrow = document.getElementById('arrow-desk-connect');
    connect.classList.toggle('open');
    arrow.classList.toggle('open');
}