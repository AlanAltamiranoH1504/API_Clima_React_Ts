import {useForm} from "react-hook-form";
import {countries} from "../data/countries.ts";
import type {ClimaBuqueda} from "../types";
type FormProps = {
    fetchClima: () => void
}

const Form = ({fetchClima}: FormProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<ClimaBuqueda>();
    const peticionBusquedaClima = (data: ClimaBuqueda) => {
        fetchClima();
    }

    return (
        <>
            <form className="space-y-5 text-white"
                  onSubmit={handleSubmit(peticionBusquedaClima)}
            >
                <div>
                    <label htmlFor="city" className="font-fjalla block text-2xl uppercase  mb-2">Ciudad:</label>
                    <input id="city" type="text" className="w-full p-2 font-fjalla rounded-lg text-black"
                           placeholder="Ingresa tu ciudad"
                           {...register("city", {
                               required: "La ciudad es obligatoria"
                           })}
                    />
                    <div className="w-full font-fjalla text-red-600 text-center mt-1">
                        {errors.city && String(errors.city.message)}
                    </div>
                </div>
                <div>
                    <label htmlFor="pais" className="font-fjalla block text-2xl uppercase mb-2">Pais:</label>
                    <select id="pais" className="w-full p-2 px-24 text-black rounded-lg font-fjalla"
                            {...register("pais", {
                                required: "El pais es obligatorio"
                            })}
                    >
                        <option value="" className="p-2">--- Selecciona un pais ---</option>
                        {countries.map((pais) => {
                            return (
                                <option key={pais.code} value={pais.code}>{pais.name}</option>
                            );
                        })}
                    </select>
                    <div className="w-full font-fjalla text-red-600 text-center mt-1">
                        {errors.pais && String(errors.pais.message)}
                    </div>
                </div>
                <div>
                    <input type="submit"
                           className="p-2 w-full border border-slate-900 text-xl rounded-lg font-fjalla bg-slate-900 hover:bg-slate-950 cursor-pointer"
                           value="Consultar Clima"/>
                </div>
            </form>
        </>
    );
}
export default Form;