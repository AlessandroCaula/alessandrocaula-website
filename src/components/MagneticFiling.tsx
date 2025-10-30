import { useTheme } from "@/context/ThemeContext";
import { hexToRgba } from "@/lib/utils";
import type { Line } from "@/types";
import { useEffect, useRef } from "react";

const MagneticFilings = () => {
  // Ref to directly access the <canvas> DOM element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Ref to store the animation frame ID (for requestAnimationFrame)
  // This allows us to start and later stop the animation loop safely
  const rafRef = useRef<number | null>(null);
  // Store current pointer info
  const pointerRef = useRef({ x: 0, y: 0 });
  // Collection of all the lines (filings).
  const linesRef = useRef<Line[]>([]);
  // Retrieve theme
  const { isDark } = useTheme();

  // The effect runs once after the component mounts
  useEffect(() => {
    // Get the canvas element
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get 2d drawing context
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPR screens (e.g. Retina)
    const DPR = window.devicePixelRatio || 1;
    // Track canvas size in CSS pixels
    let width = 0;
    let height = 0;

    const lineLength = 20;
    const spacing = 25;
    const lineWidth = 2;
    const fadeMargin = 150; // Distance from the edge where lines start fading
    const maxAlpha = 0.5; // max opacity at center
    const minAlpha = 0.0; // fully transparent at the edge
    const filingColor = isDark ? "#909090" : "#bebebe";

    // Initialize lines grid
    const initLines = () => {
      linesRef.current = [];
      // Compute number of rows and cols based on the spacing between the lines
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Initialize and push the lines to the lineRef.
          linesRef.current.push({
            x: c * spacing + spacing / 2,
            y: r * spacing + spacing / 2,
            length: lineLength,
            angle: 0,
          });
        }
      }
    };

    // Function to resize the canvas whenever window size changes.
    const resize = () => {
      // Current width and height in CSS pixels
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      // Scale the actual canvas pixels by device pixel ratio
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      // Reset the transform so drawing coordinates are correct
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Initialize pointerRef to point to the center of the canvas
      pointerRef.current.x = width / 2;
      pointerRef.current.y = width / 2;

      // Initialize line grid
      initLines();
    };

    // Update line rotation angle
    const updateLines = () => {
      linesRef.current.forEach((line) => {
        // Compute the new direction of the line.
        const dx = pointerRef.current.x - line.x;
        const dy = pointerRef.current.y - line.y;
        line.angle = Math.atan2(dy, dx);
      });
    };

    const draw = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      linesRef.current.forEach((line) => {
        // Compute distance to nearest edge. And fade (increase transparency) toward end of the canvas.
        const distToEdge = Math.min(
          line.x, // distance to left
          width - line.x, // distance to right
          line.y, // Distance to top
          height - line.y // Distance to bottom
        );
        // Compute fade factor: 1 at center, 0 at edge
        const fadeFactor = Math.min(distToEdge / fadeMargin, 1);
        // Compute opacity based on fade factor
        const alpha = minAlpha + (maxAlpha - minAlpha) * fadeFactor;
        
        // Start drawing line
        ctx.beginPath();
        // Start line point
        ctx.moveTo(
          line.x - Math.cos(line.angle) * (line.length / 2),
          line.y - Math.sin(line.angle) * (line.length / 2)
        );
        // End line point
        ctx.lineTo(
          line.x + Math.cos(line.angle) * (line.length / 2),
          line.y + Math.sin(line.angle) * (line.length / 2)
        );
        ctx.strokeStyle = hexToRgba(filingColor, alpha);
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      });
    };

    // Main animation loop.
    const loop = () => {
      updateLines();
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    // Handle mouse movement
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    };

    // Handle mouse leaving the canvas
    const onPointerLeave = () => {
      pointerRef.current.x = width ? width / 2 : -9999;
      pointerRef.current.y = height ? height / 2 : -9999;
    };

    // Ensuring the resize happens after layout is settled
    const initAfterLayout = () => {
      resize();
      loop();
    };
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);
    requestAnimationFrame(initAfterLayout);

    // Add event listeners
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      // Clean and remove event listeners
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none max-sm:hidden"
    />
  );
};

export default MagneticFilings;
