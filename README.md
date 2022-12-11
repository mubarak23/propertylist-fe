# PropertyList  Front end

# Property Listing User Stories

# USER STORY 1
As an Admin,
 i need to login
So i need a signin page
Acceptance Criteria
- Frontend
A login page should be created
Admin should be able to sign in with email and password
The credentials for signing in should be valid

- Backend
A login endpoint should be created -  POST /auth/signin
The endpoint should accept email and password
A database should be created 
Set the role of Admin


# USER STORY 2
	
As an property Own,
 i need to login
So i need a signin page
Acceptance Criteria
- Frontend
A login page should be created
Admin should be able to sign in with email and password
The credentials for signing in should be valid

 - Backend
A login endpoint should be created -  POST /auth/signin
The endpoint should accept email and password
A database should be created 
Set the role of Owner


# USER STORY 3

As an Admin i want to be able to 
Approve new property
Edit Property
Add new property 
Assign propery to an owner
		
	Acceptance Criteria
 - Frontend
A page with a list of property and Approved Action button
A Page to add a new Property
A Page to edit a property
A page with a list of property and Assign to owner Action button 

-  Backend
An approved property endpoint -  PATCH /property/approved/propertyId
The endpoint to add a new property - POST /property/add
the endpoint should accept the following
Payload {userId, NameLocation,Description,Owner(userId),Size,Price,status, type(rent or sale), Amenities (json object), Details(json object)
 }
Endpoint to edit a property - PATCH /property/edit/propertyId
 Endpoint to assign a property to an owner – PATCH /property/assign
			Payload: {propertyId, userId}


# USER STORY 4
As a property owner,
 i need to be able to add a new property
So i need an add property page
Acceptance Criteria

- Frontend
Add Property page should be created
Owner should be able all property Details as describe by the model
The details should be vaildated

- Backend
An endpoint should be created for adding new property -  POST /property/add
The endpoint should accept  {userId, NameLocation,Description,Owner(userId),Size,Price,status, type(rent or sale), Amenities (json object), Details(json object)
 }
Store the property in the db and attach it to the right owner.

# USER STORY 6
As an unregister User,
 i need to be able to view property details
So i need a page that show the full details of a property
Acceptance Criteria
- Frontend
Property Details Page should be created
Fetch the details and render it on the page


- Backend
An endpoint that respond with full property details -  POST /property/${id}
Accept property Id
 }
