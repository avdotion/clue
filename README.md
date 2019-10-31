This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Clue Password Manager

The project helps to solve a fundamental problem with storing multiple different passwords for every service you interact with.

![Clue Screenshot as Standalone Application](https://raw.githubusercontent.com/avdotion/clue/master/screenshot.png)

Major rules in this project:
* Use only modern and _not necessary wide-spread_ practices of building a web application
* Use branches for developing new features (`feature/${name}`) and fixes (`fix/${name}`) and create a pull-request to merge new code into `master`

## TODO

* [ ] Fix client error with `active` key
* [ ] Grow typing coverage
* [ ] Obfuscate entering Master Password during typing and show not only circle characters (nevertheless hash real non-obfuscate Master Password value)
* [ ] Envolve better support for mobile screens
* [ ] Envolve transitions and speed up all animations (make slider 60 fps gliding)
* [ ] Envolve accessibility attributes and analyze for the contrast of current colour schemes
* [ ] Restrict to left the last `/` character in Domain Name field
* [ ] Make async helper for typing Domain Name
* [ ] Bring eslint linting
* [ ] Refactor `inputs.ts` (decompose)
* [ ] Enforce neccesity of eslint and typing checks before commiting
* [ ] Make standalone app non-resizible
* [ ] Add Safari favicon
* [ ] Update standalone app icon to look like a typical macOS application

## Building the application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
