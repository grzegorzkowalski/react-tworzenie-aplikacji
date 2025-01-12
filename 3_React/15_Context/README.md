# Zadanie: Zarządzanie stanem koszyka za pomocą React Context

## Cel

Stwórz system zarządzania koszykiem w aplikacji e-commerce z użyciem **React Context** i **TypeScript**. Użytkownik będzie mógł dodawać produkty do koszyka oraz usuwać je.

---

## Kroki do wykonania

1. **Utwórz folder `context` i plik `CartContext.tsx`.**

    - W katalogu `src` utwórz folder `context`.
    - Stwórz plik `CartContext.tsx`.

2. **Zdefiniuj typy danych:**
    - `Product`: Obiekt reprezentujący produkt:
        - `id`: number
        - `name`: string
        - `price`: number
    - `CartState`: Stan koszyka jako tablica produktów.

3. **Zaimplementuj Reducer do zarządzania stanem:**
    - Dodaj funkcję `cartReducer`, która obsłuży następujące akcje:
        - `ADD_TO_CART`: Dodaje produkt do koszyka.
        - `REMOVE_FROM_CART`: Usuwa produkt z koszyka.

4. **Stwórz kontekst `CartContext`:**
    - Za pomocą `createContext` stwórz kontekst przechowujący:
        - Stan koszyka.
        - Funkcje `addToCart` i `removeFromCart`.

5. **Stwórz komponent `CartProvider`:**
    - Otocz aplikację komponentem `CartProvider`.

6. **Utwórz hook `useCart`:**
    - Zapewnij łatwy dostęp do kontekstu za pomocą hooka.

7. **Użyj `CartContext` w aplikacji:**
    - W `App.tsx` zaimportuj `CartProvider`.
    - Dodaj komponent zarządzający koszykiem.

---

## Rozwiązanie

### Plik: `CartContext.tsx`

```tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
  items: Product[];
};

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: number };

type CartContextType = {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
};

const initialState: CartState = { items: [] };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.product] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter((item) => item.id !== action.productId) };
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => dispatch({ type: 'ADD_TO_CART', product });
  const removeFromCart = (productId: number) => dispatch({ type: 'REMOVE_FROM_CART', productId });

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
