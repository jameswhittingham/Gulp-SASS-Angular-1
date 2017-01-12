Gulp SASS Angular 1 Boilerplate
=====================


Installation instructions
===============================

	1) Installing node
		a) Install Node from http://nodejs.org/
		b) Open Command Line and navigate to your projects directory
		c) Run the command "npm install" to install node at the projects level

	2) Installing gulp globally
		a) Open Command Line and run the command "npm install -g gulp"

	3) Other installations that may be required
		a) Compass


Gulp Tasks
===============================

	1) Run the following commands from Command Line at your PROJECTs level
		a) "gulp" - will run the following tasks
			- Compile the .scss files into 'app/styles/main.css' file
			- Runs a watcher, to watch for changes in the .html, .js and .scss files

		b) "gulp clean"
			- Removes the 'build' directory
			- Removes compiled 'app/styles/main.css' file

		c) "gulp favicons"
			- Creates 'app/assets/images/favicons' folder
			- Generates favicons and apple touch icons into the above folder
			- Generates index.html file within the above folder with html tags to use

		d) "gulp build" - will run the above 'gulp clean' task as well as the following
			- Compile and minifies the .scss files into a 'app/styles/main.css' file
			- Concatinates .js and .css files specified in the .html file
			- Runs a local server 
				- refer to Terminal/Command line for the url and port
				- usually can be viewed at a location similar to 'http://localhost:3000'
			- Copy the required files into a build folder for deployment