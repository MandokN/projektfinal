import { useState } from 'react'
import Header from './Header'

const Mass = () => {
    const [userValue, setUserValue] = useState(0)
    const [userUnit, setUserUnit] = useState('kg')
    const [resultValue, setResultValue] = useState(0)
    const [resultUnit, setResultUnit] = useState('kg')

    const units = {
        kg: {
            kg: 1,
            lb: 2.20462,
            oz: 35.274,
            g: 1000,
        },
        lb: {
            kg: 0.453592,
            lb: 1,
            oz: 16,
            g: 453.592,
        },
        oz: {
            kg: 0.0283495,
            lb: 0.0625,
            oz: 1,
            g: 28.3495,
        },
        g: {
            kg: 0.001,
            lb: 0.00220462,
            oz: 0.035274,
            g: 1,
        },
    }

    const convertMass = () => {
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
                <section className="main_block" id="weight">
                    <div className="main_block--how">
                        <h3>MASA</h3>
                        <p>
                            Konwerter masy jest narzędziem, które umożliwia
                            dokonywanie szybkich i precyzyjnych przeliczeń
                            pomiędzy różnymi jednostkami masy. Ten interaktywny
                            komponent został zaprojektowany w formie aplikacji
                            internetowej, aby ułatwić użytkownikom
                            przekształcanie wartości masy z jednej jednostki na
                            inną w sposób wygodny i intuicyjny. Dzięki temu
                            konwerterowi, użytkownicy mogą wprowadzać wartości
                            mas w różnych jednostkach, takich jak kilogramy,
                            funty, uncje czy gramy, a następnie wybrać jednostkę
                            docelową, do której chcą przeliczyć daną masę.
                            Komponent automatycznie wykonuje konwersję i
                            prezentuje wynik w wybranej jednostce, zapewniając
                            tym samym szybkie rozwiązanie dla codziennych
                            potrzeb związanych z przeliczaniem masy.
                        </p>
                        <p>Instrukcja:</p>
                        <ol>
                            <li>
                                Wybierz jednostkę wejściową: Wybierz jednostkę
                                masy, z której chcesz przeliczyć wartość.
                                Możliwe opcje obejmują kilogramy (kg), funty
                                (lb), uncje (oz) i gramy (g).
                            </li>
                            <li>
                                Wprowadź wartość: Wprowadź wartość masy, którą
                                chcesz przeliczyć. Możesz wpisać wartość
                                numeryczną w polu tekstowym.
                            </li>
                            <li>
                                Wybierz jednostkę wyjściową: Wybierz jednostkę
                                masy, na którą chcesz przeliczyć wartość. Możesz
                                wybrać dowolną jednostkę spośród wymienionych
                                powyżej.
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
                            <option value="kg">kilogram (kg)</option>
                            <option value="lb">funt (lb)</option>
                            <option value="oz">uncja (oz)</option>
                            <option value="g">gram (g)</option>
                        </select>
                        =
                        <input
                            type="number"
                            value={resultValue}
                            onChange={(e) => setResultValue(e.target.value)}
                            disabled
                        />
                        <select
                            value={resultUnit}
                            onChange={(e) => setResultUnit(e.target.value)}
                        >
                            <option value="kg">kilogram (kg)</option>
                            <option value="lb">funt (lb)</option>
                            <option value="oz">uncja (oz)</option>
                            <option value="g">gram (g)</option>
                        </select>
                    </div>
                    <div className="main_block--button">
                        <input
                            type="button"
                            value="przelicz"
                            className="btn"
                            onClick={() => convertMass()}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Mass
