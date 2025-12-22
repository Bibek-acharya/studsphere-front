"use client"

import { X, Settings } from "lucide-react"

interface NotificationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  if (!isOpen) return null

  const notifications = [
    {
      id: 1,
      title: "New features added",
      description: "explore the updated dashboard.",
      time: "8m ago",
      category: "Product",
      avatar: "bg-blue-500"
    },
    {
      id: 2,
      title: "New features added",
      description: "explore the updated dashboard.",
      time: "8m ago",
      category: "Academics",
      avatar: "bg-pink-500"
    },
    {
      id: 3,
      title: "New features added",
      description: "explore the updated dashboard.",
      time: "8m ago",
      category: "Finance",
      avatar: "bg-green-500"
    },
    {
      id: 4,
      title: "New features added",
      description: "explore the updated dashboard.",
      time: "8m ago",
      category: "Academics",
      avatar: "bg-orange-400"
    }
  ]

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />

      <div className="fixed top-16 right-4 z-50 w-full max-w-sm">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Header */}
          <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">Notifications</h2>
              <p className="text-xs text-gray-500">You have <span className="font-semibold text-blue-600">3 unread</span> messages</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className={`${notification.avatar} w-10 h-10 rounded-full shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">Studsphere Team</p>
                        <p className="text-gray-600 text-sm line-clamp-2">{notification.title} - {notification.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      <span className="text-xs font-semibold text-blue-600">{notification.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Mark all as read
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Settings className="h-4 w-4" />
              <span>Manage Notification</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
