import Form from "./components/Form.tsx";
import useWeather from "./hooks/useWeather.ts";

function App() {
    const {fetchClima} = useWeather();
    return (
        <>
            <h1 className="text-5xl text-center my-10 font-fjalla uppercase py-10 text-white font-fjalla">Aplicacion de clima</h1>

            <div className="max-w-5xl mx-auto md:flex md:items-center md:justify-around">
                <div>
                    <Form
                        fetchClima={fetchClima}
                    />
                </div>
                <p>2</p>
            </div>
        </>
    )
}

export default App
