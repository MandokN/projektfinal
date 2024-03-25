import { useState } from 'react'
import Header from './Header'

const Speed = () => {
    const [userValue, setUserValue] = useState(0)
    const [userUnit, setUserUnit] = useState('km/h')

    const [resultValue, setResultValue] = useState(0)
    const [resultUnit, setResultUnit] = useState('km/h')

    const units = {
        'km/h': {
            'km/h': 1,
            'm/s': 0.277778,
            mph: 0.621371,
        },
        'm/s': {
            'km/h': 3.6,
            'm/s': 1,
            mph: 2.23694,
        },
        mph: {
            'km/h': 1.60934,
            'm/s': 0.44704,
            mph: 1,
        },
    }

    const convertSpeed = () => {
        const inputValue = parseFloat(userValue)
        const inputUnit = userUnit
        const outputUnit = resultUnit

        const result = inputValue * units[inputUnit][outputUnit]

        setResultValue(result)
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="main_block" id="speed">
                    <div className="main_block--how">
                        <h3>PRĘDKOŚĆ</h3>
                        <p>
                            Konwerter prędkości umożliwia szybkie i precyzyjne
                            przeliczanie prędkości pomiędzy różnymi jednostkami,
                            takimi jak kilometry na godzinę (km/h), mile na
                            godzinę (mph) i metry na sekundę (m/s). Dzięki
                            prostemu interfejsowi użytkownicy mogą wprowadzać
                            wartości prędkości i wybierać jednostki, co pozwala
                            na elastyczne dostosowanie do własnych potrzeb.Nasz
                            konwerter prędkości to nie tylko narzędzie, które
                            oszczędza czas i wysiłek przy codziennych
                            obliczeniach, ale także wsparcie w podejmowaniu
                            szybkich decyzji. Bez względu na to, czy
                            potrzebujesz przeliczyć prędkość w celach naukowych,
                            podróżnych czy zawodowych, nasza aplikacja zapewni
                            Ci szybką i dokładną konwersję.
                        </p>
                        <p>Instrukcja:</p>
                        <ol>
                            <li>
                                Wybierz jednostkę wejściową: Wybierz jednostkę
                                prędkości, z której chcesz przeliczyć wartość.
                                Możliwe opcje obejmują kilometry na godzinę
                                (km/h), mile na godzinę (mph) i metry na sekundę
                                (m/s).
                            </li>
                            <li>
                                Wprowadź wartość: Wprowadź wartość prędkości,
                                którą chcesz przeliczyć. Możesz wpisać wartość
                                numeryczną w polu tekstowym.
                            </li>
                            <li>
                                Wybierz jednostkę wyjściową: Wybierz jednostkę
                                prędkości, na którą chcesz przeliczyć wartość.
                                Możesz wybrać dowolną jednostkę spośród
                                wymienionych powyżej.
                            </li>
                            <li>
                                Kliknij przycisk przelicz: Po wprowadzeniu
                                wartości i wybraniu jednostek, kliknij przycisk
                                `Przelicz`. Narzędzie wyświetli przeliczoną
                                wartość w jednostce wyjściowej.
                            </li>
                            <li>
                                Wyświetlenie wyniku: Przeliczona wartość pojawi
                                się na ekranie, umożliwiając łatwe odczytanie
                                wyniku.
                            </li>
                        </ol>
                    </div>
                    <div className="main_block--count">
                        <input
                            type="number"
                            onChange={(e) =>
                                setUserValue(parseFloat(e.target.value))
                            }
                        />
                        <select
                            value={userUnit}
                            onChange={(e) => setUserUnit(e.target.value)}
                        >
                            <option value="km/h">
                                kilometr na godzinę (km/h)
                            </option>
                            <option value="mph">mile na godzinę (mph)</option>
                            <option value="m/s">metry na sekundę (m/s)</option>
                        </select>
                        =
                        <input
                            type="number"
                            disabled
                            value={resultValue}
                            onChange={(e) =>
                                setResultValue(parseFloat(e.target.value))
                            }
                        />
                        <select
                            value={resultUnit}
                            onChange={(e) => setResultUnit(e.target.value)}
                        >
                            <option value="km/h">
                                kilometr na godzinę (km/h)
                            </option>
                            <option value="mph">mile na godzinę (mph)</option>
                            <option value="m/s">metry na sekundę (m/s)</option>
                        </select>
                    </div>
                    <div className="main_block--button">
                        <input
                            type="button"
                            value="przelicz"
                            className="btn"
                            onClick={() => convertSpeed()}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Speed
