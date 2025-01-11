### Na tym etapie ćwiczenia wykonuj w pliku App.tsx

## Zadanie 1

Stwórz trzy zmienne (`redDiv`, `greenDiv`, `blueDiv`) zawierające strukturę JSX pustego elementu `div`.

Ustaw wszystkim trzem div-om wysokość na ```100px```, a każdemu z nich ustaw kolor tła odpowiadający jego nazwie. 

Style dodaj liniowo lub przekazując obiekt ze stylami.

Następnie w elemencie o klasie `App` wyrenderuj stworzone elementy.



## Zadanie 2

Za pomocą `prompt()` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę `indexOf()` lub inną znaną Ci metodę tablicową). 

Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj element `div` z napisem "Nieprawidłowy kolor".

Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj element `div`, ze stylami ustawionymi na:

- Szerokość: `100px`
- Wysokość: `100px`
- Grubość ramki: `5px`
- Styl ramki: `solid`
- Kolor ramki: **ten podany przez użytkownika**
