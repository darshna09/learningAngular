# Find Me a Book

The project tests the knowledge on angular learned so far... (after creating first-app and tour-of-heroes)

## Development setup

1. `nvm use 18`
2. `ng serve`
3. Navigate to http://localhost:4200/

## Steps

1. Setup project `ng new find-books`
2. Clear `app.component.html`
3. Setup book interface `ng generate interface book`
4. Setup DB and API CRUD operations using Angular `in-memory-web-api`
   a. `npm install angular-in-memory-web-api --save`
   b. `ng generate service InMemoryDataService`
5. Enable `httpClient` and `InMemoryDataService` NgModule by including them in `app.config.ts`.
6. Setup book service
   a. `ng generate service book`
   b. Write method to fetch all books.
