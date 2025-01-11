### Używamy tylko komponentów funkcyjnych.


## Zadanie 1

1. Wykorzystaj hook `useMemo`, żeby zoptymalizować funkcje odpowiedzialne za filtrowanie produktów. 


## Zadanie 2: Zarządzanie stanem czatu (useReducer)
Cel: Użycie useReducer do zarządzania wiadomościami w czacie.

Opis:

1. Przekształć zarządzanie wiadomościami w czacie z użycia useState na useReducer.
2. Stan powinien zawierać:
- Listę wiadomości.
- Obecne pytanie użytkownika.
3. Dodaj możliwość czyszczenia historii czatu.


## Zadanie 3: Stwórz custom hook do komunikacji z OpenAI API 

1. Stwóz custom hook, który będzie zarządzał komunikacją z modelem językowym OpenAI. Hook powinien wykorzystywać useCallback do optymalizacji funkcji wysyłania zapytań.
2. Nazwa hooka: `useChatGPT`.
3. Przygotuj funkcję `sendMessage`, któa będzie odpowiedizalna za wysyłanie zapytań do API.
4. Hook powinien obsługiwać błędy i zwracać odpowiedzi modelu.
4. Użyj `useCallback` do optymalizacji funkcji wysyłania zapytań.