const Data = [
    {
        id: 1,  
        nombre:  "Anillo circular Diamante",
        precio: 999,
        stock: 10,  
        img:  "../img/Anillo1_.png",
        alt:  "Anillo_PlataOro",
        desc:  "Anillo de plata y diamantes, compralo hasta en 12 cuotas."
    },
    {
        id: 2,  
        nombre:  "Anillo Mariposas",
        precio: 2499,
        stock: 5,  
        img:  "../img/Anillo2_.png",
        alt:  "Anillo_curvo",
        desc:  "Anillo de mariposas y detalles en color violeta, compralo hasta en 12 cuotas."
    },
    {
        id: 3,  
        nombre:  "Anillo Bronce",
        precio: 1899,
        stock: 12,  
        img:  "../img/Anillo3_.png",
        alt:  "Anillo_especial",
        desc:  "Anillo de Bronce, compralo hasta en 12 cuotas."
    },
    {
        id: 4,  
        nombre:  "Anillo Corazones",
        precio: 1999,
        stock: 4,  
        img:  "../img/Anillo4_.png",
        alt:  "Anillo_corazones",
        desc:  "Anillo de corazones, especial para enamorados, compralo hasta en 12 cuotas."
    },
    {
        id: 5,  
        nombre:  "Smart Watch Time Cuadrado",
        precio: 3499,
        stock: 20,  
        img:  "../img/reloj_dam_a.png",
        alt:  "Reloj_dama",
        desc:  "Smart Watch con compatibilidad Android, compralo hasta en 12 cuotas."
    },
    {
        id: 6,  
        nombre:  "Smart Watch Time Circular",
        precio: 2499,
        stock: 5,  
        img:  "../img/reloj_homb_a.png",
        alt:  "Reloj_Hombre",
        desc:  "Smart Watch circular, compatibilidad Android/Ios, compralo hasta en 12 cuotas."
    },
    {
        id: 7,  
        nombre:  "Reloj digital niños",
        precio: 2999,
        stock: 15,  
        img:  "../img/reloj_nino_a.png",
        alt:  "Reloj_Nenes",
        desc:  "El primer reloj para los más pequeños, compralo hasta en 12 cuotas."
    },
    {
        id: 8,  
        nombre:  "Reloj Fitness",
        precio: 5999,
        stock: 3,  
        img:  "../img/reloj_depor_a.png",
        alt:  "Reloj_deportivo",
        desc:  "Reloj con cronometro, especial para Runners, compralo hasta en 12 cuotas."
    },
]

const getData = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(Data)
        }, 2000);
    } else {
        reject(console.log( "No hay datos" ))
    }
})

export default getData;