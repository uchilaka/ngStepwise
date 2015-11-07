# This Is ngStepwise
This plugin is the designed to:
- Provide an easy to use wizard progress bar i.e. the "Here's where you are in this process" and "here's how much more stuff you need to do" type views on websites 
- Requires AngularJS (it's an AngularJS directive)
- Requires Bootstrap for the tooltip functionality 

## Limitations
If you have more than 6 or so steps in your workflow, you probably need to do something differently on your UI than trying to cram all of them into a slider bar. 

This tool is still super new. As I build on it, I'll be looking to add more functionality and handle more than a few steps

## Preview

Here's what a stepwise progress bar looks like:

![Markdown Image](https://storage.googleapis.com/com-larcity-static/shadowbox/ng-stepwise-example.png "Here's what an implementation looks like!")

## Installation

Install via Bower: 

````javascript
bower install ng-stepwise
````

Your required components are:

- ng-stepwise.css (stylesheet for directive)
- ng-stepwise.js (directive code)

include these in your project as follows:

````html
<!-- CSS Stylesheet to be included within HEAD tag -->
<link rel="stylesheet" href="{project_root}/bower_components/ng-stepwise/ng-stepwise.css" />
<!-- JS script to be included before the close of your BODY tag -->
<script type="text/javascript" src="{project_root}/bower_components/ng-stepwise/ng-stepwise.js"></script>
````

## Demo

You can view a demo of working code here: [http://larcity.com/repo/angularjs/stepwise/example/](http://larcity.com/repo/angularjs/stepwise/example/ "Here's an example of ng-stepwise at work")