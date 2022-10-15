import ReactPlayer from 'react-player'
import "./QuienesSomos.css";


const QuienesSomos = () => {
  return (
    <>
        <main className="mainSomos">
            <section className='historiaSomos'>
                <h1 className="titulos">Nuestra Historia</h1>
                <nav className="texto">
                    <p> Nuestra historia empezó hace 55 años cuando nuestro fundador, Oscar Puga, comenzó a trabajar en la
                        ciudad de Chillar (provincia de Buenos Aires) en reparación de relojes y venta de artículos de
                        joyería.
                        Con el paso el tiempo, el joven Oscar adquirió todas las habilidades y manejo de herramientas como
                        un experto maestro relojero con lo que llevo su trabajo en la ciudad de Azul (provincia de Buenos
                        Aires) y se asentó, ya hace más de 40 años, en el local de la calle Burgos a metros de la plaza
                        San Martín en pleno centro comercial azuleño.</p>
                    <p> Oscar y Marta han formado su familia y con el paso del tiempo han incorporado a la empresa, siendo
                        Walter el que finalizó la carrera de Joyero, creando esos anillos personalizados, grabado de
                        cristales y cajas personalizadas para cualquier tipo de evento. También Gabriela y Alejandra
                        finalizaron la carrera de Contadoras, aplicando sus conocimientos en el funcionamiento de la
                        empresa.</p>
                    <p> Una empresa familiar Argentina, con los valores del trabajo, dedicación y buena atención para que tu
                        compra sea esa experiencia distinta que estas buscando.</p>
                </nav>
            </section>
            <h2 className="titulos">Conoce a nuestro Joyero</h2>
            <section className="videos">
                <div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=6CF2HiKRzdA&t=1s" />
                </div>
                <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=TNxB3g1MP6w" />
                </div>
                <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=u2DrPQ7eXcU" />
                </div>
                <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=npC7KYDqrPo"/>
                </div>
            </section>
        </main>
    </>
  )
}

export default QuienesSomos