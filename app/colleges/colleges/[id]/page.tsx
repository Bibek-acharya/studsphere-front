"use client";

import { useState } from "react";
import { MapPin, Star, Check, Monitor, PenTool, Book } from "lucide-react";

export default function CollegeDetailPage() {
  const [activeTab, setActiveTab] = useState("about");

  const courses = [
    {
      name: "BBA (Bachelor of Business Admin)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 6,50,000",
      focus: "Management, Finance, Marketing",
    },
    {
      name: "BSc. CSIT",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 8,00,000",
      focus: "Software, Networking, AI",
    },
    {
      name: "BIM (Information Mgmt)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 7,20,000",
      focus: "Business Intelligence, IT",
    },
    {
      name: "BCA (Bachelor of Computer App)",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 6,00,000",
      focus: "App Development, Systems",
    },
    {
      name: "BSc. Microbiology",
      level: "Undergraduate",
      duration: "4 Years",
      fees: "NPR 5,80,000",
      focus: "Lab Science, Research",
    },
  ];

  const scholarships = [
    {
      title: "Merit Scholarship",
      percentage: "Up to 100%",
      description:
        "Awarded to students with exceptional academic performance in their previous board exams and entrance tests.",
      eligibility: ["GPA 3.8+ in +2/NEB", "Top 5% in Entrance Exam"],
      color: "yellow",
    },
    {
      title: "Need-Based Aid",
      percentage: "Up to 50%",
      description:
        "Financial assistance for students from economically challenged backgrounds to ensure education for all.",
      eligibility: [
        "Verification from Ward Office",
        "Minimum GPA 2.8 maintained",
      ],
      color: "blue",
    },
    {
      title: "Sports & Talent",
      percentage: "Up to 75%",
      description:
        "For students who have represented the district or nation in sports, arts, or music.",
      eligibility: ["National/District Certificates", "Trial/Audition Success"],
      color: "green",
    },
  ];

  const reviews = [
    {
      name: "Sushil Adhikari",
      initials: "SA",
      role: "BBA Student",
      time: "2 months ago",
      rating: 5,
      comment:
        "The faculty here is extremely supportive. The blend of practical workshops and theory really helped me land my internship at a top bank. Highly recommend for Management students!",
      avatarColor: "#e0e7ff",
    },
    {
      name: "Priya Rana",
      initials: "PR",
      role: "CSIT Alumni",
      time: "5 months ago",
      rating: 4,
      comment:
        "Great computer labs and internet facilities. The curriculum is updated regularly. Canteen food could be better, but overall a fantastic learning environment.",
      avatarColor: "#fce7f3",
    },
    {
      name: "Anish Tamang",
      initials: "AT",
      role: "BIM Student",
      time: "1 year ago",
      rating: 5,
      comment:
        "The extracurricular activities and clubs are the best part. I joined the Robotics club and we won the national competition. It really balances study and fun.",
      avatarColor: "#dcfce7",
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Graduation Day 2023",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Modern Classrooms",
    },
    {
      url: "https://images.unsplash.com/photo-1599689018596-3d237199276e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "E-Library Facility",
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "IT Lab Session",
    },
    {
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Annual Sports Meet",
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      caption: "Guest Lecture Series",
    },
  ];

  const programs = [
    {
      name: "Bachelor of Business Administration (BBA)",
      category: "Management",
      duration: "4 Years / 8 Semesters",
      categoryColor: "#eff6ff",
      categoryTextColor: "#1d4ed8",
    },
    {
      name: "BSc. Computer Science & IT (CSIT)",
      category: "Science & Tech",
      duration: "4 Years / 8 Semesters",
      categoryColor: "#ecfdf5",
      categoryTextColor: "#047857",
    },
    {
      name: "Bachelor of Information Management (BIM)",
      category: "Mgmt & IT",
      duration: "4 Years / 8 Semesters",
      categoryColor: "#fdf2f8",
      categoryTextColor: "#be185d",
    },
    {
      name: "Master of Business Studies (MBS)",
      category: "Postgraduate",
      duration: "2 Years / 4 Semesters",
      categoryColor: "#fff7ed",
      categoryTextColor: "#c2410c",
    },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <style jsx>{`
        :root {
          --primary-blue: #1865f2;
          --primary-hover: #1452c4;
          --text-dark: #111827;
          --text-gray: #6b7280;
          --bg-light: #f9fafb;
          --white: #ffffff;
          --border: #e5e7eb;
          --success: #10b981;
          --star: #fbbf24;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          background: var(--white);
          min-height: 100vh;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
        }

        .hero-banner {
          height: 280px;
          background-image: url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center 30%;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(24, 101, 242, 0.2),
            rgba(0, 0, 0, 0.6)
          );
        }

        .profile-header {
          padding: 0 40px;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 10px;
        }

        .logo-box {
          width: 140px;
          height: 140px;
          background: var(--white);
          border-radius: 16px;
          margin-top: -60px;
          z-index: 10;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid var(--white);
        }

        .header-info {
          padding-top: 20px;
          flex: 1;
        }

        .college-title {
          font-size: 32px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-dark);
          line-height: 1.1;
        }

        .verified-badge {
          color: var(--primary-blue);
          width: 24px;
          height: 24px;
        }

        .meta-row {
          display: flex;
          gap: 20px;
          color: var(--text-gray);
          font-size: 15px;
          margin-top: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .rating-pill {
          background: #fffbeb;
          color: #b45309;
          padding: 4px 12px;
          border-radius: 9999px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .action-buttons {
          padding-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .btn-primary {
          background-color: var(--primary-blue);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px rgba(24, 101, 242, 0.2);
        }

        .btn-primary:hover {
          background-color: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(24, 101, 242, 0.3);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--text-gray);
          border: 1px solid var(--border);
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-outline:hover {
          background-color: #f3f4f6;
          color: var(--text-dark);
        }

        .tabs-container {
          margin-top: 40px;
          border-bottom: 1px solid var(--border);
          padding: 0 40px;
          overflow-x: auto;
          white-space: nowrap;
          display: flex;
          gap: 32px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 16px 0;
          font-size: 15px;
          color: var(--text-gray);
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
        }

        .tab-btn:hover {
          color: var(--text-dark);
        }

        .tab-btn.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        .tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary-blue);
          border-radius: 3px 3px 0 0;
        }

        .content-area {
          padding: 40px;
          min-height: 500px;
          background-color: #fff;
        }

        .tab-content {
          display: none;
        }

        .tab-content.active {
          display: block;
          animation: fadeIn 0.4s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--text-dark);
          border-left: 5px solid var(--primary-blue);
          padding-left: 15px;
          line-height: 1.2;
        }

        .table-container {
          overflow-x: auto;
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th {
          text-align: left;
          padding: 16px 20px;
          background: #f8fafc;
          color: var(--text-dark);
          font-size: 14px;
          font-weight: 700;
          border-bottom: 1px solid var(--border);
          white-space: nowrap;
        }

        .data-table td {
          padding: 16px 20px;
          border-bottom: 1px solid #f3f4f6;
          font-size: 14px;
          color: #4b5563;
        }

        .data-table tr:last-child td {
          border-bottom: none;
        }

        .data-table tbody tr:hover {
          background-color: #f9fafb;
        }

        .card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          transition: transform 0.2s, box-shadow 0.2s;
          background: #fff;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
          border-color: #d1d5db;
        }

        .check-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .check-list li {
          padding: 8px 0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #374151;
          font-size: 15px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #eee;
          position: relative;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: white;
          padding: 20px 15px 15px;
          font-size: 14px;
          font-weight: 500;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .timeline {
          position: relative;
          padding-left: 20px;
          margin-top: 40px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #e5e7eb;
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
          padding-left: 35px;
        }

        .timeline-point {
          position: absolute;
          left: -14px;
          top: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: var(--white);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 4px var(--white);
          font-size: 14px;
          background-color: var(--primary-blue);
          z-index: 2;
        }

        .review-header-card {
          background: #f8fafc;
          padding: 30px;
          border-radius: 16px;
          margin-bottom: 30px;
          display: flex;
          gap: 40px;
          align-items: center;
          flex-wrap: wrap;
        }

        .big-rating {
          text-align: center;
          min-width: 120px;
        }

        .big-rating .score {
          font-size: 48px;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1;
        }

        .big-rating .stars {
          color: var(--star);
          margin: 8px 0;
        }

        .big-rating .count {
          font-size: 13px;
          color: var(--text-gray);
        }

        .rating-bars {
          flex: 1;
        }

        .rating-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
          font-size: 13px;
          color: var(--text-gray);
        }

        .bar-bg {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--star);
          border-radius: 4px;
        }

        .review-card {
          border-bottom: 1px solid var(--border);
          padding: 24px 0;
        }

        .review-card:last-child {
          border-bottom: none;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .avatar {
          width: 44px;
          height: 44px;
          background: #e0e7ff;
          color: var(--primary-blue);
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        footer {
          background: #1f2937;
          color: #d1d5db;
          padding: 60px 0 20px;
          margin-top: 60px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding: 0 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-col h3 {
          color: white;
          font-size: 18px;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 12px;
        }

        .footer-col ul li a {
          color: #d1d5db;
          text-decoration: none;
        }

        .footer-col ul li a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          margin-top: 50px;
          padding-top: 20px;
          text-align: center;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .grid-3 {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          .content-area,
          .tabs-container,
          .profile-header {
            padding-left: 20px;
            padding-right: 20px;
          }
          .college-title {
            font-size: 26px;
          }
          .section-title {
            font-size: 22px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .review-header-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .rating-bars {
            width: 100%;
          }
        }

        @media (max-width: 500px) {
          .profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .logo-box {
            margin-top: -70px;
          }
          .header-info {
            width: 100%;
            padding-top: 10px;
          }
          .meta-row {
            justify-content: center;
            gap: 10px;
          }
          .action-buttons {
            align-items: center;
            width: 100%;
            padding-bottom: 20px;
          }
          .college-title {
            justify-content: center;
            flex-direction: column;
            gap: 5px;
          }
          .timeline {
            padding-left: 0;
          }
          .timeline::before {
            left: 15px;
          }
          .timeline-item {
            padding-left: 50px;
          }
          .timeline-point {
            left: 0px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* Hero Banner */}
        <div className="hero-banner">
          <div className="hero-overlay"></div>
        </div>

        {/* Header Info */}
        <div className="profile-header">
          {/* Logo */}
          <div className="logo-box">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1865f2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10v6M2 22h20M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M7 12v5.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V12" />
            </svg>
          </div>

          {/* Info */}
          <div className="header-info">
            <h1 className="college-title">
              Goldenagete International College
              <svg
                className="verified-badge"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </h1>

            <div className="meta-row">
              <span style={{ display: "flex", alignItems: "center" }}>
                <MapPin size={16} style={{ marginRight: 6 }} />
                Kamal Pokhari, Kathmandu, Nepal
              </span>
              <span className="rating-pill">
                <Star size={14} fill="#b45309" />
                4.8 (1,240 Reviews)
              </span>
              <a
                href="#"
                style={{ color: "var(--primary-blue)", fontWeight: 500 }}
              >
                www.goldenagete.edu.np ↗
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="action-buttons">
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-gray)",
              }}
            >
              15k+ Students Enrolled
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-outline">Download Brochure</button>
              <button className="btn-primary">+ Apply Now</button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          {[
            "about",
            "courses",
            "admissions",
            "departments",
            "programs",
            "scholarships",
            "gallery",
            "reviews",
          ].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("_", " & ")}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="content-area">
          {/* TAB: ABOUT */}
          <div
            className={`tab-content ${activeTab === "about" ? "active" : ""}`}
          >
            <h2 className="section-title">
              About Goldenagete International College
            </h2>
            <p style={{ color: "#4b5563", marginBottom: 30, fontSize: 16 }}>
              Goldenagete International College is a premier institution in
              Kathmandu, established in 2005 with a vision to provide
              world-class education focused on global competencies and local
              relevance. We offer quality education across various streams
              including Management, Humanities, and Science with
              state-of-the-art campus facilities and highly experienced faculty
              members.
            </p>

            <div className="grid-3">
              <div className="card">
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "var(--primary-blue)",
                  }}
                >
                  🏆 Vision & Mission
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  To be recognized as the epicenter for modern education,
                  producing competent and globally minded leaders.
                </p>
              </div>
              <div className="card">
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "var(--primary-blue)",
                  }}
                >
                  🎓 Key Accreditations
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  Affiliated with Tribhuvan University and recognized by the
                  Ministry of Education, Nepal. ISO 9001 certified campus.
                </p>
              </div>
              <div className="card">
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "var(--primary-blue)",
                  }}
                >
                  🏫 Campus Life
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  Vibrant student life with 15+ clubs, regular events,
                  international guest lectures, and dedicated career counseling
                  cell.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <h3
                className="section-title"
                style={{ fontSize: 20, borderLeftColor: "var(--success)" }}
              >
                Principal&apos;s Message
              </h3>
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  padding: 24,
                  borderRadius: 12,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: "#ddd",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Principal"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontStyle: "italic",
                      color: "#374151",
                      marginBottom: 10,
                    }}
                  >
                    &quot;At Goldenagete, we don&apos;t just teach; we inspire.
                    Our holistic approach ensures that every student leaves our
                    gates not just with a degree, but with a character built on
                    integrity and a mind sharpened for the future.&quot;
                  </p>
                  <h4 style={{ fontWeight: 700, color: "#166534" }}>
                    Dr. Ramesh Adhikari
                  </h4>
                  <span style={{ fontSize: 13, color: "#15803d" }}>
                    Principal, PhD in Educational Leadership
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TAB: COURSES */}
          <div
            className={`tab-content ${activeTab === "courses" ? "active" : ""}`}
          >
            <h2 className="section-title">
              Undergraduate Courses & Estimated Fees
            </h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Level</th>
                    <th>Duration</th>
                    <th>Total Fees (Approx)</th>
                    <th>Focus Area</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{course.name}</strong>
                      </td>
                      <td>{course.level}</td>
                      <td>{course.duration}</td>
                      <td>{course.fees}</td>
                      <td>{course.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginTop: 30,
                background: "#fffbeb",
                padding: 20,
                borderRadius: 8,
                borderLeft: "4px solid var(--star)",
              }}
            >
              <h4
                style={{ color: "#92400e", fontWeight: 600, marginBottom: 5 }}
              >
                Fee Payment Structure
              </h4>
              <p style={{ fontSize: 14, color: "#92400e" }}>
                Fees are payable in 8 installments over 4 years. The total cost
                includes tuition, library access, and basic lab fees.
                Examination fees are separate. A 10% discount applies for full
                yearly upfront payments.
              </p>
            </div>
          </div>

          {/* TAB: ADMISSIONS */}
          <div
            className={`tab-content ${
              activeTab === "admissions" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Admission Process</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              <div>
                <h3 style={{ marginBottom: 16, fontWeight: 600, fontSize: 18 }}>
                  Eligibility & Requirements
                </h3>
                <ul className="check-list">
                  <li>
                    <Check size={18} color="var(--success)" />
                    Minimum GPA 2.4 in NEB +2 or equivalent (A-Levels, CBSE).
                  </li>
                  <li>
                    <Check size={18} color="var(--success)" />
                    CMAT/KUUMAT entrance score required for Management.
                  </li>
                  <li>
                    <Check size={18} color="var(--success)" />
                    Pass in College Internal Assessment (Written + Interview).
                  </li>
                  <li>
                    <Check size={18} color="var(--success)" />
                    English proficiency is mandatory for international students.
                  </li>
                </ul>
              </div>
              <div
                className="card"
                style={{
                  background: "#eff6ff",
                  borderColor: "#bfdbfe",
                  borderLeft: "4px solid var(--primary-blue)",
                }}
              >
                <h3
                  style={{
                    marginBottom: 12,
                    color: "#1e40af",
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
                  Documents Checklist
                </h3>
                <ul
                  style={{
                    fontSize: 14,
                    color: "#1e3a8a",
                    listStyleType: "disc",
                    paddingLeft: 20,
                    lineHeight: 1.8,
                  }}
                >
                  <li>Original Academic Transcripts (SEE & +2)</li>
                  <li>Provisional & Migration Certificates</li>
                  <li>Character Certificates</li>
                  <li>Citizenship Copy / Passport</li>
                  <li>2 Passport Size Photos</li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <h3
              className="section-title"
              style={{
                marginTop: 40,
                fontSize: 20,
                borderLeftColor: "var(--star)",
              }}
            >
              Admissions Timeline
            </h3>
            <div className="timeline">
              {[
                {
                  step: 1,
                  title: "Application Submission (May - June)",
                  desc: "Fill out the official college application form online and upload all scanned academic documents.",
                },
                {
                  step: 2,
                  title: "Entrance Exams (July)",
                  desc: "Appear for the mandatory university/college entrance exam (CMAT/IOST). Admit cards are issued 3 days prior.",
                },
                {
                  step: 3,
                  title: "Interviews & Merit List (August)",
                  desc: "Shortlisted candidates face a personal interview. Final merit list is published within a week.",
                },
                {
                  step: 4,
                  title: "Enrollment (September)",
                  desc: "Selected students must pay admission fees to secure their seat. Orientation program follows shortly.",
                },
              ].map((item) => (
                <div key={item.step} className="timeline-item">
                  <div className="timeline-point">{item.step}</div>
                  <div className="timeline-content card">
                    <h4>{item.title}</h4>
                    <p style={{ fontSize: 14, color: "#555" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <button
                className="btn-primary"
                style={{ width: "100%", maxWidth: 400 }}
              >
                Start Your Application Now
              </button>
            </div>
          </div>

          {/* TAB: DEPARTMENTS */}
          <div
            className={`tab-content ${
              activeTab === "departments" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Academic Departments</h2>
            <div className="grid-3">
              {[
                {
                  title: "IT & Computer Science",
                  icon: Monitor,
                  color: "#3b82f6",
                  bgColor: "#e0e7ff",
                  desc: "Cutting-edge technology, cloud computing, AI, and cybersecurity. Features dedicated coding labs and industry collaboration projects.",
                },
                {
                  title: "Management Studies",
                  icon: PenTool,
                  color: "#15803d",
                  bgColor: "#dcfce7",
                  desc: "Financial analysis, strategic marketing, organizational behavior, and entrepreneurship. Strong tie-ups with local businesses.",
                },
                {
                  title: "Humanities & Social Science",
                  icon: Book,
                  color: "#be185d",
                  bgColor: "#fce7f3",
                  desc: "Critical thinking, social work, mass communication, and psychology. Encourages community research and engagement.",
                },
              ].map((dept, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ borderTop: `4px solid ${dept.color}` }}
                >
                  <div
                    style={{
                      background: dept.bgColor,
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      color: dept.color,
                    }}
                  >
                    <dept.icon size={24} />
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 600 }}>
                    {dept.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#666",
                      marginTop: 8,
                      flex: 1,
                    }}
                  >
                    {dept.desc}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 13,
                      color: "var(--primary-blue)",
                      fontWeight: 600,
                      display: "block",
                      marginTop: 15,
                    }}
                  >
                    View Faculty &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* TAB: PROGRAMS */}
          <div
            className={`tab-content ${
              activeTab === "programs" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Offered Programs</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: 20,
                  }}
                >
                  <div>
                    <h4
                      style={{ marginBottom: 6, fontSize: 17, fontWeight: 600 }}
                    >
                      {program.name}
                    </h4>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span
                        style={{
                          fontSize: 12,
                          background: program.categoryColor,
                          color: program.categoryTextColor,
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontWeight: 600,
                        }}
                      >
                        {program.category}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          background: "#f3f4f6",
                          color: "#4b5563",
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontWeight: 500,
                        }}
                      >
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn-outline"
                    style={{ padding: "8px 16px", fontSize: 13 }}
                  >
                    Download Syllabus
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* TAB: SCHOLARSHIPS */}
          <div
            className={`tab-content ${
              activeTab === "scholarships" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Scholarships & Financial Aid</h2>
            <p style={{ color: "#4b5563", marginBottom: 24 }}>
              Goldenagete College offers various scholarship schemes to
              meritorious and deserving students. Last year, we awarded over NPR
              50 Lakhs in financial aid.
            </p>

            <div className="grid-3">
              {scholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    borderTop: `4px solid ${
                      scholarship.color === "yellow"
                        ? "#fbbf24"
                        : scholarship.color === "blue"
                        ? "#3b82f6"
                        : "#10b981"
                    }`,
                    background:
                      scholarship.color === "yellow" ? "#fffcf5" : "#fff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color:
                          scholarship.color === "yellow"
                            ? "#b45309"
                            : scholarship.color === "blue"
                            ? "#1e40af"
                            : "#15803d",
                      }}
                    >
                      {scholarship.title}
                    </h3>
                    <span
                      style={{
                        background:
                          scholarship.color === "yellow"
                            ? "#fcd34d"
                            : scholarship.color === "blue"
                            ? "#bfdbfe"
                            : "#bbf7d0",
                        fontSize: 12,
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 600,
                        color:
                          scholarship.color === "blue" ? "#1e3a8a" : "inherit",
                      }}
                    >
                      {scholarship.percentage}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#555",
                      marginBottom: 16,
                      flex: 1,
                    }}
                  >
                    {scholarship.description}
                  </p>
                  <hr
                    style={{
                      border: 0,
                      borderTop: "1px solid #e5e7eb",
                      marginBottom: 12,
                    }}
                  />
                  <div>
                    <h5
                      style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}
                    >
                      Eligibility:
                    </h5>
                    <ul className="check-list" style={{ fontSize: 13 }}>
                      {scholarship.eligibility.map((item, i) => (
                        <li key={i}>
                          <Check size={14} color="var(--success)" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAB: GALLERY */}
          <div
            className={`tab-content ${activeTab === "gallery" ? "active" : ""}`}
          >
            <h2 className="section-title">Campus Gallery</h2>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image.url} alt={image.caption} />
                  <div className="gallery-caption">{image.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TAB: REVIEWS */}
          <div
            className={`tab-content ${activeTab === "reviews" ? "active" : ""}`}
          >
            <h2 className="section-title">Student Reviews</h2>

            <div className="review-header-card">
              <div className="big-rating">
                <div className="score">4.8</div>
                <div className="stars">★★★★★</div>
                <div className="count">Based on 1,240 reviews</div>
              </div>
              <div className="rating-bars">
                {[
                  { label: "5 Star", width: "85%" },
                  { label: "4 Star", width: "10%" },
                  { label: "3 Star", width: "3%" },
                  { label: "2 Star", width: "1%" },
                  { label: "1 Star", width: "1%" },
                ].map((bar, index) => (
                  <div key={index} className="rating-bar-row">
                    <span>{bar.label}</span>
                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{ width: bar.width }}
                      ></div>
                    </div>
                    <span>{bar.width}</span>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="btn-outline">Write a Review</button>
              </div>
            </div>

            {/* Review List */}
            <div className="review-list">
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="reviewer-info">
                    <div
                      className="avatar"
                      style={{ background: review.avatarColor }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700 }}>
                        {review.name}
                      </h4>
                      <span style={{ fontSize: 12, color: "#6b7280" }}>
                        {review.role} • {review.time}
                      </span>
                    </div>
                    <div style={{ marginLeft: "auto", color: "var(--star)" }}>
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#374151" }}>
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="btn-outline"
              style={{ display: "block", margin: "20px auto", width: 200 }}
            >
              Load More Reviews
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="footer-grid">
            <div className="footer-col">
              <h2
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 15,
                }}
              >
                Goldenagete
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Empowering minds and shaping futures since 2005. Join us to be
                part of a legacy of excellence and innovation.
              </p>
              <div style={{ display: "flex", gap: 15 }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      background: "#374151",
                      borderRadius: "50%",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                {["About Us", "Admissions", "Events", "Alumni", "Career"].map(
                  (link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer-col">
              <h3>Academics</h3>
              <ul>
                {["Science & Tech", "Management", "Humanities", "Research"].map(
                  (link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul>
                <li>📍 Kamal Pokhari, Kathmandu</li>
                <li>📞 +977-1-4445555</li>
                <li>✉️ info@goldenagete.edu.np</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 Goldenagete International College. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
