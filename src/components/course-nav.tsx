import Link from "next/link";

const courses = ["4HC3", "4X03", "4ML3", "3AB3", "4G06", "3DB3"];

export function CourseNav({ courseId }: { courseId: string }) {
  return (
    <div className="bg-[#FFF5EB] border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 overflow-x-auto py-2">
          {courses.map((id) => (
            <Link
              key={id}
              href={`/courses/${id}`}
              className={`px-3 py-1 whitespace-nowrap ${
                id === courseId
                  ? "border-b-2 border-[#E67E22] font-medium"
                  : "text-gray-600"
              }`}
            >
              {id}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
