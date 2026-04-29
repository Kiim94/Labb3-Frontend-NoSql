# Frontend labb3

### Länk till frontend-webbplats: https://labb3-frontend-nosql.netlify.app/
---
Del 2 av 2. Denna frontend konsumerar en REST-webbtjänst (del 1 av laboration) och gör det möjligt för användaren 
att interagera med datan (i nuläget finns det ingen möjlighet att uppdatera (PUT), men det finns implementerat i
backend). 

Koden för denna frontend har  till stor del blivit återanvänd från tidigare laboration. 

Skillnader:
- Ändrat styling
- Ändrat variabel för URL som hämtar data
- Ändrat när id hämtas: tidigare work.id, nu work._id pga mongoDB
