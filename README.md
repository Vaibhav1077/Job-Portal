# Prep2Career - AI Powered Job Portal

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![Kafka](https://img.shields.io/badge/Kafka-Event--Driven-231F20?logo=apachekafka)

A full-stack career development platform built with **microservices architecture** that helps job seekers discover opportunities, analyze resumes with AI, prepare for interviews, and manage their career growth.

![Prep2Career](frontend/public/prep2career.png)

---

## Key Features

**Job Portal**
- Browse and search job opportunities with filters
- Apply for jobs with resume upload
- Recruiter and Job Seeker role-based dashboards
- Company management and application tracking

**AI-Powered Tools**
- ATS Resume Analyzer (Google Gemini)
- Career Guidance chatbot
- Resume improvement suggestions with scoring

**Authentication & Security**
- JWT-based authentication with HTTP-only cookies
- Role-based access control (Recruiter / Job Seeker)
- Secure password hashing with bcrypt

**Payments**
- Razorpay integration for premium subscriptions
- Payment verification with webhook signatures

**Notifications**
- Kafka-based event-driven architecture
- Automated email notifications via Nodemailer

---

## Architecture

```
                    ┌──────────────┐
                    │   Frontend   │
                    │  (Next.js)   │
                    │  Port: 3000  │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
  ┌───────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
  │ User Service │ │ Job Service  │ │Payment Service│
  │  Port: 4001  │ │  Port: 4002  │ │  Port: 4003  │
  └───────┬──────┘ └──────┬───────┘ └──────────────┘
          │                │
          │         ┌──────▼───────┐
          └────────►│Utils Service │◄── Kafka Consumer
                    │  Port: 4004  │
                    └──────────────┘
                    (Cloudinary, Gemini AI, Email)
```

| Service | Responsibility | Port |
|---------|---------------|------|
| Frontend | Next.js SSR web app | 3000 |
| User Service | Profiles, skills, resumes, applications | 4001 |
| Job Service | Job CRUD, company management, Kafka producer | 4002 |
| Payment Service | Razorpay checkout & verification | 4003 |
| Utils Service | File uploads, AI tools, email consumer | 4004 |

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS, Shadcn UI |
| Backend | Node.js, Express 5, TypeScript |
| Database | PostgreSQL (Neon Serverless) |
| Message Queue | Apache Kafka |
| File Storage | Cloudinary |
| AI | Google Gemini 2.5 Flash |
| Payments | Razorpay |
| Auth | JWT + HTTP-only Cookies |
| DevOps | Docker, Docker Compose |

---

## Getting Started

### Prerequisites

- Node.js v18+
- Docker & Docker Compose (for Kafka)
- [Neon DB](https://neon.tech) account (free PostgreSQL)
- [Cloudinary](https://cloudinary.com) account
- [Google Gemini API](https://aistudio.google.com/apikey) key
- [Razorpay](https://razorpay.com) account (test mode)

### Installation

```bash
# Clone the repository
git clone https://github.com/Vaibhav1077/Job-Portal.git
cd Job-Portal

# Install all dependencies
cd frontend && npm install && cd ..
cd services/user && npm install && cd ../..
cd services/job && npm install && cd ../..
cd services/payment && npm install && cd ../..
cd services/utils && npm install && cd ../..
```

### Environment Setup

```bash
# Copy example env files
cp services/user/.env.example services/user/.env
cp services/job/.env.example services/job/.env
cp services/payment/.env.example services/payment/.env
cp services/utils/.env.example services/utils/.env
```

Fill in your credentials in each `.env` file. See [Environment Variables](#environment-variables) below.

### Run in Development

```bash
# Start each backend service (separate terminals)
cd services/user && npm run dev
cd services/job && npm run dev
cd services/payment && npm run dev
cd services/utils && npm run dev

# Start the frontend
cd frontend && npm run dev
```

Open http://localhost:3000 in your browser.

### Run with Docker

Each service has its own `Dockerfile`. Build and run:

```bash
# Build a service
docker build -t prep2career-user ./services/user
docker build -t prep2career-job ./services/job
docker build -t prep2career-payment ./services/payment
docker build -t prep2career-utils ./services/utils
docker build -t prep2career-frontend ./frontend
```

---

## Environment Variables

### User Service (`services/user/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Service port (default: 4001) |
| `DB_URL` | Neon PostgreSQL connection string |
| `JWT_SEC` | JWT signing secret |
| `UPLOAD_SERVICE` | Utils service URL |

### Job Service (`services/job/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Service port (default: 4002) |
| `DB_URL` | Neon PostgreSQL connection string |
| `JWT_SEC` | JWT signing secret |
| `UPLOAD_SERVICE` | Utils service URL |
| `Kafka_Broker` | Kafka broker address |

### Payment Service (`services/payment/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Service port (default: 4003) |
| `DB_URL` | Neon PostgreSQL connection string |
| `JWT_SEC` | JWT signing secret |
| `Razorpay_Key` | Razorpay Key ID |
| `Razorpay_Secret` | Razorpay Key Secret |

### Utils Service (`services/utils/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Service port (default: 4004) |
| `CLOUD_NAME` | Cloudinary cloud name |
| `API_KEY` | Cloudinary API key |
| `API_SECRET` | Cloudinary API secret |
| `API_KEY_GEMINI` | Google Gemini API key |
| `Kafka_Broker` | Kafka broker address |
| `SMTP_USER` | Email for notifications |
| `SMTP_PASS` | Email app password |

---

## Project Structure

```
Job-Portal/
├── frontend/                # Next.js 16 web application
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   └── lib/            # Utilities
│   └── public/             # Static assets
├── services/
│   ├── user/               # User management microservice
│   ├── job/                # Job management microservice
│   ├── payment/            # Payment processing microservice
│   └── utils/              # Shared utilities microservice
└── README.md
```

---

## ATS Resume Analyzer Flow

```
User uploads PDF → Base64 conversion → Google Gemini API
                                            │
                                            ▼
                               Analysis & ATS Score
                          (Formatting, Keywords, Structure,
                           Readability, ATS Compatibility)
                                            │
                                            ▼
                              Results displayed to user
```

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is for educational and portfolio purposes.
