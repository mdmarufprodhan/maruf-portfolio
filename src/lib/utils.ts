import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// next/image with `unoptimized: true` (required for static export) does not
// automatically prefix basePath onto plain public/ string sources the way
// JS/CSS chunks and next/link do. Public-folder image paths must be passed
// through this helper wherever they're used as an <Image src>.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
