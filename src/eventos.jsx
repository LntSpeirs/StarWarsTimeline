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
import MazKanata from "./assets/MazKanata.webp";
import Yoda from "./assets/Yoda.webp";
import Jabba from "./assets/Jabba.webp";
import Starlight from "./assets/Starlight.webp";
import GreatDisaster from "./assets/GreatDisasterHetzal.webp";
import Chewbacca from "./assets/Chewbacca.webp";
import TheAcolyte from "./assets/TheAcolyte.jpg";
import Dooku from "./assets/Dooku.webp";
import dookuSith from "./assets/dooku.jpg";
import PalpatineSurprise from "./assets/Palpatine.gif";
import Palpatine from "./assets/Palpatine.jpg";
import QuiGon from "./assets/Qui-Gon.webp";
import Tarkin from "./assets/Tarkin.webp";
import CadBane from "./assets/CadBane.webp";
import Thrawn from "./assets/Thrawn.webp";
import ObiWan from "./assets/ObiWan.jpg";
import ventress from "./assets/ventress.png";
import babu from "./assets/babu.gif";
import padme from "./assets/padme.webp";
import monmothma from "./assets/MonMothma.webp";
import anakinChiquito from "./assets/Anakinandmom.webp";
import grogu from "./assets/Grogu.webp";
import jovenMaul from "./assets/jovenMaul.webp";
import DarthMaul from "./assets/DarthMaul.webp";
import AhsokaChiquita from "./assets/AhsokaChiquita.jpeg";
import PloDiscoversAhsoka from "./assets/PloDiscoversAhsoka.webp";
import maulMalachor from "./assets/maulMalachor.jpg";
import SifoDyas from "./assets/Sifo-Dyas.webp";
import SifoDyas2 from "./assets/SyfoDyas.png";
import calebDume from "./assets/calebDume.webp";
import MarchTheed from "./assets/MarchTheed.webp";
import Jango_Fett_meets_with_Dooku from "./assets/Jango_Fett_meets_with_Dooku.webp";
import biochip from "./assets/biochip.webp";
import soloJoven from "./assets/soloJoven.jpg";
import qiraJoven from "./assets/Qira.webp";
import heraJoven from "./assets/heraJoven.webp";
import palpiAni from "./assets/PalpiAni.png";
import doctoraAphra from "./assets/doctoraAphra.webp";

