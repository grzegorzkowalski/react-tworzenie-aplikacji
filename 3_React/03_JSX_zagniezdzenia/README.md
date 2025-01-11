### Na tym etapie ćwiczenia wykonuj w pliku App.tsx

## Zadanie 1

Wykorzystaj plik `people.ts`.

Zadaniem jest przeiterowanie po całej tablicy obiektów, tak aby stworzyć tablicę z gotowymi elementami `JSX`. Każdy element tej nowo utworzonej tablicy powinien mieć strukturę zbliżoną do następującej:

```html
<div class="person">
    <img src={ avatar } />
    <div class="info">
        <h1>{ tytuł + imię + nazwisko }</h1>
        <p>{ bio }</p>
    </div>
</div>
```

Powyższy kod jest jedynie poglądowy. Pamiętaj, w jaki sposób powinna być przekazywana nazwa klasy `CSS` w tagach `JSX` oraz o odpowiednich zamknięciach znaczników. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

```
.person {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    width: 650px;
    background: #efefef;
    border: 2px solid #ccc;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    border-radius: 8px;
}

.person img {
    width: 64px;
    height: auto;
}

.person h1,
.person p {
    margin: 0;
}

.person .info {
    padding-left: 15px;
}
```

Następnie za pomocą React wyrenderuj w elemencie o klasie `App` wszystkie wygenerowane elementy `div`.

**Pamiętaj o użyciu odpowiedniego klucza!**

## Zadanie 2

Stwórz tablicę obiektów zawierających wyniki egzaminu np 5 osób. Obiekt powinien zawierać imię, nazwisko, liczbę punktów i informację czy student zdał. 

Wyrenderuj w elemencie o klasie `App` dwa elementy `<ul>`. 

W środku pierwszego elementu wyrenderuj listę studentów (imię i nazwisko), którzy zaliczyli egzamin. Użyj odpowiedniej metody tablicowej.
W drugim wyrenderuj listę elementów li zawierających dane wszystkich studentów posortowanych malejąco według wyniku. Dodatkowo osoby, które zaliczyły egzamin niech wyswietlają się na zielono a te, które nie zaliczyły na czerwono. 

