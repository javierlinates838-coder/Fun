"use client";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  List,
  X,
} from "@phosphor-icons/react";

const icons = {
  arrow: ArrowRight,
  down: ArrowDown,
  back: ArrowLeft,
  external: ArrowSquareOut,
  menu: List,
  close: X,
} as const;

type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const Glyph = icons[name];
  return <Glyph size={size} weight="regular" aria-hidden="true" />;
}
