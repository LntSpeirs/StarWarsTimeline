import "./App.css";
import estrellita from "./assets/estrellita.png";

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
    return (
        <>
            <h1>Star Wars Timeline</h1>
            <h5 className="leyenda">ABY = Antes de la batalla de Yavin</h5>
            <h5 className="leyenda">DBY = Después de la batalla de Yavin</h5>
            <VerticalTimeline>
                {eventos.map((evento) => {
                    return (
                        <VerticalTimelineElement
                            key={evento.id}
                            date={`${evento.yearInicio}${evento.tipoYearInicio} - ${evento.yearFin}${evento.tipoYearFin}`}
                            dateClassName="date"
                            icon={<img src={estrellita} alt="Mi imagen" />}
                            iconStyle={workIconStyles}
                            className={evento.tipoEvento}
                        >
                            <h2 className="titulo">{evento.titulo}</h2>
                            <div className="container">
                                <h5 className="subtitulo">{evento.epoca}</h5>
                                <h6 className="tipoEvento">
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
