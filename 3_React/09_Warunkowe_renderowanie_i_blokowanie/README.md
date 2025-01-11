### Używamy tylko komponentów funkcyjnych.


## Zadanie 1

Stwórz komponent `NumberRandomInfo`, który co sekundę losuje liczbę od 0 do 5. Do losowania liczby skorzystaj ze wzoru:

```js
Math.ceil(Math.random() * 5)
```

W metodzie render zrób warunek, który sprawdzi wylosowaną liczbę. Jeżeli jest ona większa od 3, to wyrenderuj tę liczbę oraz napis: "Większa od 3". W przeciwnym wypadku wyrenderuj tę liczbę oraz napis: "Mniejsza od 3".

## Zadanie 2

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16