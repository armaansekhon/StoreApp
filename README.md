# Fake Store App

A simple and clean React Native application that displays products from the Fake Store API.

## Features

- Product listing with images, titles, and prices
- Product detail view with full description
- Redux Toolkit for state management
- Responsive UI using Dimensions API
- Clean and organized folder structure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment setup
- Android Studio (for Android) or Xcode (for iOS)

## Installation

1. Extract the ZIP file
2. Navigate to the project directory:
cd FakeStoreApp


3. Install dependencies:
```bash
npm install
```

## Running the App

### For Android:
```bash
npm run android
```

### For iOS:
```bash
cd ios && pod install && cd ..
npm run ios
```

## Project Structure
```
FakeStoreApp/
├── src/
│   ├── components/       # Reusable components
│   ├── constants/        # Theme and styling constants
│   ├── navigation/       # Navigation setup
│   ├── screens/          # Screen components
│   ├── services/         # API services
│   └── store/           # Redux store and slices
├── App.js               # Root component
└── package.json
```

## Technologies Used

- React Native
- Redux Toolkit
- React Navigation
- Fake Store API

## API

This app uses the Fake Store API: https://fakestoreapi.com/

