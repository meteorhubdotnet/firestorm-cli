// Import the filesystem module
var fs = require('fs');

// fsinit: CLI command to set up the files in a new project
var fsinit = function() {
	

	// Let people know what's going on... 
	console.log('=================================');
	console.log('Setting up Firestorm project.....');
	
	// ==============================================
	// START: Create Directories
	// ==============================================

	// Init dir var
	var d;

	d = 'pages';
	fs.mkdirSync(d);
		
	d = 'components';
	fs.mkdirSync(d);
	
	d = 'router';
	fs.mkdirSync(d);
	
	d = 'lib';
	fs.mkdirSync(d);
	
	d = 'client/layouts';
	fs.mkdirSync(d);
	
	d = 'pages/page-home';
	fs.mkdirSync(d);

	d = 'pages/page-home/client';
	fs.mkdirSync(d);
	
	d = 'pages/page-home/server';
	fs.mkdirSync(d);	
	
	d = 'pages/page-2';
	fs.mkdirSync(d);
	
	d = 'pages/page-2/client';
	fs.mkdirSync(d);
	
	d = 'pages/page-2/server';
	fs.mkdirSync(d);
	
	console.log('Directories created...');
	
	// ==============================================
	// END: Create Directories
	// ==============================================

	// Init variables to copy template files
	var src;
	var dest;

	// ==============================================
	// START: Copy templates
	// ==============================================

	src = 'page-template/page-home.html.tmpl';
	dest = 'pages/page-home/client/page-home.html';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'pageHome');
	updatedContent = updatedContent.replace(/FILE_NAME_GOES_HERE/g, 'page-home');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.css.tmpl';
	dest = 'pages/page-home/client/page-home.css';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/FILE_NAME_GOES_HERE/g, 'page-home');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.js.tmpl';
	dest = 'pages/page-home/page-home-route.js';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'pageHome');
	updatedContent = updatedContent.replace(/PAGE_PATH_GOES_HERE/g, '/');
	updatedContent = updatedContent.replace(/PAGE_TITLE_GOES_HERE/g, 'Homepage');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page-publications.js.tmpl';
	dest = 'pages/page-home/server/page-home-publications.js';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'pageHome');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page-2.html.tmpl';
	dest = 'pages/page-2/client/page-2.html';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'page2');
	updatedContent = updatedContent.replace(/FILE_NAME_GOES_HERE/g, 'page-2');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.css.tmpl';
	dest = 'pages/page-2/client/page-2.css';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/FILE_NAME_GOES_HERE/g, 'page-2');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.js.tmpl';
	dest = 'pages/page-2/page-2-route.js';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'page2');
	updatedContent = updatedContent.replace(/PAGE_PATH_GOES_HERE/g, '/page/2');
	updatedContent = updatedContent.replace(/PAGE_TITLE_GOES_HERE/g, 'Page 2');
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page-publications.js.tmpl';
	dest = 'pages/page-2/server/page-2-publications.js';
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, 'page2');
	fs.writeFileSync(dest, updatedContent);


	src = 'init-template/head.html.tmpl';
	dest = 'client/head.html';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	src = 'init-template/layout.html.tmpl';
	dest = 'client/layouts/layout.html';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	src = 'init-template/layout.css.tmpl';
	dest = 'client/layouts/layout.css';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	src = 'init-template/layout.js.tmpl';
	dest = 'client/layouts/layout.js';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	src = 'init-template/router-options.js.tmpl';
	dest = 'router/router-options.js';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	src = 'init-template/router-security.js.tmpl';
	dest = 'router/router-security.js';
	fs.copyFileSync(`${__dirname}/${src}`, dest, fs.constants.COPYFILE_EXCL);

	// ==============================================
	// END: Copy templates
	// ==============================================


	// create empty files
	fs.open('client/global.css', 'w', (error, file) => { if (error) { return console.log(error); } });
	fs.open('client/global.js', 'w', (error, file) => { if (error) { return console.log(error); } });

	// remove default Meteor files on the client
	fs.unlinkSync('client/main.html');
	fs.unlinkSync('client/main.js');
	fs.unlinkSync('client/main.css');


	// Let people know what's going on...
	console.log('File templates copied...');
	console.log('Your project is ready! Yay!!!')
	console.log('Have fun coding!!!');
	console.log('=================================');
		
};


var fspage = function() {

	// Let people know what's going on...
	console.log('=================================');
	console.log('Creating new page .....');

	// ==============================================
	// START: Check arguments
	// ==============================================

	var myArgs = process.argv.slice(2);
	if (!myArgs[0] || !myArgs[1]) {
		console.log('Missing arguments. Expected syntax:');
		console.log('fspage fileName pageName [pageTitle] [pagePath]');
		return;
	}
	var fileName = myArgs[0];
	var componentName = myArgs[1];
	var pageTitle = myArgs[2] ? myArgs[2] : 'PAGE_TITLE_GOES_HERE';
	var pagePath = myArgs[3] ? myArgs[3] : '/page/path/goes/here';

	// ==============================================
	// END: Check arguments
	// ==============================================

	// ==============================================
	// START: Create Directories
	// ==============================================

	// Init dir var
	var d;

	d = `pages/${fileName}`;
	fs.mkdirSync(d);

	d = `pages/${fileName}/client`;
	fs.mkdirSync(d);

	d = `pages/${fileName}/server`;
	fs.mkdirSync(d);

	// ==============================================
	// END: Create Directories
	// ==============================================

	// ==============================================
	// START: Copy templates
	// ==============================================

	var src;
	var dest;

	src = 'page-template/page.html.tmpl';
	dest = `pages/${fileName}/client/${fileName}.html`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	updatedContent = updatedContent.replace(/FILE_NAME_GOES_HERE/g, fileName);
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.js.tmpl';
	dest = `pages/${fileName}/${fileName}.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	updatedContent = updatedContent.replace(/PAGE_PATH_GOES_HERE/g, pagePath);
	updatedContent = updatedContent.replace(/PAGE_TITLE_GOES_HERE/g, pageTitle);
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page.css.tmpl';
	dest = `pages/${fileName}/client/${fileName}.css`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/FILE_NAME_GOES_HERE/g, fileName);
	fs.writeFileSync(dest, updatedContent);

	src = 'page-template/page-publications.js.tmpl';
	dest = `pages/${fileName}/server/${fileName}-publications.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	fs.writeFileSync(dest, updatedContent);

	// ==============================================
	// END: Copy templates
	// ==============================================

	// Let people know what's going on...
	console.log('File templates copied...');
	console.log('Done creating new page!');
	console.log('=================================');

};

