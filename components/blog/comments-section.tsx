"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Info } from "lucide-react"
import { useState } from "react"

const mockComments = [
  {
    id: 1,
    author: "Rohan Sharma",
    avatar: "R",
    time: "2 days ago",
    content:
      "This extension is really helpful. I was having issues with document upload due to internet connectivity problems in my area.",
    likes: 8,
  },
]

export default function CommentsSection() {
  const [comment, setComment] = useState("")
  const [comments] = useState(mockComments)

  const handlePostComment = () => {
    if (comment.trim()) {
      // In production, send to API
      console.log("Posting comment:", comment)
      setComment("")
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-black">Comments & Discussion</h3>
      </div>

      {/* Comment Input */}
      <div className="mb-8">
        <Textarea
          placeholder="Join the discussion..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-32 mb-3 resize-none border-gray-300 focus:border-blue-600 focus:ring-blue-600"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Info className="w-4 h-4" />
            <span>Please keep comments respectful</span>
          </div>
          <Button onClick={handlePostComment} className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-4 border-blue-600 pl-6 py-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-semibold">{comment.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-black">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.time}</span>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
