"use client";

import { useState } from "react";
import { MapPin, Star, Check, Building2, Users, Award } from "lucide-react";
import Link from "next/link";

// Mock data - Replace with actual API call
const getUniversityData = (universityId: string) => {
  const universities: Record<
    string,
    {
      name: string;
      fullName: string;
      description: string;
      location: string;
      established: number;
      rating: number;
      totalColleges: number;
      totalStudents: string;
      website: string;
    }
  > = {
    tu: {
      name: "TU",
      fullName: "Tribhuvan University",
      description:
        "The first national institution of higher education in Nepal",
      location: "Kirtipur, Kathmandu, Nepal",
      established: 1959,
      rating: 4.6,
      totalColleges: 1084,
      totalStudents: "600,000+",
      website: "www.tribhuvan-university.edu.np",
    },
    ku: {
      name: "KU",
      fullName: "Kathmandu University",
      description:
        "An autonomous, not-for-profit, self-funding public institution",
      location: "Dhulikhel, Kavre, Nepal",
      established: 1991,
      rating: 4.8,
      totalColleges: 14,
      totalStudents: "18,000+",
      website: "www.ku.edu.np",
    },
    pu: {
      name: "PU",
      fullName: "Pokhara University",
      description: "A university located in the beautiful city of Pokhara",
      location: "Pokhara-30, Kaski, Nepal",
      established: 1997,
      rating: 4.5,
      totalColleges: 76,
      totalStudents: "50,000+",
      website: "www.pu.edu.np",
    },
    ppu: {
      name: "PPU",
      fullName: "Purbanchal University",
      description: "Focusing on science, technology and professional studies",
      location: "Biratnagar, Morang, Nepal",
      established: 1993,
      rating: 4.4,
      totalColleges: 108,
      totalStudents: "40,000+",
      website: "www.purbuniv.edu.np",
    },
  };

  return universities[universityId] || universities.tu;
};

const getAffiliatedColleges = () => {
  return [
    {
      id: 1,
      name: "Pulchowk Engineering Campus",
      location: "Pulchowk, Lalitpur",
      type: "Public",
      rating: 4.8,
      programs: ["BE Civil", "BE Computer", "BE Electronics"],
      students: "2,500+",
      established: 1972,
    },
    {
      id: 2,
      name: "Institute of Engineering, Thapathali",
      location: "Thapathali, Kathmandu",
      type: "Public",
      rating: 4.7,
      programs: ["BE Civil", "BE Architecture", "BE Mechanical"],
      students: "2,000+",
      established: 1974,
    },
    {
      id: 3,
      name: "KIST College",
      location: "Kamalpokhari, Kathmandu",
      type: "Private",
      rating: 4.5,
      programs: ["BE Computer", "BCA", "MBA"],
      students: "1,500+",
      established: 1998,
    },
    {
      id: 4,
      name: "Kathmandu Engineering College",
      location: "Kalimati, Kathmandu",
      type: "Private",
      rating: 4.4,
      programs: ["BE Civil", "BE Computer", "BE Electronics"],
      students: "1,200+",
      established: 2000,
    },
    {
      id: 5,
      name: "Nepal College of Information Technology",
      location: "Balkumari, Lalitpur",
      type: "Private",
      rating: 4.6,
      programs: ["BE Computer", "BIT", "BSc CSIT"],
      students: "1,800+",
      established: 2001,
    },
    {
      id: 6,
      name: "Apex College",
      location: "Mid-Baneshwor, Kathmandu",
      type: "Private",
      rating: 4.5,
      programs: ["BBA", "BCA", "MBA"],
      students: "2,200+",
      established: 1997,
    },
  ];
};

