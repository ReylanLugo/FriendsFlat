# Project Description

Welcome to our new apartment listing platform, designed to make life easier for both property owners and renters. With
our service, owners can list their apartments, including all the available rooms and shared spaces, and start earning
passive income right away.

### Key Features:

- Easy Apartment Listings: Owners can quickly post their apartments with all the details—photos, descriptions, location,
  and price. Make your place stand out and attract renters effortlessly.


- Manage Rooms and Spaces: List all the rooms and common areas in your apartment. This way, you can rent out individual
  rooms or shared spaces depending on what you have available.


- Earn Passive Income: By renting out rooms or shared spaces, owners can turn their apartments into a steady source of
  extra income.


- Find Your Perfect Roommate: Renters can create a list of preferred roommates to find the right match. This feature
  helps users find people they’ll enjoy living with, making the renting experience even better.


- Our platform is here to shake up the rental market by making it simple and fun for everyone involved. Whether you’re
  looking to rent out your place or find a great apartment, we’ve got you covered!

### Instructions on How to Set Up and Run Your Project Locally

Here’s a step-by-step guide to getting your Next.js project up and running locally. This project uses Supabase for
authentication and storage, Prisma as the ORM, the Next.js App Router, and Redux Toolkit for state management.

Prerequisites
Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm or yarn
- Supabase account and project
  PostgreSQL database (you can use Supabase's PostgreSQL database)

1. Clone the Repository
   First, clone the project repository to your local machine:

````bash 
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

2. Install Dependencies
   Install the necessary dependencies using npm or yarn:

````bash
npm install
# or
yarn install
````

3. Set Up Environment Variables
   Create a .env.local file in the root of your project and add the following environment variables. Replace the
   placeholder values with your actual Supabase project details and database URL.

````dotenv
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=postgresql://your-database-user:your-database-password@your-database-host:your-database-port/your-database-name
````

4. Run Existing Prisma Migrations
   Run the following command to apply the existing migrations to your database:

````bash
npx prisma migrate deploy
````

5. Generate Prisma Client
   Generate the Prisma Client to ensure you have the latest generated code based on your current schema:

````bash
npx prisma generate
````

6. Run the Development Server
   Start the Next.js development server:

````bash
npm run dev
# or
yarn dev
````

Your project should now be running locally at http://localhost:3000.

Vercel Link: https://friends-flat.vercel.app/

### Project Improvement Suggestions

1. Add More Authentication Methods:
   Integrate additional authentication options such as Google, Microsoft, and GitHub accounts to provide users with more
   convenient and flexible login options.

2. Transform and Define DTOs:
   Convert and define Data Transfer Objects (DTOs) used in server actions into TypeScript types to enhance type safety
   and improve code maintainability.

3. Efficient and Scalable Modal Deployment:
   Implement a more efficient and scalable approach to deploy modals within the application, ensuring smooth user
   interactions and better state management.

4. Better Input Validation and Request Control:
   Improve control and validation of inputs and requests from the frontend to enhance security and ensure data
   integrity.

5. Micro-Componentization:
   Adopt a micro-componentization approach to build smaller, reusable components, making the codebase more modular and
   easier to manage.

6. UI Design Improvements:
   Enhance the user interface design to provide a more visually appealing and user-friendly experience, ensuring that
   the application stands out in terms of aesthetics and usability.

### Key Features of the Project

1. Advanced State Management with Redux:
   Utilizes a complex global state manager like Redux, making the application more scalable and easier to maintain by
   providing a consistent state management solution.


2. No UI Libraries:
   The project does not rely on any external UI libraries, offering greater flexibility to integrate custom designs and
   tailor existing components to meet specific needs.


3. Favorites System:
   Includes a favorites system that allows users to save and easily access their preferred apartments and listings.
   MVP for Online Apartment Rental and Roommate Search:


4. Developed as a Minimum Viable Product (MVP) for an online intermediary company, focusing on apartment rentals and
   helping users find roommates and new friends for a nomadic lifestyle.

By addressing these improvement suggestions and highlighting the project's unique features, we can further enhance
its
functionality, user experience, and overall appeal.

Reylan Lugo.