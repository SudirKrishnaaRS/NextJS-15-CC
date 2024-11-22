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
