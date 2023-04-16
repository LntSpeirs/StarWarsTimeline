import estrellita from "./assets/logoImperio.png";
import logoImperio from "./assets/logoImperio.png";
import HighRepublic from "./assets/HighRepublic.webp";
import HighRepublic2 from "./assets/highrepublic2.png";
import JediOrder from "./assets/Jedi_Order_Symbol.webp";
import caidaJedi from "./assets/caidaJedi.png";
import imperio from "./assets/Imperio.png";
import rebelion from "./assets/rebelion.png";
import NuevaRepublica from "./assets/NuevaRepublica.svg";
import NuevaRepublica2 from "./assets/NuevaRepublica.png";
import FirstOrder from "./assets/PrimeraOrden2.png";
import FirstOrder2 from "./assets/PrimeraOrden.png";
import DawnJedi from "./assets/dawn of the jedi.png";
import OldRepublic from "./assets/OldRepublic.png";
import NuevaOrdenJedi from "./assets/NuevaOrdenJedi.png";
import momin from "./assets/Momin.webp";
import mustafar from "./assets/Mustafar.webp";
import malachor from "./assets/malachor-sith-temple.jpeg";
import tarre from "./assets/Tarre_Vizsla.webp";
import amaxine from "./assets/Amaxine.webp";
import TemploJedi from "./assets/JediTemple.webp";
import JediVsSith from "./assets/JediVsSith.webp";
import DarthBane from "./assets/DarthBane.webp";
import Ilum from "./assets/Ilum_Jedi_Temple.webp";
const eventos = [
    {
        titulo: "Amanecer de los Jedi",
        icono: DawnJedi,
        id: 1,
        descripcion:
            "25 000 años antes de la saga skywalker. En esta epoca estará ambientada la pelicula de James Mangold sobre los origenes de la orden jedi",
        yearInicio: 25025,
        tipoYearInicio: "ABY",
        yearFin: 25000,
        tipoYearFin: "ABY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "La Antigua Republica",
        icono: OldRepublic,
        id: 2,
        descripcion: "25 000 años antes de la saga skywalker.",
        yearInicio: 25000,
        tipoYearInicio: "ABY",
        yearFin: 10000,
        tipoYearFin: "ABY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "Batalla de Malachor",
        icono: OldRepublic,
        id: 3,
        descripcion: (
            <>
                <p>
                    Caballeros Jedi de la Antigua Republica asaltan el templo
                    Sith de Malachor para destruir el arma de Kyber de Darth
                    Tanis. Durante la batalla, el arma se activa y los
                    combatientes de ambos bandos quedan petrificados.
                </p>
                <br></br>
                <div align="center">
                    <img src={malachor} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 3966,
        tipoYearInicio: "ABY",
        yearFin: 3966,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Alianza Drengir-Sith",
        icono: OldRepublic,
        id: 4,
        descripcion: (
            <>
                <p>Los Drengir se alian con los Sith.</p>
                <br></br>
                <div align="center">
                    <img src={amaxine} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 2500,
        tipoYearInicio: "ABY",
        yearFin: 2500,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Darth Momin",
        icono: OldRepublic,
        id: 5,
        descripcion: (
            <>
                <div align="center">
                    <img src={momin}></img>
                </div>
                <ul>
                    <li>Momin es entrenado por Darth Shaa</li>
                    <li>Darth Shaa es asesinada por Momin</li>
                    <li>
                        Momin empieza a construir su jaula de Fermata y su
                        superarma
                    </li>
                    <li>
                        Lord Momin es destruido por los Jedi mientras intentaba
                        destruir una ciudad pero su espiritu sobrevive dentro de
                        su máscara
                    </li>
                </ul>
            </>
        ),
        yearInicio: 1100,
        tipoYearInicio: "ABY",
        yearFin: 1000,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Creación de la Espada Oscura",
        icono: OldRepublic,
        id: 6,
        descripcion: (
            <>
                <p>
                    El primer Jedi mandaloriano, Tarre Vizsla, crea la espada
                    oscura
                </p>
                <br></br>
                <div align="center">
                    <img src={tarre} width="450px"></img>
                </div>
            </>
        ),

        yearInicio: 1050,
        tipoYearInicio: "ABY",
        yearFin: 1050,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Destrucción de la superficie de Mustafar",
        icono: OldRepublic,
        id: 7,
        descripcion: (
            <>
                <p>
                    Lady Corvax roba la reliquia Estrella Brillante a los
                    mustafarianos e intenta usarla en un ritual para resucitar a
                    su marido. El fracaso del ritual saca a Mustafar de su
                    órbita y lo convierte en un planeta volcánico.
                </p>
                <br></br>
                <div align="center">
                    <img src={mustafar} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1050,
        tipoYearInicio: "ABY",
        yearFin: 1050,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Guerra Sith-Jedi",
        icono: OldRepublic,
        id: 8,
        descripcion: (
            <>
                <p>
                    Fue la última de las guerras libradas entre los caballeros
                    de la Orden Jedi y los señores de la Orden Sith durante la
                    caída de la Antigua República.
                </p>
                <p>
                    La guerra incluyó una batalla en el planeta Coruscant y su
                    posterior liberación. La guerra terminó con la supuesta
                    destrucción de los Sith en el planeta Ruusan.
                </p>
                <p>
                    Aunque un Sith, Darth Bane, en realidad había sobrevivido y
                    reformado a los Sith a través de la Regla de Dos, lo que
                    permitió que los Sith existieran escondidos durante los
                    siguientes mil años hasta que se derrocaron la Orden Jedi.
                </p>
                <br></br>
                <div align="center">
                    <img src={JediVsSith} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1032,
        tipoYearInicio: "ABY",
        yearFin: 1032,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Siempre dos hay, ni más, ni menos",
        icono: OldRepublic,
        id: 9,
        descripcion: (
            <>
                <p>
                    Darth Bane, reforma a los Sith a través de la Regla de Dos
                    (solo un maestro y un aprendiz), lo que permitió que los
                    Sith existieran escondidos durante los siguientes mil años
                    hasta que se derrocaron la Orden Jedi.
                </p>
                <br></br>
                <div align="center">
                    <img src={DarthBane} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1032,
        tipoYearInicio: "ABY",
        yearFin: 1032,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Construcción del templo Jedi de Coruscant",
        icono: OldRepublic,
        id: 10,
        descripcion: (
            <>
                <p>
                    Los 4 maestros fundadores de la orden Jedi sobre las ruinas
                    del santuario Sith en Coruscant en un intento de contener y
                    eliminar su poder, así como para aprovechar su conexión con
                    la fuerza.
                </p>
                <br></br>
                <div align="center">
                    <img src={TemploJedi} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1032,
        tipoYearInicio: "ABY",
        yearFin: 1032,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Construcción del templo Jedi de Ilum",
        icono: OldRepublic,
        id: 11,
        descripcion: (
            <>
                <p>
                    Construcción del templo Jedi de Ilum, donde los Jedi van a
                    conseguir los cristales Kyber para sus espadas.
                </p>
                <p>
                    Mucho tiempo despues se convertirá en la base StarKiller y
                    será destruido junto al planeta en el 34 DBY
                </p>
                <br></br>
                <div align="center">
                    <img src={Ilum} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1032,
        tipoYearInicio: "ABY",
        yearFin: 34,
        tipoYearFin: "ABY",
        epoca: "La Antigua Republica",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Era de la Republica",
        icono: JediOrder,
        id: 11,
        descripcion: "",
        yearInicio: 1000,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "The High Republic",
        icono: HighRepublic2,
        id: 4,
        descripcion: "200 años antes del Episodio I",
        yearInicio: 382,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Tales of the Jedi",
        icono: JediOrder,
        id: 5,
        descripcion: "",
        yearInicio: 36,
        tipoYearInicio: "ABY",
        yearFin: 5,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Episodio I La Amenaza Fantasma",
        icono: JediOrder,
        id: 5,
        descripcion: (
            <ul>
                <li>
                    Bloqueo comercial de la Federación de comercio al planeta
                    Naboo
                </li>
                <li>Batalla de Naboo</li>
            </ul>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Caida de los Jedi",
        icono: caidaJedi,
        id: 6,
        descripcion:
            "Epoca de decadencia de la orden Jedi y del aumento de poder de Palpatine.",
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "Episodio II El Ataque de los Clones",
        icono: caidaJedi,
        id: 3,
        descripcion: "",
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: "22",
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "The Clone Wars",
        icono: caidaJedi,
        id: 4,
        descripcion: "",
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Episodio III La venganza de los Sith",
        icono: caidaJedi,
        id: 5,
        descripcion: "",
        yearInicio: 19,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Era del Imperio",
        icono: imperio,
        id: 5,
        descripcion: "",
        yearInicio: 19,
        tipoYearInicio: "ABY",
        yearFin: 4,
        tipoYearFin: "DBY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "The Bad Batch",
        icono: imperio,
        id: 6,
        descripcion: "",
        yearInicio: 19,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Serie",
    },
    {
        titulo: "Jedi: Fallen Order",
        icono: imperio,
        id: 7,
        descripcion: "",
        yearInicio: 14,
        tipoYearInicio: "ABY",
        yearFin: 14,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Videojuego",
    },
    {
        titulo: "Solo: A Star Wars Story",
        icono: imperio,
        id: 8,
        descripcion: "",
        yearInicio: 10,
        tipoYearInicio: "ABY",
        yearFin: 10,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Obi-Wan Kenobi",
        icono: imperio,
        id: 9,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "ABY",
        yearFin: 9,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Serie",
    },
    {
        titulo: "Jedi: Survivor",
        icono: imperio,
        id: 10,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "ABY",
        yearFin: 9,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Videojuego",
    },
    {
        titulo: "Andor",
        icono: imperio,
        id: 11,
        descripcion: "",
        yearInicio: 5,
        tipoYearInicio: "ABY",
        yearFin: 0,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Serie",
    },
    {
        titulo: "Rebels",
        icono: imperio,
        id: 12,
        descripcion: "",
        yearInicio: 5,
        tipoYearInicio: "ABY",
        yearFin: 0,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Serie",
    },
    {
        titulo: "Rogue One",
        icono: imperio,
        id: 13,
        descripcion: "",
        yearInicio: 0,
        tipoYearInicio: "ABY",
        yearFin: 0,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Episodio IV: Una nueva esperanza",
        icono: imperio,
        id: 14,
        descripcion: (
            <ul>
                <li>Batalla de Yavin.</li>
                <li>Destrucción de la primera estrella de la muerte</li>
            </ul>
        ),
        yearInicio: 0,
        tipoYearInicio: "ABY",
        yearFin: 0,
        tipoYearFin: "ABY",
        epoca: "Imperio",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Episodio V: El imperio contraataca",
        icono: imperio,
        id: 15,
        descripcion: "",
        yearInicio: 3,
        tipoYearInicio: "DBY",
        yearFin: 3,
        tipoYearFin: "DBY",
        epoca: "Imperio",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Era de la rebelion",
        icono: rebelion,
        id: 15,
        descripcion: "",
        yearInicio: "2",
        tipoYearInicio: "DBY",
        yearFin: "4",
        tipoYearFin: "DBY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "Episodio VI: El retorno del jedi",
        icono: rebelion,
        id: 16,
        descripcion: "",
        yearInicio: 4,
        tipoYearInicio: "DBY",
        yearFin: 4,
        tipoYearFin: "DBY",
        epoca: "Imperio",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Era de la Nueva Republica",
        icono: NuevaRepublica2,
        id: 15,
        descripcion: "",
        yearInicio: "4",
        tipoYearInicio: "DBY",
        yearFin: "35",
        tipoYearFin: "DBY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "Squadrons",
        icono: NuevaRepublica,
        id: 17,
        descripcion: "",
        yearInicio: 4,
        tipoYearInicio: "DBY",
        yearFin: 4,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Videojuego",
    },
    {
        titulo: "The Mandalorian",
        icono: NuevaRepublica,
        id: 18,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "DBY",
        yearFin: 7,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Serie",
    },
    {
        titulo: "The Book of Boba Fett",
        icono: NuevaRepublica,
        id: 19,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "DBY",
        yearFin: 9,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Ahsoka",
        icono: NuevaRepublica,
        id: 20,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "DBY",
        yearFin: 9,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Skeleton Crew",
        icono: NuevaRepublica,
        id: 21,
        descripcion: "",
        yearInicio: 9,
        tipoYearInicio: "DBY",
        yearFin: 9,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Battlefront II",
        icono: NuevaRepublica,
        id: 22,
        descripcion: "",
        yearInicio: 32,
        tipoYearInicio: "DBY",
        yearFin: 35,
        tipoYearFin: "DBY",
        epoca: "Nueva República",
        tipoEvento: "Videojuego",
    },
    {
        titulo: "Ascenso de la primera orden",
        icono: FirstOrder2,
        id: 23,
        descripcion: "",
        yearInicio: 34,
        tipoYearInicio: "DBY",
        yearFin: 35,
        tipoYearFin: "DBY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "Resistance",
        icono: FirstOrder,
        id: 23,
        descripcion: "",
        yearInicio: 34,
        tipoYearInicio: "DBY",
        yearFin: 35,
        tipoYearFin: "DBY",
        epoca: "Primera Orden",
        tipoEvento: "Serie",
    },
    {
        titulo: "Episodio VII: El Despertar de la Fuerza",
        icono: FirstOrder,
        id: 24,
        descripcion: "",
        yearInicio: 34,
        tipoYearInicio: "DBY",
        yearFin: 34,
        tipoYearFin: "DBY",
        epoca: "Primera Orden",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Episodio VIII: El Último Jedi",
        icono: FirstOrder,
        id: 25,
        descripcion: "",
        yearInicio: 34,
        tipoYearInicio: "DBY",
        yearFin: 34,
        tipoYearFin: "DBY",
        epoca: "Primera Orden",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Episodio IX: El Ascenso de Skywalker",
        icono: FirstOrder,
        id: 26,
        descripcion: "",
        yearInicio: 35,
        tipoYearInicio: "DBY",
        yearFin: 35,
        tipoYearFin: "DBY",
        epoca: "Primera Orden",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Era de la Nueva Orden Jedi",
        icono: NuevaOrdenJedi,
        id: 23,
        descripcion:
            "15 años despues de los eventos del Episodio IX veremos a Rey Skywalker fundando una nueva orden Jedi.",
        yearInicio: 35,
        tipoYearInicio: "DBY",
        yearFin: 50,
        tipoYearFin: "DBY",
        epoca: "",
        tipoEvento: "Pelicula",
    },
];

export default eventos;
