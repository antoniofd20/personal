import React from 'react'


const SeccionUno = () => (
    <section id="perfil">
    <div className="container-fluid py-5 bg-white">
        <blockquote className="blockquote text-center mb-5 mt-2">
            <h3 className="mb-0 mb-3 contenedor">Raymundo Antonio Flores Díaz&nbsp;<span>&nbsp;&nbsp;</span></h3>
            <footer className="blockquote-footer"><a name="perfil">React Front-End Developer</a></footer>
        </blockquote>

        <div className="row justify-content-center">
            <div className="col-md-8">
                <blockquote className="blockquote text-center mb-5 mt-2">
                    <p className="display-4 titulos text-center">Perfil</p>
                </blockquote>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-3 mr-2 justify-content-center" align="center">
                <img 
                    
                    src="https://pbs.twimg.com/media/EmCSc0gX0AAaqxx?format=jpg&name=small"
                    alt="..." 
                    className="rounded-circle" 
                    width="300px"
                />
            </div>
            <div className="ml-lg-5 col-lg-4 mx-1">
                <p className="text-justify estilo-1">
                Busco generar estrategias y lineamientos tecnológicos para
                poder dar solución a los problemas que pueda enfrentar, así
                como también me preocupo por optimizar los recursos y
                costos que puede tener un proyecto. En lo personal me
                preocupo por la satisfacción de los clientes al tener un
                servicio y por tal motivo trato de hacer todo lo mejor posible.
                </p>
                <p className="text-justify">
                En lo personal me preocupo por todos los detalles, razon por 
                la cual dedico tiempo a cada uno de ellos para mejorarlos y 
                optimizarlos.
                </p>
                <p className="text-justify">
                Soy una persona creativa que disfruta de estar en constante crecimiento,
                aprendiendo nuevas técnicas y tecnologías para realizar trabajos
                de mayor calidad.
                </p>
                <p className="font-weight-bold"><a name="servicios">Edad: 21 años &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Localidad: CDMX</a></p>
            </div>
        </div>
    </div>
    </section>
);
 
export default SeccionUno;