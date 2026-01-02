# Asian Women Tech

Discover the stories, achievements, and impact of Asian women leaders who are transforming the technology industry worldwide.

## Features

### Pages

- **Home / Discovery Page** – Browse a list of women with photo, name, role, and short description
- **Detail Page** – View comprehensive profiles including:
  - Header with photo, name, and role
  - Short bio (2–4 sentences)
  - Key achievements (bullet points)
  - Links (LinkedIn, Wikipedia, personal site)
  - Sources
- **About / Methodology Page** – Learn about:
  - Why the project was created
  - Criteria for inclusion
  - Data sources
  - Disclaimer ("not exhaustive")

### MVP Goals

- Public access without authentication
- No administration features or user authentication
- Simple UI focused on clarity and usability

## Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS
- **Build Tool:** Vite with SWC
- **Routing:** React Router
- **Data:** JSON (Firebase planned for future)

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Development

### User Stories

**As an unauthenticated user, I want to:**

1. **View a list of Asian women in tech**
   - See a photo, name, role, and short description for each person
2. **View details of an individual**
   - See a header with photo, name, and role
   - Read a short bio (2–4 sentences)
   - See key achievements as bullet points
   - Access links (LinkedIn, Wikipedia, personal site)
   - Check sources for the information
3. **View a methodology page**
   - Learn why this project was built
   - Understand the criteria for inclusion
   - Review the data sources
   - Read a disclaimer (e.g., "not exhaustive")

### Next Steps

- Create GitHub issues for the user stories
- Select 10 women for initial dataset
- Create a single JSON file for data
- Design one clean card component
- Ship a basic grid layout