var fscomp = function() {

	// Let people know what's going on...
	console.log('=================================');
	console.log('Creating new component .....');

	// ==============================================
	// START: Check arguments
	// ==============================================

	var myArgs = process.argv.slice(2);
	if (!myArgs[0] || !myArgs[1]) {
		console.log('Missing arguments. Expected syntax:');
		console.log('fscomp fileName componentName');
		return;
	}
	var fileName = myArgs[0];
	var componentName = myArgs[1];

	// ==============================================
	// END: Check arguments
	// ==============================================

	// ==============================================
	// START: Create Directories
	// ==============================================

	// Init dir var
	var d;

	d = `components/${fileName}`;
	fs.mkdirSync(d);

	d = `components/${fileName}/client`;
	fs.mkdirSync(d);

	d = `components/${fileName}/server`;
	fs.mkdirSync(d);

	// ==============================================
	// END: Create Directories
	// ==============================================

	// ==============================================
	// START: Copy templates
	// ==============================================

	var src;
	var dest;

	src = 'component-template/component.html.tmpl';
	dest = `components/${fileName}/client/${fileName}.html`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	updatedContent = updatedContent.replace(/FILE_NAME_GOES_HERE/g, fileName);
	fs.writeFileSync(dest, updatedContent);

	src = 'component-template/component.js.tmpl';
	dest = `components/${fileName}/client/${fileName}.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	fs.writeFileSync(dest, updatedContent);

	src = 'component-template/component.css.tmpl';
	dest = `components/${fileName}/client/${fileName}.css`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/FILE_NAME_GOES_HERE/g, fileName);
	fs.writeFileSync(dest, updatedContent);

	src = 'component-template/component-publications.js.tmpl';
	dest = `components/${fileName}/server/${fileName}-publications.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	fs.writeFileSync(dest, updatedContent);

	src = 'component-template/component-methods.js.tmpl';
	dest = `components/${fileName}/server/${fileName}-methods.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/TEMPLATE_NAME_GOES_HERE/g, componentName);
	fs.writeFileSync(dest, updatedContent);

	// ==============================================
	// END: Copy templates
	// ==============================================

	// Let people know what's going on...
	console.log('File templates copied...');
	console.log('Done creating new component!');
	console.log('=================================');

};

var fscoll = function() {

	// Let people know what's going on...
	console.log('=================================');
	console.log('Creating new collection and model .....');

	// ==============================================
	// START: Check arguments
	// ==============================================

	var myArgs = process.argv.slice(2);
	if (!myArgs[0] || !myArgs[1] || !myArgs[2] || !myArgs[3]) {
		console.log('Missing arguments. Expected syntax:');
		console.log('fscoll fileName collectionName collectionClassName modelClassName');
		return;
	}
	var fileName = myArgs[0];
	var collectionName = myArgs[1];
	var collectionClassName = myArgs[2];
	var modelClassName = myArgs[3];

	// ==============================================
	// END: Check arguments
	// ==============================================

	// ==============================================
	// START: Create Directories
	// ==============================================

	// Init dir var
	var d;

	d = `lib/${fileName}`;
	fs.mkdirSync(d);

	// ==============================================
	// END: Create Directories
	// ==============================================

	// ==============================================
	// START: Copy templates
	// ==============================================

	var src;
	var dest;

	src = 'coll-template/collection.js.tmpl';
	dest = `lib/${fileName}/${fileName}-collection.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/COLLECTION_NAME_GOES_HERE/g, collectionName);
	updatedContent = updatedContent.replace(/COLLECTION_CLASS_NAME_GOES_HERE/g, collectionClassName);
	updatedContent = updatedContent.replace(/MODEL_CLASS_NAME_GOES_HERE/g, modelClassName);
	fs.writeFileSync(dest, updatedContent);

	src = 'coll-template/model.js.tmpl';
	dest = `lib/${fileName}/${fileName}-model.js`;
	var templateContent = fs.readFileSync(`${__dirname}/${src}`);
	var updatedContent = templateContent.toString().replace(/COLLECTION_NAME_GOES_HERE/g, collectionName);
	updatedContent = updatedContent.replace(/COLLECTION_CLASS_NAME_GOES_HERE/g, collectionClassName);
	updatedContent = updatedContent.replace(/MODEL_CLASS_NAME_GOES_HERE/g, modelClassName);
	fs.writeFileSync(dest, updatedContent);

	// ==============================================
	// END: Copy templates
	// ==============================================

	// Let people know what's going on...
	console.log('File templates copied...');
	console.log('Done creating new collection and model!');
	console.log('=================================');

};

exports.fsinit = fsinit;
exports.fspage = fspage;
exports.fscomp = fscomp;
exports.fscoll = fscoll;