### Używamy tylko komponentów funkcyjnych.


## Zadanie 1

1. Przygotuj ChatBota, który będzie na stronie odpowiadał na pytania dotyczące produktów.
2. Zainstaluj `npm install axios`.
3. Możesz wykorzystać poniższy kod. Klucz api otrzymasz od prowadzącego.
4. Przygotuj komponent, któy będzie uumożliwiał komunikację.
5. Dodaj komponent do aplikacji.

```
useEffect(() => {
const fetchProducts = async () => {
const response = await fetch('/products.json');
const data = await response.json();
setProducts(data.products);
};
fetchProducts();
}, []);



// Obsługa zapytania do OpenAI API
const handleAsk = async () => {
try {
const response = await axios.post(
'https://api.openai.com/v1/chat/completions',
{
model: 'gpt-4.0-mini',
messages: [
{
role: 'system',
content: 'You are a chatbot that answers questions about e-commerce products.',
},
{
role: 'user',
content: `Here are the product details: ${JSON.stringify(
                products
              )}. Answer the following question: ${userInput}`,
},
],
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer YOUR_OPENAI_API_KEY`,
},
}
);
setChatResponse(response.data.choices[0].message.content);
} catch (error) {
console.error('Error communicating with OpenAI API:', error);
setChatResponse('Sorry, something went wrong.');
} finally {
setIsLoading(false);
}
};
```