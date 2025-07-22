export type Country = {
    code: string,
    name: string
}
export type ClimaBuqueda = {
    city: string,
    pais: string
}

export type ClimaResponse = {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number
    }
}