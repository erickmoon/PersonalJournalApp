## Technical Documentation

### 1. Instructions on How to Set Up and Run the Backend Service

#### Prerequisites:

- Node.js installed
- PostgreSQL installed
- A code editor (e.g., VS Code)

### Project Structure

```
PersonalJournalApp/
├── android/
├── ios/
├── node_modules/
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── components/
│   │   └── JournalEntry.tsx
│   ├── navigation/
│   │   └── index.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── JournalScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── App.tsx
│   └── styles.ts
├── App.tsx
├── tsconfig.json
├── package.json
├── babel.config.js
└── README.md
backend/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── journalController.ts
│   ├── models/
│   │   ├── user.ts
│   │   └── journalEntry.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   └── journalRoutes.ts
│   ├── config/
│   │   └── database.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── server.ts
│   ├── app.ts
│   └── utils/
│       └── helpers.ts
├── config/
│   └── config.json
├── migrations/
│   ├── 20220707123456-create-user.js
│   └── 20220707123457-create-journal-entry.js
├── seeders/
│   └── 20220707123458-demo-user.js
├── tsconfig.json
├── package.json
└── README.md
```

### Detailed Explanation

#### Frontend (React Native)

1. **android/** and **ios/**: Native code for Android and iOS platforms.
2. **node_modules/**: Directory for npm packages.
3. **src/**: Source code for the React Native application.
   - **api/**: Contains the API client for making HTTP requests to the backend.
     - `index.ts`: API methods for user authentication, journal entry management, etc.
   - **components/**: Reusable UI components.
     - `JournalEntry.tsx`: Component for displaying individual journal entries.
   - **navigation/**: React Navigation setup.
     - `index.tsx`: Navigation configuration and stack setup.
   - **screens/**: Screen components for different app views.
     - `HomeScreen.tsx`: Home screen displaying journal entries and navigation options.
     - `JournalScreen.tsx`: Screen for adding and editing journal entries.
     - `LoginScreen.tsx`: Login screen for user authentication.
     - `RegisterScreen.tsx`: Registration screen for new users.
     - `SettingsScreen.tsx`: Settings screen for updating user profile.
   - `App.tsx`: Entry point for the React Native app.
   - `styles.ts`: Shared styles for the application.
4. **App.tsx**: Entry point file that initializes the app.
5. **tsconfig.json**: TypeScript configuration file.
6. **package.json**: Project metadata and dependencies.
7. **babel.config.js**: Babel configuration file.
8. **README.md**: Project documentation.

#### Backend (Node.js with Express and Sequelize)

1. **node_modules/**: Directory for npm packages.
2. **src/**: Source code for the backend application.
   - **controllers/**: Contains controller files for handling API requests.
     - `authController.ts`: Controller for user authentication (login and registration).
     - `journalController.ts`: Controller for journal entry management.
   - **models/**: Sequelize models.
     - `user.ts`: User model definition.
     - `journalEntry.ts`: Journal entry model definition.
   - **routes/**: API routes.
     - `authRoutes.ts`: Routes for authentication endpoints.
     - `journalRoutes.ts`: Routes for journal entry endpoints.
   - **config/**: Configuration files.
     - `database.ts`: Database connection configuration.
   - **middleware/**: Middleware functions.
     - `authMiddleware.ts`: Middleware for authenticating requests.
   - **utils/**: Utility functions and helpers.
     - `helpers.ts`: Helper functions used across the application.
   - `server.ts`: Main entry point for starting the Express server.
   - `app.ts`: Express application setup.
3. **config/**: Configuration files.
   - `config.json`: Database configuration for different environments.
4. **migrations/**: Sequelize migration files for database schema changes.
   - `20220707123456-create-user.js`: Migration file for creating the User table.
   - `20220707123457-create-journal-entry.js`: Migration file for creating the JournalEntry table.
5. **seeders/**: Sequelize seed files for populating the database with initial data.
   - `20220707123458-demo-user.js`: Seeder file for creating a demo user.
6. **tsconfig.json**: TypeScript configuration file.
7. **package.json**: Project metadata and dependencies.
8. **README.md**: Project documentation.

#### Setup Steps:

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure PostgreSQL**:

   - Create a PostgreSQL database.
   - Create a `.env` file in the root of your project and add the following environment variables (replace with your actual database credentials):

     ```env
     DATABASE_URL=postgres://your_username:your_password@localhost:5432/your_database
     JWT_SECRET=your_jwt_secret
     ```

4. **Set up the database schema**:

   - Create the necessary tables by running the following SQL commands in your PostgreSQL database:

     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(100) NOT NULL,
       email VARCHAR(100) UNIQUE NOT NULL,
       password VARCHAR(100) NOT NULL
     );

     CREATE TABLE journal_entries (
       id SERIAL PRIMARY KEY,
       title VARCHAR(100) NOT NULL,
       content TEXT NOT NULL,
       category VARCHAR(100),
       date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
     );
     ```

5. **Start the backend server**:
   ```bash
   npx ts-node src/server.ts
   ```

### 2. Instructions on How to Build and Run the Mobile App

#### Prerequisites:

- Node.js installed
- React Native CLI installed
- Android Studio or Xcode installed (depending on your target platform)

#### Setup Steps:

#### Backend

1. **Install dependencies:**

```sh
cd backend
npm install
```

2. **Set up the database:**

```sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

3. **Start the server:**

```sh
npx ts-node src/server.ts
```

#### Frontend

1. **Install dependencies:**

```sh
cd PersonalJournalApp
npm install
```

2. **Run the application:**

```sh
npx react-native run-android # for Android
npx react-native run-ios # for iOS
```

- For iOS:
  ```bash
  npx react-native run-ios
  ```
- For Android:
  ```bash
  npx react-native run-android
  ```

### 3. API Documentation Detailing the Endpoints and Their Usage

#### Base URL: `/api`

#### Authentication Endpoints:

1. **Register**

   - **URL**: `/api/auth/register`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "string",
       "user": {
         "id": "number",
         "username": "string",
         "email": "string"
       }
     }
     ```

2. **Login**
   - **URL**: `/api/auth/login`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "string",
       "user": {
         "id": "number",
         "username": "string",
         "email": "string"
       }
     }
     ```

#### Journal Entries Endpoints:

1. **Add Journal Entry**

   - **URL**: `/api/journal/add`
   - **Method**: `POST`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <token>"
     }
     ```
   - **Request Body**:
     ```json
     {
       "title": "string",
       "content": "string",
       "category": "string",
       "date": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "id": "number",
       "title": "string",
       "content": "string",
       "category": "string",
       "date": "string",
       "userId": "number"
     }
     ```

2. **Get All Journal Entries**

   - **URL**: `/api/journal`
   - **Method**: `GET`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <token>"
     }
     ```
   - **Response**:
     ```json
     [
       {
         "id": "number",
         "title": "string",
         "content": "string",
         "category": "string",
         "date": "string",
         "userId": "number"
       }
       /*...*/
     ]
     ```

3. **Delete Journal Entry**

   - **URL**: `/api/journal/delete/:id`
   - **Method**: `DELETE`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <token>"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Journal entry deleted successfully"
     }
     ```

### Conclusion

This documentation provides a comprehensive guide to setting up and running both the frontend and backend components of the Personal Journaling App. It includes instructions for project setup, database configuration, API endpoints, and running the mobile application on both Android and iOS platforms.
