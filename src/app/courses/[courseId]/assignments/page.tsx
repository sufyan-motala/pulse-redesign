import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { CourseNav } from "@/components/course-nav";
import { Calendar, Clock } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Assignment 1: User Research",
    dueDate: "Oct 15, 2024",
    timeLeft: "2 weeks",
  },
  {
    id: 2,
    title: "Assignment 2: Prototyping",
    dueDate: "Nov 1, 2024",
    timeLeft: "4 weeks",
  },
  {
    id: 3,
    title: "Midterm Project: UX Analysis",
    dueDate: "Nov 20, 2024",
    timeLeft: "6 weeks",
  },
  {
    id: 4,
    title: "Assignment 3: Usability Testing",
    dueDate: "Dec 5, 2024",
    timeLeft: "8 weeks",
  },
  {
    id: 5,
    title: "Final Project: Redesign",
    dueDate: "Dec 20, 2024",
    timeLeft: "10 weeks",
  },
];

export default function AssignmentsPage({
  params,
}: {
  params: { courseId: string };
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <CourseNav courseId={params.courseId} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">
          {params.courseId} - Assignments
        </h1>

        <div className="space-y-3">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-[#FFF5EB] p-4 rounded-lg">
              <h2 className="font-semibold text-lg mb-2">{assignment.title}</h2>
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>Due: {assignment.dueDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Time left: {assignment.timeLeft}</span>
                </div>
              </div>
              <Button className="mt-3 w-full">View Details</Button>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
