You have sold your soul by taking a job to create a pop-up ad in React.
The pop-up ad design is the following:

![Pop-up_ad_root_image][pop-up_ad_root_image]

Your job is to set up React in your application and render the pop-up ad to the page!

## Setup
From your challenges directory, run the following

```sh
$ et get pop-up-ad
$ cd pop-up-ad
$ npm install
$ webpack-dev-server
```
This will run a Webpack Dev Server with Babel.
If you go to [localhost:8080](localhost:8080), there will be nothing displayed on the page and there should be no errors in your console.

## Deliverables
1. Enable your application to use React.
2. Use only React to create the HTML elements needed for the ad. You may modify `index.html` to add a `div` element which React will utilize.
3. When you click on the [close icon][fa-times] at the top-right of the ad, you should see a [confirm][mdn-confirm] box with the text "Are you sure?". Choosing "OK" or "Cancel" does not do anything because ads are annoying and never go away no matter how hard you try to get rid of them.
4. For now, submitting the form should [cancel][mdn-preventdefault] the submission event and output "Form Submitted" to the console in your Chrome Developer Tools. One day you will update this event handler to send the email to a server which spams gullible people for eternity, but today is not that day.
5. You are a professional front-end developer, so make sure your ad visually matches the design even though it's horrible.

## Pro Tips
* [Foundation][foundation] and [Font Awesome][font-awesome] are available for you to use via a CDN. Use them.

[fa-times]: http://fortawesome.github.io/Font-Awesome/icon/times/
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[foundation]: http://foundation.zurb.com/
[mdn-confirm]: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
[mdn-preventdefault]: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
[pop-up_ad_root_image]: https://s3.amazonaws.com/horizon-production/images/pop-up_ad_root.png
