# What's Going On with PitHub?

> Hey ya'll. This md file was created to give you guys an 
> overview and a heads up for PitHub's current state, 
> ongoing development, potential future direction. 
> So we are just trying to keep both the Capstone team and 
> the Software Engineering team  (and also any future scrum
> teams) up to daate regarding the progress and plans for PitHub.

**Last Updated:** November 15, 2026 - Kevin


## 1. Project Overview
### What is PitHub?
PitHub is a Lewis University based document hosting and sharing web application, allowing users to sign in using their Lewis University email ddresses, create classes and upload documents within said classes.
PitHub uses React for the Frontend and Firebase services for the Backend.

### Original Vision
Allow both Lewis unversity students and faculty member to use PitHub for free. 

### Current Development Stage
Limit user base to Lewis faculty members only to mitigate storage cost and potential abuse/misuse of PitHub by students. 

## 2. Current State of PitHub

### Existing Features/Functionalities:
- Lewis University Exclusive Sign In
- **Dashboard**:
  - 'Recent Uploads' Section
    - View Count, Uploader, Class Information
    - Open Document Previews
    - Set Favorite/Star Documents
    - Report Documents
  - 'Your Classes' Section
- **Classes** Section: 
  - Create/Delete Classes
  - Private/Public view
  - Custom Class Thumbnails (color/image)
  - Update Class Information
  - Upload/Delete Documents
  - Filter Documents
  - Edit Document Descriptions
- **Playlist** Section:
  - Create/Delete Playlists
  - Custom Playlist Thumbnails (color/image)
  - Invite Users via Email
  - Change Playlist Member Permissions
  - Remove Member from Playlists
  - Upload/Delete Documents
  - Filter Documents
- **Uploads** Section:
  - View All User Uploads
  - Classless Uploads
- **Favorites** Section:
  - View Favorites (Profile, Classes, Documents)
- **Settings** Page:
  - View Account Information
  - View and Manage Profile Information
  - View and Manage PitHub Appearance and Preferences
  - Set Up for Subscription Pages
- **Search Bar**:
  - Search for Users, Classes, Playlists, Documents
- **Profile Page**:
  - View and Manage Profile Information
  - Custom Profile Page Background (color/image)
  - Private/Public Profile Page View
  - View Recent Uploads
  - View Classes
- **Information Pages**:
  - About Us Page
  - Terms of Use Page
  - Contact Us Page
    - List of PitHub Developers
    - FAQ Section
    - Direct Support Message
- **Admin Page**:
  - Dashboard
  - Users
  - Classes
  - Files
  - Reports 
  - Audit Logs
  - Feedback

### Tech Stack
- Frontend - React.js
- Backend - Firebase Services:
  - Firebase Authentication: Handles Lewis University Email/Admin Email Sign Ins
  - Firestore: Handles NoSQL Data
  - Storage: Handles Document Uploads
  - Hosting: Handles Test Website
  - App Hosting: Handles Production Website
- Security - GitHub CodeQL: Checks for Vulnerabilities during CI/CD


## 3. Current Development Priorities

### Storage and Infrastructure
1. Develop Database Storage Backup
2. Develop Separate Test Website That Uses Separate Database Storage

### User Experience and Features ([Product Backlog](/backlogs/product-backlog.md))
1. Improve Buttons
2. Uniform VideoList, ClassList, PlaylistCard
3. Notification System
> See Product Backlog

### Administration and Maintenance [Product Backlog](/backlogs/product-backlog.md)
1. Fix Account Suspension Feature
2. Fix Admin Links to Profile/Classes
3. Fix Private Video Visibility 
> See Product Backlog

### Product Outreach
1. Talk to Dr. Klump
2. Email/reach out to Comp Sci Professors
3. ECaMS Event (December 4)
4. Possible GitHub Pages for PitHub

## 4. Future Direction and Long-Term Plans

### Open-Source Possibility
Discussed by Bear Down and Dr. Pogue, if PitHub were to ever scale to a university-wide product used by different Lewis University departments,  PitHub would need to be maintained and managed by both current and former PitHub developers. One possibility discussed was making PitHub an open-source project led by Lewis University alumni and current Software Engineering/Capstone students, allowing for transparency as well as better collaboration and continued development.

With this in mind, we have created a dedicated GitHub Organization for PitHub instead of just continuing to transfer the repository between different team organizations at the end of each semester. This would allow former team members to remain involved even after graduating while providing incoming teams with  good foundation to continue developing new features, troubleshooting, and improving PitHub. All in all, we want PitHub to become a project that continues growing beyond the Software Engineering/Capstone courses with the potential to support wide use by the entire Lewis University.

