"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Types
interface College {
  id: number;
  name: string;
  location: string;
  affiliation: string;
  type: string;
  courses: string[];
  cutoffs: {
    open: { scholarship: number; paying: number };
    reservation: { scholarship: number; paying: number };
  };
  fee: string;
  color: string;
}

interface PredictionResult extends College {
  chance: "High" | "Medium" | "Low";
  badgeColor: string;
  probabilityVal: number;
  effectiveCutoff: number;
}

interface UserData {
  exam: "cee" | "ioe";
  score: number;
  rank: number;
  category: string;
  seatType: "scholarship" | "paying";
  courses: string[];
  locations: string[];
}

// Mock Data
const medicalColleges: College[] = [
  {
    id: 101,
    name: "Maharajgunj Medical Campus (IOM)",
    location: "Kathmandu",
    affiliation: "TU",
    type: "Government",
    courses: ["MBBS", "BSc Nursing", "B.Optom"],
    cutoffs: {
      open: { scholarship: 165, paying: 150 },
      reservation: { scholarship: 145, paying: 130 },
    },
    fee: "42L (Paying)",
    color: "bg-yellow-600",
  },
  {
    id: 102,
    name: "BP Koirala Inst. of Health Sci (BPKIHS)",
    location: "Dharan",
    affiliation: "Independent",
    type: "Government",
    courses: ["MBBS", "BDS"],
    cutoffs: {
      open: { scholarship: 162, paying: 145 },
      reservation: { scholarship: 140, paying: 125 },
    },
    fee: "55L (Paying)",
    color: "bg-blue-800",
  },
  {
    id: 103,
    name: "Patan Academy of Health Sciences (PAHS)",
    location: "Kathmandu",
    affiliation: "Independent",
    type: "Government",
    courses: ["MBBS", "BSc Nursing"],
    cutoffs: {
      open: { scholarship: 158, paying: 142 },
      reservation: { scholarship: 135, paying: 120 },
    },
    fee: "40L (Paying)",
    color: "bg-teal-700",
  },
  {
    id: 104,
    name: "Kathmandu University (KUSMS)",
    location: "Dhulikhel",
    affiliation: "KU",
    type: "Private",
    courses: ["MBBS", "BDS", "BPT"],
    cutoffs: {
      open: { scholarship: 155, paying: 135 },
      reservation: { scholarship: 130, paying: 110 },
    },
    fee: "45L (Paying)",
    color: "bg-orange-600",
  },
  {
    id: 105,
    name: "Karnali Academy (KAHS)",
    location: "Jumla",
    affiliation: "Independent",
    type: "Government",
    courses: ["MBBS", "BPH"],
    cutoffs: {
      open: { scholarship: 145, paying: 120 },
      reservation: { scholarship: 110, paying: 90 },
    },
    fee: "38L (Paying)",
    color: "bg-indigo-600",
  },
  {
    id: 106,
    name: "Chitwan Medical College (CMC)",
    location: "Chitwan",
    affiliation: "TU",
    type: "Private",
    courses: ["MBBS", "BSc Nursing", "BPH"],
    cutoffs: {
      open: { scholarship: 150, paying: 115 },
      reservation: { scholarship: 125, paying: 90 },
    },
    fee: "48L (Paying)",
    color: "bg-red-600",
  },
  {
    id: 107,
    name: "Manipal College of Medical Sciences",
    location: "Pokhara",
    affiliation: "KU",
    type: "Private",
    courses: ["MBBS", "BSc Nursing"],
    cutoffs: {
      open: { scholarship: 152, paying: 120 },
      reservation: { scholarship: 128, paying: 95 },
    },
    fee: "50L (Paying)",
    color: "bg-green-700",
  },
];

const engineeringColleges: College[] = [
  {
    id: 201,
    name: "Pulchowk Campus (IOE)",
    location: "Kathmandu",
    affiliation: "TU",
    type: "Government",
    courses: ["BE Computer", "BE Civil", "B.Arch"],
    cutoffs: {
      open: { scholarship: 115, paying: 95 },
      reservation: { scholarship: 90, paying: 75 },
    },
    fee: "3.5L (Paying)",
    color: "bg-red-700",
  },
  {
    id: 202,
    name: "Thapathali Campus",
    location: "Kathmandu",
    affiliation: "TU",
    type: "Government",
    courses: ["BE Civil", "BE Electronics", "BE Mech"],
    cutoffs: {
      open: { scholarship: 100, paying: 80 },
      reservation: { scholarship: 75, paying: 60 },
    },
    fee: "3.5L (Paying)",
    color: "bg-blue-600",
  },
  {
    id: 203,
    name: "Kathmandu University (SOE)",
    location: "Dhulikhel",
    affiliation: "KU",
    type: "Private",
    courses: ["BE Computer", "BE Civil"],
    cutoffs: {
      open: { scholarship: 110, paying: 85 },
      reservation: { scholarship: 85, paying: 70 },
    },
    fee: "8L (Paying)",
    color: "bg-orange-600",
  },
  {
    id: 204,
    name: "Paschimanchal Campus (WRC)",
    location: "Pokhara",
    affiliation: "TU",
    type: "Government",
    courses: ["BE Civil", "BE Computer", "BE Geomatics"],
    cutoffs: {
      open: { scholarship: 95, paying: 75 },
      reservation: { scholarship: 70, paying: 55 },
    },
    fee: "3.5L (Paying)",
    color: "bg-green-600",
  },
];

