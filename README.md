# Please refer to the `wiki` page https://github.com/SudirKrishnaaRS/NextJS-15-CC/wiki to view the detailed chapter wise notes



***


# Intro to NextJS 15

## Why NextJs?

![image](https://github.com/user-attachments/assets/6e56e08d-2ccc-4cae-8963-3270546998a5)

## What is NextJs?

![image](https://github.com/user-attachments/assets/121c95a3-ba93-44ca-a40b-1107799a2365)
![image](https://github.com/user-attachments/assets/d015d0a4-ea00-4d7f-8490-1f417e63b92a)


### What this Repo consist of and covers

![image](https://github.com/user-attachments/assets/ec2a1457-7d7a-4f0d-b645-fb0e08892b31)
![image](https://github.com/user-attachments/assets/1c1086a6-90c6-43e2-9a75-f88818fc14f0)

***

#  React Server Components

![image](https://github.com/user-attachments/assets/e3fa1d2a-aaf9-40c7-8e1a-6c7a2bf9e1c2)


## Server Components vs Client Components

![image](https://github.com/user-attachments/assets/712531a8-25e0-4594-a7e5-c4e79a6607de)


## When to use? Server or Client Component (Practical use cases)

![image](https://github.com/user-attachments/assets/671d38c4-1bdd-49c1-ac29-a1a2cac64618)

***


# Routing ‐ App Router

![image](https://github.com/user-attachments/assets/ad0ce8cf-4edc-4918-8ea7-3fe7edbbef59)


## Basic Files

`page.tsx` : 
* Consists of the JSX/TSX responsible for the UI

`layout.tsx` : 
* Layouts allow you to define Ul that is shared between multiple pages 
* Useful for elements like headers, footers, or navigation menus that you want to appear consistently across different routes
* When navigating between pages that share a layout, only the page components update - the layout doesn't re-render 
* This leads to improved performance and a smoother user experience 
* They also help reduce code duplication and improve the overall structure of your project

## Basic Route

**Folder Structure** : `App -> about (Folder) -> page.tsx (file)`

![image](https://github.com/user-attachments/assets/090c5b76-54cd-4da4-b37f-aef13c270863)

**Route** : `/about`

![image](https://github.com/user-attachments/assets/42150d98-c79d-4e24-8010-91cdb3c15802)


## Nested Route

**Folder Structure** : `App -> blog (Folder) -> first-post (Folder) -> page.tsx (file)`

![image](https://github.com/user-attachments/assets/ff10cf36-508b-4dfb-a3be-aeaa3347fb58)

**Route** : `/blog/first-post`

![image](https://github.com/user-attachments/assets/a415241d-c055-4617-9e3d-b20253554e14)


## Dynamic Route

> ### Symbol: `[  ]`

**Folder Structure** : `App -> products (Folder) -> [id] (Folder) -> page.tsx (file)`

![image](https://github.com/user-attachments/assets/eef5cd28-1ace-4931-8e0b-9ded18db3bb3)

**Route** : `/products/macbook`

![image](https://github.com/user-attachments/assets/03f0ee2d-ee9b-42a9-9bde-673f16a76a4c)

**Accessing the URL params from a dynamic route** : 

![image](https://github.com/user-attachments/assets/c7d780d9-6e10-47a6-8015-51f5679dd921)

## Categorise/Group related Routes (without affecting routing functionality)

> ### Symbol: `(  )`

**Folder Structure** : `App -> (auth) (Folder)`

 `-> login (Folder) -> page.tsx (file)`
                                             
 `-> register (Folder) -> page.tsx (file)`

 `-> forgot-password (Folder) -> page.tsx (file)`

![image](https://github.com/user-attachments/assets/14c2ab14-bf01-431f-a4af-fe5157795c85)

**Route** : 

`/register`

![image](https://github.com/user-attachments/assets/cbfc5da1-5537-4804-80d5-a972258874b5)

`/login`

![image](https://github.com/user-attachments/assets/b325a574-e92d-4c0e-bdc5-6a286957cb29)

`/forgot-password`

![image](https://github.com/user-attachments/assets/87b00b70-6bb4-40b7-8849-d10e3f225452)

> NOTE: auth will not be part of the route as this helps in codebase maintenance to categorise/Group related Routes


## `<Link>` 

![image](https://github.com/user-attachments/assets/4e7eaa6f-eca9-4dd4-942e-477ec765d2ed)

![image](https://github.com/user-attachments/assets/3e919a76-c1e9-40cb-bcf1-08020e0a5b5b)


## `usePathname()` hook - Determine the current pathname to apply the `active` style-class

The below example shows how to apply active styles based on the current URL pathname using **Tailwind CSS**
![image](https://github.com/user-attachments/assets/99e0e84f-a640-4ffb-8ac7-3af85fb3b13e)



## `useRouter()` hook - Programaticaly handle route 

![image](https://github.com/user-attachments/assets/f31b744b-0039-4b4e-9ed6-5ada9808f43d)

![image](https://github.com/user-attachments/assets/4e0856b6-7157-4c96-b60d-2bae5bda98fd)

On click of `Go Home` button navigates to the home page

![image](https://github.com/user-attachments/assets/f01edd91-0ae0-4765-99bd-85205d4f1548)


***

# Data Fetching

> HINT (V.Easy Concept): In the Client Component, you can use async-await only inside useEffect(), whereas in Server Component you can make the function itself async and then directly await (Refer to the below code files to understand more)

# Data fetching in Client Component

**Folder Structure:**

![image](https://github.com/user-attachments/assets/b2c120b6-ef73-4275-8c9a-e6e338ae35b9)


**Code:** 

![image](https://github.com/user-attachments/assets/aa0b087a-fdef-4daf-9bd4-7c2906301af9)


**Output:**

![image](https://github.com/user-attachments/assets/c09b482f-a019-4ffb-836d-b4e0372a917c)


***

# Data fetching in Server Component

**File Naming:**

> NOTE: below file names are the naming convention so that NextJS understands and maps the file based on the API fetch status - loading / failure / success

* `page.tsx`    -> Shown when the API data is fetched **successfully**

* `loading.tsx`   -> Shown when an API is **loading**

* `error.tsx` -> Shown when there's an error while fetching an API **fails**


**Folder Structure:**

![image](https://github.com/user-attachments/assets/b5b4b559-3320-4dbb-a1b8-03851d248c2b)


**Code:** 

* `page.tsx` 

![image](https://github.com/user-attachments/assets/4f9eec36-811f-4b77-bd3d-a14447f9afe1)

* `loading.tsx` 

![image](https://github.com/user-attachments/assets/b577d426-cf2b-4f22-93e4-898d13da4957)


* `error.tsx`
![image](https://github.com/user-attachments/assets/f7fe96d6-0d53-4b91-bb70-3433754ceb77)



**Output:**

* **API Success:**

![image](https://github.com/user-attachments/assets/5efa8035-8f8d-4945-a022-0def2c5054bd)


* **API Loading:**

![image](https://github.com/user-attachments/assets/33d28f37-7e7e-4bd2-9f57-a1ba7a00d4de)

 
* **API Error:**

![image](https://github.com/user-attachments/assets/2b845254-755a-455b-b5b8-34d13a64dc6e)


***

# Which is Good for Data Fetching - Client or Server Components?

### Server Component Advantages and UseCase
![image](https://github.com/user-attachments/assets/0ce3a6bd-40ca-42d3-9d95-f5f2513cad9b)

### Client Component UseCase
![image](https://github.com/user-attachments/assets/18e097c3-4142-4a9d-afb2-39bb838d1c9d)


***

# Route Handlers ‐ Backend

![image](https://github.com/user-attachments/assets/b26f698f-6bb5-4e5e-b68c-9147e34d4ee9)

# `/users`

### File Naming Convention: `route.ts` 

## GET ->  getUsers

**Folder Structure:**

![image](https://github.com/user-attachments/assets/6af5f067-0387-4ba0-ba2f-fcc779ecf8e8)


**Code:**

![image](https://github.com/user-attachments/assets/f04fe626-3f4e-4667-a7af-feaa400d591e)


**Thunder Client Output:**

![image](https://github.com/user-attachments/assets/26004dd9-47df-4a39-b698-0f724180d885)


***

## POST -> addUser

**Folder Structure:**
Same file as above

![image](https://github.com/user-attachments/assets/6af5f067-0387-4ba0-ba2f-fcc779ecf8e8)



**Code:**

![image](https://github.com/user-attachments/assets/8309103a-fe31-4b17-a6c4-d9d9002cd590)



**Thunder Client Output:**

**Adding a user via POST**
![image](https://github.com/user-attachments/assets/439ed65f-ff95-44c6-9c7f-949c87efa726)

**Checking if it reflects in the `users` array by hitting the GET**
![image](https://github.com/user-attachments/assets/2810720c-dfb0-4f58-8a7b-57565f3ec085)


***


# `/users/id`

### File Naming Convention: `[id]/route.ts` 

## GET ->  getUserById

**Folder Structure:**

![image](https://github.com/user-attachments/assets/7cadef1d-1982-48bb-9e8b-7b145b1efdd6)


**Code:**

![image](https://github.com/user-attachments/assets/67c608f2-ee4d-47ef-9f9e-e5bcb96e418e)


**Thunder Client Output:**

![image](https://github.com/user-attachments/assets/3b17f018-53fc-4baa-9e4f-6b3588f67564)


***

***

## PATCH ->  editUserbyId

**Folder Structure:**
Same file as above

![image](https://github.com/user-attachments/assets/7cadef1d-1982-48bb-9e8b-7b145b1efdd6)


**Code:**

![image](https://github.com/user-attachments/assets/f9ac42e4-9488-4f46-9291-ab6dc7dba33d)


**Thunder Client Output:**

![image](https://github.com/user-attachments/assets/4d438eb7-3940-4101-b46c-b84ec28fb962)

**Checking if it reflects in the `users` array by hitting the GET**

![image](https://github.com/user-attachments/assets/24fd2aab-d666-4acb-b5f3-67f11f263412)


***

## DELETE ->  deleteUserbyId

**Folder Structure:**
Same file as above

![image](https://github.com/user-attachments/assets/7cadef1d-1982-48bb-9e8b-7b145b1efdd6)


**Code:**

![image](https://github.com/user-attachments/assets/0d93f060-e431-4d3f-9236-a6411c214648)


**Thunder Client Output:**

![image](https://github.com/user-attachments/assets/859235af-1563-4a16-b062-e43b73137d53)


**Checking if it reflects in the `users` array by hitting the GET**

![image](https://github.com/user-attachments/assets/6a49870b-362f-43d0-84d9-d3b1a4e4a02f)


***

# Server Actions

> Difficulty Level: Easy

![image](https://github.com/user-attachments/assets/97fc2dbc-ccf9-44d5-bf9b-6985a0417c13)

**Folder Structure:**

![image](https://github.com/user-attachments/assets/7b2d6b23-02b8-4b1d-a6d7-0b9bd378495b)



**Code:** 

Below is the example of form handling via Server Action to add a User (via API - POST method)

![image](https://github.com/user-attachments/assets/3c98a2f0-0cdc-4f2b-a3c7-86d92116de02)



**Output:**

![image](https://github.com/user-attachments/assets/2e41b5ef-d903-4865-b9fc-4639fada014c)


***




***

# Running the Project


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
