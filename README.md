# **1. Asian Women Tech**

Discover the stories, achievements, and impact of Asian women leaders who are transforming the technology industry worldwide.

## 1.1. **Pages**

1. **Home / Discovery Page** – List of women with **photo, name, role, and short description**.
2. **Detail Page** – Detailed view for each person with:
   - Header: photo, name, role
   - Short bio (2–4 sentences)
   - Key achievements (bullet points)
   - Links (LinkedIn, Wikipedia, personal site)
   - Sources
3. **About / Methodology Page** – Explain:
   - Why the project was created
   - Criteria for inclusion
   - Data sources
   - Disclaimer (“not exhaustive”)

## 1.2. **MVP Goals**

- Everyone can **view the list, details, and methodology** without signing in.
- No **administration features** or **user authentication** are included in the MVP.
- Simple UI, focused on **clarity and usability**

## 1.3. **Tech Stack**

- **Frontend:** React + Tailwind CSS
- **Data:** Firebase (future upgrade)
- **Routing:** React Router for page navigation

## 1.4. **Next Steps**

- Create **GitHub issues** for the user stories
- Pick **10 women**
- Create a **single JSON file**
- Design **one clean card component**
- Ship a **basic grid**

# 2. User Stories

**As an unauthenticated user, I want to:**

1. **View a list of Asian women in tech**
   - See a **photo**, **name**, **role**, and **short description** for each person.
2. **View details of an individual**
   - See a **header** with **photo, name, and role**.
   - Read a **short bio** (2–4 sentences).
   - See **key achievements** as bullet points.
   - Access **links** (LinkedIn, Wikipedia, personal site).
   - Check **sources** for the information.
3. **View a methodology page**
   - Learn **why this project was built**.
   - Understand the **criteria for inclusion**.
   - Review the **data sources**.
   - Read a **disclaimer** (e.g., “not exhaustive”).

# 3. Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

