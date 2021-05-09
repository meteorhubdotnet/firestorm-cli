# firestorm-cli

Command line tools for Firestorm - a rapid development framework for Meteor with Blaze and Iron Router.

### Installation - Step 1/3: Create Your Meteor Project

```
meteor create --blaze my-project-name-goes-here
```

### Installation - Step 2/3: Install the firestorm meteor package and its dependencies
```
meteor npm install simpl-schema
meteor add meteorhubdotnet:firestorm
```

### Installation - Step 3/3: Install Firestorm CLI and set up your project
```
sudo npm i -g firestorm-cli
sudo npm link
fsinit
```

### Creating pages
```
fspage fileName pageName [pageTitle] [pagePath]
```

Creating components
```
fscomp fileName componentName
```

Creating collections and models
```
fscoll fileName collectionName collectionClassName modelClassName
```