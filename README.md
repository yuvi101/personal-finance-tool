# Banking App

This repository contains the code for a banking app with a finance management dashboard built using Next.js 14. The application connects multiple bank accounts, displays real-time transactions, and allows users to transfer money to other platform users.

## Features

- **Authentication:** Secure SSR authentication with validations and authorization.
- **Bank Integration:** Connects with Plaid to link multiple bank accounts.
- **Dashboard:** Overview of user accounts, total balance, recent transactions, and spending categories.
- **Transaction History:** Pagination and filtering for viewing transaction history.
- **Funds Transfer:** Transfer funds using Dwolla with recipient bank ID.
- **Real-time Updates:** Reflects changes upon connecting new bank accounts.
- **Responsive Design:** Adapts to various screen sizes for a consistent user experience.

## Tech Stack

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## Quick Start

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/banking-app.git
cd banking-app
npm install
```
### Environment Variables
Create a .env file in the project root and add the following:

```bash
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```


### Running the Project

Start the development server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.