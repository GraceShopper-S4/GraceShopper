# The S-Team Store

This project is an Amazon E-commerce web App clone to demonstrate a project based, user-story driven development cycle. 

## Getting Started

Run npm i to install all dependencies to your local folder. Next, build a database named graceshopper to house the models within our schema. Run node seed.js to seed the database. Run npm start run-dev to build the webpack and have a local server version of the project on localhost:8080.

### Prerequisites

As stated above, running npm install (or i), should download all dependencies required to run the local version of this app along with creating a database to hold the database models established within the database folder.

### Installing

Clone the most recent master branch from https://github.com/GraceShopper-S4/GraceShopper .

Git pull master to ensure your branch is up to date.

Using a CLI, perform npm i.

In a mySQL program (PSQL was used in development), createdb graceshopper.

Run node seed.js to seed the database.

Call npm run start-dev to build the webpack bundle.

Go to localhost:8080 to see the current app.

Once on localhost:8080, you can create an account or log in via google. From this point you can view all products in the database, viewing single products, filtering products by their genre or add items to cart for purchasing.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Ready to go world wide? Here's a guide to deployment!

Prep

Set up the Heroku command line tools
heroku login
Add a git remote for heroku:
If you're creating a new app...

heroku create or heroku create your-app-name if you have a name in mind.
heroku addons:create heroku-postgresql:hobby-dev to add ("provision") a postgres database to your heroku dyno
If you already have a Heroku app...

heroku git:remote your-app-name You'll need to be a collaborator on the app.
When you're ready to deploy

Make sure that all your work is fully committed and pushed to your master branch on Github.
If you currently have an existing branch called "deploy", delete it now (git branch -d deploy). We're going to use a dummy branch with the name "deploy" (see below), so if you have one lying around, the script below will error
npm run deploy - this will cause the following commands to happen in order:
git checkout -b deploy: checks out a new branch called "deploy". Note that the name "deploy" here isn't magical, but it needs to match the name of the branch we specify when we push to our heroku remote.
webpack -p: webpack will run in "production mode"
git add -f public/bundle.js public/bundle.js.map: "force" add the otherwise gitignored build files
git commit --allow-empty -m 'Deploying': create a commit, even if nothing changed
git push --force heroku deploy:master: push your local "deploy" branch to the "master" branch on heroku
git checkout master: return to your master branch
git branch -D deploy: remove the deploy branch
Now, you should be deployed!


## Acknowledgments
Built by: 

Shmuel Lotman
Suyash Chopra
Stephen Nguyen
Sky Mason

With help from:
John McDonald
Erik Shuttlesworth