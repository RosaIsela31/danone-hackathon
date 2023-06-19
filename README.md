# Danone Hackathon Eco Challenge

The objective of this Danone's landing page is to promote a range of organic and healthier products. 
This project contain the follow views: 

• Home page: view showing an introduction to the application.
• Product page: catalogue listing Danone's eco range products, if you click a card a modal will open to show more details about the product.
• Daily calorie settings page: view where users can set their maximum daily calorie limit. This
view include a form where the user can enter the amount of calories they wish to consume as a maximum in a day.

## Basic Structure

<img width="643" alt="image" src="https://github.com/RosaIsela31/danone-hackathon/assets/50505959/3f39cd84-8a44-4bfb-bf34-6d7eadb0359b">

- Contentful as content managment system
- GraphQL to query request
- Apollo client for the client
- React as JS framework

## Deploy 
https://danone-hackathon-psi.vercel.app/

## Documentation 

### Steps to install locally
1. git clone of the repo
2. npm install
3. npm run start
4. go to `https://localhost:3000` to see the app

### Stack 
- Contentful
- GraphQL
- Apollo client
- React
- CSS

### Usage
- `https://danone-hackathon-psi.vercel.app/` view is home, that contain an introduction 
- `https://danone-hackathon-psi.vercel.app/products` view contain the products in cards, if you click a card a modal will open to show you more details about it.
- `https://danone-hackathon-psi.vercel.app/diary` view contain a form to set your maxim calories per day, also you can add the calories in breakfast, lunch, dinner and snack and you're going to see the calories remained 

### Decision Maked | Steps I took in the process

1. Understand the objective of the challenge and break down the important points.
2. Since I have no experience with contentful and connecting to graphql will be the first thing I will do, in case I need technical help.
3. Stack to use, headless: contentful, graphql, apollo client for the app client, react because I have experience with this framework. 
4. I started with the design of my content model, I was analyzing the figma views to see the necessary fields.
5. I used Apollo client to connect my App with contentfull
6. I used graphql for get the data
7. Once I had the data in the FE I started the layout
8. I used react-router to create the routing of my app.
9. I decided to make it responsive, the homepage has areas of opportunity.
