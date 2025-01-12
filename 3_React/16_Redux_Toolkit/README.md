# Zadanie: Zarządzanie stanem koszyka za pomocą Redux Toolkit

## Cel

Twoim zadaniem jest stworzenie systemu zarządzania koszykiem w aplikacji e-commerce, wykorzystując **Redux Toolkit** i **TypeScript**. Użytkownik powinien mieć możliwość dodawania produktów do koszyka oraz ich usuwania.

---

## Instrukcja krok po kroku

1. **Zainstaluj Redux Toolkit i React-Redux**  
   W terminalu wykonaj poniższe polecenie, aby dodać niezbędne biblioteki:
   ```bash
   npm install @reduxjs/toolkit react-redux
```

2. Utwórz folder store w katalogu src

W folderze src utwórz folder store, w którym będą znajdować się wszystkie pliki związane z Redux Toolkit.
3.Stwórz plik cartSlice.ts
W pliku cartSlice.ts zaimplementuj:
Akcję addToCart, która dodaje produkt do koszyka.
Akcję removeFromCart, która usuwa produkt z koszyka.
Zdefiniuj typy danych dla produktu i stanu koszyka.

4. Skonfiguruj główny store w pliku store.ts
Dodaj cartSlice jako reducer w store.

5. Stwórz komponent Cart.tsx
Wyświetl produkty znajdujące się w koszyku z opcją ich usunięcia.
Podłącz store do aplikacji

6.W pliku App.tsx otocz aplikację komponentem Provider i podłącz store.


Plik: cartSlice.ts

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Typy danych
type Product = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
  items: Product[];
};

// Stan początkowy
const initialState: CartState = {
  items: [],
};

// Slice koszyka
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Eksport akcji i reducera
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
```

Plik: store.ts
```ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Konfiguracja głównego store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Typy dla store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

```

Plik: Cart.tsx
```ts
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price.toFixed(2)}
            </p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
```