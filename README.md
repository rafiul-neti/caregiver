```
# Care.xyz | Professional Caregiving Platform

Care.xyz is a modern web application designed to connect families with verified caregivers in Bangladesh. Whether it's nurturing baby care, dignified elderly support, or specialized medical aid, the platform provides a seamless booking experience with automated email invoicing.

**Live Demo:** [https://caregiver-five.vercel.app/](https://caregiver-five.vercel.app/)

---

## 🚀 Features

* **Service Exploration:** Browse specialized care categories including Baby Care, Elderly Care, and Sick Care.
* **Authentication:** Secure user accounts and protected routes powered by **NextAuth.js**.
* **Dynamic Booking System:** A streamlined booking flow that captures schedule, location, and calculates total costs.
* **Automated Invoicing:** Professional HTML invoices sent directly to users via **Nodemailer** upon successful booking.
* **Performance First:** Fast loading states using **Skeleton Screens** and optimized layouts for zero Cumulative Layout Shift (CLS).
* **Responsive Design:** Fully mobile-responsive UI built with **Tailwind CSS** and **DaisyUI**.

---

## 🛠️ Tech Stack

* **Frontend:** [Next.js](https://nextjs.org/) (App Router), Tailwind CSS, DaisyUI.
* **Backend:** Next.js Server Actions, [MongoDB](https://www.mongodb.com/).
* **Authentication:** [NextAuth.js](https://next-auth.js.org/).
* **Email:** [Nodemailer](https://nodemailer.com/).
* **Icons:** Lucide-React.
* **Deployment:** [Vercel](https://vercel.com/).

---

## ⚙️ Environment Variables

To run this project locally, create a `.env.local` file in the root directory and add the following:

```env
# MongoDB
MONGOURI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Nodemailer (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

```

---

## 🏃 Getting Started

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/caregiver.git](https://github.com/your-username/caregiver.git)
cd caregiver

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

---

## 📸 Screenshots

| Home Page | Services |
| --- | --- |
|  |  |

---

## 📄 Deployment

This project is optimized for deployment on the **Vercel Platform**.

**Important:** When deploying to Vercel, ensure you add your `MONGOURI`, `NEXTAUTH_SECRET`, and Email credentials in the **Project Settings > Environment Variables** tab. Note that email sending requires `await` in server actions to function correctly in serverless environments.