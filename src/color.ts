import { COLOR_REGEX, RGB_REGEX, SPACE_REGEX, ALPHA_REGEX } from "./constants";

import { warn } from "./debug";

export function rgbColor(): string {
  const _3Digit = () => Math.round(Math.random() * 255);
  const COLOR = `rgb(${_3Digit()}, ${_3Digit()}, ${_3Digit()})`;
  return COLOR;
}

export function colors(size: number): string[] {
  return new Array(size).fill(0).map(() => rgbColor());
}

export function toAlphaColor(
  color: string,
  alpha: string | number = Math.random().toFixed(2)
): string {
  if (!COLOR_REGEX.test(color)) {
    warn("invalid color: ", color);
    return "rgba(0, 0, 0, 0.1)";
  } else {
    return color
      .replace(SPACE_REGEX, "")
      .replace(RGB_REGEX, "rgba")
      .replace(ALPHA_REGEX, `,${alpha})`);
  }
}
