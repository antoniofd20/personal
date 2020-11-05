import React, { Fragment} from 'react';

const Proyecto = () => {
    
    return (
        <Fragment>
            <div className="container-fluid my-5">
                <p className="titulos display-4 text-center">Servicios</p>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="h5 text-justify">Puedo realizar la pagina perfecta 
                        para promocionar tu negocio o empresa así como dar la 
                        información que quieras con contenidos dinámicos y llamativos, lleva a la realidad
                        todas tus ideas sin complicación alguna y al mejor costo solo envíame un mensaje o correo para
                        llevar a cabo tu idea. <a href="#contacto">contacto</a></p>
                    </div>
                </div>
                <div className="row justify-content-center">
                </div>
            </div>

            <div className="row justify-content-center px-2">
            <div className="col-md-4">
                    <div class="card mb-3">
                        <img src="https://pbs.twimg.com/media/EmCS2zTWMAE6hk_?format=jpg&name=medium" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Recetas de bebidas</h5>
                            <p class="card-text">En este proyecto se consulta de tres maneras 
                            distintas una API para obtener todos los resultados, tambien se utilizo useContext para su elaboración.</p>
                            <p class="card-text text-primary"><a className="titulos" href="https://priceless-montalcini-ff2877.netlify.app/">Visita esta página aquí.</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card mb-3">
                        <img src="https://pbs.twimg.com/media/EmCS2zNXgAEF9V6?format=jpg&name=medium" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">App Música</h5>
                            <p class="card-text">Por medio de la consulta a una API podemos 
                            encontrar la letra de muchas canciones.</p>
                            <p class="card-text text-primary"><a className="titulos" href="https://eloquent-galileo-6a9b25.netlify.app/">Visita esta página aquí.</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center px-2">
                <div className="col-md-4">
                    <div class="card mb-3">
                        <img src="https://pbs.twimg.com/media/EmCS2y4WMAA7XIr?format=jpg&name=medium" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cotiza cryptomonedas</h5>
                            <p class="card-text">Esta web consulta una API que nos da en tiempo real
                            el valor de cada cryptomoneda en distintas mondeas.</p>
                            <p class="card-text text-primary"><a className="titulos" href="https://pensive-bell-82ddfc.netlify.app/">Visita esta página aquí.</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card mb-3">
                        <img src="https://pbs.twimg.com/media/EmCS2y2XgAAL0Bn?format=png&name=large" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Clima App</h5>
                            <p class="card-text">Esta es una web en la que se puede obtener el clima de una ciudad,
                            esto se lleva a cabo mediante la consulta de una API del clima.</p>
                            <p class="card-text text-primary"><a className="titulos" href="https://sleepy-rosalind-c31a15.netlify.app/">Visita esta página aquí.</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-right px-3 mb-4">
                <div className="offset-md-4 col-md-4 px-2">
                    <p className="text-justify">
                        <i className="text-muted text-center">
                            <a name="escolaridad">Estos son algunos proyectos realizados en un curso de<br/> 
                    React que han servido para superar mis conocimientos <br/>
                    en el tema.
                            </a>
                        </i>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

 
export default Proyecto;