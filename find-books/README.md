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
   1. `npm install angular-in-memory-web-api --save`
   2. `ng generate service InMemoryDataService`
5. Enable `httpClient` and `InMemoryDataService` NgModule by including them in `app.config.ts`.
6. Setup book service
   1. `ng generate service book`
   2. Write method to fetch all books.
7. Setup message service
   1. `ng generate service message`
   2. Add logging method in book service
   3. New message component - `ng generate component messages`
   4. Display log messages
   5. Add time to each message
8. Create books list
   1. New books component - `ng generate component books` to display books list
   2. Delete a book, show message on delete
   3. TODO: On route: delete old messages
9. TODO: Search a book component
10. Add a book
11. TODO: Clear input after book is added
12. TODO: Edit a book
13. TODO: Submit a book for review
14. TODO: All reviews/requests page
15. TODO: Navigation and routing
16. Profile popup page
