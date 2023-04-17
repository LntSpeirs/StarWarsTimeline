import "./App.css";

import eventos from "./eventos";

import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

function App() {
    let workIconStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#141414",
    };

    let workIconStyles2 = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
    };

    return (
        <>
            <h1>Star Wars Timeline</h1>
            <div className="leyenda">
                <h5 className="leyenda">ABY = Antes de la batalla de Yavin</h5>
                <h5 className="leyenda">
                    DBY = Después de la batalla de Yavin
                </h5>
                Si tambien te interesa el orden cronologico de los cómics canon:{" "}
                <a href="https://www.whakoom.com/ltspeirs/lists/orden_cronologico_de_los_comics_star_wars_canon_36556">
                    Listado de cómics canon
                </a>
            </div>
            <VerticalTimeline>
                {eventos.map((evento) => {
                    return (
                        <VerticalTimelineElement
                            key={evento.id}
                            date={`${evento.yearInicio}${evento.tipoYearInicio} - ${evento.yearFin}${evento.tipoYearFin}`}
                            dateClassName="date"
                            icon={<img src={evento.icono} alt="logo evento" />}
                            iconStyle={
                                evento.epoca === "Imperio" ||
                                evento.epoca === "Primera Orden"
                                    ? workIconStyles2
                                    : workIconStyles
                            }
                            className={evento.tipoEvento}
                        >
                            <h2 className="titulo">{evento.titulo}</h2>
                            <div className="container">
                                <h5
                                    className={`subtitulo ${evento.epoca.trim()}`}
                                >
                                    {" "}
                                    {evento.epoca}
                                </h5>
                                <h6
                                    className={`tipoEvento ${evento.tipoEvento}`}
                                >
                                    {evento.tipoEvento}
                                </h6>
                            </div>
                            <p id="descripcion">{evento.descripcion}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </>
    );
}

export default App;
