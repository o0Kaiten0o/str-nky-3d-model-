
function reset() {
    console.log("Obarvení na původní barvu " + jmeno_kruznic);
    const Prvky = document.querySelectorAll(jmeno_kruznic); // nalezeni všech .lan kruznic
    Prvky.forEach(prvek => { // kazdou kruznici zmenime
        switch (jmeno_kruznic) { // obecne obarvovani na puvodni barvu
            case ".lan":
                prvek.style.backgroundColor = '#fd7e14'; // back.. color zmenime
                prvek.style.boxShadow = '0 0 0 #007bff'; // box shadow
                break;

            case ".wan":
                prvek.style.backgroundColor = '#007bff'; // back.. color zmenime
                prvek.style.boxShadow = '0 0 0 #007bff'; // box shadow
                break;

            case ".man":
                prvek.style.backgroundColor = '#28a745'; // back.. color zmenime
                prvek.style.boxShadow = '0 0 0 #007bff'; // box shadow
                break;
        }
    });
}


function hover(id_tlacitka) {
    switch(id_tlacitka) {
        case 1: // switch na pozouzeni daneho tlacitka
            jmeno_kruznic = ".lan"
            console.log("Stlačení tlačitka LAN"); // overeni ze jsem zmacknul
            const lanPrvky = document.querySelectorAll(jmeno_kruznic); // nalezeni všech .lan kruznic
            lanPrvky.forEach(prvek => { // kazdou kruznici zmenime
                prvek.style.backgroundColor = '#0056b3'; // back.. color zmenime
                prvek.style.boxShadow = '0 0 15px #007bff'; // box shadow
            });

            setTimeout(() => {
                reset();
            }, 2000); // zpomalení obarvovani na prvni barvu


            break; // musi byt na konec jednoho switche

        case 2:
            jmeno_kruznic = ".man"
            console.log("Stlačení tlačitka MAN");
            const manPrvky = document.querySelectorAll(jmeno_kruznic);
            manPrvky.forEach(prvek => {
                prvek.style.backgroundColor = '#0056b3';
                prvek.style.boxShadow = '0 0 15px #007bff';
            });

            setTimeout(() => {
                reset();
            }, 2000); // zpomalení obarvovani na prvni barvu

            break;

        case 3:
            jmeno_kruznic = ".wan"
            console.log("Stlačení tlačitka WAN");
            const wanPrvky = document.querySelectorAll(jmeno_kruznic);
            wanPrvky.forEach(prvek => {
                prvek.style.backgroundColor = '#0056b3';
                prvek.style.boxShadow = '0 0 15px #007bff';
            });

            setTimeout(() => {
                reset();
            }, 2000); // zpomalení obarvovani na prvni barvu

            break;

        case 4:
            console.log("Stlačení tlačitka BAN");
            break;

        case 5:
            console.log("Stlačení tlačitka PAN");
            break;
    }
    // background-color: #0056b3; box-shadow: 0 0 15px #007bff;
}