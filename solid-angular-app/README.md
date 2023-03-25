# Angular 13+ SOLID Principles Example

This Angular 13+ application demonstrates the implementation of the SOLID design principles. The project includes components showcasing each SOLID principle in practice and provides comprehensive test cases for each component.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Components and SOLID Principles](#components-and-solid-principles)
- [Usage](#usage)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you start, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (v14.x.x or higher)
- [Angular CLI](https://cli.angular.io/) (v13.x.x or higher)

You can install the Angular CLI using npm:

```bash
npm install -g @angular/cli
```

## Installation

Follow these steps to set up and run the project:

Clone the repository:

```bash
git clone git@github.com:PureCodeSchool/Modern-Angular-Design-Patterns.git
cd Modern-Angular-Design-Patterns/solid-angular-app
```

### Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

The application will be available at http://localhost:4200/.

### Components and S.O.L.I.D. Principles

The application contains several components that demonstrate the SOLID design principles in practice:

- ShapeAreaComponent: Single Responsibility Principle (SRP)
- AnimalActionsComponent: Open/Closed Principle (OCP)
- UserRegistrationComponent: Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP)

## Usage

Use the application by interacting with the components in the user interface. Each component demonstrates one or more SOLID design principles.

## Running the Tests

This project includes comprehensive test cases for each SOLID design principle. To run the tests, execute the following command:

```bash
ng test
```

This will launch the Karma test runner and execute the test cases.

## Contributing

We welcome contributions to this project. To contribute, please follow these steps:

Fork the repository.
Create a new branch with a descriptive name.
Make your changes and commit them with clear and concise commit messages.
Create a pull request describing the changes you made and how they improve the project.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). See the LICENSE file for more details.

Copy the text above and save it as `README.md` in your project's root directory. Make sure to replace the placeholders (e.g., `[your-username]`, `[your-project-name]`) with the appropriate information.
