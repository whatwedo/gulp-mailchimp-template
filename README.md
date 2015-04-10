# Gulp Mailchimp Template 

This is an easy to go gulp boilerplate for developing and building HTML templates for Mailchimp. It takes your source code and does following things for you:

* Copies your stylesheets and into the HTML template
* Inlines the styles to your HTML element's style attributes
* Copy your assets
* ZIPs your template so it's ready for uploading to Mailchimp.

In addition there is a watcher task which helps you the preview your changes during development.

## Quick start

- Add Mailchimp API key to ```config.json```
- Run ```gulp```

## How to use

### Requirements

* Needs a active internet connection to work *since it sends code to the Mailchimp API to inline*.

### Setup

#### Installation

* Download or clone the Gulp Mailchimp Template Repository and add it to your existing project or start one from scratch.
* ```npm install``` the needed packages.

#### Configuration

First of all you need a Mailchimp API key. This is needed to send your HTML template to the Mailchimp API which will then inline your styles to the HTML elements.

* Copy and rename the ```config-example.json```to ```config.json```.
* Add your Mailchimp API Key to the config.json, e.g.
  ```
  {
    "MAILCHIMP_API_KEY": "6885c9d436abfd75ffsdf43e13ff-us8"
  }
  ```
  
 #### Use
 
 * Develop your Mailchimp Template in the ```src``` folder
 * Run ```gulp```

 Watch your ```dist``` folder. What you get is one HTML file with inlined CSS rules and all your assets. In addition you get a ready to use ```template.zip``` you can upload to Mailchimp.
