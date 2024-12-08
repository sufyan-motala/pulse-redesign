"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Bell, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  const pathname = usePathname();
  const courseId = pathname.split("/")[2];

  return (
    <div className="sticky bottom-0 border-t bg-[#FFF5EB] py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="lg" asChild>
            <Link href="/courses" className="flex flex-col items-center">
              <BookOpen className="h-6 w-6" />
              <span className="text-xs mt-1">Courses</span>
            </Link>
          </Button>

          <Button variant="ghost" size="lg" asChild>
            <Link href="/menu" className="flex flex-col items-center">
              <Menu className="h-6 w-6" />
              <span className="text-xs mt-1">Menu</span>
            </Link>
          </Button>

          <Button variant="ghost" size="lg" asChild>
            <Link
              href={
                courseId
                  ? `/courses/${courseId}/notifications`
                  : "/notifications"
              }
              className="flex flex-col items-center"
            >
              <Bell className="h-6 w-6" />
              <span className="text-xs mt-1">Notifications</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