### Hosting and Financial Sustainability
**Cost:** 
- So far, PitHub remains free because we still are under the limit for free usage for both Firebase Storage and Hosting.    
- When our user base increase and more and more documents are being uploaded to PitHub, PitHub will start to be charged per GB of upload and network use. To compensate for this, Dr. Pogue suggested that we begin to think about Subscription/Payment system so that PitHub becomes maintainable and to continue operating. However, we thought that if we start charging users for a product that does not have a lot of users yet, we will never get users since they can just use Google Drive, YouTube, or any other alternative to host and share their documents. 
- With that in mind, we are pushing for PitHub to be free of use for now and have a few Lewis Faculty members try PitHub out, mainly from the Computer Science Department since we know teachers that are using Panopto. 
- Since Lewis University will stop using Panopto next semester AND PitHub is basically serves the same purpose as Panopto, we are currently trying to reach out and pitch PitHub to Dr. Ray Klump who is the department head of Computer Science. We are trying to see whether he can help us gain more users and basically have them (other Comp Sci teachers) test PitHub out and see what they like and don't like. Using these feedback, we can improve PitHub to the point that they are satisfied with the features that we implement so much so that they genuinely use PitHub to host their instructional materials for class.
- When we have gained enough users and feedback while continuously improving PitHub, we can then ask Dr. Klump/Dr. Pogue to basically pitch to Lewis University to adopt PitHub to other departments who may be in need of an alternative to Panopto. 
- In that case, if other Lewis University Faculty members decide to start using PitHub, we can then suggest that the University itself can pay for our Firebase costs (Storage, Hosting, etc.) since our product is being used by Lewis Universit Faculty and Staff (pretty much the same for how Lewis University is paying to use Panopto)
- We even sugget that we do not need to make a profit for this (even though that would be nice) and just have Lewis University cover the cost of Firebaase Storage, Hosting, and any other operational cost just so that PitHub can continue being used by Lewis University professors.
- We still need to reach out to Dr. Klump so we'll let ya'll know what is going on with that. 

### Long-Term Project Ownership
Our vision for PitHub is that it will grow past the Software Engineering/Capstone classrooms and become a proper organization that focuses on providing Lewis University and its professors a resource to manage their instructional materials and documents. So instead of just being a class project that will be passed from one team to the next, PitHub would be a dedicated product that will be continuously worked on by both current students as well as alumni to a certain degree. 

Specifics on how current student vs alumni code contributions will still be dscussed but PitHub is to be a proper product that is managed by both sets of developers. Since if PitHub scales to the point where all of Lewis University is using it, then it might need the full PitHub development team, both past and present. 

Further talks with Dr. Pogue and Comp Sci Department Head are still needed.

### Important Upcoming Stages/Features For PitHub
**GitHub Pages for PitHub:**
-  As PitHub becomes a more complete and polished app, we want to create a separate public website using GitHub Pages. This website would be completely separate from the actual PitHub web app and would basically serve as a place where potential users (i.e. Lewis professors) can learn about PitHub before deciding if they want to use it.
- The website would basically include a general overview of what PitHub is, what it does, and the different features that we have implemented. We could also include a demo video or the PitHub overview video (or an updated version of it) that shows how PitHub works so our potential users can get a better idea of what PitHub looks like and how it works before signing up to use it.
- Another thing we would have to include in this webstie is an interest form where faculty members can submit their information if they are interested in using PitHub (i.e. name, department info, and lewisu email). So instead of allowing anyone to just log in using their @lewisu.edu email accounts and access PitHub, we want faculty members to fill out this form first if they are interested in using PitHub. From there, we can review their submissions, register their accounts, and give them access to the actual PitHub web application. This also just allows us to keep track of who is interested in using PitHub and let us have better control over who is allowed to access the platform, meaning just because you have a lewisu.edu doesn't mean you're registered right away. Plus we're gonna make the interest form very simple, literally just the three info we need and that's prety much all they have to fill out (so they won't feel that the sign up process is too much). 
- Once we recieve their info from the interest form and actually verify they are faculty at Lewis, then we just allow their email address to log in to PitHub.
- Overall, we want this website to basically be the main place where people can learn about PitHub and see what we have to offer. This would also be useful when we are reaching out to professors, giving demos, or trying to get more faculty members interested in using PitHub (especially for the ECaMS event next month). Instead of having to explain everything ourselves, we can just direct them to the website where they can learn about the product and submit a request to use it. This would also help us when we eventually pitch PitHub to other departments at Lewis University as a possible alternative to Panopto.


## 5. Important Things to Discuss
1. Open-Source Transition
2. Firebase payment responsibilities
3. Long-term maintenance
4. Separate Test Environment using separate storage
5. GitHub Pages for PitHub

> ## About This Document
> We will try to update this document whenever significant
> changes occur to PitHub's development, infrastructure,
> ownership, or long-term direction.
> 
> All team members are encouraged to contribute relevant
> updates and communicate important changes to the
> Product Owners.
