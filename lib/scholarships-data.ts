import { Scholarship } from "@/types/scholarship"

export const scholarshipsData: Scholarship[] = [
  {
    id: "full-scholarship-deserving-students",
    title: "Full Scholarship for Deserving Students",
    subtitle: "Get financial support to continue your education without worrying about fees, accommodation, or meals.",
    status: "open",
    shortDescription: "Complete financial support for academically capable but financially disadvantaged students in Nepal.",
    overview: {
      description: [
        "This scholarship program is designed to support academically capable but financially disadvantaged students. The goal is to ensure that no talented student is deprived of education due to financial constraints.",
        "The scholarship focuses on equal access to education, especially for students from remote, marginalized, and underprivileged communities."
      ],
      highlights: [
        "Supports remote & marginalized students",
        "Merit and Need-based selection",
        "Applicable for Science, Mgmt & Humanities"
      ]
    },
    benefits: [
      {
        icon: "money-bill-wave",
        title: "100% Tuition Fee",
        description: "Full coverage of college/university tuition fees for the entire duration.",
        color: "blue"
      },
      {
        icon: "bed",
        title: "Hostel & Accommodation",
        description: "Free lodging facilities or monthly stipend for accommodation.",
        color: "orange"
      },
      {
        icon: "utensils",
        title: "Daily Meals Support",
        description: "Nutritious meals provided daily or a food allowance included.",
        color: "green"
      },
      {
        icon: "book-open",
        title: "Study Materials",
        description: "Books, stationery, and exam fees covered by the program.",
        color: "purple"
      },
      {
        icon: "user-tie",
        title: "Mentorship",
        description: "Regular guidance from industry experts and career counseling.",
        color: "pink"
      },
      {
        icon: "briefcase",
        title: "Skill Development",
        description: "Access to internships, workshops, and soft-skills training.",
        color: "teal"
      }
    ],
    eligibility: [
      { text: "Be a citizen of Nepal." },
      { text: "Have completed SEE / +2 / Bachelor (as applicable)." },
      { text: "Come from a financially disadvantaged background." },
      { text: "Show strong academic potential (GPA/Grades)." },
      { text: "Be willing to follow scholarship rules & guidelines." }
    ],
    requiredDocuments: [
      { icon: "certificate", label: "Academic Certificates" },
      { icon: "id-card", label: "Citizenship Copy" },
      { icon: "image", label: "Passport Photo" },
      { icon: "file-invoice-dollar", label: "Income Verification" },
      { icon: "pen-nib", label: "Motivation Letter / Personal Statement" }
    ],
    selectionProcess: [
      {
        stepNumber: 1,
        title: "Online Application",
        description: "Complete the digital form and upload scanned copies of required documents."
      },
      {
        stepNumber: 2,
        title: "Document Verification",
        description: "Our team verifies the authenticity of your submitted academic and financial documents."
      },
      {
        stepNumber: 3,
        title: "Written Exam (If Applicable)",
        description: "Depending on the course, you may need to sit for an aptitude or subject test."
      },
      {
        stepNumber: 4,
        title: "Interview",
        description: "A personal interview to assess your motivation, goals, and background."
      },
      {
        stepNumber: 5,
        title: "Final Announcement",
        description: "Successful candidates are notified and scholarship letters are issued.",
        isFinal: true
      }
    ],
    institutions: {
      title: "Available Institutions",
      description: "This scholarship is applicable in collaboration with top-tier educational bodies.",
      list: [
        "Government & Private Colleges",
        "Universities across Nepal",
        "Partner Hostels & Training Centers"
      ]
    },
    importantDates: [
      { label: "Application Opens", date: "Jan 15, 2025", type: "success" },
      { label: "Application Deadline", date: "Feb 28, 2025", type: "danger" },
      { label: "Exam / Interview", date: "March 10-15", type: "default" },
      { label: "Result Publication", date: "March 20", type: "default" }
    ],
    studentsSupported: 5000
  }
]

export function getScholarshipById(id: string): Scholarship | undefined {
  return scholarshipsData.find(scholarship => scholarship.id === id)
}

export function getAllScholarships(): Scholarship[] {
  return scholarshipsData
}
