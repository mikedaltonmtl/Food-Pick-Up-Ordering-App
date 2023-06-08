The Donut Company
=========

Test the app here: https://donut-company.onrender.com/.

It might be a little slow to display, please be patient!

This is a static, deployment version of the midterm Web Development Bootcamp project we made at Lighthouse Labs.
The development account at Twilio which we used for SMS communications has expired, so I refactored the app just to 
show the store page. You can add and remove items to the cart for checkout, but the order cannot be placed.

The original app allows a restaurant to communicate over SMS with a client that has placed an order on the restaurant's store page. The restaurant owner is also able to update the order status page to let the customer know when the order is ready for pickup, also using SMS.

## Final Product

### Store Page
!["Screenshot of Store Page"](https://github.com/Karamvir-Bains/Food-Pick-Up-Ordering-App/blob/master/docs/store-front.png)



## Getting Started

1. Clone this repository https://github.com/mikedaltonmtl/Food-Pick-Up-Ordering-App
2. Install dependencies: `npm i`
3. Fix to binaries for sass: `npm rebuild node-sass`
4. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
5. Visit `http://localhost:8080/` and enjoy!


## Original Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Chalk
- Cookie-Parser
- Cookie-Session
- Dotenv
- Ejs
- Express
- Morgan
- Sass
- Twilio


## Documentation

- `/`: Renders the store page HTML.
- `/status`: Renders the status page HTML.
- `/login`: Logs the user in and sets cookie session data.
- `/checkout`: Handles adding items to checkout.
- `/remove-cookie-item`: Handles removing items from checkout.
- `/order-now-send`: Sends an order now request to the server, and creates a Twilio sms to the restaurant.
- `/sms-response`: Post from Twilio sms that handles restaurant sms and server/client response.
- `/api/users`: Returns users table.
- `/api/menu`: Returns restaurant menus.
- `/api/status`: Returns the current status of an order.
