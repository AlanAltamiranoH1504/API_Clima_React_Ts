import type {ClimaResponse} from "../types";

type ClimaDetallesProps = {
    clima: ClimaResponse
}
const ClimaDetalles = ({clima}: ClimaDetallesProps) => {
    return  (
        <>
            {clima.name.trim() === "" ? (
                <>
                    <h2 className="font-fjalla text-2xl text-white">Ingresa una ciudad y pais</h2>
                </>
            ) :(
                <>
                    <h2 className="font-fjalla text-2xl text-white text-center mb-5">Clima Actual en {clima.name}</h2>

                    <div className="py-7 px-5 bg-white shadow-sm rounded-lg">
                        <p className="font-fjalla text-xl">Temperatura Actual: {Number(clima.main.temp - 273.15).toFixed(1)}&deg;C</p>
                        <p className="font-fjalla text-xl">Tempeatura Maxima: {Number(clima.main.temp_max - 273.15).toFixed(1)}&deg;C</p>
                        <p className="font-fjalla text-xl">Temperatura Minima {Number(clima.main.temp_min - 273.15).toFixed(1)}&deg;C</p>
                    </div>
                </>
            )}
        </>
    );
}
export default ClimaDetalles;