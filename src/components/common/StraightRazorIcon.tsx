
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
    {/* Representa o cabo da navalha */}
    <rect x="3" y="8" width="8" height="8" rx="1" ry="1" />
    {/* Representa a lâmina (simplificada, como se estivesse fechada/alinhada) */}
    <line x1="11" y1="12" x2="20" y2="12" />
     {/* Pequeno detalhe para o pino/dobradiça */}
    <circle cx="10.5" cy="12" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default StraightRazorIcon;
