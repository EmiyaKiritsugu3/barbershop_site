
import type { SVGProps } from 'react';

export const StraightRazorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 20L8 4" />
    <path d="M8 4L20 4" />
    <path d="M8 8L20 8" />
    <path d="M8 12L20 12" />
    <path d="M8 16L20 16" />
  </svg>
);

export default StraightRazorIcon;
