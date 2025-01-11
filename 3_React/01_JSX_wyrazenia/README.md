### Na tym etapie ćwiczenia wykonuj w pliku App.tsx

## Zadanie 1

Za pomocą `prompt()` odczytaj rok urodzenia użytkownika. 
Odpowiedź zapisz w zmiennej.

Następnie za pomocą metody `new Date().getFullYear()` pobierz aktualny rok.

Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

## Zadanie 2

Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

Możesz skorzystać z kodu zadania pierwszego. Zmodyfikuj je w taki sposób aby wyświetlać jeszcze jeden `prompt()`, który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym, jakie zostaną wykonane na liczbach A i B.

Zadanie wykonaj w taki sposób aby w zależności od operacji był renderowany inny element: dla dodawania element `h1`, dla odejmowania element `h2`, dla mnożenia element `h3`, a dla dzielenia element `h4`. 
Stwórzy funkcję, która będzie zwracała odpowiedni jsx z obliczeniami na podstawie przekazanych parametrów. Wyrenderuj w `App.js` wynik działania funkcji.