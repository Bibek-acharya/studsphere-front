"use client"

export default function SocialLoginButtons() {
  return (
    <div className="flex justify-center gap-4">
      {/* Google */}
      <button
        type="button"
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
        aria-label="Sign up with Google"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fontWeight="bold">
            G
          </text>
        </svg>
      </button>

      {/* Apple */}
      <button
        type="button"
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
        aria-label="Sign up with Apple"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.06-.93 3.32-.84 1.34.12 2.37.72 3.04 1.8-2.87 1.77-2.38 5.74.48 6.86-.60 1.25-1.42 2.16-2.92 2.59z" />
        </svg>
      </button>

      {/* Facebook */}
      <button
        type="button"
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
        aria-label="Sign up with Facebook"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>
    </div>
  )
}
