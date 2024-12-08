"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { TopNav } from "@/components/top-nav";

const courses = [
  { id: "4HC3", name: "Human Computer Interfaces", pinned: false },
  { id: "4X03", name: "Scientific Computation", pinned: false },
  { id: "4ML3", name: "Machine Learning", pinned: false },
  { id: "3AB3", name: "Data Structures and Algorithms", pinned: false },
  { id: "4G06", name: "Software Design IV - Capstone Project", pinned: false },
  { id: "3DB3", name: "Databases", pinned: false },
];

export default function CoursesPage() {
  const [pinnedCourses, setPinnedCourses] = useState<string[]>([]);

  const togglePin = (courseId: string) => {
    setPinnedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <TopNav title="Courses" />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between p-4 bg-[#FFF5EB] rounded-lg"
            >
              <Link
                href={`/courses/${course.id}`}
                className="flex items-center flex-1"
              >
                <div className="w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center text-white">
                  {course.id[0]}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{course.id}</div>
                  <div className="text-sm text-gray-600">{course.name}</div>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => togglePin(course.id)}
                className="text-gray-500"
              >
                <Bookmark
                  className={
                    pinnedCourses.includes(course.id) ? "fill-current" : ""
                  }
                />
              </Button>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
