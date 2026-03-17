"use client";

import Image from "next/image";

import { getTmdbImageUrl } from "~/lib/tmdb-images";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TmdbPosterProps = {
  title: string;
  posterPath: string | null;
  backdropPath?: string | null;
  className?: string;
  imageClassName?: string;
  size?: "thumb" | "card";
  priority?: boolean;
};

export function TmdbPoster({
  title,
  posterPath,
  backdropPath = null,
  className,
  imageClassName,
  size = "card",
  priority = false,
}: TmdbPosterProps) {
  const posterUrl = getTmdbImageUrl(
    posterPath,
    size === "thumb" ? "w154" : "w342",
  );
  const fallbackUrl = getTmdbImageUrl(backdropPath, "w780");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] bg-stone-950",
        className,
      )}
    >
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={`${title} poster`}
          fill
          sizes={size === "thumb" ? "72px" : "(max-width: 768px) 50vw, 240px"}
          className={cn("object-cover", imageClassName)}
          priority={priority}
        />
      ) : fallbackUrl ? (
        <>
          <Image
            src={fallbackUrl}
            alt={`${title} backdrop`}
            fill
            sizes={size === "thumb" ? "72px" : "(max-width: 768px) 50vw, 240px"}
            className={cn("scale-110 object-cover blur-[1px]", imageClassName)}
          />
          <div className="absolute inset-0 bg-stone-950/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,245,244,0.16),_transparent_42%),linear-gradient(180deg,_rgba(28,25,23,1)_0%,_rgba(12,10,9,1)_100%)]" />
      )}
    </div>
  );
}

type TmdbBackdropProps = {
  title: string;
  backdropPath: string | null;
  posterPath?: string | null;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

export function TmdbBackdrop({
  title,
  backdropPath,
  posterPath = null,
  className,
  priority = false,
  children,
}: TmdbBackdropProps) {
  const backdropUrl = getTmdbImageUrl(backdropPath, "w780");
  const fallbackPosterUrl = getTmdbImageUrl(posterPath, "w342");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(160deg,_rgba(10,10,10,0.96)_0%,_rgba(10,10,10,0.96)_100%)]",
        className,
      )}
    >
      {backdropUrl ? (
        <Image
          src={backdropUrl}
          alt={`${title} backdrop`}
          fill
          priority={priority}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
      ) : fallbackPosterUrl ? (
        <Image
          src={fallbackPosterUrl}
          alt={`${title} poster`}
          fill
          priority={priority}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="scale-110 object-cover blur-sm"
        />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(12,10,9,0.2)_0%,_rgba(12,10,9,0.72)_45%,_rgba(12,10,9,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,245,244,0.18),_transparent_34%)]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
