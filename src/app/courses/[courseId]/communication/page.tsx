import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BottomNav } from '@/components/bottom-nav'
import { TopNav } from '@/components/top-nav'
import { Send } from 'lucide-react'

const messages = [
  { id: 1, sender: 'Prof. Smith', content: 'Welcome to the course! Please introduce yourselves.', timestamp: '2 days ago' },
  { id: 2, sender: 'John Doe', content: 'Hi everyone! I\'m John, a third-year CS student.', timestamp: '1 day ago' },
  { id: 3, sender: 'Jane Smith', content: 'Hello! I\'m Jane, excited to learn about HCI!', timestamp: '1 day ago' },
  { id: 4, sender: 'Prof. Smith', content: 'Great to see you all! Our first lecture will be on Monday.', timestamp: '5 hours ago' }
]

export default function CommunicationPage({ params }: { params: { courseId: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <TopNav title={`${params.courseId} - Communication`} backLink={`/courses/${params.courseId}`} />
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="bg-[#FFF5EB] p-3 rounded-lg">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold">{message.sender}</span>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p>{message.content}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <Input placeholder="Type your message..." className="flex-1 mr-2" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

