### Używamy tylko komponentów funkcyjnych.

# Warsztat tworzenia strony e-commerce z React i Tailwind CSS

## Wprowadzenie i konfiguracja środowiska

### Wprowadzenie do projektu

- Omówienie celu warsztatu: Stworzenie responsywnej strony e-commerce.
- Prezentacja docelowej funkcjonalności strony: lista produktów, koszyk zakupów, szczegóły produktu. `https://mrud3r.github.io/e-commerce`

#### Tworzenie projektu z Vite

1. Otwórz terminal.
2. Uruchom polecenie:
   ```bash
   npm create vite@latest my-ecommerce-app
   ```
3. Wybierz opcję **React** i **TypeScript** podczas konfiguracji.
4. Przejdź do folderu projektu:
   ```bash
   cd my-ecommerce-app
   ```
5. Zainstaluj zależności:
   ```bash
   npm install
   ```
   
#### Uruchomienie projektu

1. Uruchom aplikację w trybie deweloperskim:
   ```bash
   npm run dev
   ```
2. Otwórz podany adres URL w przeglądarce, aby zobaczyć działającą aplikację.

### Integracja z Tailwind CSS

#### Instalacja Tailwind CSS

1. Zainstaluj Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Zainicjuj konfigurację:
   ```bash
   npx tailwindcss init
   ```

#### Konfiguracja Tailwind CSS

1. Otwórz plik `tailwind.config.js` i skonfiguruj ścieżki:
   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
2. W pliku `src/index.css` dodaj:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

#### Sprawdzenie konfiguracji

1. Uruchom aplikację ponownie:
   ```bash
   npm run dev
   ```
2. Dodaj przykładowy element w pliku `App.tsx`:
   ```tsx
   <div className="text-center text-2xl text-blue-500">
     Tailwind CSS działa!
   </div>
   ```
3. Sprawdź, czy zmiany są widoczne.

## Tworzenie komponentów interfejsu użytkownika

### Nagłówek i nawigacja

#### Instrukcja

1. Warsztat zaczniemy budować od podstrony `Collection`.
2. W pliku `src/components/Header.tsx` utwórz komponent `Header.tsx`. Treści i style kopiuj z tego adresu `https://mrud3r.github.io/e-commerce`. Pomiń na razie funkcjonalność koszyka.
3W pliku `App.tsx` zaimportuj i użyj komponentu `Header`.

### Lista Produktów

#### Instrukcja

1. Stwórz plik `src/components/ProductList.tsx`.
2. Wykorzystaj dane z pliku `dummyProducts.json` i zdjęcia z folderu `assets`.
2. Dodaj listę produktów do `App.tsx`.