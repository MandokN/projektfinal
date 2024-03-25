import Header from './Header'
import { useState } from 'react'

const Length = () => {
    const [userValue, setUserValue] = useState(0)
    const [userUnit, setUserUnit] = useState('m')

    const [resultValue, setResultValue] = useState(0)
    const [resultUnit, setResultUnit] = useState('m')

    const units = {
        cm: {
            cm: 1,
            m: 0.01,
            km: 0.00001,
            mi: 0.00000621371,
        },
        m: {
            cm: 100,
            m: 1,
            km: 0.001,
            mi: 0.000621371,
        },
        km: {
            cm: 100000,
            m: 1000,
            km: 1,
            mi: 0.621371,
        },
        mi: {
            cm: 160934,
            m: 1609.34,
            km: 1.60934,
            mi: 1,
        },
    }

    const convertLength = () => {
        const inputValue = parseFloat(userValue)
        const inputUnit = userUnit
        const outputUnit = resultUnit

        const result = inputValue * units[inputUnit][outputUnit]

        setResultValue(result)
        console.log(resultValue)
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="main_block" id="lenght">
                    <div className="main_block--how">
                        <h3>DŁUGOŚĆ</h3>
                        <p>
                            Konwerter długości to prosty narzędzie online, które
                            umożliwia szybką i łatwą konwersję wartości między
                            różnymi jednostkami długości. Jest przydatny dla
                            osób potrzebujących przeliczyć odległości między
                            jednostkami w codziennych zastosowaniach lub w pracy
                            naukowej. Zapewnia dokładne przeliczenia, eliminując
                            błędy wynikające z ręcznego przeliczania wartości
                            między jednostkami. Dzięki temu użytkownik może mieć
                            pewność, że otrzymuje precyzyjne wyniki, co jest
                            istotne zwłaszcza w przypadku zastosowań naukowych,
                            technicznych czy handlowych.
                        </p>
                        <p>Instrukcja:</p>
                        <ol>
                            <li>
                                Wybierz jednostkę wejściową: Wybierz jednostkę
                                długości, z której chcesz przeliczyć wartość.
                                Możliwe opcje obejmują metry (m), centymetry
                                (cm), kilometry (km) i mile (mi).
                            </li>
                            <li>
                                Wprowadź wartość: Wprowadź wartość długości,
                                którą chcesz przeliczyć. Możesz wpisać wartość
                                numeryczną w polu tekstowym.
                            </li>
                            <li>
                                Wybierz jednostkę wyjściową: Wybierz jednostkę
                                długości, na którą chcesz przeliczyć wartość.
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
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                        />
                        <select
                            value={userUnit}
                            onChange={(e) => setUserUnit(e.target.value)}
                        >
                            <option value="m">metr (m)</option>
                            <option value="km">kilometr (km)</option>
                            <option value="cm">centymetr (cm)</option>
                            <option value="mi">mila (mi)</option>
                        </select>
                        =
                        <input type="number" disabled value={resultValue} />
                        <select
                            value={resultUnit}
                            onChange={(e) => setResultUnit(e.target.value)}
                        >
                            <option value="m">metr (m)</option>
                            <option value="km">kilometr (km)</option>
                            <option value="cm">centymetr (cm)</option>
                            <option value="mi">mila (mi)</option>
                        </select>
                    </div>
                    <div className="main_block--button">
                        <input
                            type="button"
                            value="przelicz"
                            className="btn"
                            onClick={() => convertLength()}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Length
