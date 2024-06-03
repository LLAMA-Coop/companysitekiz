const menubtn = document.getElementById('menubtn');
const menu = document.getElementById('sideMenu');
const menubtnbg = document.getElementById('menubtnbg');
const img = document.getElementById('menullama');

if(localStorage.getItem("Menutoggle") == null)
    {
        localStorage.setItem("Menutoggle", "OFF");
    }

function menuToggle() {
    if(localStorage.getItem("Menutoggle") == null)
    {
        localStorage.setItem("Menutoggle", "OFF");
    }

    if(localStorage.getItem("Menutoggle")=== "OFF")
        {
            localStorage.setItem("Menutoggle", "ON");
    menu.style.opacity = "100%";
    menubtn.src = "/images/close_24dp_FILL0_wght400_GRAD0_opsz24.svg";
    menubtnbg.style.backgroundColor = "var(--btc)";
    menubtn.style.filter = "invert(100%)";
    menu.style.zIndex = "0";
        }
    else{
        localStorage.setItem("Menutoggle", "OFF");
    menu.style.opacity = "0%";
    menubtn.src = "/images/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg";
    menubtnbg.style.backgroundColor = "var(--tc)";
    menubtn.style.filter = "var(--invertoff)";
    menu.style.zIndex = "-1";
    }
}