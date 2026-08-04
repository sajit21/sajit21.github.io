import Image from "next/image";

export default function ImageCaption({ src, alt, caption, width = 800, height = 450 }) {
  return (
    <figure className="my-8 space-y-3">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-slate-700">{caption}</figcaption>
      )}
    </figure>
  );
}
