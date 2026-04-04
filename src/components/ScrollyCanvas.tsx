"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 40;

interface CanvasSequenceProps {
  children?: ReactNode;
}

export default function ScrollyCanvas({ children }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
    const imgRatio = img.width / img.height;
    const canvasRatio = w / h;
    let renderW, renderH, x, y;

    if (imgRatio < canvasRatio) {
      renderW = w;
      renderH = w / imgRatio;
    } else {
      renderW = h * imgRatio;
      renderH = h;
    }
    x = (w - renderW) / 2;
    y = (h - renderH) / 2;
    ctx.drawImage(img, x, y, renderW, renderH);
  };

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Draw first frame once all loaded
          if (canvasRef.current && loadedImages[0]) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) drawImageCover(ctx, loadedImages[0], canvasRef.current.width, canvasRef.current.height);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    return frameIndex.onChange((latest) => {
      if (images.length === FRAME_COUNT && canvasRef.current) {
        const index = Math.min(Math.max(0, Math.round(latest)), FRAME_COUNT - 1);
        const img = images[index];
        const ctx = canvasRef.current.getContext("2d");
        const canvas = canvasRef.current;
        if (ctx && img) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImageCover(ctx, img, canvas.width, canvas.height);
        }
      }
    });
  }, [frameIndex, images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (images.length === FRAME_COUNT) {
          const index = Math.min(Math.max(0, Math.round(frameIndex.get())), FRAME_COUNT - 1);
          const img = images[index];
          const ctx = canvasRef.current.getContext("2d");
          if (ctx && img) drawImageCover(ctx, img, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        {children}
      </div>
    </div>
  );
}
