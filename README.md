# speak_labelbox
API Backend for the speak labelbox project.

# How to run the project?
 
* pull the project
* cd to the nasa folder
* run npm install to install all the dependencies
* start the project using: 
    * **on macOS or Linux** : DEBUG=nasa:* npm run devstart
    * **on Windows PowerShell**: $ENV:DEBUG = "nasa:*"; npm start

Note: There is no need to install any Database locally as I am using a Mongo Atlas instance, the instance *uri* and *password* are already set due to the fact that this will be used just as an assignment, will delete the instance after few days as it is bad practice to keep secrets on the repo they should always be in an ENV file that does not get pushed to the repo.



