# Find Me a Book

The project tests the knowledge on angular learned so far... (after creating first-app and tour-of-heroes)

## Development setup

1. `nvm use 18`
2. `ng serve`
3. Navigate to http://localhost:4200/

## Steps

- Setup project `ng new find-books`
- Clear `app.component.html`
- Setup book interface `ng generate interface book`
- Setup DB and API CRUD operations using Angular `in-memory-web-api`
  - `npm install angular-in-memory-web-api --save`
  - `ng generate service InMemoryDataService`
- Enable `httpClient` and `InMemoryDataService` NgModule by including them in `app.config.ts`.
- Setup book service
  - `ng generate service book`
  - Write method to fetch all books.
- Setup message service
  - `ng generate service message`
  - Add logging method in book service
  - New message component - `ng generate component messages`
  - Display log messages
  - Add time to each message
- Create books list
  - New books component - `ng generate component books` to display books list
  - Delete a book, show message on delete
  - TODO: On route: delete old messages
- TODO: Search a book component
- Add a book
  - TODO: Clear input after book is added
- TODO: Edit a book
- TODO: Submit a book for review
- TODO: All reviews/requests page
- TODO: Navigation and routing
- Profile popup page
