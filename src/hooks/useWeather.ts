import axios from 'axios';
import type {ClimaBuqueda, ClimaResponse} from "../types";
import {z} from "zod";
import {toast} from "react-toastify";
import {useState} from "react";

const schemaResponseApi = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
});

export default function useWeather() {
    const [clima, setClima] = useState<ClimaResponse>({
        name: "",
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        }
    });

    const fetchClima = async (data: ClimaBuqueda) => {
        try {
            const {city, pais} = data;
            const API_KEY: string = import.meta.env.VITE_API_KEY_CLIMA;
            const endpointAPI: string = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${pais}&appid=${API_KEY}`;

            const response = await axios.get(endpointAPI);
            const lat: string = response.data[0].lat;
            const lng: string = response.data[0].lon;

            const endpointAPI2: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
            const response_two = await axios.get(endpointAPI2);
            const result = schemaResponseApi.safeParse(response_two.data);
            if (result) {
                toast.success("Consulta tu clima");
                setClima(result.data);
            } else {
                toast.error("Error en obtencion de clima");
            }
        } catch (e) {
            console.log("Error en petcion de primera api");
        }
    }
    return {
        fetchClima,
        clima
    }
}