"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Filter, ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { CourseNav } from "@/components/course-nav";

const notifications = [
  {
    id: 1,
    title: "Assignment 2: Due Soon",
    content:
      "The second assignment for this course is due soon. Make sure to submit it on time.",
    dueDate: "November 28th, 2024",
    coverage: "Lecture 9 to Lecture 12",
    weight: "20% of final grade",
    hint: "Take a look at the previous years assignments for guidance.",
  },
  {
    id: 2,
    title: "M1: Grade Updated",
    content:
      "Your grade for Midterm 1 has been updated. Check your results in the grades section.",
    date: "November 15th, 2024",
  },
  {
    id: 3,
    title: "Q1: Grade Updated",
    content:
      "Your grade for Quiz 1 has been updated. Review your performance in the grades section.",
    date: "November 10th, 2024",
  },
  {
    id: 4,
    title: "New Course Material Available",
    content:
      "New lecture slides and reading materials have been uploaded for Week 8.",
    date: "November 5th, 2024",
  },
  {
    id: 5,
    title: "Upcoming Guest Lecture",
    content:
      "We have a guest lecturer for next week's class. Attendance is highly recommended.",
    date: "November 1st, 2024",
  },
];

export default function NotificationsPage({
  params,
}: {
  params: { courseId: string };
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<
    (typeof notifications)[0] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  const filteredNotifications = useMemo(() => {
    return notifications.filter(
      (notification) =>
        (notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          notification.content
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        (dateFilter === "all" ||
          (notification.date &&
            new Date(notification.date) >=
              new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)))
    );
  }, [searchQuery, dateFilter]);

  if (selectedNotification) {
    return (
      <div className="min-h-screen flex flex-col">
        <CourseNav courseId={params.courseId} />

        <main className="flex-1 container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => setSelectedNotification(null)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {selectedNotification.title}
          </Button>

          <div className="bg-[#FFF5EB] rounded-lg p-4 space-y-2">
            {selectedNotification.dueDate && (
              <p className="font-medium">Due: {selectedNotification.dueDate}</p>
            )}
            {selectedNotification.coverage && (
              <p>Covers: {selectedNotification.coverage}</p>
            )}
            {selectedNotification.weight && (
              <p>Weight: {selectedNotification.weight}</p>
            )}
            {selectedNotification.hint && (
              <p className="text-gray-600">Hint: {selectedNotification.hint}</p>
            )}
            <p>{selectedNotification.content}</p>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  if (showFilters) {
    return (
      <div className="min-h-screen flex flex-col">
        <CourseNav courseId={params.courseId} />

        <main className="flex-1 container mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <Input
              type="search"
              placeholder="Search for..."
              className="flex-1 bg-[#FFF5EB]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setShowFilters(false)}
            >
              <Filter />
            </Button>
          </div>

          <RadioGroup value={dateFilter} onValueChange={setDateFilter}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All Days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">Last 7 Days</Label>
              </div>
            </div>
          </RadioGroup>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CourseNav courseId={params.courseId} />

      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">
          {params.courseId} - Notifications
        </h1>

        <div className="flex items-center mb-6">
          <Input
            type="search"
            placeholder="Search for..."
            className="flex-1 bg-[#FFF5EB]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setShowFilters(true)}
          >
            <Filter />
          </Button>
        </div>

        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <Button
              key={notification.id}
              variant="outline"
              className="w-full justify-start p-4 bg-[#FFF5EB] hover:bg-[#FFE8D1]"
              onClick={() => setSelectedNotification(notification)}
            >
              <div className="text-left">
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-gray-600">
                  {notification.content}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
