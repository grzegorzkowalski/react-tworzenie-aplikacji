import Search from "./components/Search";
import LikeBox from "./components/LikeBox";
import Menu from "./components/Menu";
import StrobeLight from "./components/06_Chapter/StrobeLight";
import './App.css'
import Clock from "./components/Clock";
import Numbers from "./components/07_Chapter/Numbers";
import CrazyDiv from "./components/07_Chapter/CrazyDiv";
import Shop from "./components/08_Chapter/Shop.tsx";
import TodoApp from "./components/08_Chapter/TodoApp.tsx";
import NumberRandomInfo from "./components/09_Chapter/NumberRandomInfo.tsx";
import NumberInfo from "./components/09_Chapter/NumberInfo.tsx";

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

    // // Zadanie 1 JSX Atrybuty
    // const styles = {height: 100, width: 100};
    // const redDiv: JSX.Element = <div style={{...styles, backgroundColor: 'red'}} />
    // const greenDiv: JSX.Element = <div style={{...styles, backgroundColor: 'green'}} />
    // const bluedDiv: JSX.Element = <div style={{...styles, backgroundColor: 'blue'}} />
    //
    // // Zadanie 2 JSX Atrybuty
    // type BorderColor = 'red' | 'green' | 'blue';
    //
    // const userInput: string | null = prompt('Podaj kolor ramki (red, green, blue)?');
    // const borderColor: BorderColor | null = userInput?.toLowerCase() as BorderColor | null;
    //
    // const allowedColors: BorderColor[] = ['red', 'green', 'blue'];
    //
    // let element: JSX.Element;
    //
    // if (allowedColors.includes(borderColor as BorderColor)) {
    //     element = (
    //         <div
    //             style={{
    //                 width: '100px',
    //                 height: '100px',
    //                 border: `5px solid ${borderColor}`,
    //             }}
    //         />
    //     );
    // } else {
    //     element = <div>Nieprawidłowy kolor</div>;
    // }

    const menu = [
        {
            url: "/",
            text: "Strona główna"
        },
        {
            url: "/blog",
            text: "Blog"
        },
        {
            url: "/cennik",
            text: "Cennik"
        },
        {
            url: "/kontakt",
            text: "Kontakt"
        }
    ];

    return (
        <>
            {/*<p>Twój wiek to {new Date().getFullYear() - birthDay}.</p>*/}
            {/*{result}*/}
            {/*{redDiv}*/}
            {/*{greenDiv}*/}
            {/*{bluedDiv}*/}
            {/*{element}*/}
            <Search/>
            <LikeBox likes={500}/>
            <Menu menu={menu}/>
            <StrobeLight color="pink" frequency={500}/>
            <StrobeLight color="magenta" frequency={200}/>
            <StrobeLight color="yellow" frequency={100}/>
            <Clock/>
            <div>
                <h1>Chapter 07 Zadanie 4</h1>
                <Numbers/>
                <CrazyDiv min={0} max={800}/>
            </div>
            <div>
                <h1>Chapter 08 Zadanie 1</h1>
                <Shop/>
                <TodoApp/>
            </div>
            <div>
                <h1>Zadanie 1: NumberRandomInfo</h1>
                <NumberRandomInfo/>

                <h1>Zadanie 2: NumberInfo</h1>
                <NumberInfo number={1}/>
                <NumberInfo number={2}/>
                <NumberInfo number={5}/>
                <NumberInfo number={7}/>
                <NumberInfo number={10}/>
                <NumberInfo number={16}/>
            </div>
        </>
    )
}

export default App