export default function UniversityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const university = getUniversityData(params.id);
  const affiliatedColleges = getAffiliatedColleges();
  const [activeTab, setActiveTab] = useState("about");

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
          background-image: url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
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

        .university-title {
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

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
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

        .college-card {
          border-left: 4px solid var(--primary-blue);
          cursor: pointer;
        }

        .college-card:hover {
          border-left-color: var(--primary-hover);
          background: #f9fafb;
        }

        .college-card-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 12px;
        }

        .college-name {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .college-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 14px;
          color: var(--text-gray);
          margin-bottom: 12px;
        }

        .college-programs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }

        .program-badge {
          background: #eff6ff;
          color: #1d4ed8;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .type-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .type-public {
          background: #dcfce7;
          color: #166534;
        }

        .type-private {
          background: #fef3c7;
          color: #92400e;
        }

        .stat-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 24px;
          border-radius: 12px;
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          opacity: 0.9;
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
          .university-title {
            font-size: 26px;
          }
          .section-title {
            font-size: 22px;
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
          .university-title {
            justify-content: center;
            flex-direction: column;
            gap: 5px;
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
              width="80"
              height="80"
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
            <h1 className="university-title">
              {university.fullName}
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
                {university.location}
              </span>
              <span className="rating-pill">
                <Star size={14} fill="#b45309" />
                {university.rating} Rating
              </span>
              <a
                href={`https://${university.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary-blue)", fontWeight: 500 }}
              >
                {university.website} ↗
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
              {university.totalStudents} Students Enrolled
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-outline">View Colleges</button>
              <button className="btn-primary">Explore Programs</button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          {["about", "colleges", "programs", "statistics", "admission"].map(
            (tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Main Content Area */}
        <div className="content-area">
          {/* TAB: ABOUT */}
          <div
            className={`tab-content ${activeTab === "about" ? "active" : ""}`}
          >
            <h2 className="section-title">About {university.fullName}</h2>
            <p style={{ color: "#4b5563", marginBottom: 30, fontSize: 16 }}>
              {university.description}. Established in {university.established},
              the university has been a cornerstone of higher education in
              Nepal, providing quality education across various disciplines and
              fostering academic excellence.
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
                  🎓 Vision & Mission
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  To be recognized as the epicenter for modern education,
                  producing competent and globally minded leaders who contribute
                  to society.
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
                  🏆 Key Achievements
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  Recognized nationally and internationally for academic
                  excellence, research contributions, and producing skilled
                  professionals.
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
                  🌍 Global Reach
                </h3>
                <p style={{ fontSize: 14, color: "#666" }}>
                  Partnerships with international universities, student exchange
                  programs, and collaboration on research projects worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* TAB: AFFILIATED COLLEGES */}
          <div
            className={`tab-content ${
              activeTab === "colleges" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Affiliated Colleges</h2>
            <p style={{ color: "#4b5563", marginBottom: 30, fontSize: 16 }}>
              Explore the {university.totalColleges}+ colleges affiliated with{" "}
              {university.fullName}. Click on any college to view detailed
              information.
            </p>

            <div className="grid-3">
              {affiliatedColleges.map((college) => (
                <Link
                  key={college.id}
                  href={`/colleges/colleges/${college.id}`}
                  className="card college-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="college-card-header">
                    <div>
                      <div className="college-name">{college.name}</div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "#6b7280",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <MapPin size={14} />
                        {college.location}
                      </div>
                    </div>
                    <span
                      className={`type-badge ${
                        college.type === "Public"
                          ? "type-public"
                          : "type-private"
                      }`}
                    >
                      {college.type}
                    </span>
                  </div>

                  <div className="college-meta">
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <Star size={14} fill="#fbbf24" color="#fbbf24" />
                      {college.rating}
                    </span>
                    <span>•</span>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 4 }}
                    >
                      <Users size={14} />
                      {college.students}
                    </span>
                    <span>•</span>
                    <span>Est. {college.established}</span>
                  </div>

                  <div className="college-programs">
                    {college.programs.slice(0, 3).map((program, idx) => (
                      <span key={idx} className="program-badge">
                        {program}
                      </span>
                    ))}
                    {college.programs.length > 3 && (
                      <span className="program-badge">
                        +{college.programs.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 40, textAlign: "center" }}>
              <Link
                href={`/colleges/colleges?university=${university.name}`}
                className="btn-primary"
              >
                View All {university.totalColleges}+ Colleges
              </Link>
            </div>
          </div>

          {/* TAB: PROGRAMS */}
          <div
            className={`tab-content ${
              activeTab === "programs" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Academic Programs</h2>
            <p style={{ color: "#4b5563", marginBottom: 30, fontSize: 16 }}>
              {university.fullName} offers a wide range of programs across
              various faculties and disciplines.
            </p>

            <div className="grid-3">
              {[
                {
                  faculty: "Science & Technology",
                  programs: [
                    "BSc Computer Science",
                    "BSc Physics",
                    "BSc Chemistry",
                    "MSc",
                  ],
                  color: "#3b82f6",
                },
                {
                  faculty: "Engineering",
                  programs: [
                    "BE Civil",
                    "BE Computer",
                    "BE Electronics",
                    "ME Structural",
                  ],
                  color: "#10b981",
                },
                {
                  faculty: "Management",
                  programs: ["BBA", "BBS", "MBA", "MBS"],
                  color: "#f59e0b",
                },
                {
                  faculty: "Humanities & Social Sciences",
                  programs: ["BA", "MA", "MSW", "BSW"],
                  color: "#8b5cf6",
                },
                {
                  faculty: "Education",
                  programs: ["B.Ed", "M.Ed", "MPhil", "PhD"],
                  color: "#ec4899",
                },
                {
                  faculty: "Law",
                  programs: ["BA LLB", "LLB", "LLM"],
                  color: "#06b6d4",
                },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: 16,
                      color: item.color,
                    }}
                  >
                    {item.faculty}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {item.programs.map((program, pidx) => (
                      <li
                        key={pidx}
                        style={{
                          fontSize: 14,
                          color: "#6b7280",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Check size={16} color={item.color} />
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TAB: STATISTICS */}
          <div
            className={`tab-content ${
              activeTab === "statistics" ? "active" : ""
            }`}
          >
            <h2 className="section-title">University Statistics</h2>

            <div className="grid-3">
              <div className="stat-box">
                <div className="stat-number">{university.totalColleges}+</div>
                <div className="stat-label">Affiliated Colleges</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{university.totalStudents}</div>
                <div className="stat-label">Total Students</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{university.established}</div>
                <div className="stat-label">Year Established</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100+</div>
                <div className="stat-label">Academic Programs</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Faculty Members</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{university.rating}/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>

          {/* TAB: ADMISSION */}
          <div
            className={`tab-content ${
              activeTab === "admission" ? "active" : ""
            }`}
          >
            <h2 className="section-title">Admission Information</h2>
            <p style={{ color: "#4b5563", marginBottom: 30, fontSize: 16 }}>
              Learn about the admission process for programs offered under{" "}
              {university.fullName}.
            </p>

            <div className="card" style={{ marginBottom: 30 }}>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 16,
                  color: "var(--text-dark)",
                }}
              >
                General Admission Requirements
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <li style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <Check size={20} color="var(--success)" />
                  <span style={{ fontSize: 15, color: "#4b5563" }}>
                    Completion of previous level education with required GPA
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <Check size={20} color="var(--success)" />
                  <span style={{ fontSize: 15, color: "#4b5563" }}>
                    Pass university entrance examination
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <Check size={20} color="var(--success)" />
                  <span style={{ fontSize: 15, color: "#4b5563" }}>
                    Submit required documents and application forms
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <Check size={20} color="var(--success)" />
                  <span style={{ fontSize: 15, color: "#4b5563" }}>
                    Attend interview (for selected programs)
                  </span>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#eff6ff",
                padding: 24,
                borderRadius: 12,
                borderLeft: "4px solid var(--primary-blue)",
              }}
            >
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                📝 Important Note
              </h4>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0 }}>
                Admission requirements may vary by program and affiliated
                college. Please visit the specific college page or contact them
                directly for detailed information about your desired program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
