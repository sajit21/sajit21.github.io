import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white/70 p-5 transition-all duration-200 hover:border-slate-300 hover:bg-slate-200/30"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs text-slate-700">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-deep">
          {post.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-slate-700">
          {post.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <ArrowRight className="h-4 w-4 text-slate-700 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700" />
        </div>
      </div>
    </Link>
  );
}
