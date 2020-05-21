<h1 align="center">
  <img width="128" src="https://raw.githubusercontent.com/andreashuber69/async-css-angular-example/master/doc/icon.svg?sanitize=true">
</h1>
<h1 align="center">Async CSS Angular Example</h1>

This repo was created as follows (check git history for details):

1. On github.com, create a new repo named `async-css-angular-example`.
2. Clone the repo locally.
3. Add this README.md file plus supporting files.
4. Fix icon.
5. Start a terminal and `cd` to the directory above the local copy of this repo.
6. Execute the following steps (see <https://cli.angular.io>):
   - `sudo npm install -g @angular/cli` (version 9.1.6 at the time of this writing).
   - `ng new async-css-angular-example`, accepting all defaults.
7. `cd async-css-angular-example`
8. `npm start`
9. Start your browser and navigate to <http://localhost:4200/> to ensure everything works as expected.
10. In *angular.json*, add `"extractCss": true`, so that styles are loaded from css files rather than embedded.
