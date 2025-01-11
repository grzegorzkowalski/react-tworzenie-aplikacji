### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Zmodyfikuj komponent `LikeBox` z poprzedniego tematu. Niech przyjmuje w `props` początkową liczbę polubień (`likes`). Wyrenderuj go na stronie podając w atrybucie do `props` przykładową liczbę polubień.



## Zadanie 2

Zmodyfikuj komponent `Menu` z poprzedniego tematu. Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:
```js
{
  url: "adres_odnośnika",
  text: "tekst linku"
}
```

Używając `map()` stwórz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut menu:
```js
[
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
]
```
