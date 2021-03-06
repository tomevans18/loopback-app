# My Application

The project is generated by [LoopBack](http://loopback.io).

## Coursework Submission/Handover Notes

### Build a basic API using Loopback
Set-up using the ```lb``` command to create basic API project.
Then added an end point via the ```lb model``` command.

### Create a Swagger definition
Swagger created and saved to ```definitions/api.yaml```.
This was saved there to match the example project.

### Add a RESTful endpoint to your API
Completed previously via the ```lb model``` command.

### Build a model
Movie model built created via ```lb model``` command.

### Build a controller
Service added to provide circuit breaker and middleware data in response (added via model).

### Build a view
Basic listing view built within the client folder.
I didn't go too much into this as there was no view in the example repo and for this reason I didn't want to waste too much time building something that I can evidently already do.

### Add a test runner
Installed mocha, nyc, mocha, chai and sinon.
Configurations and scripts added to package.json.

### Test your model
100% coverage complete

### Test your view
No test coverage written as there was none for the view in the example repo.

### Test your controller
100% coverage complete

### Add a piece of middleware to extend your request object
Middleware developed to count the number of time the API is called.
Basic and no real value to the output but shows the concept of middleware.

### Write tests for your middleware
100% coverage complete

### Make a downstream request to a third party
MongoDB is called as part of the application to get the data for the movie listing.

### Test your service using stubbing
Stubbing completed through the use of casual module to provide dynamic data.
Included loop count to change the amount of movies in the future if needed.

### Spin up your own mock server
Setup using a method through express.
It allows you to dynamically add more mocks as and when required.

### Test your API endpoint using mock data
Added tests using supertest to confirm response

### Add a circuit breaker
A circuit breaker was added with default values and the ability to overwrite.
This made the code more DRY.

### Add request validation
Validation complete through swagger tools, comparing the swagger yaml against the spec and then confirming through the middleware.

### Add security considerations
It was considered if all APIs needed to be exposed.
As this was a very basic application there were none that really needed to be hidden.
The Loopback Explorer has been disabled in production via the ```component-config.production.json``` file.
global CORS handler has been configured in server/middleware.json.
The Helmet npm package was also used for security best practices.
If cookies were used there would need to be additional effort such as ensuring secure signed and httpOnly cookies were used.
