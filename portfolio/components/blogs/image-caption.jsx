import Image from "next/image";

export default function ImageCaption({ src, alt, caption, width = 800, height = 450 }) {
  return (
    <figure className="my-8 space-y-3">
      <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
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
        <figcaption className="text-center text-xs text-zinc-500">{caption}</figcaption>
      )}
    </figure>
  );
}
