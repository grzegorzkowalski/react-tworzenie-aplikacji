import './App.css'
import {JSX} from "react";

function App() {


    // const birthDay : number | null = parseInt(prompt("Podaj swój rok urodzenia?") ?? "");

    // const numA : number = +(prompt('Podaj pierwszą liczbę (A):') || '0');
    // const numB: number = +(prompt('Podaj drugą liczbę (B):') || '0');
    // const operation: string | null = prompt('Podaj operację: +, -, *, /');

    // let result: JSX.Element | null = null;
    // switch (operation) {
    //     case '+':
    //         result = <h1>Wynik dodawania: {numA + numB}</h1>;
    //         break;
    //     case '-':
    //         result = <h2>Wynik odejmowania: {numA - numB}</h2>;
    //         break;
    //     case '*':
    //         result = <h3>Wynik mnożenia: {numA * numB}</h3>;
    //         break;
    //     case '/':
    //         if (numB === 0) {
    //             alert('Nie można dzielić przez zero!');
    //             return;
    //         }
    //         result = <h4>Wynik dzielenia: {numA / numB}</h4>;
    //         break;
    //     default:
    //         alert('Nieprawidłowa operacja! Spróbuj ponownie.');
    //         return;
    // }

    // Zadanie 1 JSX Atrybuty
    const styles = {height: 100, width: 100};
    const redDiv: JSX.Element = <div style={{...styles, backgroundColor: 'red'}} />
    const greenDiv: JSX.Element = <div style={{...styles, backgroundColor: 'green'}} />
    const bluedDiv: JSX.Element = <div style={{...styles, backgroundColor: 'blue'}} />

    // Zadanie 2 JSX Atrybuty
    type BorderColor = 'red' | 'green' | 'blue';

    const userInput: string | null = prompt('Podaj kolor ramki (red, green, blue)?');
    const borderColor: BorderColor | null = userInput?.toLowerCase() as BorderColor | null;

    const allowedColors: BorderColor[] = ['red', 'green', 'blue'];

    let element: JSX.Element;

    if (allowedColors.includes(borderColor as BorderColor)) {
        element = (
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    border: `5px solid ${borderColor}`,
                }}
            />
        );
    } else {
        element = <div>Nieprawidłowy kolor</div>;
    }

    return (
      <>
          {/*<p>Twój wiek to {new Date().getFullYear() - birthDay}.</p>*/}
          {/*{result}*/}
          {redDiv}
          {greenDiv}
          {bluedDiv}
          {element}
      </>
  )
}

export default App
