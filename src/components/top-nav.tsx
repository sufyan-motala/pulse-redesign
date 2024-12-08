import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function TopNav({
  title,
  backLink,
}: {
  title: string;
  backLink?: string;
}) {
  return (
    <div className="bg-[#FFF5EB] border-b">
      <div className="container mx-auto px-4 py-4 flex items-center">
        {backLink && (
          <Link href={backLink} className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
