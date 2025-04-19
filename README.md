# API Automation Tests with Mocha, Chai and Supertest

This project contains a collection of API tests using the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API.  
It demonstrates how to automate REST API endpoints using **Mocha** as the test runner, **Chai** for assertions, and **Supertest** for HTTP requests.

## 📁 Project Structure
api-automation-tests/ 
│ ├── test/ │
  └── apiTests.js # Main test file │ 
├── package.json # Project metadata and dependencies 
├── .gitignore 
└── README.md # You're here :)

## 🛠️ Technologies Used

- [Mocha](https://mochajs.org/) – Test framework
- [Chai](https://www.chaijs.com/) – Assertion library
- [Supertest](https://github.com/visionmedia/supertest) – HTTP request agent
- Node.js (ESM modules)

## 🔍 What’s Being Tested

The test suite includes the following scenarios:

### ✅ Users Endpoint (`/users`)
- Get a list of users (`GET`)
- Create a new user (`POST`)
- Create a new post (`POST`)
- Delete a user (`DELETE`)

### 📚 Learnings
This project helped me practice:

- Structuring API automation tests
- Understanding HTTP methods and responses
- Writing assertions for RESTful responses
- Using JavaScript with async/await in tests

## 📬 Contacto

- LinkedIn: [Paola Montaño Fernandez]([https://github.com/tu-usuario](https://www.linkedin.com/in/paola-monta%C3%B1o-fernandez-74b534235/))
- GitHub: [@paola-montanof]((https://github.com/paola-montanof))

## ▶️ How to Run the Tests

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/api-automation-tests.git
cd api-automation-tests
