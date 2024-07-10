# Personal Journaling App Documentation

## Table of Contents

1. [End-User Documentation](#end-user-documentation)
   - 1.1 [Introduction](#introduction)
   - 1.2 [Getting Started](#getting-started)
     - 1.2.1 [Creating an Account](#creating-an-account)
     - 1.2.2 [Logging In](#logging-in)
   - 1.3 [Using the App](#using-the-app)
     - 1.3.1 [Home Screen](#home-screen)
     - 1.3.2 [Journal Entry](#journal-entry)
     - 1.3.3 [Adding and Editing Entries](#adding-and-editing-entries)
     - 1.3.4 [Settings](#settings)
   - 1.4 [Logging Out](#logging-out)
   - 1.5 [Troubleshooting](#troubleshooting)
   - 1.6 [Contact Support](#contact-support)

2. [Technical Documentation](#technical-documentation)
   - 2.1 [Project Structure](#project-structure)
   - 2.2 [Frontend (React Native)](#frontend-react-native)
   - 2.3 [Backend (Node.js with Express and Sequelize)](#backend-nodejs-with-express-and-sequelize)
   - 2.4 [Database Setup](#database-setup)
   - 2.5 [Development Setup](#development-setup)
   - 2.6 [Deployment](#deployment)
   - 2.7 [API Integration](#api-integration)
   - 2.8 [Additional Notes](#additional-notes)

3. [API Documentation](#api-documentation)
   - 3.1 [Base URL](#base-url)
   - 3.2 [Authentication](#authentication)
     - 3.2.1 [Register User](#register-user)
     - 3.2.2 [Login User](#login-user)
   - 3.3 [Journal Entries](#journal-entries)
     - 3.3.1 [Get All Journal Entries](#get-all-journal-entries)
     - 3.3.2 [Add Journal Entry](#add-journal-entry)
     - 3.3.3 [Delete Journal Entry](#delete-journal-entry)
   - 3.4 [Errors](#errors)

---

## End-User Documentation

### 1. Introduction

Welcome to the Personal Journaling App! This documentation will guide you through every aspect of using the app, from getting started to troubleshooting common issues.

### 2. Getting Started

#### 2.1 Creating an Account

To begin using the app, you need to create a user account:

1. Open the Personal Journaling App on your device.
2. Tap on the "Register" button.
3. Enter your desired username, email address, and a secure password.
4. Tap on "Register" to create your account.

#### 2.2 Logging In

Once you have created your account, you can log in to access your journal entries:

1. Open the Personal Journaling App.
2. Enter your registered email address and password.
3. Tap on "Login" to access your account.

### 3. Using the App

#### 3.1 Home Screen

Upon logging in, you will see the Home screen:

- **Navigation:** Use the bottom navigation bar to switch between screens.
- **Journal Entries:** View a list of your saved journal entries.

#### 3.2 Journal Entry

Each journal entry includes:

- **Title:** Brief description of the entry.
- **Content:** Detailed text of your journal entry.
- **Category:** Optional categorization for organization.
- **Date:** Date and time of the entry.

#### 3.3 Adding and Editing Entries

To add a new journal entry:

1. Navigate to the "Add Entry" screen.
2. Enter a title, content, and optionally choose a category.
3. Tap on "Save" to add the entry.

To edit an existing journal entry:

1. Navigate to the entry you wish to edit.
2. Tap on the entry to open it.
3. Make changes to the title, content, or category.
4. Tap on "Update" to save your changes.

#### 3.4 Settings

In the Settings screen, you can:

- **Edit Profile:** Update your username or email address.
- **Change Password:** Securely update your account password.

### 4. Logging Out

To log out of your account:

1. Navigate to the Settings screen.
2. Scroll down and tap on "Log Out."
3. Confirm your action to log out.

### 5. Troubleshooting

If you encounter any issues while using the app, such as login problems or data synchronization issues, please refer to the troubleshooting section in the app settings or contact support for assistance.

### 6. Contact Support

For further assistance or inquiries, please contact our support team via email at eivuto@gmail.com or erickmutunga72@gmail.com.

---

## Technical Documentation

### 1. Project Structure

The project is structured as follows:

```
PersonalJournalApp/
├── android/
├── ios/
├── node_modules/
├── src/
│   ├── api/
│   ├── components/
│   ├── navigation/
│   ├── screens/
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
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.ts
│   ├── app.ts
│   └── utils/
├── config/
├── migrations/
├── seeders/
├── tsconfig.json
├── package.json
└── README.md
```

### 2. Frontend (React Native)

#### 2.1 Components

- **api/**: Contains API client for making HTTP requests.
- **components/**: Reusable UI components.
- **navigation/**: React Navigation setup for app navigation.
- **screens/**: Screen components for different app views.

#### 2.2 App.tsx

Entry point for the React Native app.

#### 2.3 Styles.ts

Shared styles for the application.

### 3. Backend (Node.js with Express and Sequelize)

#### 3.1 Controllers

- **controllers/**: Handles API requests and responses.

#### 3.2 Models

- **models/**: Defines Sequelize models for database tables.

#### 3.3 Routes

- **routes/**: Defines API routes for different endpoints.

#### 3.4 Config

- **config/**: Configuration files for the application.

#### 3.5 Middleware

- **middleware/**: Middleware functions for request handling.

#### 3.6 Server.ts

Main entry point for starting the Express server.

#### 3.7 App.ts

Sets up the Express application.

#### 3.8 Utils

- **utils/**: Helper functions and utilities for the application.

### 4. Database Setup

#### 4.1 PostgreSQL

- **config/**: Database configuration files.
- **migrations/**: Sequelize migration files.
- **seeders/**: Sequelize seed files.

### 5. Development Setup

#### 5.1 Prerequisites

- Node.js installed.
- PostgreSQL installed.
- Code editor (e.g., VS Code).

#### 5.2 Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure PostgreSQL:
   - Create a PostgreSQL database.
   - Set up database credentials in `.env` file.

4. Start backend server:
   ```bash
   npx ts-node src/server.ts
   ```

5. Start frontend:
   ```bash
   npx react-native run-android # for Android
   npx react-native run-ios # for iOS
   ```

### 6. Deployment

#### 6.1 Hosting

- Deploy backend to cloud platform (e.g., AWS, Heroku).
- Build and deploy frontend to app stores (Google Play Store, Apple App Store).

### 7. API Integration

For API integration details, refer to the [API Documentation](#api-documentation) section.

### 8. Additional Notes

For any additional technical information or questions, please refer to the README.md file or contact the development team.

---

## API Documentation

### 1. Base URL

All API endpoints are relative to `/api`.

### 2. Authentication

#### 2.1 Register User

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user with username, email, and password.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**
  - **Code:** 201 Created
  - **Content:**
    ```json
    {
      "id": "number",
      "username": "string",
      "email": "string"
    }
    ```
- **Error Responses:**
  - **Code:** 400 Bad Request
    - **Content:** `{ "message": "Validation error:

 <specific validation error>" }`

#### 2.2 Login User

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Authenticate user with email and password.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response:**
  - **Code:** 200 OK
  - **Content:**
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
- **Error Responses:**
  - **Code:** 401 Unauthorized
    - **Content:** `{ "message": "Invalid credentials" }`

### 3. Journal Entries

#### 3.1 Get All Journal Entries

- **URL:** `/journal`
- **Method:** `GET`
- **Description:** Retrieve all journal entries for the authenticated user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Success Response:**
  - **Code:** 200 OK
  - **Content:**
    ```json
    [
      {
        "id": "number",
        "title": "string",
        "content": "string",
        "category": "string",
        "date": "string",
        "userId": "number"
      },
      {
        "id": "number",
        "title": "string",
        "content": "string",
        "category": "string",
        "date": "string",
        "userId": "number"
      },
      /*...*/
    ]
    ```
- **Error Responses:**
  - **Code:** 401 Unauthorized
    - **Content:** `{ "message": "Unauthorized: Missing or invalid token" }`

#### 3.2 Add Journal Entry

- **URL:** `/journal/add`
- **Method:** `POST`
- **Description:** Add a new journal entry for the authenticated user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "category": "string",
    "date": "string"
  }
  ```
- **Success Response:**
  - **Code:** 201 Created
  - **Content:**
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
- **Error Responses:**
  - **Code:** 400 Bad Request
    - **Content:** `{ "message": "Validation error: <specific validation error>" }`
  - **Code:** 401 Unauthorized
    - **Content:** `{ "message": "Unauthorized: Missing or invalid token" }`

#### 3.3 Delete Journal Entry

- **URL:** `/journal/delete/:id`
- **Method:** `DELETE`
- **Description:** Delete a journal entry by ID for the authenticated user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Success Response:**
  - **Code:** 200 OK
  - **Content:**
    ```json
    {
      "message": "Journal entry deleted successfully"
    }
    ```
- **Error Responses:**
  - **Code:** 401 Unauthorized
    - **Content:** `{ "message": "Unauthorized: Missing or invalid token" }`
  - **Code:** 404 Not Found
    - **Content:** `{ "message": "Journal entry not found" }`

### 4. Errors

- **Code:** 404 Not Found
  - **Content:** `{ "message": "Endpoint not found" }`

- **Code:** 500 Internal Server Error
  - **Content:** `{ "message": "Internal server error" }`

### Conclusion

This detailed documentation covers every aspect of the Personal Journaling App, including end-user instructions, technical implementation details, and API integration guidelines.