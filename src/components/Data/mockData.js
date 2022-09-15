const Data = [
    {
        id: "1",  
        nombre:  "Anillo circular Diamante",
        precio: 999,
        stock: 10,  
        img:  "../img/Anillo1_.png",
        alt:  "Anillo_PlataOro",
        desc:  "Anillo de plata y diamantes, compralo hasta en 12 cuotas.",
        categoria: "Anillos"
    },
    {
        id: "2",  
        nombre:  "Anillo Mariposas",
        precio: 2499,
        stock: 5,  
        img:  "../img/Anillo2_.png",
        alt:  "Anillo_curvo",
        desc:  "Anillo de mariposas y detalles en color violeta, compralo hasta en 12 cuotas.",
        categoria: "Anillos"
    },
    {
        id: "3",  
        nombre:  "Anillo Bronce",
        precio: 1899,
        stock: 12,  
        img:  "../img/Anillo3_.png",
        alt:  "Anillo_especial",
        desc:  "Anillo de Bronce, compralo hasta en 12 cuotas.",
        categoria: "Anillos"
    },
    {
        id: "4",  
        nombre:  "Anillo Corazones",
        precio: 1999,
        stock: 4,  
        img:  "../img/Anillo4_.png",
        alt:  "Anillo_corazones",
        desc:  "Anillo de corazones, especial para enamorados, compralo hasta en 12 cuotas.",
        categoria: "Anillos"
    },
    {
        id: "5",  
        nombre:  "Smart Watch Time Cuadrado",
        precio: 3499,
        stock: 20,  
        img:  "../img/reloj_dam_a.png",
        alt:  "Reloj_dama",
        desc:  "Smart Watch con compatibilidad Android, compralo hasta en 12 cuotas.",
        categoria: "Relojes"
    },
    {
        id: "6",  
        nombre:  "Smart Watch Time Circular",
        precio: 2499,
        stock: 5,  
        img:  "../img/reloj_homb_a.png",
        alt:  "Reloj_Hombre",
        desc:  "Smart Watch circular, compatibilidad Android/Ios, compralo hasta en 12 cuotas.",
        categoria: "Relojes"
    },
    {
        id: "7",  
        nombre:  "Reloj digital niños",
        precio: 2999,
        stock: 15,  
        img:  "../img/reloj_nino_a.png",
        alt:  "Reloj_Nenes",
        desc:  "El primer reloj para los más pequeños, compralo hasta en 12 cuotas.",
        categoria: "Relojes"
    },
    {
        id: "8",  
        nombre:  "Reloj Fitness",
        precio: 5999,
        stock: 3,  
        img:  "../img/reloj_depor_a.png",
        alt:  "Reloj_deportivo",
        desc:  "Reloj con cronometro, especial para Runners, compralo hasta en 12 cuotas.",
        categoria: "Relojes"
    },
    {
        id: "9", 
        nombre: "Dije simple con cadena",
        precio: 499, 
        stock: 15,
        img: "../img/Joyeria1_a.png", 
        alt: "Dije_dama", 
        desc: "Dije simple con cadena a elección, compralo hasta en 3 cuotas.", 
        categoria: "Accesorios"
    },
    {
        id: "10",
        nombre: "Dije especial Piedras",
        precio: 2199, 
        stock: 12, 
        img: "../img/Dije5_a.png", 
        alt: "Dije_piedra", 
        desc: "Dije con piedras preciosas de diferentes colores, compralo hasta en 3 cuotas.", 
        categoria: "Accesorios"
    },	
    {
        id: "11",
        nombre: "Aros personalizados Corazón", 
        precio: 1899, 
        stock: 1, 
        img: "../img/Aros1_a.png", 
        alt: "Aros_plata", 
        desc: "Aros que no encontraras en otro lado, compralo hasta en 3 cuotas.", 
        categoria: "Accesorios"
    },		
    {
        id: "12",
        nombre: "Pulseras dama Plata", 
        precio: 1999, 
        stock: 3, 
        img: "../img/Pulseras1_a.png", 
        alt: "Pulseras_dama", 
        desc: "Pulseras Plata para la dama, únicas en el mercado, compralo hasta en 3 cuotas.", 
        categoria: "Accesorios"
    },			
	{
        id: "13",
        nombre: "Bolso Negro", 
        precio: 3199, 
        stock: 4, 
        img: "../img/marroqui1_a.png", 
        alt: "Cartera_Negra", 
        desc: "Bolso cuero negro, para todos los días, compralo hasta en 6 cuotas.", 
        categoria: "Marroquineria"
    },
    {
        id: "14",
        nombre: "Cartera Marrón Boutique", 
        precio: 4699, 
        stock: 14, 
        img: "../img/marroqui2_a.png", 
        alt: "Cartera_Marron", 
        desc: "Cartera Marron, especial para salidas, compralo hasta en 6 cuotas.", 
        categoria: "Marroquineria"
    },	
    {
        id: "15",
        nombre: "Cartera Cuero Negra", 
        precio: 2699, 
        stock: 12, 
        img: "../img/marroqui3_a.png", 
        alt: "Cartera_Cuero_Negra", 
        desc: "Cartera de cuero negro, combina con todo, compralo hasta en 6 cuotas.", 
        categoria: "Marroquineria"
    },		
    {
        id: "16",
        nombre: "Bolso profesional maquillaje", 
        precio: 4999, 
        stock: 6, 
        img: "../img/bolso_maquillaje_a.png", 
        alt: "Bolsos_maquillaje", 
        desc: "Bolso para las profesionales del maquillaje, compralo hasta en 6 cuotas.", 
        categoria: "Marroquineria"
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