const eventos = [
    {
        titulo: "Primer templo Jedi",
        icono: DawnJedi,
        id: 1000,
        descripcion:
            "El Primer Templo Jedi se construye en Ahch-To. Poco después, la aldea Jedi también se construye en la Isla del Templo",
        yearInicio: 25025,
        tipoYearInicio: "ABY",
        yearFin: 25025,
        tipoYearFin: "ABY",
        epoca: "La Antigua República",
        tipoEvento: "EVENTO",
    },

    {
        titulo: "Huyang es activado",
        icono: DawnJedi,
        id: 1002,
        descripcion: (
            <>
                <p>
                    Huyang el profesor droide arquitecto Mark IV, es activado.
                    Durante las proximas mil generaciones, enseñará a los
                    jóvenes Jedi, incluido el Gran Maestro Yoda y el Maestro
                    Jedi Mace Windu, cómo construir sus sables de luz.
                </p>
            </>
        ),
        yearInicio: 25020,
        tipoYearInicio: "ABY",
        yearFin: 25020,
        tipoYearFin: "ABY",
        epoca: "La Antigua República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "La Antigua República",
        icono: OldRepublic,
        id: 2,
        descripcion: "25 000 años antes de la saga skywalker.",
        yearInicio: 25000,
        tipoYearInicio: "ABY",
        yearFin: 10000,
        tipoYearFin: "ABY",
        epoca: "La Antigua República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Batalla de Malachor",
        icono: OldRepublic,
        id: 3,
        descripcion: (
            <>
                <p>
                    Caballeros Jedi de la Antigua República asaltan el templo
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
        epoca: "La Antigua República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Alianza Drengir-Sith",
        icono: OldRepublic,
        id: 4,
        descripcion: (
            <>
                <p>Los Drengir se alian con los Sith.</p>
            </>
        ),
        yearInicio: 2500,
        tipoYearInicio: "ABY",
        yearFin: 2500,
        tipoYearFin: "ABY",
        epoca: "La Antigua República",
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
        epoca: "La Antigua República",
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
        epoca: "La Antigua República",
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
        epoca: "La Antigua República",
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
        epoca: "La Antigua República",
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
        epoca: "La Antigua República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Fundación de la República Galáctica",
        icono: JediOrder,
        id: 10,
        descripcion: (
            <>
                <ul>
                    <li>
                        Con la victoria definitiva de la República, su capital
                        se reubica en Coruscant, y el tiempo anterior a este
                        renacimiento se olvida como una edad oscura, la "Antigua
                        República". Los calendarios oficiales comienzan de
                        nuevo, y el ejército de la Antigua República se disuelve
                    </li>
                    <li>
                        El Senado Galáctico , recién fundado por varios sistemas
                        estelares, elige a Tarsus Valorum como el primer
                        Canciller Supremo .
                    </li>
                    <li>
                        El Templo Jedi de Coruscant comienza a servir como el
                        cuartel general operativo y espiritual de la Orden Jedi.
                    </li>
                </ul>
            </>
        ),
        yearInicio: 1000,
        tipoYearInicio: "ABY",
        yearFin: 19,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Construcción del templo Jedi de Coruscant",
        icono: JediOrder,
        id: 11,
        descripcion: (
            <>
                <p>
                    Los 4 maestros fundadores de la orden Jedi construyen un
                    templo jedi sobre las ruinas del santuario Sith en Coruscant
                    en un intento de contener y eliminar su poder, así como para
                    aprovechar su conexión con la fuerza.
                </p>
                <br></br>
                <div align="center">
                    <img src={TemploJedi} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 1000,
        tipoYearInicio: "ABY",
        yearFin: 1000,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Construcción del templo Jedi de Ilum",
        icono: JediOrder,
        id: 12,
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
        yearInicio: 1014,
        tipoYearInicio: "ABY",
        yearFin: 34,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Maz Kanata",
        icono: JediOrder,
        id: 13,
        descripcion: (
            <>
                <p>Maz Kanata nace en Takodana.</p>
                <br></br>
                <div align="center">
                    <img src={MazKanata} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 973,
        tipoYearInicio: "ABY",
        yearFin: 973,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nacimiento de Yoda",
        icono: JediOrder,
        id: 14,
        descripcion: (
            <>
                <p>El maestro Jedi Yoda nacido ha.</p>
                <br></br>
                <div align="center">
                    <img src={Yoda} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 896,
        tipoYearInicio: "ABY",
        yearFin: 896,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Maestro Yoda",
        icono: JediOrder,
        id: 15,
        descripcion: (
            <>
                <p>
                    Yoda comienza a entrenar Jedi en los caminos de la Fuerza.
                </p>
            </>
        ),
        yearInicio: 796,
        tipoYearInicio: "ABY",
        yearFin: 796,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Jabba",
        icono: JediOrder,
        id: 16,
        descripcion: (
            <>
                <p>Su excelencia Jabba Desilijic Tiure nace en Nal Hutta.</p>
                <br></br>
                <div align="center">
                    <img src={Jabba} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 600,
        tipoYearInicio: "ABY",
        yearFin: 600,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Yadle",
        icono: JediOrder,
        id: 17,
        descripcion: (
            <>
                <p>Nace la maestra Jedi Yadle.</p>
            </>
        ),
        yearInicio: 509,
        tipoYearInicio: "ABY",
        yearFin: 509,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Exploradores",
        icono: JediOrder,
        id: 18,
        descripcion:
            "Los primeros equipos de la Republica y Jedi empiezan a explorar el borde exterior de la galaxia",
        yearInicio: 392,
        tipoYearInicio: "ABY",
        yearFin: 392,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Carrera espacial",
        icono: JediOrder,
        id: 19,
        descripcion: (
            <>
                <p>
                    La Gran Fiebre Hiperespacial fue un período de tiempo en el
                    que hubo prisa por cartografiar y reclamar las rutas
                    hiperespaciales existentes aún desconocidas a medida que la
                    República Galáctica se expandía hacia las regiones
                    exteriores de la galaxia , que aún no se habían
                    cartografiado bien.
                </p>
            </>
        ),
        yearInicio: 383,
        tipoYearInicio: "ABY",
        yearFin: 383,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "The High Republic",
        icono: HighRepublic2,
        id: 20,
        descripcion:
            "Comienza la era dorada de la Republica y de la orden Jedi.",
        yearInicio: 382,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Mapa estelar",
        icono: HighRepublic,
        id: 20,
        descripcion: (
            <>
                <p>
                    La República Galáctica emprende un proyecto de mapeo
                    hiperespacial, haciendo que los viajes hiperespaciales sean
                    más seguros.
                </p>
            </>
        ),
        yearInicio: 332,
        tipoYearInicio: "ABY",
        yearFin: 332,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Faro Starlight",
        icono: HighRepublic,
        id: 21,
        descripcion: (
            <>
                <p>
                    Se construye la estación espacial Faro Starlight como parte
                    de la serie de programas de divulgación.
                </p>
                <p>
                    Se trata de un gran templo Jedi diseñado por Palo Hidalla y
                    está colocado en el centro de las zonas oscuras del Borde
                    para guiar a los viajeros y aumentar los tiempos de
                    transmisión de la región, destinado a ser el primer faro de
                    una nueva red de retransmisión de comunicaciones galácticas
                </p>
                <br></br>
                <div align="center">
                    <img src={Starlight}></img>
                </div>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Gran Desastre Hiperespacial",
        icono: HighRepublic,
        id: 22,
        descripcion: (
            <>
                <p>
                    Ocurre el Gran Desastre Hiperespacial , también conocido
                    como el desastre de Legacy Run o la evacuación de Hetzal
                    Prime.
                </p>

                <p>
                    Los viajes hiperespaciales se detienen temporalmente en los
                    Territorios del Borde Exterior.
                </p>
                <br></br>
                <div align="center">
                    <img src={GreatDisaster} width="450px"></img>
                </div>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Incursión en Elphrona",
        icono: HighRepublic,
        id: 23,
        descripcion: (
            <>
                <p>
                    Los Nihil realizan una incursión en Elphrona , capturando al
                    Maestro Jedi Loden Greatstorm y al granjero Ottoh Blythe.
                </p>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Batalla dela nebulosa de Kur",
        icono: HighRepublic,
        id: 24,
        descripcion: (
            <>
                <p>La Republica se enfrenta a la tempestad de Kassav</p>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Crisis de los drengir",
        icono: HighRepublic,
        id: 25,
        descripcion: (
            <>
                <p>
                    Los Jedi despiertan por error la plaga Drengir en la
                    estación espacial Amaxine.
                </p>
                <br></br>
                <div align="center">
                    <img src={amaxine} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Misión en Sedri Minor",
        icono: HighRepublic,
        id: 26,
        descripcion: (
            <>
                <p>
                    Los Jedi y el clan Hutt se unen para combatir a los dringir
                    en Sedri Minor.
                </p>
            </>
        ),
        yearInicio: 232,
        tipoYearInicio: "ABY",
        yearFin: 232,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Novelas y comics",
    },
    {
        titulo: "Nace Chewbacca",
        icono: HighRepublic,
        id: 27,
        descripcion: (
            <>
                <p>Chewbacca nace en Kashyyyk.</p>
                <br></br>
                <div align="center">
                    <img src={Chewbacca} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 200,
        tipoYearInicio: "ABY",
        yearFin: 200,
        tipoYearFin: "ABY",
        epoca: "",
        tipoEvento: "",
    },
    {
        titulo: "The Acolyte",
        icono: HighRepublic,
        id: 28,
        descripcion: (
            <>
                <p>
                    Un antiguo Padawan se reúne con su maestro Jedi para
                    investigar una serie de crímenes, pero las fuerzas a las que
                    se enfrentan son más siniestras que lo que esperaban.
                </p>
                <br></br>
                <div align="center">
                    <img src={TheAcolyte} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 132,
        tipoYearInicio: "ABY",
        yearFin: 132,
        tipoYearFin: "ABY",
        epoca: "Alta República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Nacen Dooku y Sifo-Dyas",
        icono: JediOrder,
        id: 28,
        descripcion: (
            <>
                <p>Nacen los Jedi Dooku y Sifo-Dyas.</p>
                <br></br>
                <div align="center">
                    <img src={Dooku} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 102,
        tipoYearInicio: "ABY",
        yearFin: 102,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Sheev Palpatine",
        icono: JediOrder,
        id: 29,
        descripcion: (
            <>
                <p>Sheev Palpatine nace en Naboo</p>
                <br></br>
                <div align="center">
                    <img src={Palpatine} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 84,
        tipoYearInicio: "ABY",
        yearFin: 84,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Qui-Gon Jinn",
        icono: JediOrder,
        id: 30,
        descripcion: (
            <>
                <p>Qui-Gon Jinn nace en Coruscant.</p>
                <br></br>
                <div align="center">
                    <img src={QuiGon} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 80,
        tipoYearInicio: "ABY",
        yearFin: 80,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Raddus",
        icono: JediOrder,
        id: 31,
        descripcion: (
            <>
                <p>El almirante Raddus nace en Mon Cala .</p>
            </>
        ),
        yearInicio: 65,
        tipoYearInicio: "ABY",
        yearFin: 65,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Tarkin",
        icono: JediOrder,
        id: 32,
        descripcion: (
            <>
                <p>Wilhuff Tarkin nace en Eriadu.</p>
                <br></br>
                <div align="center">
                    <img src={Tarkin} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 64,
        tipoYearInicio: "ABY",
        yearFin: 64,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Cad Bane",
        icono: JediOrder,
        id: 33,
        descripcion: (
            <>
                <p>Cad Bane nace en Duro.</p>
                <br></br>
                <div align="center">
                    <img src={CadBane} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 64,
        tipoYearInicio: "ABY",
        yearFin: 64,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Thrawn",
        icono: JediOrder,
        id: 34,
        descripcion: (
            <>
                <p>Mitth'raw'nuruodo nace en Rentor . </p>
                <br></br>
                <div align="center">
                    <img src={Thrawn} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 59,
        tipoYearInicio: "ABY",
        yearFin: 59,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Obi-Wan Kenobi",
        icono: JediOrder,
        id: 35,
        descripcion: (
            <>
                <p>
                    Obi-Wan Kenobi nace en Stewjon. Su entrenamiento como Jedi
                    empieza el 54 ABY
                </p>
                <br></br>
                <div align="center">
                    <img src={ObiWan} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 57,
        tipoYearInicio: "ABY",
        yearFin: 57,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Maul",
        icono: JediOrder,
        id: 36,
        descripcion: (
            <>
                <p>Nace Maul en Dathomir.</p>
                <br></br>
                <div align="center">
                    <img src={jovenMaul} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 54,
        tipoYearInicio: "ABY",
        yearFin: 54,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Palpatine senador de Naboo",
        icono: JediOrder,
        id: 37,
        descripcion: (
            <>
                <p>Palpatine es elegido Senador de Naboo</p>
            </>
        ),
        yearInicio: 52,
        tipoYearInicio: "ABY",
        yearFin: 52,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Ventress",
        icono: JediOrder,
        id: 38,
        descripcion: (
            <>
                <p>Asajj Ventress nace en Dathomir</p>
                <br></br>
                <div align="center">
                    <img src={ventress} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 50,
        tipoYearInicio: "ABY",
        yearFin: 50,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Babu Frik",
        icono: JediOrder,
        id: 39,
        descripcion: (
            <>
                <p>Babu Frik nace en Kijimi</p>
                <br></br>
                <div align="center">
                    <img src={babu} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 49,
        tipoYearInicio: "ABY",
        yearFin: 49,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Padme Amidala",
        icono: JediOrder,
        id: 40,
        descripcion: (
            <>
                <p>Padmé Amidala Naberrie nace en Naboo</p>
                <br></br>
                <div align="center">
                    <img src={padme} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 46,
        tipoYearInicio: "ABY",
        yearFin: 46,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Mon Mothma",
        icono: JediOrder,
        id: 41,
        descripcion: (
            <>
                <p>Mon Mothma nace en Chandrila .</p>
                <br></br>
                <div align="center">
                    <img src={monmothma} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 46,
        tipoYearInicio: "ABY",
        yearFin: 46,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Obi-Wan consigue un maestro",
        icono: JediOrder,
        id: 42,
        descripcion: (
            <>
                <p>
                    El maestro Jedi Qui-Gon Jinn elige a Obi-Wan Kenobi como su
                    alumno padawan.
                </p>
            </>
        ),
        yearInicio: 44,
        tipoYearInicio: "ABY",
        yearFin: 44,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Gallius Rax",
        icono: JediOrder,
        id: 43,
        descripcion: (
            <>
                <p>Gallius Rax nace en Jakku.</p>
            </>
        ),
        yearInicio: 42,
        tipoYearInicio: "ABY",
        yearFin: 42,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Conde Dooku",
        icono: JediOrder,
        id: 44,
        descripcion: (
            <>
                <p>
                    Dooku reemplaza a Ramil como el Conde de Serenno, el Maestro
                    Jedi se convierte en el hombre más rico de la galaxia.
                </p>
                <p>
                    Dooku deja la Orden Jedi y finalmente se convierte en el
                    Lord Sith Darth Tyranus, aprendiz de Darth Sidious
                </p>
                <br></br>
                <div align="center">
                    <img src={dookuSith} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 42,
        tipoYearInicio: "ABY",
        yearFin: 42,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "La Guerra Civil Mandaloriana",
        icono: JediOrder,
        id: 45,
        descripcion: (
            <>
                <p>
                    Ocurre la Guerra Civil Mandaloriana, también conocida como
                    las Grandes Guerras de Clanes; Qui-Gon Jinn y Obi-Wan Kenobi
                    tienen la tarea de proteger a Satine Kryze, líder de los
                    pacifistas Nuevos Mandalorianos.
                </p>
                <p>Kenobi se ofrece a dejar la Orden Jedi por Satine</p>
            </>
        ),
        yearInicio: 41,
        tipoYearInicio: "ABY",
        yearFin: 39,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Anakin Skywalker",
        icono: JediOrder,
        id: 46,
        descripcion: (
            <>
                <p>
                    Anakin Skywalker, una vergencia en la Fuerza, nace de Shmi
                    Skywalker sin padre. En Tatooine
                </p>
                <br></br>
                <div align="center">
                    <img src={anakinChiquito} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 41,
        tipoYearInicio: "ABY",
        yearFin: 41,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Grogu",
        icono: JediOrder,
        id: 47,
        descripcion: (
            <>
                <p>Nace Grogu.</p>
                <br></br>
                <div align="center">
                    <img src={grogu} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 41,
        tipoYearInicio: "ABY",
        yearFin: 41,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Rae Sloane",
        icono: JediOrder,
        id: 48,
        descripcion: (
            <>
                <p>Nace Rae Sloane en Ganthel.</p>
            </>
        ),
        yearInicio: 41,
        tipoYearInicio: "ABY",
        yearFin: 41,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Darth Maul",
        icono: JediOrder,
        id: 49,
        descripcion: (
            <>
                <p>Maul se convierte en el aprendiz Sith de Darth Sidious.</p>
                <br></br>
                <div align="center">
                    <img src={DarthMaul} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 40,
        tipoYearInicio: "ABY",
        yearFin: 40,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Sifo-Dyas se une al Alto Consejo Jedi",
        icono: JediOrder,
        id: 50,
        descripcion: <></>,
        yearInicio: 39,
        tipoYearInicio: "ABY",
        yearFin: 39,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Ahsoka Tano",
        icono: JediOrder,
        id: 51,
        descripcion: (
            <>
                <p>Ahsoka Tano nace en Shili</p>
                <br></br>
                <div align="center">
                    <img src={AhsokaChiquita} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 37,
        tipoYearInicio: "ABY",
        yearFin: 37,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Tales of the Jedi",
        icono: JediOrder,
        id: 52,
        descripcion: "",
        yearInicio: 36,
        tipoYearInicio: "ABY",
        yearFin: 5,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Serie",
    },
    {
        titulo: "Viaje Sith",
        icono: JediOrder,
        id: 53,
        descripcion: (
            <>
                <p>
                    Darth Sidious lleva a Maul a Malachor, donde las cenizas de
                    los Sith caídos alimentan el odio del aprendiz por los Jedi
                </p>
                <br></br>
                <div align="center">
                    <img src={maulMalachor} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 34,
        tipoYearInicio: "ABY",
        yearFin: 34,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Ahsoka Jedi",
        icono: JediOrder,
        id: 54,
        descripcion: (
            <>
                <p>
                    Ahsoka Tano es aceptada en la Orden Jedi después de que Plo
                    Koon la descubre en Shili.
                </p>
                <br></br>
                <div align="center">
                    <img src={PloDiscoversAhsoka} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 33,
        tipoYearInicio: "ABY",
        yearFin: 33,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Sifo-Dyas ordena un ejército en Kamino",
        icono: JediOrder,
        id: 55,
        descripcion: (
            <>
                <p>
                    Sifo-Dyas ordena en secreto la creación de un ejército de
                    clones para la República en Kamino .
                </p>
                <br></br>
                <div align="center">
                    <img src={SifoDyas} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 33,
        tipoYearInicio: "ABY",
        yearFin: 33,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Caleb Dume",
        icono: JediOrder,
        id: 56,
        descripcion: (
            <>
                <p>
                    Caleb Dume, más tarde conocido como Kanan Jarrus, nace en
                    Coruscant.
                </p>
                <br></br>
                <div align="center">
                    <img src={calebDume} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 33,
        tipoYearInicio: "ABY",
        yearFin: 33,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Caida de los Jedi",
        icono: caidaJedi,
        id: 57,
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
        titulo: "Tarkin se convierte en gobernador de Eriadu",
        icono: caidaJedi,
        id: 58,
        descripcion: (
            <>
                <p>
                    Wilhuff Tarkin se convierte en el gobernador de Eriadu con
                    el respaldo de Palpatine.
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Un ejército para la Federación de Comercio",
        icono: caidaJedi,
        id: 59,
        descripcion: (
            <>
                <p>
                    Las colmenas geonosianas fabrican droides de combate para la
                    Federación de Comercio. Esos droides se usaran en la próxima
                    invasión de Naboo por parte de la Federación
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Episodio I La Amenaza Fantasma",
        icono: caidaJedi,
        id: 60,
        descripcion: (
            <ul>
                <li>
                    Tal como lo planeó Darth Sidious, la Federación de Comercio
                    bloquea Naboo en protesta por la decisión del Senado de
                    gravar sus Zonas de Libre Comercio
                    <br></br>
                    <div align="center">
                        <img src={MarchTheed} width="300px"></img>
                    </div>
                </li>
                <li>
                    El Canciller Supremo Finis Valorum envía en secreto a
                    Qui-Gon Jinn y Obi-Wan Kenobi para que actúen como
                    embajadores de las negociaciones programadas con la
                    Federación con la esperanza de resolver la Crisis de Naboo.
                </li>
                <li>Batalla de Naboo</li>
                <li>Darth Maul asesina a Qui-Gon</li>
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
        titulo: "Syfo-Dyas y los Pykes",
        icono: caidaJedi,
        id: 61,
        descripcion: (
            <>
                <p>
                    El Maestro Jedi Sifo-Dyas había previsto un próximo
                    conflicto a gran escala, pero fue acusado de promover la
                    guerra y eliminado del Consejo Jedi.
                </p>
                <p>
                    Es enviado por el Consejo Jedi para resolver una disputa
                    tribal en Felucia, pero en lugar de eso va a negociar en
                    secreto con los Pykes en Oba Diah junto con el ayudante del
                    Canciller Valorum, Silman , por iniciativa del Canciller.
                </p>
                <p>
                    El conde Dooku ordena a los Pykes matarles pero Silman
                    sobrevive y los Pykes lo conservan prisionero como plan de
                    reserva por si los jedi se enteran.
                    <br></br>
                    <div align="center">
                        <img src={SifoDyas2} width="300px"></img>
                    </div>
                </p>
                <p>Dooku simula la muerte de Syfo-Dyas en Felucia</p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Dooku elimina Kamino del mapa",
        icono: caidaJedi,
        id: 62,
        descripcion: (
            <>
                <p>
                    Dooku elimina el sistema Kamino de los registros de los
                    Archivos Jedi.
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Dooku mata a Yadle",
        icono: caidaJedi,
        id: 63,
        descripcion: (
            <>
                <p>
                    Dooku le da la espalda a la Orden Jedi, mata en secreto al
                    Maestro Jedi Yaddle y se convierte en el aprendiz Sith de
                    Darth Sidious, Darth Tyranus.
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Palpatine canciller supremo",
        icono: caidaJedi,
        id: 64,
        descripcion: (
            <>
                <p>
                    El Senador de Naboo Palpatine es elegido Canciller Supremo
                    de la República Galáctica, reemplazando a Finis Valorum
                </p>
                <br></br>
                <div align="center">
                    <img src={PalpatineSurprise} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Anakin consigue un maestro",
        icono: caidaJedi,
        id: 65,
        descripcion: (
            <>
                <p>
                    El Alto Consejo Jedi asciende a Obi-Wan Kenobi al rango de
                    Caballero Jedi y le permite entrenar a Anakin Skywalker como
                    Jedi según los deseos del difunto Qui-Gon Jinn.
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "El donante clon",
        icono: caidaJedi,
        id: 66,
        descripcion: (
            <>
                <p>
                    Lord Tyranus contrata al cazarrecompensas Jango Fett como
                    modelo de clonación de los kaminoanos basándose en la
                    reputación de Fett
                </p>
                <br></br>
                <div align="center">
                    <img src={Jango_Fett_meets_with_Dooku} width="300px"></img>
                </div>
                <ul>
                    <li>
                        Bajo el control de los Sith, a los clones de la
                        plantilla de Fett se les insertaron biochips de
                        modificación de comportamiento que activarían la orden
                        66 bajo el mando del Canciller Supremo de la República
                        Galáctica.
                        <br></br>
                        <div align="center">
                            <img src={biochip} width="300px"></img>
                        </div>
                    </li>
                </ul>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nacen Boba Fett y Omega",
        icono: caidaJedi,
        id: 67,
        descripcion: (
            <>
                <p>
                    <ul>
                        <li>
                            Boba Fett nace como un clon de Jango Fett en Kamino
                            bajo el nombre Alpha. A petición de Jango, Boba es
                            el único clon completamente inalterado por los
                            kaminoanos, y como hijo de Jango, Fett es entrenado
                            por su padre como cazarrecompensas.
                        </li>
                        <li>
                            Omega nace después de Alpha. Su genoma es casi
                            idéntico al de Jango Fett. A diferencia de Boba,
                            Omega se mantiene en Kamino y Nala Se la cría como
                            su asistente.
                        </li>
                    </ul>
                </p>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Han solo",
        icono: caidaJedi,
        id: 68,
        descripcion: (
            <>
                <p>Han Solo nace en Corellia.</p>
                <br></br>
                <div align="center">
                    <img src={soloJoven} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 32,
        tipoYearInicio: "ABY",
        yearFin: 32,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "I NEED GUNS, LOTS OF GUNS",
        icono: caidaJedi,
        id: 69,
        descripcion:
            "Un comprador secreto ordena cantidades masivas de armas y buques de guerra en los astilleros de Kuat",
        yearInicio: 31,
        tipoYearInicio: "ABY",
        yearFin: 31,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Qi'ra",
        icono: caidaJedi,
        id: 70,
        descripcion: (
            <>
                <p>Qi'ra nace en Corellia.</p>
                <br></br>
                <div align="center">
                    <img src={qiraJoven} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 31,
        tipoYearInicio: "ABY",
        yearFin: 31,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Palpatine comienza la contrucción de su observatorio de Jakku",
        icono: caidaJedi,
        id: 71,
        descripcion: (
            <>
                <p>
                    Comienza la construcción del Observatorio Jakku de Darth
                    Sidious. Era parte de una red de observatorios del Emperador
                    Palpatine en toda la galaxia.
                </p>
                <p>
                    El Observatorio Jakku era parte del plan de contingencia del
                    Emperador para destruir el Imperio en caso de su muerte.
                </p>
                <p>
                    Albergaba una réplica del yate Imperialis del Emperador ,
                    computadoras que mostraban un mapa de las Regiones
                    Desconocidas, un almacén de reliquias y artefactos Sith, y
                    un pozo que conducía al núcleo de Jakku.
                </p>
            </>
        ),
        yearInicio: 30,
        tipoYearInicio: "ABY",
        yearFin: 30,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "Nace Hera Syndulla",
        icono: caidaJedi,
        id: 72,
        descripcion: (
            <>
                <p>Hera Syndulla nace en Ryloth </p>
                <br></br>
                <div align="center">
                    <img src={heraJoven} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 29,
        tipoYearInicio: "ABY",
        yearFin: 29,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Palpatine comienza a manipular a Anakin",
        icono: caidaJedi,
        id: 73,
        descripcion: (
            <>
                <ul>
                    <li>
                        Anakin Skywalker busca su primer cristal kyber en Ilum
                    </li>
                    <li>
                        Palpatine lleva a Skywalker de incógnito a los niveles
                        inferiores de Coruscant
                        <br></br>
                        <div align="center">
                            <img src={palpiAni} width="400px"></img>
                        </div>
                    </li>
                </ul>
            </>
        ),
        yearInicio: 29,
        tipoYearInicio: "ABY",
        yearFin: 29,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Comienza la Crisis Separatista",
        icono: caidaJedi,
        id: 74,
        descripcion: (
            <>
                <ul>
                    <li>
                        Se funda la Confederación de Sistemas Independientes .{" "}
                    </li>
                    <li>
                        Miles de sistemas estelares abandonan la República y se
                        unen a la Confederación, y establecen el Senado
                        Separatista.
                    </li>
                    <li>
                        El Senado de la República aprueba la Ley de poderes de
                        emergencia para garantizar que Palpatine pueda seguir
                        siendo el Canciller Supremo mucho después de la
                        expiración de su mandato. Palpatine forma su propio
                        Comité Lealista
                    </li>
                    <li>
                        El Senado Galáctico debate la Ley de Creación Militar
                        para determinar si la República Galáctica debería formar
                        un ejército
                    </li>
                </ul>
            </>
        ),
        yearInicio: 24,
        tipoYearInicio: "ABY",
        yearFin: 24,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Nace Aphra",
        icono: caidaJedi,
        id: 75,
        descripcion: (
            <>
                <p>Nace Chelli Lona Aphra.</p>
                <br></br>
                <div align="center">
                    <img src={doctoraAphra} width="300px"></img>
                </div>
            </>
        ),
        yearInicio: 24,
        tipoYearInicio: "ABY",
        yearFin: 24,
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Episodio II El Ataque de los Clones",
        icono: caidaJedi,
        id: 76,
        descripcion: (
            <>
                <ul>
                    <li>
                        Complot para asesinar a la senadora Amidala. Los líderes
                        separatistas esperan silenciar a la senadora de Naboo,
                        que se opone a la Ley de Creación Militar. Se contrata
                        al cazarrecompensas Jango Fett. Utiliza a Zam Wesell en
                        dos intentos fallidos. Zam es capturada por Anakin y Obi
                        Wan, pero Jango la mata para evitar que los Jedi la
                        interroguen
                    </li>
                    <li>
                        Misión a Kamino . Obi-Wan Kenobi usa el dardo sable
                        Kamino de Fett para rastrearlo hasta el sistema Kamino
                        en el Borde Exterior. Allí encuentra el ejército de
                        clones encargado por Sifo-Dyas.
                    </li>
                    <li>Anakin y Padme se enamoran</li>
                    <li>
                        Jar Jar Binks, manipulado por Palpatine, propone que el
                        canciller reciba poderes de emergencia para formar un
                        ejército sin la interferencia del Senado. La propuesta
                        es aceptada y el ejército clon desarrollado por los
                        kaminoanos es reconocido como el Gran Ejército de la
                        República.
                    </li>
                    <li>
                        Obi-Wan Kenobi es capturado en Geonosis mientras informa
                        sus hallazgos sobre la presencia de la Federación de
                        Comercio y la producción de droides de combate de los
                        Separatistas.
                        <br />
                        Anakin y Padmé acuden a su rescate pero también son
                        capturados. Los tres están listos para ser ejecutados
                        cuando llega un equipo de ataque de más de doscientos
                        Jedi para salvarles, mientras que el Maestro Jedi Yoda
                        viaja a Kamino para reunir al nuevo ejército de la
                        República.
                    </li>
                </ul>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: "22",
        tipoYearFin: "ABY",
        epoca: "República",
        tipoEvento: "Pelicula",
    },
    {
        titulo: "COMIENZAN LAS GUERRAS CLON",
        icono: caidaJedi,
        id: 76,
        descripcion: (
            <>
                <ul>
                    <li>
                        Un grupo de ataque de 200 jedi rescatan a Anakin, Padme
                        y Obi Wan. Comenzando la primera batalla de Geonosis
                    </li>
                    <li>
                        Mace Windu mata a Jango Fett, alimentando el odio de
                        Boba Fett hacia los Jedi.
                    </li>
                    <li>
                        El ejercito droide separatista pronto se impone y rodea
                        a los supervivientes Jedi en la Arena
                    </li>
                    <li>
                        Dirigido por Yoda, el Gran Ejército de la República se
                        enfrenta a las fuerzas separatistas en Geonosis, dejando
                        en tierra muchas naves enemigas y, por lo tanto, la
                        mayoría de sus fuerzas. Sin embargo, el ataque de los
                        clones no logró evitar la fuga del Consejo Separatista.
                    </li>
                    <li>
                        Darth Tyranus escapa de Geonosis con los planos de la
                        estrella de la muerte diseñada por los geonosianos y se
                        los entrega Sidious en Coruscant.
                    </li>
                </ul>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "EVENTO",
    },
    {
        titulo: "Toma de Geonosis",
        icono: caidaJedi,
        id: 77,
        descripcion: (
            <>
                <p>
                    Con su victoria en Geonosis, la República ocupa el mundo,
                    aunque descubren que no pueden permitirse el lujo de
                    mantener la ocupación.
                </p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Asedio a Hebekrr Minor",
        icono: caidaJedi,
        id: 78,
        descripcion: (
            <>
                <p>
                    El asedio a Hebekrr Minor fue una de las primeras batallas
                    de las Guerras Clon
                </p>
                <p>
                    Las fuerzas del Ejército Droide Separatista sitiaron los
                    principales centros de población del planeta no alineado y
                    rico en recursos
                </p>
                <p>
                    Una compañía del Gran Ejército de la República, dirigida por
                    el General Jedi Sivad y el Comandante Clon CC-1771 "Sticks",
                    defendió a los civiles del planeta de los ataques.
                </p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "El desastre de Cadesura",
        icono: caidaJedi,
        id: 79,
        descripcion: (
            <>
                <p>
                    Fue un bombardeo que ocurrió en Zarra , la ciudad capital
                    del planeta Cato Neimoidia. En la catástrofe, todo el
                    distrito de Cadesura fue arrancado de la estructura de
                    amarre de la ciudad puente y cayó en picado al suelo, lo que
                    provocó miles de muertes.
                </p>
                <p>
                    Obi-Wan Kenobi y Anakin Skywalker se embarcan en una misión
                    a Cato Neimoidia, donde conocen por primera vez a Asajj
                    Ventress
                </p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Asedio de Christophsis",
        icono: caidaJedi,
        id: 80,
        descripcion: (
            <>
                <p>
                    Buscando hacerse con el control de los recursos estratégicos
                    del planeta, el Ejército Droide Separatista liderado por el
                    General Whorm Loathsom invadió y capturó a Christophsis.
                </p>
                <p>
                    En respuesta a una súplica urgente de los habitantes del
                    mundo, la República Galáctica y el Alto Consejo Jedi
                    enviaron al Alto General Jedi Obi-Wan Kenobi y al General
                    Jedi Anakin Skywalker con el Almirante Wullf Yularen, y un
                    contingente de soldados clon del Gran Ejército de la
                    República para liberar el planeta.
                </p>
                <p>
                    Después de lograr romper el bloqueo masivo del almirante
                    confederado Trench alrededor del planeta, así como entregar
                    los suministros al campamento de refugiados del senador Bail
                    Organa en la superficie a través de una nave furtiva
                    experimental
                </p>
                <p>Anakin toma a Ahsoka como padawan.</p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Hutt secuestrado",
        icono: caidaJedi,
        id: 81,
        descripcion: (
            <>
                <p>
                    Rotta , hijo de Jabba the Hutt, es secuestrado por la
                    asesina de Dooku, Asajj Ventress. Luego, los Separatistas
                    culpan a la República
                </p>
                <p>
                    Anakin Skywalker y Ahsoka Tano devuelven a Rotta a Jabba the
                    Hutt en Tatooine.
                </p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Campaña del Malevolence",
        icono: caidaJedi,
        id: 82,
        descripcion: (
            <>
                <p>
                    Fue una campaña de varios meses lanzada por el Conde Dooku y
                    el General Grievous durante las Guerras Clon utilizando el
                    buque insignia de Grievous, el crucero pesado clase
                    Subjugador Malevolencia. La nave estelar presentaba dos
                    mega-cañones de iones, que podrían usarse para inutilizar
                    flotas enteras de la República Galáctica .
                </p>
                <p>
                    Anakin y Obi Wan abordan la nave y la programan para
                    estrellarse contra la luna de Antar.
                </p>
            </>
        ),
        yearInicio: 22,
        tipoYearInicio: "ABY",
        yearFin: 22,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Pérdida de Geonosis",
        icono: caidaJedi,
        id: 83,
        descripcion: (
            <>
                <p>
                    Geonosis es retomado por las fuerzas separatistas un año
                    despues de perderlo y Poggle el Menor reinicia rápidamente
                    sus fundiciones de droides.
                </p>
            </>
        ),
        yearInicio: 21,
        tipoYearInicio: "ABY",
        yearFin: 21,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "King Zillo",
        icono: caidaJedi,
        id: 84,
        descripcion: (
            <>
                <p>
                    Una Bestia Zillo, capturada en Malastare, es enviada a
                    Coruscant para su estudio, pero escapa y arrasa la ciudad
                    hasta que consiguen neutralizarle.
                </p>
                <p>
                    Al día siguiente, el cadáver de la bestia Zillo fue
                    transportado a unas instalaciones para que se pudieran
                    realizar más investigaciones sobre el cuerpo y su
                    resistencia al fuego laser.
                </p>
                <p>
                    Mientras observaba el transporte del cuerpo, la Dra. Boll,
                    para su sorpresa, recibió la orden de Palpatine de clonar a
                    la bestia.
                </p>
            </>
        ),
        yearInicio: 21,
        tipoYearInicio: "ABY",
        yearFin: 21,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
        tipoEvento: "Serie",
    },
    {
        titulo: "Segunda batalla de Geonosis",
        icono: caidaJedi,
        id: 85,
        descripcion: (
            <>
                <p>
                    Las fundiciones de droides de Poggle el Menor en Geonosis
                    empiezan a producir nuevas armas para los Separatistas
                </p>
                <p>
                    La República inicia la Segunda Batalla de Geonosis para
                    destruir las fábricas.
                </p>
            </>
        ),
        yearInicio: 21,
        tipoYearInicio: "ABY",
        yearFin: 21,
        tipoYearFin: "ABY",
        epoca: "Guerras Clon",
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
        epoca: "Guerras Clon",
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
        titulo: "Era de la Nueva República",
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
