![UI5 logo](/docs/images/UI5_logo_wide.png)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/ui5-webcomponents-sample-angular)](https://api.reuse.software/info/github.com/SAP-samples/ui5-webcomponents-sample-angular)

# UI5 Web Components Angular Sample Application

[Angular]( https://angular.io/) sample application to demonstrate the usage of the [UI5 Web Components]( https://github.com/SAP/ui5-webcomponents). It shows how to bind properties, to subscribe to events, using nested components and the bootstrapped Angular build.
 
This project was bootstrapped with [Angular CLI](https://cli.angular.io/).
 
## Prerequisites
- [Node.js](https://nodejs.org/) (**version 8.5 or higher** ⚠️)

## Getting started
1. [Clone this repository](https://help.github.com/articles/cloning-a-repository/) using the [GitHub Command line tool](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and navigate into the downloaded directory.
    ```sh
    git clone https://github.com/SAP-samples/ui5-webcomponents-sample-angular.git
    cd ui5-webcomponents-sample-angular
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application. (The running application can be found here:  http://localhost:4200)
    ```sh
    npm start
    ```

## Browser support

Currently Chrome, Safari, Edge and Firefox support Web Components natively.

## Noteworthy
 
### Consume UI5 Web Components
Import the desired component(s) in your app to define the UI5 Web Component.
 
For example, to use ```ui5-button``` you need to import it:
 
```js
import "@ui5/webcomponents/dist/Button"; // loads ui5-button
```
 
Then, you can use the custom element in an HTML page:
 
```html
<ui5-button>Hello world!</ui5-button>
```
 
### Configure events
A custom configuration for UI5 Web Components should be provided in the html:
 
```html
<script data-id="sap-ui-config" type="application/json">
  {
    "xx-wc-no-conflict": {
      "events": "press"
    }
  }
</script>
```
 
Than press event for ```ui5-button```, ```ui5-togglebutton```, ```ui5-icon``` and ```ui5-link``` should be attached with ```(ui5-click)``` instead of ```(click)```
 
### Configure Angular Build
When UI5 Web Components are used they include all of their translation files and CLDR data files in the application bundle.
In order to decrease the bundle size of the application a custom Webpack configuration should be provided. 

You can follow the steps described by [this article](https://github.com/manfredsteyer/ngx-build-plus#getting-started).
 
The content of the ```webpack.partial.js``` file should be:
 
**webpack.partial.js**
```js
module.exports = {
    module: {
      rules: [
        {
          test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
          type: 'javascript/auto'
        }
      ]
    }
};
```

### Where is the npm package?
- [UI5 Web Components](https://www.npmjs.com/package/@ui5/webcomponents)

## Limitations
No limitations known.

## Known Issues
No major bugs known.

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).

## Contribute to UI5 Web Components
Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents/blob/master/CONTRIBUTING.md).

