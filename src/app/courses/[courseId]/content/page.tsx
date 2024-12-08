import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { CourseNav } from "@/components/course-nav";
import { FileText, Video, LinkIcon } from "lucide-react";

const contentItems = [
  { id: 1, title: "Week 1: Introduction to HCI", type: "pdf", icon: FileText },
  {
    id: 2,
    title: "Lecture 1: Fundamentals of User Interfaces",
    type: "video",
    icon: Video,
  },
  {
    id: 3,
    title: "Required Reading: Norman's Design Principles",
    type: "link",
    icon: LinkIcon,
  },
  { id: 4, title: "Week 2: User-Centered Design", type: "pdf", icon: FileText },
  {
    id: 5,
    title: "Lecture 2: Usability Heuristics",
    type: "video",
    icon: Video,
  },
];

export default function ContentPage({
  params,
}: {
  params: { courseId: string };
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <CourseNav courseId={params.courseId} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">{params.courseId} - Content</h1>

        <div className="space-y-3">
          {contentItems.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              className="w-full justify-start p-4 bg-[#FFF5EB] hover:bg-[#FFE8D1]"
            >
              <item.icon className="mr-2 h-5 w-5" />
              <span>{item.title}</span>
            </Button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
