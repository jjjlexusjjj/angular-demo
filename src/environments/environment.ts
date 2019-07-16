// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCOQ4JtBJzUr1c7v11Cwe7vKtq1UVul1xg',
    authDomain: 'angular-first-test-49240.firebaseapp.com',
    databaseURL: 'https://angular-first-test-49240.firebaseio.com',
    projectId: 'angular-first-test-49240',
    storageBucket: 'angular-first-test-49240.appspot.com',
    messagingSenderId: '1037884302322'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