export default function PredictorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    exam: "cee",
    score: 0,
    rank: 0,
    category: "open",
    seatType: "paying",
    courses: [],
    locations: ["Kathmandu"],
  });
  const [predictions, setPredictions] = useState<PredictionResult[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);

  const ceeMaxScore = 200;
  const ioeMaxScore = 140;

  const ceeCourses = [
    "MBBS",
    "BDS",
    "BSc Nursing",
    "BPH (Public Health)",
    "B.Optom",
    "B.Pharmacy",
  ];
  const ioeCourses = [
    "BE Computer",
    "BE Civil",
    "B.Arch",
    "BE Electronics",
    "BE Mechanical",
  ];

  const locations = ["Kathmandu", "Dharan", "Chitwan", "Pokhara", "Jumla"];

  useEffect(() => {
    // Initialize with default course
    setUserData((prev) => ({
      ...prev,
      courses: userData.exam === "cee" ? ["MBBS"] : ["BE Computer"],
    }));
  }, [userData.exam]);

  const goToStep = (step: number) => {
    if (step === 2 && currentStep === 1) {
      if (!userData.score || userData.score <= 0) {
        alert("Please enter your entrance score.");
        return;
      }
    }
    setCurrentStep(step);
    window.scrollTo(0, 0);
  };

  const runPrediction = () => {
    const dataset =
      userData.exam === "cee" ? medicalColleges : engineeringColleges;

    const results: PredictionResult[] = dataset
      .map((college) => {
        let cutoff = 0;

        if (userData.category === "open") {
          cutoff = college.cutoffs.open[userData.seatType];
        } else {
          cutoff = college.cutoffs.reservation[userData.seatType];
        }

        const diff = userData.score - cutoff;
        let chance: "High" | "Medium" | "Low" = "Low";
        let badgeColor = "bg-red-100 text-red-700 border-red-200";
        let probabilityVal = 1;

        if (diff >= 5) {
          chance = "High";
          badgeColor = "bg-green-100 text-green-700 border-green-200";
          probabilityVal = 3;
        } else if (diff >= -5) {
          chance = "Medium";
          badgeColor = "bg-yellow-100 text-yellow-700 border-yellow-200";
          probabilityVal = 2;
        }

        return {
          ...college,
          chance,
          badgeColor,
          probabilityVal,
          effectiveCutoff: cutoff,
        };
      })
      .sort((a, b) => b.probabilityVal - a.probabilityVal);

    setPredictions(results);
    goToStep(3);
  };

  const toggleCompare = (id: number, checked: boolean) => {
    if (checked) {
      if (compareList.length >= 4) {
        alert("Max 4 colleges allowed.");
        return false;
      }
      setCompareList([...compareList, id]);
    } else {
      setCompareList(compareList.filter((item) => item !== id));
    }
    return true;
  };

  const clearComparison = () => {
    setCompareList([]);
  };

  const toggleCourse = (course: string) => {
    setUserData((prev) => {
      const courses = prev.courses.includes(course)
        ? prev.courses.filter((c) => c !== course)
        : [...prev.courses, course];
      return { ...prev, courses };
    });
  };

  const toggleLocation = (location: string) => {
    setUserData((prev) => {
      const locations = prev.locations.includes(location)
        ? prev.locations.filter((l) => l !== location)
        : [...prev.locations, location];
      return { ...prev, locations };
    });
  };

  return (
    <div className="text-slate-800 min-h-screen flex flex-col bg-gray-50">


      {/* Main Content */}
      <main className="grow py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-8 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Nepal Entrance Predictor
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Targeting{" "}
              <span className="text-blue-700 font-semibold">CEE (Medical)</span>
              ,{" "}
              <span className="text-red-600 font-semibold">
                IOE (Engineering)
              </span>{" "}
              & Govt Exams.
            </p>
          </div>

          {/* Progress Stepper */}
          <div className="flex justify-between items-center max-w-md mx-auto mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

            {[
              { num: 1, label: "Score" },
              { num: 2, label: "Choices" },
              { num: 3, label: "Colleges" },
            ].map(({ num, label }) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full border-2 font-bold flex items-center justify-center text-sm mb-1 transition-all duration-300 ${
                    currentStep >= num
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {num}
                </div>
                <span
                  className={`text-xs font-medium bg-gray-50 px-1 ${
                    currentStep >= num
                      ? "text-blue-700 font-bold"
                      : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Entrance Score & Category */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fadeIn">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <i className="fa-solid fa-clipboard-check text-blue-700"></i>{" "}
                Entrance Exam Details
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  goToStep(2);
                }}
              >
                {/* Exam Type Toggle */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Entrance Exam
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="exam_type"
                        value="cee"
                        checked={userData.exam === "cee"}
                        onChange={(e) =>
                          setUserData({ ...userData, exam: "cee" })
                        }
                        className="peer sr-only"
                      />
                      <div className="rounded-xl border border-slate-200 p-4 text-center hover:bg-blue-50 peer-checked:border-blue-700 peer-checked:bg-blue-50 peer-checked:ring-1 peer-checked:ring-blue-700 transition">
                        <div className="font-bold text-slate-800 peer-checked:text-blue-700">
                          <i className="fa-solid fa-user-doctor mr-1"></i> CEE
                          (Medical)
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          MBBS, BDS, Nursing
                        </div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="exam_type"
                        value="ioe"
                        checked={userData.exam === "ioe"}
                        onChange={(e) =>
                          setUserData({ ...userData, exam: "ioe" })
                        }
                        className="peer sr-only"
                      />
                      <div className="rounded-xl border border-slate-200 p-4 text-center hover:bg-red-50 peer-checked:border-red-600 peer-checked:bg-red-50 peer-checked:ring-1 peer-checked:ring-red-600 transition">
                        <div className="font-bold text-slate-800 peer-checked:text-red-600">
                          <i className="fa-solid fa-hard-hat mr-1"></i> IOE
                          (Engg)
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          BE Computer, Civil, Arch
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Score Input */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Score{" "}
                      <span className="text-xs text-slate-400 font-normal">
                        (Max{" "}
                        {userData.exam === "cee" ? ceeMaxScore : ioeMaxScore})
                      </span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={userData.exam === "cee" ? ceeMaxScore : ioeMaxScore}
                      value={userData.score || ""}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          score: parseInt(e.target.value) || 0,
                        })
                      }
                      placeholder={
                        userData.exam === "cee" ? "e.g. 150" : "e.g. 95"
                      }
                      className="w-full rounded-lg border border-slate-300 py-3 pl-4 pr-4 font-semibold text-lg focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 transition"
                    />
                  </div>

                  {/* Rank Input */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Rank{" "}
                      <span className="text-slate-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-slate-400 text-sm">
                        #
                      </span>
                      <input
                        type="number"
                        min="1"
                        value={userData.rank || ""}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            rank: parseInt(e.target.value) || 0,
                          })
                        }
                        placeholder="e.g. 1200"
                        className="w-full rounded-lg border border-slate-300 py-3 pl-8 pr-4 text-lg focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Reservation Category */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Reservation Category
                  </label>
                  <select
                    value={userData.category}
                    onChange={(e) =>
                      setUserData({ ...userData, category: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-300 py-3 px-4 bg-white focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition"
                  >
                    <option value="open">Open (General)</option>
                    <option value="female">Female</option>
                    <option value="janajati">Janajati</option>
                    <option value="dalit">Dalit</option>
                    <option value="madheshi">Madheshi</option>
                    <option value="remote">Remote Area (Pichhadiyeko)</option>
                    <option value="martyr">Martyr&apos;s Family</option>
                  </select>
                  <p className="text-xs text-slate-500 mt-2 bg-blue-50 inline-block px-2 py-1 rounded">
                    <i className="fa-solid fa-circle-info mr-1"></i> Selecting a
                    category adjusts cutoff predictions.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-blue-200 flex justify-center items-center gap-2"
                >
                  Next: Course Choices{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          )}

          {/* STEP 2: Preferences */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-orange-600"></i>{" "}
                  Preferences
                </h3>
                <button
                  onClick={() => goToStep(1)}
                  className="text-sm text-slate-500 hover:text-blue-700"
                >
                  <i className="fa-solid fa-arrow-left"></i> Back
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runPrediction();
                }}
              >
                {/* Course Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Courses
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(userData.exam === "cee" ? ceeCourses : ioeCourses).map(
                      (course) => (
                        <label key={course} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={userData.courses.includes(course)}
                            onChange={() => toggleCourse(course)}
                            className="peer sr-only"
                          />
                          <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium peer-checked:bg-blue-100 peer-checked:text-blue-700 peer-checked:border-blue-700 border border-transparent transition">
                            {course}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Seat Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Seat Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="seat_type"
                        value="scholarship"
                        checked={userData.seatType === "scholarship"}
                        onChange={(e) =>
                          setUserData({ ...userData, seatType: "scholarship" })
                        }
                        className="peer sr-only"
                      />
                      <div className="rounded-lg border border-slate-200 p-3 text-center hover:bg-green-50 peer-checked:border-green-600 peer-checked:bg-green-50 peer-checked:text-green-600 transition">
                        <i className="fa-solid fa-medal mb-1"></i>
                        <div className="text-sm font-bold">Scholarship</div>
                        <div className="text-xs opacity-75">Govt Funded</div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="seat_type"
                        value="paying"
                        checked={userData.seatType === "paying"}
                        onChange={(e) =>
                          setUserData({ ...userData, seatType: "paying" })
                        }
                        className="peer sr-only"
                      />
                      <div className="rounded-lg border border-slate-200 p-3 text-center hover:bg-blue-50 peer-checked:border-blue-700 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition">
                        <i className="fa-solid fa-wallet mb-1"></i>
                        <div className="text-sm font-bold">Paying</div>
                        <div className="text-xs opacity-75">Self Financed</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Region
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <label key={location} className="cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userData.locations.includes(location)}
                          onChange={() => toggleLocation(location)}
                          className="peer sr-only"
                        />
                        <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium peer-checked:bg-blue-100 peer-checked:text-blue-700 border border-transparent transition">
                          {location === "Jumla" ? "Jumla (KAHS)" : location}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-orange-200 flex justify-center items-center gap-2"
                >
                  <i className="fa-solid fa-wand-magic-sparkles"></i> Predict
                  Colleges
                </button>
              </form>
            </div>
          )}

          {/* STEP 3: Results */}
          {currentStep === 3 && (
            <div className="animate-fadeIn pb-20">
              {/* Results Header */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex justify-between items-center">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Prediction for
                  </div>
                  <div className="font-bold text-blue-700">
                    <span>{userData.exam.toUpperCase()}</span> Score:{" "}
                    <span>{userData.score}</span>{" "}
                    <span className="text-xs bg-white px-2 py-0.5 rounded ml-1 text-slate-600 border border-slate-200">
                      {userData.category.charAt(0).toUpperCase() +
                        userData.category.slice(1)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => goToStep(1)}
                  className="text-sm font-medium text-slate-500 underline hover:text-blue-700"
                >
                  Change
                </button>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">
                  Best Fit Colleges{" "}
                  <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full ml-1">
                    {predictions.filter((p) => p.probabilityVal > 1).length}{" "}
                    High/Med Chance
                  </span>
                </h3>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 gap-4">
                {predictions.map((college) => (
                  <div
                    key={college.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition"
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className={`w-14 h-14 rounded-lg ${college.color} flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm`}
                      >
                        {college.name.charAt(0)}
                      </div>

                      <div className="grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded border ${college.badgeColor}`}
                          >
                            {college.chance} Probability
                          </span>
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            Cutoff: ~{college.effectiveCutoff}
                          </span>
                        </div>

                        <h4 className="font-bold text-slate-800 text-lg leading-tight mb-1">
                          {college.name}
                        </h4>
                        <p className="text-sm text-slate-500 mb-3">
                          <i className="fa-solid fa-location-dot mr-1"></i>{" "}
                          {college.location} • {college.affiliation}
                        </p>

                        <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                          <div>
                            <span className="font-medium text-slate-800">
                              Fee:
                            </span>{" "}
                            {college.fee}
                          </div>
                          <div>
                            <span className="font-medium text-slate-800">
                              Type:
                            </span>{" "}
                            {college.type}
                          </div>
                          <div className="col-span-2 mt-1 border-t border-slate-200 pt-1">
                            <span className="font-medium text-slate-800">
                              Programs:
                            </span>{" "}
                            {college.courses.join(", ")}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <label className="flex items-center space-x-2 cursor-pointer text-sm text-slate-500 hover:text-blue-700 transition">
                            <input
                              type="checkbox"
                              checked={compareList.includes(college.id)}
                              onChange={(e) => {
                                if (
                                  !toggleCompare(college.id, e.target.checked)
                                ) {
                                  e.target.checked = false;
                                }
                              }}
                              className="form-checkbox h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700"
                            />
                            <span>Compare</span>
                          </label>

                          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition shadow-sm">
                            View Cutoffs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-2">
                  Need Help with Priority Order?
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Setting the correct priority order in the MEC matching form is
                  crucial. Chat with us.
                </p>
                <button className="bg-blue-700 text-white hover:bg-blue-800 font-medium py-2 px-6 rounded-lg transition">
                  <i className="fa-brands fa-whatsapp mr-2"></i>Chat with
                  Counselor
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Comparison Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transform transition-transform duration-300 z-40 ${
          compareList.length > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-blue-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {compareList.length}
            </span>
            <span className="text-sm font-medium text-slate-700">Selected</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={clearComparison}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium"
            >
              Clear
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}
