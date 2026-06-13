"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

// Cursor state types
type CursorState = "default" | "link" | "card";

interface CursorConfig {
  dotSize: number;
  ringSize: number;
  ringBorderWidth: number;
  hasDashArray: boolean;
  isSpinning: boolean;
  isCrosshair: boolean;
}

// Configuration presets for different cursor states
const CURSOR_CONFIGS: Record<CursorState, CursorConfig> = {
  default: {
    dotSize: 6,
    ringSize: 32,
    ringBorderWidth: 1,
    hasDashArray: false,
    isSpinning: false,
    isCrosshair: false,
  },
  link: {
    dotSize: 6,
    ringSize: 56,
    ringBorderWidth: 1.5,
    hasDashArray: true,
    isSpinning: true,
    isCrosshair: false,
  },
  card: {
    dotSize: 4,
    ringSize: 12,
    ringBorderWidth: 2,
    hasDashArray: false,
    isSpinning: false,
    isCrosshair: true,
  },
};

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for hardware-accelerated positioning
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring for outer ring with premium lagging effect
  const springConfig = { stiffness: 280, damping: 24, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  // Get current config based on state
  const config = CURSOR_CONFIGS[cursorState];

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouch();
  }, []);

  // Mouse move handler with hardware acceleration
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Use translate3d for GPU acceleration
      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsVisible(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Interactive element detection
  const handleElementDetection = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if hovering over interactive elements
    const isLink =
      target.closest('a, button, [role="button"], input, textarea, select') !== null ||
      target.tagName === "A" ||
      target.tagName === "BUTTON";

    const isCard =
      target.closest("[data-cursor-card]") !== null ||
      target.closest(".group") !== null;

    if (isCard) {
      setCursorState("card");
    } else if (isLink) {
      setCursorState("link");
    } else {
      setCursorState("default");
    }
  }, []);

  // Attach global mouse listeners
  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleElementDetection);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Hide default cursor on body
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleElementDetection);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, [isTouchDevice, handleMouseMove, handleElementDetection, handleMouseEnter, handleMouseLeave]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Core Dot - follows exact pointer position */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: config.dotSize,
          height: config.dotSize,
          backgroundColor: "#FF7A00",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: config.isCrosshair ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Telemetry Aura Ring - follows with spring lag */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: config.ringSize,
          height: config.ringSize,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          border: `${config.ringBorderWidth}px ${config.hasDashArray ? "dashed" : "solid"} #FFB547`,
          boxShadow: `
            inset 0 0 ${config.ringSize / 3}px rgba(255, 181, 71, 0.03),
            0 0 ${config.ringSize / 4}px rgba(255, 122, 0, 0.08)
          `,
        }}
        animate={{
          width: config.ringSize,
          height: config.ringSize,
          rotate: config.isSpinning ? 360 : 0,
        }}
        transition={{
          width: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          rotate: {
            duration: config.isSpinning ? 4 : 0,
            repeat: config.isSpinning ? Infinity : 0,
            ease: "linear",
          },
        }}
      />

      {/* Crosshair overlay for card hover state */}
      {config.isCrosshair && (
        <motion.div
          className="absolute"
          style={{
            width: config.ringSize,
            height: config.ringSize,
            x: ringX,
            y: ringY,
            translateX: "-50%",
            translateY: "-50%",
            willChange: "transform",
          }}
        >
          {/* Horizontal line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px bg-[#FF7A00]"
            style={{
              transform: "translateY(-50%)",
              opacity: 0.8,
            }}
          />
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FF7A00]"
            style={{
              transform: "translateX(-50%)",
              opacity: 0.8,
            }}
          />
        </motion.div>
      )}
    </div>
  );
}