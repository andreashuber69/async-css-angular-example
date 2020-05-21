<h1 align="center">
  <img width="128" src="https://raw.githubusercontent.com/andreashuber69/async-css-angular-example/master/doc/icon.svg?sanitize=true">
</h1>
<h1 align="center">Async CSS Angular Example</h1>

This repo demonstrates from scratch how to
[customize your angular build with webpack](https://developer.okta.com/blog/2019/12/09/angular-webpack) such that the
[Async CSS Plugin](https://github.com/andreashuber69/async-css-plugin) can then be added. The steps taken are listed
below, please see the [git history](https://github.com/andreashuber69/async-css-angular-example/commits/master) for
details.

1. On github.com, create a new repo named `async-css-angular-example`.
2. Clone the repo locally.
3. Add this README.md file plus supporting files.
4. Start a terminal and `cd` to the directory above the local copy of this repo.
5. Execute the following steps (see <https://cli.angular.io>):
   - `sudo npm install -g @angular/cli` (version 9.1.6 at the time of this writing).
   - `ng new async-css-angular-example`, accepting all defaults.
6. `cd async-css-angular-example`
7. `npm start`
8. Start your browser and navigate to <http://localhost:4200/> to ensure everything works as expected.
9. Start your editor and open *./angular.json*. Under `architect.build.options` add `"extractCss": true` and save.
   Styles are now loaded from css files rather than embedded.
10. Switch back to the terminal, stop the server with CTRL-C and execute
    `npm install @angular-builders/custom-webpack --save-dev`.
11. Back in the editor, under `architect.build` set `"builder": "@angular-builders/custom-webpack:browser"`.
12. Under `architect.build.options` add `"customWebpackConfig": { "path": "./custom-webpack.config.js" }`.
13. Under `architect.serve` set `"builder": "@angular-builders/custom-webpack:dev-server"` and save.
14. Create a new file *./custom-webpack.config.js* with the following contents:

    ``` js
    module.exports = {
      plugins: [
      ]
    };
    ```

15. Back in the terminal, execute `npm start`, switch to your browser and reload. Everything should still work as
    before.
