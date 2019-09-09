export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCOQ4JtBJzUr1c7v11Cwe7vKtq1UVul1xg',
    authDomain: 'angular-first-test-49240.firebaseapp.com',
    databaseURL: 'https://angular-first-test-49240.firebaseio.com',
    projectId: 'angular-first-test-49240',
    storageBucket: 'angular-first-test-49240.appspot.com',
    messagingSenderId: '1037884302322'
  },
  answer: {
    ALL_ANSWERS: "http://localhost:8080/answers",
    FIND_ANSWER: "http://localhost:8080/answer/:id",
    PUT_ANSWER: "http://localhost:8080/answer/:id",
    POST_ANSWER: "http://localhost:8080/answer/",
    PATCH_ANSWER: "http://localhost:8080/answer/:id",
  }
};
