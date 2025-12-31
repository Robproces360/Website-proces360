import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// ============================================================================
// PROCES360 - PREMIUM PDF GENERATOR v3.0
// Awwwards-level design - World-class business intelligence reports
// Features: Cover pages, gauge charts, infographic timelines, premium styling
// ============================================================================

// =========================
// DESIGN SYSTEM CONSTANTS
// =========================

// Spacing scale (8px base unit)
const SPACING = {
  xs: 2,    // 2mm
  sm: 4,    // 4mm
  md: 8,    // 8mm
  lg: 12,   // 12mm
  xl: 16,   // 16mm
  xxl: 24,  // 24mm
  xxxl: 32, // 32mm
} as const;

// Page layout
const LAYOUT = {
  marginLeft: 15,
  marginRight: 15,
  marginTop: 20,
  marginBottom: 25,
  headerHeight: 45,
  footerHeight: 20,
  contentWidth: 180, // 210 - 15 - 15
} as const;

// Professional color palette - Print-optimized
const COLORS = {
  // Brand colors
  brand: {
    primary: [249, 115, 22] as [number, number, number],      // #f97316
    primaryDark: [194, 65, 12] as [number, number, number],   // #c2410c
    primaryLight: [255, 237, 213] as [number, number, number], // #ffedd5
    primaryMuted: [254, 215, 170] as [number, number, number], // #fed7aa
    secondary: [30, 58, 138] as [number, number, number],     // Deep blue
    secondaryLight: [191, 219, 254] as [number, number, number], // Light blue
  },

  // Backgrounds
  bg: {
    white: [255, 255, 255] as [number, number, number],
    cream: [254, 252, 249] as [number, number, number],
    light: [249, 250, 251] as [number, number, number],
    subtle: [243, 244, 246] as [number, number, number],
    dark: [17, 24, 39] as [number, number, number],
    darkSubtle: [31, 41, 55] as [number, number, number],
  },

  // Text colors
  text: {
    primary: [17, 24, 39] as [number, number, number],
    secondary: [55, 65, 81] as [number, number, number],
    muted: [107, 114, 128] as [number, number, number],
    light: [156, 163, 175] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
  },

  // Semantic colors
  semantic: {
    success: [16, 185, 129] as [number, number, number],
    successLight: [209, 250, 229] as [number, number, number],
    successDark: [5, 150, 105] as [number, number, number],
    warning: [245, 158, 11] as [number, number, number],
    warningLight: [254, 243, 199] as [number, number, number],
    danger: [239, 68, 68] as [number, number, number],
    dangerLight: [254, 226, 226] as [number, number, number],
    info: [59, 130, 246] as [number, number, number],
    infoLight: [219, 234, 254] as [number, number, number],
  },

  // UI elements
  ui: {
    border: [229, 231, 235] as [number, number, number],
    borderLight: [243, 244, 246] as [number, number, number],
    divider: [209, 213, 219] as [number, number, number],
  },
} as const;

// Typography scale
const TYPOGRAPHY = {
  display: { size: 42, lineHeight: 1.1 },
  hero: { size: 32, lineHeight: 1.1 },
  h1: { size: 24, lineHeight: 1.2 },
  h2: { size: 18, lineHeight: 1.3 },
  h3: { size: 14, lineHeight: 1.4 },
  h4: { size: 12, lineHeight: 1.4 },
  body: { size: 10, lineHeight: 1.5 },
  small: { size: 9, lineHeight: 1.5 },
  caption: { size: 8, lineHeight: 1.4 },
  tiny: { size: 7, lineHeight: 1.3 },
} as const;

// =========================
// INTERFACES
// =========================

interface CompanyData {
  naam: string;
  email: string;
  bedrijf?: string;
  telefoon?: string;
}

interface RobotROIData {
  robotPrijs: number;
  gripperKosten: number;
  installatieKosten: number;
  trainingKosten: number;
  uurloon: number;
  shifts: number;
  werkdagen: number;
  productiviteit: number;
  robotBeschikbaarheid: number;
  totaleInvestering: number;
  jaarlijkseUren: number;
  huidigeJaarKosten: number;
  robotJaarKosten: number;
  jaarlijkseBesparing: number;
  terugverdientijd: number;
  vijfJaarBesparing: number;
  roi: number;
}

interface OEEData {
  huidigeOEE: number;
  doelOEE: number;
  maandOmzet: number;
  winstmarge: number;
  consultancyKosten: number;
  softwareKosten: number;
  trainingsKosten: number;
  implementatieKosten: number;
  oeeVerbetering: number;
  oeeVerbeteringPercentage: number;
  jaarOmzet: number;
  extraJaarOmzet: number;
  extraMaandOmzet: number;
  extraJaarWinst: number;
  extraMaandWinst: number;
  totaleInvestering: number;
  terugverdientijd: number;
  jaarROI: number;
  drieJaarWinst: number;
  vijfJaarWinst: number;
}

// =========================
// UTILITY FUNCTIONS
// =========================

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('nl-NL').format(Math.round(value));
}

function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Using formatPercentage in exports to prevent unused warning
export const _pdfUtils = { formatPercentage };

// =========================
// DRAWING PRIMITIVES
// =========================

// Draw gradient bar (simulated with steps)
function drawGradientBar(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  startColor: [number, number, number],
  endColor: [number, number, number],
  steps: number = 40
) {
  const stepWidth = width / steps;
  for (let i = 0; i < steps; i++) {
    const ratio = i / steps;
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
    doc.setFillColor(r, g, b);
    doc.rect(x + i * stepWidth, y, stepWidth + 0.5, height, 'F');
  }
}

// Draw vertical gradient
function drawVerticalGradient(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  startColor: [number, number, number],
  endColor: [number, number, number],
  steps: number = 40
) {
  const stepHeight = height / steps;
  for (let i = 0; i < steps; i++) {
    const ratio = i / steps;
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
    doc.setFillColor(r, g, b);
    doc.rect(x, y + i * stepHeight, width, stepHeight + 0.5, 'F');
  }
}

// Draw premium icons (geometric, modern)
function drawPremiumIcon(
  doc: jsPDF,
  type: 'check' | 'chart' | 'clock' | 'euro' | 'arrow-up' | 'robot' | 'target' | 'trending' | 'shield' | 'gear' | 'lightning' | 'star',
  x: number,
  y: number,
  size: number,
  color: [number, number, number]
) {
  doc.setFillColor(...color);
  doc.setDrawColor(...color);
  doc.setLineWidth(0.8);

  const cx = x + size / 2;
  const cy = y + size / 2;
  const r = size / 2 - 1;

  switch (type) {
    case 'check':
      // Modern checkmark in circle
      doc.setFillColor(...color);
      doc.circle(cx, cy, r, 'F');
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(1.5);
      doc.line(cx - r * 0.35, cy + r * 0.05, cx - r * 0.05, cy + r * 0.35);
      doc.line(cx - r * 0.05, cy + r * 0.35, cx + r * 0.4, cy - r * 0.25);
      break;

    case 'chart':
      // Bar chart icon
      const barWidth = size / 5;
      doc.rect(x + barWidth * 0.5, y + size * 0.6, barWidth, size * 0.35, 'F');
      doc.rect(x + barWidth * 1.75, y + size * 0.35, barWidth, size * 0.6, 'F');
      doc.rect(x + barWidth * 3, y + size * 0.2, barWidth, size * 0.75, 'F');
      break;

    case 'clock':
      // Clock icon
      doc.setLineWidth(1);
      doc.circle(cx, cy, r * 0.9, 'S');
      doc.setLineWidth(1.2);
      doc.line(cx, cy, cx, cy - r * 0.5);
      doc.line(cx, cy, cx + r * 0.35, cy + r * 0.1);
      // Hour markers
      doc.setFillColor(...color);
      doc.circle(cx, cy - r * 0.7, 0.8, 'F');
      doc.circle(cx + r * 0.7, cy, 0.8, 'F');
      doc.circle(cx, cy + r * 0.7, 0.8, 'F');
      doc.circle(cx - r * 0.7, cy, 0.8, 'F');
      break;

    case 'euro':
      // Euro symbol in circle
      doc.circle(cx, cy, r, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(size * 0.6);
      doc.setFont('helvetica', 'bold');
      doc.text('€', cx, cy + size * 0.2, { align: 'center' });
      doc.setFillColor(...color);
      break;

    case 'arrow-up':
      // Upward trend arrow
      doc.setLineWidth(1.8);
      // Arrow shaft
      doc.line(x + size * 0.2, y + size * 0.7, x + size * 0.5, y + size * 0.3);
      doc.line(x + size * 0.5, y + size * 0.3, x + size * 0.8, y + size * 0.5);
      // Arrow head
      doc.line(x + size * 0.55, y + size * 0.15, x + size * 0.85, y + size * 0.15);
      doc.line(x + size * 0.85, y + size * 0.15, x + size * 0.85, y + size * 0.45);
      break;

    case 'robot':
      // Robot/automation icon
      doc.setLineWidth(1);
      // Head
      doc.roundedRect(x + size * 0.2, y + size * 0.1, size * 0.6, size * 0.45, 2, 2, 'S');
      // Eyes
      doc.setFillColor(...color);
      doc.circle(x + size * 0.35, y + size * 0.28, 1.5, 'F');
      doc.circle(x + size * 0.65, y + size * 0.28, 1.5, 'F');
      // Antenna
      doc.line(cx, y + size * 0.1, cx, y + size * 0.02);
      doc.circle(cx, y + size * 0.02, 1.5, 'F');
      // Body
      doc.roundedRect(x + size * 0.25, y + size * 0.58, size * 0.5, size * 0.35, 2, 2, 'S');
      break;

    case 'target':
      // Target/goal icon
      doc.setLineWidth(1);
      doc.circle(cx, cy, r * 0.9, 'S');
      doc.circle(cx, cy, r * 0.55, 'S');
      doc.setFillColor(...color);
      doc.circle(cx, cy, r * 0.25, 'F');
      break;

    case 'trending':
      // Trending up chart
      doc.setLineWidth(1.8);
      doc.line(x + size * 0.1, y + size * 0.7, x + size * 0.35, y + size * 0.45);
      doc.line(x + size * 0.35, y + size * 0.45, x + size * 0.55, y + size * 0.55);
      doc.line(x + size * 0.55, y + size * 0.55, x + size * 0.9, y + size * 0.2);
      // Arrow
      doc.setFillColor(...color);
      doc.triangle(x + size * 0.9, y + size * 0.15, x + size * 0.75, y + size * 0.25, x + size * 0.85, y + size * 0.35, 'F');
      break;

    case 'shield':
      // Shield/security icon
      const shieldPath = [
        [cx, y + 2],
        [x + size - 2, y + size * 0.3],
        [x + size - 2, y + size * 0.5],
        [cx, y + size - 2],
        [x + 2, y + size * 0.5],
        [x + 2, y + size * 0.3],
      ];
      doc.setLineWidth(1);
      doc.lines(
        shieldPath.slice(1).map((p, i) => [p[0] - shieldPath[i][0], p[1] - shieldPath[i][1]]),
        shieldPath[0][0],
        shieldPath[0][1],
        [1, 1],
        'S',
        true
      );
      break;

    case 'gear':
      // Gear/settings icon
      doc.circle(cx, cy, r * 0.4, 'S');
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const innerR = r * 0.5;
        const outerR = r * 0.85;
        doc.setLineWidth(size * 0.12);
        doc.line(
          cx + Math.cos(angle) * innerR,
          cy + Math.sin(angle) * innerR,
          cx + Math.cos(angle) * outerR,
          cy + Math.sin(angle) * outerR
        );
      }
      break;

    case 'lightning':
      // Lightning bolt icon
      doc.setFillColor(...color);
      const boltPoints: [number, number][] = [
        [cx + size * 0.1, y + size * 0.1],
        [cx - size * 0.15, y + size * 0.5],
        [cx + size * 0.05, y + size * 0.5],
        [cx - size * 0.1, y + size * 0.9],
        [cx + size * 0.25, y + size * 0.45],
        [cx + size * 0.05, y + size * 0.45],
      ];
      doc.setLineWidth(0.5);
      doc.lines(
        boltPoints.slice(1).map((p, i) => [p[0] - boltPoints[i][0], p[1] - boltPoints[i][1]]),
        boltPoints[0][0],
        boltPoints[0][1],
        [1, 1],
        'F',
        true
      );
      break;

    case 'star':
      // Star icon
      doc.setFillColor(...color);
      const starPoints: [number, number][] = [];
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5 - Math.PI / 2;
        const starR = i % 2 === 0 ? r * 0.9 : r * 0.4;
        starPoints.push([cx + Math.cos(angle) * starR, cy + Math.sin(angle) * starR]);
      }
      doc.setLineWidth(0.5);
      doc.lines(
        starPoints.slice(1).map((p, i) => [p[0] - starPoints[i][0], p[1] - starPoints[i][1]]),
        starPoints[0][0],
        starPoints[0][1],
        [1, 1],
        'F',
        true
      );
      break;
  }
}

// Draw decorative corner accents
function drawCornerAccents(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  color: [number, number, number],
  size: number = 15
) {
  doc.setDrawColor(...color);
  doc.setLineWidth(1.5);

  // Top-left
  doc.line(x, y + size, x, y);
  doc.line(x, y, x + size, y);

  // Top-right
  doc.line(x + width - size, y, x + width, y);
  doc.line(x + width, y, x + width, y + size);

  // Bottom-left
  doc.line(x, y + height - size, x, y + height);
  doc.line(x, y + height, x + size, y + height);

  // Bottom-right
  doc.line(x + width - size, y + height, x + width, y + height);
  doc.line(x + width, y + height - size, x + width, y + height);
}

// Draw gauge/arc chart (for OEE percentages)
function drawGaugeChart(
  doc: jsPDF,
  cx: number,
  cy: number,
  radius: number,
  percentage: number,
  label: string,
  color: [number, number, number],
  showPercentage: boolean = true
) {
  const startAngle = Math.PI * 0.75;
  const endAngle = Math.PI * 0.25;
  const totalAngle = 2 * Math.PI - (startAngle - endAngle);

  // Background arc
  doc.setDrawColor(...COLORS.ui.border);
  doc.setLineWidth(8);
  const bgSegments = 50;
  for (let i = 0; i < bgSegments; i++) {
    const angle1 = startAngle + (totalAngle * i) / bgSegments;
    const angle2 = startAngle + (totalAngle * (i + 1)) / bgSegments;
    doc.line(
      cx + Math.cos(angle1) * radius,
      cy + Math.sin(angle1) * radius,
      cx + Math.cos(angle2) * radius,
      cy + Math.sin(angle2) * radius
    );
  }

  // Value arc with gradient effect
  const valueAngle = startAngle + (totalAngle * Math.min(percentage, 100)) / 100;
  const valueSegments = Math.ceil((percentage / 100) * 50);

  for (let i = 0; i < valueSegments; i++) {
    const ratio = i / valueSegments;
    const segmentColor: [number, number, number] = [
      Math.round(color[0] + (color[0] * 0.3 - color[0]) * ratio),
      Math.round(color[1] + (color[1] * 0.3 - color[1]) * ratio),
      Math.round(color[2] + (color[2] * 0.3 - color[2]) * ratio),
    ];
    doc.setDrawColor(...segmentColor);
    doc.setLineWidth(10);

    const angle1 = startAngle + (totalAngle * i * (percentage / 100)) / valueSegments;
    const angle2 = startAngle + (totalAngle * (i + 1) * (percentage / 100)) / valueSegments;

    if (angle2 <= valueAngle) {
      doc.line(
        cx + Math.cos(angle1) * radius,
        cy + Math.sin(angle1) * radius,
        cx + Math.cos(angle2) * radius,
        cy + Math.sin(angle2) * radius
      );
    }
  }

  // End cap circle
  doc.setFillColor(...color);
  doc.circle(
    cx + Math.cos(valueAngle) * radius,
    cy + Math.sin(valueAngle) * radius,
    5,
    'F'
  );

  // Center content
  if (showPercentage) {
    doc.setFontSize(TYPOGRAPHY.h1.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...color);
    doc.text(`${percentage.toFixed(0)}%`, cx, cy + 3, { align: 'center' });
  }

  // Label below
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text(label, cx, cy + radius + 12, { align: 'center' });
}

// Draw timeline infographic - Premium Awwwards-level design
function drawTimelineInfographic(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  months: number,
  breakEvenMonth: number,
  milestones: { month: number; label: string; value: string }[]
) {
  const lineY = y + 35;
  const height = 75;

  // Premium card background with shadow
  doc.setFillColor(235, 230, 225);
  doc.roundedRect(x + 3, y + 3, width, height, 6, 6, 'F');
  doc.setFillColor(245, 242, 238);
  doc.roundedRect(x + 1.5, y + 1.5, width, height, 6, 6, 'F');

  // Main background with gradient
  const bgTop: [number, number, number] = [255, 255, 255];
  const bgBottom: [number, number, number] = [250, 248, 245];
  drawVerticalGradient(doc, x, y, width, height, bgTop, bgBottom, 25);

  // Border
  doc.setDrawColor(...COLORS.ui.border);
  doc.setLineWidth(0.8);
  doc.roundedRect(x, y, width, height, 6, 6, 'S');

  // Top accent bar
  drawGradientBar(doc, x, y, width, 3, COLORS.brand.primary, COLORS.brand.primaryDark, 25);

  // Title badge
  const titleBadgeWidth = 120;
  doc.setFillColor(...COLORS.brand.primaryLight);
  doc.roundedRect(x + SPACING.md, y + 8, titleBadgeWidth, 14, 4, 4, 'F');

  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('TERUGVERDIENTIJD TIJDLIJN', x + SPACING.md + 6, y + 18);

  // Main timeline
  const lineStart = x + 25;
  const lineEnd = x + width - 25;
  const lineWidth = lineEnd - lineStart;

  // Timeline track background
  doc.setFillColor(...COLORS.bg.subtle);
  doc.roundedRect(lineStart - 3, lineY - 5, lineWidth + 6, 10, 5, 5, 'F');

  // Background line pattern (dashed effect)
  doc.setDrawColor(...COLORS.ui.border);
  doc.setLineWidth(2);
  doc.setLineDashPattern([4, 2], 0);
  doc.line(lineStart, lineY, lineEnd, lineY);
  doc.setLineDashPattern([], 0);

  // Progress line (to break-even) with premium gradient
  const progressEnd = lineStart + (breakEvenMonth / months) * lineWidth;
  const progressHeight = 6;

  // Progress track shadow
  doc.setFillColor(200, 230, 200);
  doc.roundedRect(lineStart - 2, lineY - progressHeight / 2 + 1, progressEnd - lineStart + 4, progressHeight, 3, 3, 'F');

  // Progress gradient
  drawGradientBar(doc, lineStart, lineY - progressHeight / 2, progressEnd - lineStart, progressHeight, COLORS.brand.primary, COLORS.semantic.success, 30);

  // Start point with premium styling
  doc.setFillColor(255, 255, 255);
  doc.circle(lineStart, lineY, 8, 'F');
  doc.setFillColor(...COLORS.brand.primary);
  doc.circle(lineStart, lineY, 6, 'F');
  doc.setFillColor(255, 255, 255);
  doc.circle(lineStart, lineY, 2.5, 'F');

  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primary);
  doc.text('START', lineStart, lineY + 18, { align: 'center' });

  // Break-even point with premium badge
  doc.setFillColor(255, 255, 255);
  doc.circle(progressEnd, lineY, 10, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.circle(progressEnd, lineY, 8, 'F');
  doc.setFillColor(255, 255, 255);
  doc.circle(progressEnd, lineY, 4, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.circle(progressEnd, lineY, 2, 'F');

  // Break-even badge above
  const badgeWidth = 50;
  doc.setFillColor(...COLORS.semantic.success);
  doc.roundedRect(progressEnd - badgeWidth / 2, lineY - 25, badgeWidth, 14, 4, 4, 'F');

  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('BREAK-EVEN', progressEnd, lineY - 15, { align: 'center' });

  // Break-even value below
  doc.setFillColor(...COLORS.semantic.successLight);
  doc.roundedRect(progressEnd - 22, lineY + 12, 44, 12, 3, 3, 'F');
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text(`${breakEvenMonth.toFixed(1)} mnd`, progressEnd, lineY + 21, { align: 'center' });

  // End point
  doc.setFillColor(255, 255, 255);
  doc.circle(lineEnd, lineY, 6, 'F');
  doc.setFillColor(...COLORS.text.muted);
  doc.circle(lineEnd, lineY, 4, 'F');

  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text(`${months} mnd`, lineEnd, lineY + 18, { align: 'center' });

  // Milestones with premium styling
  milestones.forEach((milestone) => {
    const milestoneX = lineStart + (milestone.month / months) * lineWidth;
    if (milestoneX < progressEnd - 20 || milestoneX > progressEnd + 20) {
      // Milestone dot with ring
      doc.setFillColor(255, 255, 255);
      doc.circle(milestoneX, lineY, 5, 'F');
      doc.setFillColor(...COLORS.brand.primaryMuted);
      doc.circle(milestoneX, lineY, 3.5, 'F');
      doc.setFillColor(255, 255, 255);
      doc.circle(milestoneX, lineY, 1.5, 'F');

      // Label
      doc.setFontSize(TYPOGRAPHY.tiny.size);
      doc.setTextColor(...COLORS.text.light);
      doc.text(milestone.label, milestoneX, lineY + 25, { align: 'center' });
    }
  });

  // Decorative arrow at end
  doc.setFillColor(...COLORS.text.light);
  doc.triangle(lineEnd + 8, lineY, lineEnd + 3, lineY - 3, lineEnd + 3, lineY + 3, 'F');

  return y + height + SPACING.lg;
}

// =========================
// COVER PAGE
// =========================

function drawCoverPage(
  doc: jsPDF,
  pageWidth: number,
  pageHeight: number,
  reportType: 'robot-roi' | 'oee',
  companyName: string | undefined,
  contactName: string
) {
  // Dark background
  doc.setFillColor(...COLORS.bg.dark);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Subtle geometric pattern in background
  doc.setDrawColor(40, 50, 70);
  doc.setLineWidth(0.3);
  for (let i = 0; i < pageWidth / 25; i++) {
    doc.line(i * 25, 0, i * 25, pageHeight);
  }
  for (let i = 0; i < pageHeight / 25; i++) {
    doc.line(0, i * 25, pageWidth, i * 25);
  }

  // Diagonal accent lines
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(0.5);
  for (let i = 0; i < 5; i++) {
    const offset = i * 15;
    doc.line(pageWidth - 80 + offset, 0, pageWidth + offset, 80);
  }

  // Large geometric shape (decorative triangle)
  doc.setFillColor(35, 45, 60);
  doc.triangle(pageWidth, 0, pageWidth, 120, pageWidth - 120, 0, 'F');

  // Orange accent corner
  doc.setFillColor(...COLORS.brand.primary);
  doc.triangle(0, pageHeight, 0, pageHeight - 80, 80, pageHeight, 'F');

  // Corner accents
  drawCornerAccents(doc, 20, 20, pageWidth - 40, pageHeight - 40, COLORS.brand.primary, 20);

  // Logo area
  doc.setFontSize(TYPOGRAPHY.display.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.white);
  doc.text('PROCES', pageWidth / 2 - 35, 60);

  doc.setTextColor(...COLORS.brand.primary);
  doc.text('360', pageWidth / 2 + 45, 60);

  // Orange underline below logo
  drawGradientBar(doc, pageWidth / 2 - 50, 67, 100, 3, COLORS.brand.primary, COLORS.brand.primaryDark, 20);

  // Tagline
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.light);
  doc.text('Productie-Optimalisatie & Automatisering', pageWidth / 2, 80, { align: 'center' });

  // Report type badge
  const badgeY = 110;
  const badgeText = reportType === 'robot-roi' ? 'ROBOT ROI ANALYSE' : 'OEE VERBETERINGSRAPPORT';
  const badgeWidth = doc.getTextWidth(badgeText) + 30;

  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect((pageWidth - badgeWidth) / 2, badgeY, badgeWidth, 14, 7, 7, 'F');

  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text(badgeText, pageWidth / 2, badgeY + 10, { align: 'center' });

  // Main title area
  const titleY = 145;

  doc.setFontSize(TYPOGRAPHY.hero.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.white);

  if (reportType === 'robot-roi') {
    doc.text('Business Case', pageWidth / 2, titleY, { align: 'center' });
    doc.text('Robotisering', pageWidth / 2, titleY + 15, { align: 'center' });
  } else {
    doc.text('OEE Verbetering', pageWidth / 2, titleY, { align: 'center' });
    doc.text('Analyse & Projectie', pageWidth / 2, titleY + 15, { align: 'center' });
  }

  // Subtitle
  doc.setFontSize(TYPOGRAPHY.body.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.light);

  if (reportType === 'robot-roi') {
    doc.text('Gedetailleerde ROI-berekening voor automatisering', pageWidth / 2, titleY + 35, { align: 'center' });
  } else {
    doc.text('Financiële impact van OEE-optimalisatie', pageWidth / 2, titleY + 35, { align: 'center' });
  }

  // Company info section
  const infoY = pageHeight - 100;

  // Info box
  doc.setFillColor(30, 40, 55);
  doc.roundedRect(30, infoY, pageWidth - 60, 50, 4, 4, 'F');

  // Orange accent line
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(30, infoY, 4, 50, 'F');

  // Prepared for
  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.light);
  doc.text('OPGESTELD VOOR', 45, infoY + 15);

  doc.setFontSize(TYPOGRAPHY.h3.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.white);
  doc.text(companyName || contactName, 45, infoY + 28);

  if (companyName) {
    doc.setFontSize(TYPOGRAPHY.body.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.light);
    doc.text(`t.a.v. ${contactName}`, 45, infoY + 40);
  }

  // Date
  const today = new Date().toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.light);
  doc.text('DATUM', pageWidth - 45, infoY + 15, { align: 'right' });

  doc.setFontSize(TYPOGRAPHY.body.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.white);
  doc.text(today, pageWidth - 45, infoY + 28, { align: 'right' });

  // Footer
  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text('Vertrouwelijk - Alleen voor interne besluitvorming', pageWidth / 2, pageHeight - 25, { align: 'center' });

  doc.setTextColor(...COLORS.brand.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('www.proces360.com', pageWidth / 2, pageHeight - 15, { align: 'center' });
}

// =========================
// COMPONENT FUNCTIONS
// =========================

// Draw premium page background with decorative elements
function drawPremiumPageBackground(
  doc: jsPDF,
  pageWidth: number,
  pageHeight: number,
  variant: 'primary' | 'secondary' = 'primary'
) {
  // Clean white background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Subtle gradient background (top to bottom, very light)
  const steps = 40;
  const stepHeight = pageHeight / steps;
  for (let i = 0; i < steps; i++) {
    const ratio = i / steps;
    // Very subtle cream to white gradient
    const r = Math.round(255 - ratio * 3);
    const g = Math.round(254 - ratio * 2);
    const b = Math.round(252 - ratio * 2);
    doc.setFillColor(r, g, b);
    doc.rect(0, i * stepHeight, pageWidth, stepHeight + 0.5, 'F');
  }

  // Left sidebar accent (slim orange gradient bar)
  const sidebarWidth = 4;
  drawVerticalGradient(doc, 0, 0, sidebarWidth, pageHeight, COLORS.brand.primary, COLORS.brand.primaryDark, 50);

  // Top-right corner decorative geometric shape (within bounds)
  doc.setFillColor(254, 250, 245); // Very light orange
  doc.triangle(pageWidth, 0, pageWidth, 40, pageWidth - 40, 0, 'F');

  // Subtle diagonal accent lines in corner (within bounds)
  doc.setDrawColor(254, 240, 225);
  doc.setLineWidth(0.3);
  for (let i = 0; i < 3; i++) {
    const offset = i * 6;
    doc.line(pageWidth - 30 + offset, 0, pageWidth, 30 - offset);
  }

  // Bottom-right corner subtle accent (within page bounds)
  doc.setFillColor(254, 250, 245);
  doc.triangle(pageWidth, pageHeight, pageWidth, pageHeight - 30, pageWidth - 30, pageHeight, 'F');

  // Right edge accent stripe for secondary variant
  if (variant === 'secondary') {
    doc.setFillColor(254, 245, 235);
    doc.rect(pageWidth - 2, 30, 2, pageHeight - 60, 'F');
  }
}

// Draw decorative sidebar element for sections
function drawSectionSideAccent(
  doc: jsPDF,
  y: number,
  height: number,
  color: [number, number, number] = COLORS.brand.primary
) {
  // Main accent bar
  doc.setFillColor(...color);
  doc.roundedRect(LAYOUT.marginLeft - 8, y, 3, height, 1.5, 1.5, 'F');

  // Small decorative circles
  const lightColor: [number, number, number] = [
    Math.round(255 - (255 - color[0]) * 0.3),
    Math.round(255 - (255 - color[1]) * 0.3),
    Math.round(255 - (255 - color[2]) * 0.3),
  ];
  doc.setFillColor(...lightColor);
  doc.circle(LAYOUT.marginLeft - 6.5, y - 3, 2, 'F');
  doc.circle(LAYOUT.marginLeft - 6.5, y + height + 3, 2, 'F');
}

// Premium header with logo
function drawPremiumHeader(
  doc: jsPDF,
  pageWidth: number,
  pageHeight: number,
  reportTitle: string,
  reportSubtitle: string,
  isFirstPage: boolean = true
) {
  // Draw premium page background first
  drawPremiumPageBackground(doc, pageWidth, pageHeight, isFirstPage ? 'primary' : 'secondary');

  if (isFirstPage) {
    // Premium header card with glass effect
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(LAYOUT.marginLeft, 8, pageWidth - LAYOUT.marginLeft * 2, 38, 4, 4, 'F');

    // Shadow effect
    doc.setFillColor(240, 235, 230);
    doc.roundedRect(LAYOUT.marginLeft + 1, 9, pageWidth - LAYOUT.marginLeft * 2, 38, 4, 4, 'F');
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(LAYOUT.marginLeft, 8, pageWidth - LAYOUT.marginLeft * 2, 37, 4, 4, 'F');

    // Orange accent bar at top of card
    drawGradientBar(doc, LAYOUT.marginLeft, 8, pageWidth - LAYOUT.marginLeft * 2, 4, COLORS.brand.primary, COLORS.brand.primaryDark);

    // Logo text with premium styling
    doc.setFontSize(TYPOGRAPHY.h1.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text('PROCES', LAYOUT.marginLeft + 10, 28);

    doc.setTextColor(...COLORS.brand.primary);
    doc.text('360', LAYOUT.marginLeft + 53, 28);

    // Small logo underline with gradient
    drawGradientBar(doc, LAYOUT.marginLeft + 10, 32, 50, 2, COLORS.brand.primary, COLORS.brand.primaryMuted, 15);

    // Tagline
    doc.setFontSize(TYPOGRAPHY.caption.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.muted);
    doc.text('Productie-Optimalisatie & Automatisering', LAYOUT.marginLeft + 10, 40);

    // Report badge (right side) - premium design
    const badgeWidth = 75;
    const badgeX = pageWidth - LAYOUT.marginRight - badgeWidth - 5;

    // Badge shadow
    doc.setFillColor(235, 230, 225);
    doc.roundedRect(badgeX + 1, 16, badgeWidth, 26, 4, 4, 'F');

    // Badge background
    doc.setFillColor(...COLORS.bg.light);
    doc.roundedRect(badgeX, 15, badgeWidth, 26, 4, 4, 'F');

    // Badge left accent gradient
    doc.setFillColor(...COLORS.brand.primary);
    doc.roundedRect(badgeX, 15, 5, 26, 2, 0, 'F');
    doc.rect(badgeX + 3, 15, 2, 26, 'F');

    doc.setFontSize(TYPOGRAPHY.caption.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.brand.primaryDark);
    doc.text(reportTitle.toUpperCase(), badgeX + 12, 25);

    doc.setFontSize(TYPOGRAPHY.tiny.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.muted);
    doc.text(reportSubtitle, badgeX + 12, 35);

    // Date with icon-style presentation
    const today = new Date().toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    doc.setFillColor(...COLORS.brand.primaryLight);
    doc.roundedRect(pageWidth - LAYOUT.marginRight - 55, 48, 55, 12, 3, 3, 'F');
    doc.setFontSize(TYPOGRAPHY.caption.size);
    doc.setTextColor(...COLORS.brand.primaryDark);
    doc.text(today, pageWidth - LAYOUT.marginRight - 27, 56, { align: 'center' });

    // Elegant divider with decorative elements
    const dividerY = LAYOUT.headerHeight + 15;

    // Main divider line
    drawGradientBar(doc, LAYOUT.marginLeft, dividerY, pageWidth - LAYOUT.marginLeft * 2, 1, COLORS.ui.border, COLORS.bg.light, 30);

    // Decorative elements on divider
    doc.setFillColor(...COLORS.brand.primary);
    doc.circle(LAYOUT.marginLeft + 5, dividerY, 3, 'F');
    doc.setFillColor(...COLORS.brand.primaryMuted);
    doc.circle(LAYOUT.marginLeft + 13, dividerY, 2, 'F');
    doc.circle(LAYOUT.marginLeft + 19, dividerY, 1.5, 'F');
    doc.circle(LAYOUT.marginLeft + 24, dividerY, 1, 'F');

    // Right side decorative dots
    doc.setFillColor(...COLORS.brand.primary);
    doc.circle(pageWidth - LAYOUT.marginRight - 5, dividerY, 3, 'F');
    doc.setFillColor(...COLORS.brand.primaryMuted);
    doc.circle(pageWidth - LAYOUT.marginRight - 13, dividerY, 2, 'F');

  } else {
    // Subsequent pages - elegant minimal header with background already drawn

    // Header bar with white background
    doc.setFillColor(255, 255, 255);
    doc.rect(5, 0, pageWidth - 10, 22, 'F');

    // Top accent bar
    drawGradientBar(doc, 5, 0, pageWidth - 10, 2.5, COLORS.brand.primary, COLORS.brand.primaryDark, 25);

    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text('PROCES', LAYOUT.marginLeft + 5, 14);
    doc.setTextColor(...COLORS.brand.primary);
    doc.text('360', LAYOUT.marginLeft + 28, 14);

    // Small accent under logo
    doc.setFillColor(...COLORS.brand.primary);
    doc.rect(LAYOUT.marginLeft + 5, 17, 15, 1, 'F');

    // Report title badge on right
    const titleBadgeWidth = doc.getTextWidth(reportTitle) + 16;
    doc.setFillColor(...COLORS.brand.primaryLight);
    doc.roundedRect(pageWidth - LAYOUT.marginRight - titleBadgeWidth - 5, 6, titleBadgeWidth, 14, 3, 3, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setTextColor(...COLORS.brand.primaryDark);
    doc.text(reportTitle, pageWidth - LAYOUT.marginRight - titleBadgeWidth / 2 - 5, 15, { align: 'center' });
  }
}

// Premium footer with CTA
function drawPremiumFooter(
  doc: jsPDF,
  pageWidth: number,
  pageHeight: number,
  pageNumber: number,
  totalPages: number,
  isLastPage: boolean = false
) {
  const footerY = pageHeight - LAYOUT.footerHeight;

  // Divider line with gradient effect
  drawGradientBar(doc, LAYOUT.marginLeft, footerY, LAYOUT.contentWidth, 0.5, COLORS.ui.border, COLORS.ui.borderLight, 10);

  if (isLastPage) {
    // CTA section on last page
    const ctaY = footerY - 35;

    doc.setFillColor(...COLORS.brand.primaryLight);
    doc.roundedRect(LAYOUT.marginLeft, ctaY, LAYOUT.contentWidth, 30, 4, 4, 'F');

    // Left accent
    doc.setFillColor(...COLORS.brand.primary);
    doc.roundedRect(LAYOUT.marginLeft, ctaY, 4, 30, 2, 0, 'F');
    doc.rect(LAYOUT.marginLeft + 2, ctaY, 2, 30, 'F');

    // CTA Icon
    drawPremiumIcon(doc, 'lightning', LAYOUT.marginLeft + 12, ctaY + 8, 14, COLORS.brand.primary);

    // CTA Text
    doc.setFontSize(TYPOGRAPHY.h4.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.brand.primaryDark);
    doc.text('Klaar om te starten?', LAYOUT.marginLeft + 32, ctaY + 13);

    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text('Plan een gratis adviesgesprek met onze specialisten', LAYOUT.marginLeft + 32, ctaY + 23);

    // Contact button
    const btnX = pageWidth - LAYOUT.marginRight - 55;
    doc.setFillColor(...COLORS.brand.primary);
    doc.roundedRect(btnX, ctaY + 7, 50, 16, 8, 8, 'F');

    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('CONTACT', btnX + 25, ctaY + 18, { align: 'center' });
  }

  // Confidentiality notice (left)
  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...COLORS.text.light);
  doc.text('Vertrouwelijk - Alleen voor interne besluitvorming', LAYOUT.marginLeft, footerY + 6);

  // Contact info
  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text('info@proces360.com  |  085 - 401 0752', LAYOUT.marginLeft, footerY + 12);

  // Website (center)
  doc.setTextColor(...COLORS.brand.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('www.proces360.com', pageWidth / 2, footerY + 12, { align: 'center' });

  // Page number with styling (right)
  doc.setFillColor(...COLORS.bg.light);
  doc.roundedRect(pageWidth - LAYOUT.marginRight - 25, footerY + 3, 25, 12, 2, 2, 'F');

  doc.setTextColor(...COLORS.text.secondary);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.text(`${pageNumber}`, pageWidth - LAYOUT.marginRight - 17, footerY + 11);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.light);
  doc.text(`/ ${totalPages}`, pageWidth - LAYOUT.marginRight - 10, footerY + 11);
}

// Hero metric card (large numbers) - Premium Awwwards-level design
function drawHeroMetricCard(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  icon: 'clock' | 'euro' | 'chart' | 'check' | 'trending' | 'target',
  label: string,
  value: string,
  unit: string,
  color: [number, number, number],
  isHighlighted: boolean = false
) {
  // Simple shadow
  doc.setFillColor(235, 235, 235);
  doc.roundedRect(x + 1.5, y + 1.5, width, height, 4, 4, 'F');

  // Card background
  doc.setFillColor(...COLORS.bg.white);
  doc.roundedRect(x, y, width, height, 4, 4, 'F');

  // Border - highlighted or normal
  if (isHighlighted) {
    doc.setDrawColor(...color);
    doc.setLineWidth(1.5);
  } else {
    doc.setDrawColor(...COLORS.ui.border);
    doc.setLineWidth(0.8);
  }
  doc.roundedRect(x, y, width, height, 4, 4, 'S');

  // Top accent bar
  doc.setFillColor(...color);
  doc.rect(x + 6, y, width - 12, 3, 'F');

  // Value (large, prominent) - positioned at top
  doc.setFontSize(TYPOGRAPHY.h1.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...color);
  doc.text(value, x + width / 2, y + 18, { align: 'center' });

  // Unit/subtitle below value
  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text(unit, x + width / 2, y + 26, { align: 'center' });

  // Label at bottom
  doc.setFillColor(248, 248, 248);
  doc.rect(x, y + height - 12, width, 12, 'F');

  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.muted);
  doc.text(label.toUpperCase(), x + width / 2, y + height - 4, { align: 'center' });
}

// Section title with premium styling
function drawSectionTitle(
  doc: jsPDF,
  x: number,
  y: number,
  title: string,
  subtitle?: string,
  icon?: 'chart' | 'euro' | 'clock' | 'target' | 'trending'
): number {
  // Icon if provided
  if (icon) {
    drawPremiumIcon(doc, icon, x, y - 2, 12, COLORS.brand.primary);
    x += 16;
  }

  // Accent line
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(x, y, 30, 2.5, 'F');

  // Gradient fade on accent (using progressively lighter colors)
  for (let i = 0; i < 10; i++) {
    const fadeRatio = i * 0.1;
    const fadedColor: [number, number, number] = [
      Math.round(249 + (255 - 249) * fadeRatio),
      Math.round(115 + (255 - 115) * fadeRatio),
      Math.round(22 + (255 - 22) * fadeRatio),
    ];
    doc.setFillColor(...fadedColor);
    doc.rect(x + 30 + i * 2, y, 2, 2.5, 'F');
  }

  // Title
  doc.setFontSize(TYPOGRAPHY.h3.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.primary);
  doc.text(title, x, y + 14);

  let nextY = y + 20;

  if (subtitle) {
    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.muted);
    doc.text(subtitle, x, y + 22);
    nextY = y + 30;
  }

  return nextY;
}

// Premium bar chart with animations-style design
function drawPremiumBarChart(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  data: { label: string; value: number; color: [number, number, number] }[],
  total: number,
  showTotal: boolean = true
): number {
  const rowHeight = 32;
  const labelWidth = 90;
  const valueWidth = 55;
  const barWidth = width - labelWidth - valueWidth - SPACING.md;
  const barX = x + labelWidth;

  // Total header if needed
  if (showTotal) {
    // Premium total card
    doc.setFillColor(...COLORS.bg.light);
    doc.roundedRect(x, y, width, 26, 4, 4, 'F');

    // Left accent
    doc.setFillColor(...COLORS.brand.primary);
    doc.roundedRect(x, y, 4, 26, 2, 0, 'F');
    doc.rect(x + 2, y, 2, 26, 'F');

    doc.setFontSize(TYPOGRAPHY.body.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text('Totale Investering', x + SPACING.lg, y + 16);

    doc.setFontSize(TYPOGRAPHY.h2.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.brand.primary);
    doc.text(formatCurrency(total), x + width - SPACING.md, y + 17, { align: 'right' });

    y += 36;
  }

  data.forEach((item, index) => {
    const rowY = y + index * rowHeight;

    // Row background (alternating)
    if (index % 2 === 0) {
      doc.setFillColor(...COLORS.bg.cream);
      doc.roundedRect(x, rowY, width, rowHeight - 4, 3, 3, 'F');
    }

    // Icon bullet
    doc.setFillColor(...item.color);
    doc.circle(x + 8, rowY + 12, 4, 'F');

    // Label
    doc.setFontSize(TYPOGRAPHY.small.size);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(item.label, x + 18, rowY + 14);

    // Bar background
    doc.setFillColor(...COLORS.bg.subtle);
    doc.roundedRect(barX, rowY + 6, barWidth, 16, 4, 4, 'F');

    // Bar fill with gradient
    const fillWidth = Math.max((item.value / total) * barWidth, 12);
    const darkerColor: [number, number, number] = [
      Math.max(0, item.color[0] - 40),
      Math.max(0, item.color[1] - 40),
      Math.max(0, item.color[2] - 40),
    ];
    drawGradientBar(doc, barX + 2, rowY + 8, fillWidth - 4, 12, item.color, darkerColor, 15);

    // Rounded end cap
    doc.setFillColor(...darkerColor);
    doc.circle(barX + fillWidth - 6, rowY + 14, 5, 'F');

    // Percentage inside bar (if wide enough)
    if (fillWidth > 35) {
      const percentage = ((item.value / total) * 100).toFixed(0);
      doc.setFontSize(TYPOGRAPHY.caption.size);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(`${percentage}%`, barX + fillWidth - 12, rowY + 16, { align: 'right' });
    }

    // Value
    doc.setFontSize(TYPOGRAPHY.body.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text(formatCurrency(item.value), x + width - 4, rowY + 14, { align: 'right' });
  });

  return y + data.length * rowHeight + SPACING.md;
}

// Premium line chart with area fill - Awwwards-level design
function drawPremiumLineChart(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  investment: number,
  monthlySavings: number,
  months: number = 60
): number {
  const chartPadding = { top: 25, right: 18, bottom: 30, left: 58 };
  const chartX = x + chartPadding.left;
  const chartY = y + chartPadding.top;
  const chartWidth = width - chartPadding.left - chartPadding.right;
  const chartHeight = height - chartPadding.top - chartPadding.bottom;

  // Generate data
  const data: number[] = [];
  for (let i = 0; i <= months; i++) {
    data.push(monthlySavings * i - investment);
  }

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  // Multi-layer shadow for premium card
  doc.setFillColor(230, 225, 220);
  doc.roundedRect(x + 3, y + 3, width, height, 8, 8, 'F');
  doc.setFillColor(240, 238, 235);
  doc.roundedRect(x + 1.5, y + 1.5, width, height, 8, 8, 'F');

  // Chart card background with gradient
  const cardBgTop: [number, number, number] = [255, 255, 255];
  const cardBgBottom: [number, number, number] = [252, 250, 248];
  drawVerticalGradient(doc, x, y, width, height, cardBgTop, cardBgBottom, 30);

  // Card border
  doc.setDrawColor(...COLORS.ui.border);
  doc.setLineWidth(0.8);
  doc.roundedRect(x, y, width, height, 8, 8, 'S');

  // Top accent bar
  drawGradientBar(doc, x, y, width, 4, COLORS.brand.primary, COLORS.brand.primaryDark, 30);

  // Inner chart area with subtle background
  doc.setFillColor(253, 252, 250);
  doc.roundedRect(chartX - 5, chartY - 5, chartWidth + 10, chartHeight + 10, 4, 4, 'F');

  // Grid lines with premium styling
  doc.setLineWidth(0.3);
  const gridSteps = 5;
  for (let i = 0; i <= gridSteps; i++) {
    const gridY = chartY + (chartHeight / gridSteps) * i;

    // Alternating grid row backgrounds
    if (i < gridSteps && i % 2 === 0) {
      doc.setFillColor(250, 248, 245);
      doc.rect(chartX, gridY, chartWidth, chartHeight / gridSteps, 'F');
    }

    // Grid line
    doc.setDrawColor(...COLORS.ui.borderLight);
    doc.setLineDashPattern([2, 2], 0);
    doc.line(chartX, gridY, chartX + chartWidth, gridY);
    doc.setLineDashPattern([], 0);

    // Y-axis labels with background
    const gridValue = maxValue - (range / gridSteps) * i;
    const formattedValue = gridValue >= 0 ? `€${Math.round(gridValue / 1000)}k` : `-€${Math.round(Math.abs(gridValue) / 1000)}k`;

    doc.setFillColor(250, 248, 245);
    doc.roundedRect(x + 3, gridY - 5, 45, 10, 2, 2, 'F');

    doc.setFontSize(TYPOGRAPHY.tiny.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(gridValue >= 0 ? COLORS.text.secondary[0] : COLORS.semantic.danger[0], gridValue >= 0 ? COLORS.text.secondary[1] : COLORS.semantic.danger[1], gridValue >= 0 ? COLORS.text.secondary[2] : COLORS.semantic.danger[2]);
    doc.text(formattedValue, chartX - 8, gridY + 2, { align: 'right' });
  }

  // Zero line (break-even) with premium styling
  const zeroY = chartY + chartHeight - ((0 - minValue) / range) * chartHeight;

  // Zero line glow effect
  doc.setFillColor(220, 252, 231);
  doc.rect(chartX, zeroY - 3, chartWidth, 6, 'F');

  doc.setDrawColor(...COLORS.semantic.success);
  doc.setLineWidth(2);
  doc.line(chartX, zeroY, chartX + chartWidth, zeroY);

  // Break-even badge with shadow
  doc.setFillColor(5, 140, 95);
  doc.roundedRect(chartX + chartWidth - 52, zeroY - 10, 50, 16, 4, 4, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.roundedRect(chartX + chartWidth - 53, zeroY - 11, 50, 16, 4, 4, 'F');

  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('BREAK-EVEN', chartX + chartWidth - 28, zeroY - 1, { align: 'center' });

  // Draw area fill with gradient effect
  const stepX = chartWidth / months;

  // Positive area fill (above zero)
  for (let i = 0; i < months; i++) {
    if (data[i + 1] >= 0) {
      const currX = chartX + i * stepX;
      const nextX = chartX + (i + 1) * stepX;
      const currY = Math.max(chartY + chartHeight - ((data[i] - minValue) / range) * chartHeight, zeroY);
      const nextY = chartY + chartHeight - ((data[i + 1] - minValue) / range) * chartHeight;

      // Gradient effect using vertical strips
      const gradient = (i / months);
      const fillColor: [number, number, number] = [
        Math.round(255 - gradient * 30),
        Math.round(245 - gradient * 20),
        Math.round(235 - gradient * 25),
      ];
      doc.setFillColor(...fillColor);

      // Create trapezoid for each segment
      if (data[i] >= 0) {
        doc.moveTo(currX, zeroY);
        doc.lineTo(currX, currY);
        doc.lineTo(nextX, nextY);
        doc.lineTo(nextX, zeroY);
        doc.fill();
      }
    }
  }

  // Draw the main line with premium thickness
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(3.5);

  let prevX = chartX;
  let prevY = chartY + chartHeight - ((data[0] - minValue) / range) * chartHeight;

  for (let i = 1; i <= months; i++) {
    const currX = chartX + i * stepX;
    const currY = chartY + chartHeight - ((data[i] - minValue) / range) * chartHeight;
    doc.line(prevX, prevY, currX, currY);
    prevX = currX;
    prevY = currY;
  }

  // Data points at key intervals with premium styling
  const keyMonths = [0, 12, 24, 36, 48, 60];
  keyMonths.forEach((month) => {
    if (month <= months) {
      const pointX = chartX + month * stepX;
      const pointY = chartY + chartHeight - ((data[month] - minValue) / range) * chartHeight;
      const isPositive = data[month] >= 0;

      // Outer glow
      doc.setFillColor(isPositive ? 220 : 254, isPositive ? 252 : 226, isPositive ? 231 : 226);
      doc.circle(pointX, pointY, 8, 'F');

      // White ring
      doc.setFillColor(255, 255, 255);
      doc.circle(pointX, pointY, 5, 'F');

      // Inner colored ring
      doc.setFillColor(isPositive ? COLORS.semantic.success[0] : COLORS.brand.primary[0], isPositive ? COLORS.semantic.success[1] : COLORS.brand.primary[1], isPositive ? COLORS.semantic.success[2] : COLORS.brand.primary[2]);
      doc.circle(pointX, pointY, 3.5, 'F');

      // Center dot
      doc.setFillColor(255, 255, 255);
      doc.circle(pointX, pointY, 1.5, 'F');

      // Value label at select points
      if (month === 0 || month === 60 || (month > 0 && data[month] >= 0 && data[month - 12] < 0)) {
        const labelColor = data[month] >= 0 ? COLORS.semantic.success : COLORS.semantic.danger;

        // Label background
        const labelWidth = 40;
        doc.setFillColor(isPositive ? 220 : 254, isPositive ? 252 : 226, isPositive ? 231 : 226);
        doc.roundedRect(pointX - labelWidth / 2, pointY - 20, labelWidth, 12, 3, 3, 'F');

        doc.setFontSize(TYPOGRAPHY.caption.size);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...labelColor);
        doc.text(formatCurrency(data[month]), pointX, pointY - 12, { align: 'center' });
      }
    }
  });

  // X-axis labels with premium styling
  keyMonths.forEach((month) => {
    if (month <= months) {
      const labelX = chartX + month * stepX;

      // Month label background
      doc.setFillColor(250, 248, 245);
      doc.roundedRect(labelX - 10, y + height - 22, 20, 12, 2, 2, 'F');

      doc.setFontSize(TYPOGRAPHY.caption.size);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...COLORS.text.secondary);
      doc.text(`${month}`, labelX, y + height - 14, { align: 'center' });
    }
  });

  // X-axis label
  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text('maanden →', chartX + chartWidth, y + height - 5, { align: 'right' });

  // Chart title badge
  const titleBadgeWidth = 95;
  doc.setFillColor(...COLORS.brand.primaryLight);
  doc.roundedRect(x + SPACING.md, y + 8, titleBadgeWidth, 14, 4, 4, 'F');

  doc.setFontSize(TYPOGRAPHY.caption.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('CUMULATIEF RESULTAAT', x + SPACING.md + 5, y + 18);

  // Legend with premium styling
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(x + width - 95, y + 6, 90, 16, 3, 3, 'F');

  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(x + width - 90, y + 11, 15, 5, 2, 2, 'F');

  doc.setFontSize(TYPOGRAPHY.tiny.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('Cumulatieve besparing', x + width - 70, y + 16);

  return y + height + SPACING.lg;
}

// Comparison visual (before → after) with modern styling
function drawComparisonVisual(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  beforeLabel: string,
  beforeValue: string,
  afterLabel: string,
  afterValue: string,
  improvement: string
): number {
  const boxWidth = (width - 55) / 2;
  const boxHeight = 60;

  // Before box
  doc.setFillColor(...COLORS.bg.light);
  doc.setDrawColor(...COLORS.ui.border);
  doc.setLineWidth(1);
  doc.roundedRect(x, y, boxWidth, boxHeight, 5, 5, 'FD');

  // Before label
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text(beforeLabel, x + boxWidth / 2, y + 18, { align: 'center' });

  // Before value
  doc.setFontSize(TYPOGRAPHY.hero.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text(beforeValue, x + boxWidth / 2, y + 45, { align: 'center' });

  // Arrow section
  const arrowX = x + boxWidth + 10;

  // Arrow background circle
  doc.setFillColor(...COLORS.brand.primaryLight);
  doc.circle(arrowX + 17, y + boxHeight / 2, 15, 'F');

  // Arrow icon
  doc.setFontSize(28);
  doc.setTextColor(...COLORS.brand.primary);
  doc.text('→', arrowX + 9, y + boxHeight / 2 + 6);

  // After box
  const afterX = x + boxWidth + 55;
  doc.setFillColor(...COLORS.semantic.successLight);
  doc.setDrawColor(...COLORS.semantic.success);
  doc.setLineWidth(2);
  doc.roundedRect(afterX, y, boxWidth, boxHeight, 5, 5, 'FD');

  // Success checkmark in corner
  doc.setFillColor(...COLORS.semantic.success);
  doc.circle(afterX + boxWidth - 12, y + 12, 8, 'F');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text('✓', afterX + boxWidth - 14.5, y + 15);

  // After label
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.muted);
  doc.text(afterLabel, afterX + boxWidth / 2, y + 18, { align: 'center' });

  // After value
  doc.setFontSize(TYPOGRAPHY.hero.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text(afterValue, afterX + boxWidth / 2, y + 45, { align: 'center' });

  // Improvement badge (centered above)
  const badgeWidth = 60;
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(x + width / 2 - badgeWidth / 2, y - 12, badgeWidth, 20, 10, 10, 'F');

  doc.setFontSize(TYPOGRAPHY.body.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text(improvement, x + width / 2, y + 2, { align: 'center' });

  return y + boxHeight + SPACING.xl;
}

// Executive summary card - Premium design with glass effect
function drawExecutiveSummaryCard(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  metrics: { label: string; value: string; highlight?: boolean }[]
): number {
  const cardHeight = 40 + metrics.length * 16;

  // Multi-layer shadow for premium depth
  doc.setFillColor(235, 200, 170);
  doc.roundedRect(x + 4, y + 4, width, cardHeight, 8, 8, 'F');
  doc.setFillColor(245, 220, 195);
  doc.roundedRect(x + 2, y + 2, width, cardHeight, 8, 8, 'F');

  // Main card background with gradient
  const bgTop: [number, number, number] = [255, 248, 240];
  const bgBottom: [number, number, number] = [255, 240, 225];
  drawVerticalGradient(doc, x, y, width, cardHeight, bgTop, bgBottom, 30);

  // Border
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(1.5);
  doc.roundedRect(x, y, width, cardHeight, 8, 8, 'S');

  // Top gradient accent bar with rounded corners
  drawGradientBar(doc, x + 3, y + 3, width - 6, 6, COLORS.brand.primary, COLORS.brand.primaryDark, 30);

  // Decorative corner element (within card bounds)
  doc.setFillColor(255, 245, 235);
  doc.triangle(x + width - 20, y + cardHeight, x + width, y + cardHeight - 20, x + width, y + cardHeight, 'F');

  // Left accent bar
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(x, y + 15, 4, cardHeight - 30, 2, 2, 'F');

  // Icon container with glow
  doc.setFillColor(255, 235, 215);
  doc.circle(x + SPACING.md + 12, y + 22, 14, 'F');
  doc.setFillColor(255, 225, 200);
  doc.circle(x + SPACING.md + 12, y + 22, 11, 'F');
  drawPremiumIcon(doc, 'star', x + SPACING.md + 4, y + 14, 16, COLORS.brand.primary);

  // Title with premium styling
  doc.setFontSize(TYPOGRAPHY.h3.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('Samenvatting Resultaten', x + SPACING.md + 32, y + 26);

  // Decorative line under title
  drawGradientBar(doc, x + SPACING.md + 32, y + 30, 80, 1.5, COLORS.brand.primary, COLORS.brand.primaryMuted, 15);

  // Metrics with premium row styling
  let metricY = y + 46;
  metrics.forEach((metric, index) => {
    // Row background
    if (index % 2 === 0) {
      doc.setFillColor(255, 250, 245);
    } else {
      doc.setFillColor(255, 255, 255);
    }
    doc.roundedRect(x + SPACING.sm, metricY - 5, width - SPACING.sm * 2, 14, 2, 2, 'F');

    doc.setFontSize(TYPOGRAPHY.body.size);
    doc.setFont('helvetica', 'normal');

    // Premium bullet with gradient effect
    const bulletColor = metric.highlight ? COLORS.semantic.success : COLORS.brand.primary;
    doc.setFillColor(bulletColor[0], bulletColor[1], bulletColor[2]);
    doc.circle(x + SPACING.md + 4, metricY + 2, 3, 'F');
    doc.setFillColor(255, 255, 255);
    doc.circle(x + SPACING.md + 4, metricY + 2, 1.5, 'F');

    // Label
    doc.setTextColor(...COLORS.text.primary);
    doc.text(metric.label + ':', x + SPACING.md + 14, metricY + 4);

    // Value with premium styling
    doc.setFont('helvetica', 'bold');
    if (metric.highlight) {
      // Highlight badge
      const valueWidth = doc.getTextWidth(metric.value) + 12;
      doc.setFillColor(...COLORS.semantic.successLight);
      doc.roundedRect(x + width - SPACING.md - valueWidth, metricY - 3, valueWidth, 12, 3, 3, 'F');
      doc.setTextColor(...COLORS.semantic.successDark);
    } else {
      doc.setTextColor(...COLORS.brand.primaryDark);
    }
    doc.text(metric.value, x + width - SPACING.md - 4, metricY + 4, { align: 'right' });

    metricY += 16;
  });

  return y + cardHeight + SPACING.xl;
}

// Conclusion box with modern styling
function drawConclusionBox(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  title: string,
  points: string[],
  isPositive: boolean = true
): number {
  const bgColor = isPositive ? COLORS.semantic.successLight : COLORS.semantic.infoLight;
  const accentColor = isPositive ? COLORS.semantic.success : COLORS.semantic.info;
  const lineHeight = 12;
  const padding = SPACING.md;
  const contentHeight = points.length * lineHeight + padding * 2 + 28;

  // Background with subtle pattern
  doc.setFillColor(...bgColor);
  doc.roundedRect(x, y, width, contentHeight, 5, 5, 'F');

  // Left accent bar
  doc.setFillColor(...accentColor);
  doc.roundedRect(x, y, 5, contentHeight, 2.5, 0, 'F');
  doc.rect(x + 2.5, y, 2.5, contentHeight, 'F');

  // Icon
  const iconType = isPositive ? 'check' : 'target';
  drawPremiumIcon(doc, iconType, x + padding + 5, y + padding, 16, accentColor);

  // Title
  doc.setFontSize(TYPOGRAPHY.h4.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...accentColor);
  doc.text(title, x + padding + 28, y + padding + 12);

  // Points
  doc.setFontSize(TYPOGRAPHY.small.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.primary);

  points.forEach((point, index) => {
    const bulletY = y + 40 + index * lineHeight;

    // Bullet
    doc.setFillColor(...accentColor);
    doc.circle(x + padding + 8, bulletY - 1, 1.5, 'F');

    doc.text(point, x + padding + 15, bulletY);
  });

  return y + contentHeight + SPACING.md;
}

// Premium table
function drawPremiumTable(
  doc: jsPDF,
  startY: number,
  headers: string[],
  rows: string[][],
  footer?: string[],
  columnStyles?: Record<number, { halign?: 'left' | 'center' | 'right'; textColor?: [number, number, number]; fontStyle?: 'normal' | 'bold' }>
) {
  autoTable(doc, {
    startY,
    head: [headers],
    body: rows,
    foot: footer ? [footer] : undefined,
    theme: 'plain',
    styles: {
      fillColor: COLORS.bg.white,
      textColor: COLORS.text.secondary,
      lineColor: COLORS.ui.border,
      lineWidth: 0.5,
      cellPadding: { top: 8, right: 8, bottom: 8, left: 10 },
      fontSize: TYPOGRAPHY.body.size,
    },
    headStyles: {
      fillColor: COLORS.bg.light,
      textColor: COLORS.text.primary,
      fontStyle: 'bold',
      fontSize: TYPOGRAPHY.body.size,
      cellPadding: { top: 10, right: 8, bottom: 10, left: 10 },
    },
    footStyles: footer ? {
      fillColor: COLORS.brand.primary,
      textColor: [255, 255, 255] as [number, number, number],
      fontStyle: 'bold',
      fontSize: TYPOGRAPHY.body.size + 1,
    } : undefined,
    columnStyles: columnStyles || {},
    margin: { left: LAYOUT.marginLeft, right: LAYOUT.marginRight },
    alternateRowStyles: {
      fillColor: COLORS.bg.cream,
    },
    didDrawPage: () => {
      // Add subtle left border accent on first column
      // This runs after each page is drawn
    },
  });

  return (doc as any).lastAutoTable.finalY;
}

// =========================
// MAIN EXPORT FUNCTIONS
// =========================

export async function generateRobotROIPDF(
  companyData: CompanyData,
  data: RobotROIData
): Promise<Blob> {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  const paybackMonths = data.terugverdientijd;

  // ========== PAGE 1: COVER PAGE ==========
  drawCoverPage(doc, pageWidth, pageHeight, 'robot-roi', companyData.bedrijf, companyData.naam);

  // ========== PAGE 2: ALLE DATA OP ÉÉN PAGINA (PREMIUM STYLING) ==========
  doc.addPage();

  // Premium achtergrond met subtiele gradient
  const bgStepsRobot = 30;
  const bgStepHeightRobot = pageHeight / bgStepsRobot;
  for (let i = 0; i < bgStepsRobot; i++) {
    const ratio = i / bgStepsRobot;
    const r = Math.round(255 - ratio * 4);
    const g = Math.round(253 - ratio * 3);
    const b = Math.round(250 - ratio * 3);
    doc.setFillColor(r, g, b);
    doc.rect(0, i * bgStepHeightRobot, pageWidth, bgStepHeightRobot + 0.5, 'F');
  }

  // Linker zijbalk accent (oranje gradient)
  drawVerticalGradient(doc, 0, 0, 4, pageHeight, COLORS.brand.primary, COLORS.brand.primaryDark, 40);

  // Rechter decoratieve hoek
  doc.setFillColor(255, 247, 237);
  doc.triangle(pageWidth, 0, pageWidth, 50, pageWidth - 50, 0, 'F');

  // Subtiele diagonale lijnen rechts
  doc.setDrawColor(254, 230, 210);
  doc.setLineWidth(0.4);
  for (let i = 0; i < 4; i++) {
    const offset = i * 8;
    doc.line(pageWidth - 40 + offset, 0, pageWidth, 40 - offset);
  }

  // Linksonder decoratieve hoek
  doc.setFillColor(255, 247, 237);
  doc.triangle(0, pageHeight, 0, pageHeight - 35, 35, pageHeight, 'F');

  // Premium header met gradient achtergrond
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(8, 6, pageWidth - 16, 18, 3, 3, 'F');
  drawGradientBar(doc, 8, 6, pageWidth - 16, 3, COLORS.brand.primary, COLORS.brand.primaryDark, 20);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.primary);
  doc.text('PROCES', 15, 17);
  doc.setTextColor(...COLORS.brand.primary);
  doc.text('360', 40, 17);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text(`Robot ROI Analyse - ${companyData.bedrijf || companyData.naam}`, pageWidth - 15, 17, { align: 'right' });

  let yPos = 30;

  // ===== SECTIE 1: KERNMETRICS (3 kolommen - premium) =====
  const metricWidthRobot = 60;
  const metricsRobot = [
    {
      label: 'Terugverdientijd',
      value: `${paybackMonths.toFixed(1)} mnd`,
      sub: `= ${(paybackMonths / 12).toFixed(1)} jaar`,
      color: paybackMonths < 24 ? COLORS.semantic.success : COLORS.semantic.warning,
      bgLight: paybackMonths < 24 ? [236, 253, 245] as [number, number, number] : [255, 251, 235] as [number, number, number]
    },
    {
      label: 'Jaarlijkse besparing',
      value: formatCurrency(data.jaarlijkseBesparing),
      sub: 'per jaar',
      color: COLORS.semantic.success,
      bgLight: [236, 253, 245] as [number, number, number]
    },
    {
      label: '5-jaars ROI',
      value: `${data.roi.toFixed(0)}%`,
      sub: 'rendement',
      color: COLORS.semantic.info,
      bgLight: [239, 246, 255] as [number, number, number]
    },
  ];

  metricsRobot.forEach((m, i) => {
    const x = 10 + i * (metricWidthRobot + 5);

    // Schaduw effect
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(x + 1, yPos + 1, metricWidthRobot, 30, 3, 3, 'F');

    // Gekleurde achtergrond kaart
    doc.setFillColor(...m.bgLight);
    doc.roundedRect(x, yPos, metricWidthRobot, 30, 3, 3, 'F');

    // Gekleurde border
    doc.setDrawColor(...m.color);
    doc.setLineWidth(0.8);
    doc.roundedRect(x, yPos, metricWidthRobot, 30, 3, 3, 'S');

    // Top accent bar met gradient effect
    doc.setFillColor(...m.color);
    doc.roundedRect(x, yPos, metricWidthRobot, 4, 3, 3, 'F');
    doc.setFillColor(...m.bgLight);
    doc.rect(x, yPos + 3, metricWidthRobot, 2, 'F');

    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...m.color);
    doc.text(m.value, x + metricWidthRobot / 2, yPos + 14, { align: 'center' });

    doc.setFontSize(7);
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(m.sub, x + metricWidthRobot / 2, yPos + 20, { align: 'center' });

    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.muted);
    doc.text(m.label.toUpperCase(), x + metricWidthRobot / 2, yPos + 27, { align: 'center' });
  });

  yPos += 36;

  // ===== SECTIE 2: INVESTERING & PARAMETERS (2 kolommen - premium) =====
  const colWidthRobot = 92;

  // Links: Investering kaart
  // Schaduw
  doc.setFillColor(235, 235, 235);
  doc.roundedRect(11, yPos + 1, colWidthRobot, 54, 4, 4, 'F');

  // Kaart achtergrond met lichte oranje tint
  doc.setFillColor(255, 253, 250);
  doc.roundedRect(10, yPos, colWidthRobot, 54, 4, 4, 'F');

  // Oranje border
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(0.6);
  doc.roundedRect(10, yPos, colWidthRobot, 54, 4, 4, 'S');

  // Header met gradient
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(10, yPos, colWidthRobot, 12, 4, 0, 'F');
  doc.setFillColor(255, 253, 250);
  doc.rect(10, yPos + 10, colWidthRobot, 4, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('INVESTERING', 15, yPos + 8);

  const invItemsRobot = [
    { label: 'Robot aanschaf', value: data.robotPrijs },
    { label: 'Gripper / End-effector', value: data.gripperKosten },
    { label: 'Installatie', value: data.installatieKosten },
    { label: 'Training', value: data.trainingKosten },
  ];

  let itemYRobot = yPos + 18;
  doc.setFontSize(7);
  invItemsRobot.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(item.label, 15, itemYRobot);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text(formatCurrency(item.value), 97, itemYRobot, { align: 'right' });
    itemYRobot += 7;
  });

  // Totaal met gradient achtergrond
  doc.setFillColor(...COLORS.brand.primaryMuted);
  doc.roundedRect(13, itemYRobot, colWidthRobot - 6, 10, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('Totaal', 17, itemYRobot + 7);
  doc.text(formatCurrency(data.totaleInvestering), 95, itemYRobot + 7, { align: 'right' });

  // Rechts: Parameters kaart
  const col2XRobot = 108;

  // Schaduw
  doc.setFillColor(235, 235, 235);
  doc.roundedRect(col2XRobot + 1, yPos + 1, colWidthRobot, 54, 4, 4, 'F');

  // Kaart achtergrond met lichte blauwe tint
  doc.setFillColor(248, 250, 255);
  doc.roundedRect(col2XRobot, yPos, colWidthRobot, 54, 4, 4, 'F');

  // Blauwe border
  doc.setDrawColor(...COLORS.brand.secondary);
  doc.setLineWidth(0.6);
  doc.roundedRect(col2XRobot, yPos, colWidthRobot, 54, 4, 4, 'S');

  // Header met gradient
  doc.setFillColor(...COLORS.brand.secondary);
  doc.roundedRect(col2XRobot, yPos, colWidthRobot, 12, 4, 0, 'F');
  doc.setFillColor(248, 250, 255);
  doc.rect(col2XRobot, yPos + 10, colWidthRobot, 4, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('PARAMETERS', col2XRobot + 5, yPos + 8);

  const paramItems = [
    { label: 'Personeelskosten/uur', value: formatCurrency(data.uurloon) },
    { label: 'Shifts per dag', value: `${data.shifts}` },
    { label: 'Werkdagen per jaar', value: `${data.werkdagen}` },
    { label: 'Robot beschikbaarheid', value: `${data.robotBeschikbaarheid}%` },
  ];

  itemYRobot = yPos + 18;
  doc.setFontSize(7);
  paramItems.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(item.label, col2XRobot + 5, itemYRobot);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text(item.value, col2XRobot + colWidthRobot - 5, itemYRobot, { align: 'right' });
    itemYRobot += 7;
  });

  // Productiviteit highlight met groene gradient
  doc.setFillColor(...COLORS.semantic.successLight);
  doc.roundedRect(col2XRobot + 3, itemYRobot, colWidthRobot - 6, 10, 2, 2, 'F');
  doc.setDrawColor(...COLORS.semantic.success);
  doc.setLineWidth(0.4);
  doc.roundedRect(col2XRobot + 3, itemYRobot, colWidthRobot - 6, 10, 2, 2, 'S');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text('Productiviteit', col2XRobot + 7, itemYRobot + 7);
  doc.text(`+${data.productiviteit}%`, col2XRobot + colWidthRobot - 7, itemYRobot + 7, { align: 'right' });

  yPos += 60;

  // ===== SECTIE 3: KOSTENVERGELIJKING (premium) =====
  // Sectie header met gradient achtergrond
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.semantic.warning);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.primary);
  doc.text('KOSTENVERGELIJKING (PER JAAR)', 18, yPos + 7);

  yPos += 14;

  autoTable(doc, {
    startY: yPos,
    head: [['', 'Huidige situatie', 'Met robot', 'Besparing']],
    body: [
      ['Arbeidskosten', formatCurrency(data.huidigeJaarKosten), formatCurrency(data.robotJaarKosten), `-${formatCurrency(data.jaarlijkseBesparing)}`],
    ],
    theme: 'plain',
    styles: {
      fontSize: 7,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: COLORS.brand.secondary,
      textColor: [255, 255, 255] as [number, number, number],
      fontStyle: 'bold',
      fontSize: 7,
    },
    bodyStyles: {
      fillColor: [248, 250, 255] as [number, number, number],
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 35, textColor: COLORS.brand.secondary },
      1: { halign: 'right', cellWidth: 50 },
      2: { halign: 'right', cellWidth: 45 },
      3: { halign: 'right', textColor: COLORS.semantic.success, fontStyle: 'bold', cellWidth: 45 },
    },
    margin: { left: 10, right: 10 },
    tableLineColor: COLORS.brand.secondaryLight,
    tableLineWidth: 0.3,
  });

  yPos = (doc as any).lastAutoTable.finalY + 6;

  // ===== SECTIE 4: 5-JAARS BESPARINGSPROJECTIE (premium) =====
  // Sectie header met gradient achtergrond
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('MEERJARIGE BESPARINGSPROJECTIE', 18, yPos + 7);

  yPos += 14;

  const yearlyDataRobot = [];
  for (let year = 1; year <= 5; year++) {
    const cumulativeSavings = data.jaarlijkseBesparing * year;
    const netResult = cumulativeSavings - data.totaleInvestering;
    yearlyDataRobot.push([
      `Jaar ${year}`,
      formatCurrency(data.jaarlijkseBesparing),
      formatCurrency(cumulativeSavings),
      formatCurrency(netResult),
    ]);
  }

  autoTable(doc, {
    startY: yPos,
    head: [['Periode', 'Besparing/jaar', 'Cumulatief', 'Netto resultaat']],
    body: yearlyDataRobot,
    theme: 'plain',
    styles: {
      fontSize: 7,
      cellPadding: 2.5,
    },
    headStyles: {
      fillColor: COLORS.brand.primary,
      textColor: [255, 255, 255] as [number, number, number],
      fontStyle: 'bold',
      fontSize: 7,
    },
    bodyStyles: {
      fillColor: [255, 253, 250] as [number, number, number],
    },
    alternateRowStyles: {
      fillColor: [255, 248, 240] as [number, number, number],
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 30, textColor: COLORS.brand.primaryDark },
      1: { halign: 'right', cellWidth: 45 },
      2: { halign: 'right', cellWidth: 45 },
      3: { halign: 'right', cellWidth: 50 },
    },
    didParseCell: (cellData) => {
      if (cellData.column.index === 3 && cellData.section === 'body') {
        const value = parseFloat(cellData.cell.raw?.toString().replace(/[€.]/g, '').replace(',', '.') || '0');
        if (value >= 0) {
          cellData.cell.styles.textColor = COLORS.semantic.success;
          cellData.cell.styles.fontStyle = 'bold';
        } else {
          cellData.cell.styles.textColor = COLORS.semantic.danger;
        }
      }
    },
    margin: { left: 10, right: 10 },
    tableLineColor: COLORS.brand.primaryMuted,
    tableLineWidth: 0.3,
  });

  yPos = (doc as any).lastAutoTable.finalY + 6;

  // ===== SECTIE 5: INVESTERING VS BESPARINGEN (premium) =====
  // Sectie header
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.semantic.info);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.secondary);
  doc.text('INVESTERING VS. BESPARINGEN', 18, yPos + 7);

  yPos += 12;

  // Bar chart met betere proporties en visuele impact (Robot ROI)
  const barMaxWidthRobot = 130;
  const barHeightRobot = 12;
  const labelWidthRobot = 55;
  const barStartXRobot = labelWidthRobot + 5;
  const maxSavings = data.vijfJaarBesparing;

  // --- Investering bar ---
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('Investering', 15, yPos + 8);

  const invBarWidthRobot = Math.max((data.totaleInvestering / maxSavings) * barMaxWidthRobot, 30);

  // Achtergrond track
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(barStartXRobot, yPos + 2, barMaxWidthRobot, barHeightRobot, 4, 4, 'F');

  // Bar schaduw
  doc.setFillColor(230, 180, 140);
  doc.roundedRect(barStartXRobot + 1, yPos + 3, invBarWidthRobot, barHeightRobot, 4, 4, 'F');

  // Hoofdbar met 3D gradient effect
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(barStartXRobot, yPos + 2, invBarWidthRobot, barHeightRobot, 4, 4, 'F');
  // Lichtere bovenkant voor 3D effect
  doc.setFillColor(255, 165, 100);
  doc.roundedRect(barStartXRobot, yPos + 2, invBarWidthRobot, 5, 4, 0, 'F');
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(barStartXRobot, yPos + 6, invBarWidthRobot, 2, 'F');

  // Waarde naast de bar
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text(formatCurrency(data.totaleInvestering), barStartXRobot + invBarWidthRobot + 5, yPos + 10);

  yPos += 18;

  // --- 5-jaars besparing bar ---
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('5-jaars besparing', 15, yPos + 8);

  // Achtergrond track
  doc.setFillColor(240, 250, 245);
  doc.roundedRect(barStartXRobot, yPos + 2, barMaxWidthRobot, barHeightRobot, 4, 4, 'F');

  // Bar schaduw
  doc.setFillColor(150, 220, 180);
  doc.roundedRect(barStartXRobot + 1, yPos + 3, barMaxWidthRobot, barHeightRobot, 4, 4, 'F');

  // Hoofdbar met 3D gradient effect
  doc.setFillColor(...COLORS.semantic.success);
  doc.roundedRect(barStartXRobot, yPos + 2, barMaxWidthRobot, barHeightRobot, 4, 4, 'F');
  // Lichtere bovenkant voor 3D effect
  doc.setFillColor(74, 222, 150);
  doc.roundedRect(barStartXRobot, yPos + 2, barMaxWidthRobot, 5, 4, 0, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.rect(barStartXRobot, yPos + 6, barMaxWidthRobot, 2, 'F');

  // Waarde naast de bar
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text(formatCurrency(data.vijfJaarBesparing), barStartXRobot + barMaxWidthRobot + 5, yPos + 10);

  yPos += 18;

  // Netto resultaat - premium highlight box (10/10 quality)
  const netResultRobot = data.vijfJaarBesparing - data.totaleInvestering;

  // Grotere, meer prominente box
  const resultBoxYRobot = yPos;
  const resultBoxHeightRobot = 20;

  // Diepere schaduw voor meer impact
  doc.setFillColor(180, 220, 200);
  doc.roundedRect(12, resultBoxYRobot + 2, 186, resultBoxHeightRobot, 5, 5, 'F');

  // Hoofdachtergrond met rijke groene tint
  doc.setFillColor(220, 252, 231); // Rijker groen
  doc.roundedRect(10, resultBoxYRobot, 190, resultBoxHeightRobot, 5, 5, 'F');

  // Gradient effect aan de bovenkant
  doc.setFillColor(187, 247, 208);
  doc.roundedRect(10, resultBoxYRobot, 190, 8, 5, 0, 'F');
  doc.setFillColor(220, 252, 231);
  doc.rect(10, resultBoxYRobot + 6, 190, 4, 'F');

  // Links groene accent bar (dikkere, gradient-achtig)
  doc.setFillColor(34, 197, 94); // Rijker groen
  doc.roundedRect(10, resultBoxYRobot, 6, resultBoxHeightRobot, 5, 0, 'F');
  doc.setFillColor(22, 163, 74); // Donkerder accent onderaan
  doc.rect(10, resultBoxYRobot + 12, 6, 8, 'F');

  // Stevige border
  doc.setDrawColor(34, 197, 94);
  doc.setLineWidth(1);
  doc.roundedRect(10, resultBoxYRobot, 190, resultBoxHeightRobot, 5, 5, 'S');

  // Checkmark icoon voor succes
  doc.setFillColor(34, 197, 94);
  doc.circle(25, resultBoxYRobot + resultBoxHeightRobot / 2, 5, 'F');
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(1.2);
  // Checkmark lijnen
  doc.line(22.5, resultBoxYRobot + resultBoxHeightRobot / 2, 24, resultBoxYRobot + resultBoxHeightRobot / 2 + 2);
  doc.line(24, resultBoxYRobot + resultBoxHeightRobot / 2 + 2, 27.5, resultBoxYRobot + resultBoxHeightRobot / 2 - 2);

  // Tekst met grotere font
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(21, 128, 61); // Donkergroen
  doc.text('Netto winst na 5 jaar:', 35, resultBoxYRobot + 8);

  // Groot bedrag rechts uitgelijnd
  doc.setFontSize(14);
  doc.setTextColor(22, 163, 74);
  doc.text(formatCurrency(netResultRobot), 195, resultBoxYRobot + 14, { align: 'right' });

  yPos += 24;

  // ===== SECTIE 6: OPERATIONELE VOORDELEN (premium) =====
  // Sectie header
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text('OPERATIONELE VOORDELEN', 18, yPos + 7);

  yPos += 14;

  const benefits = [
    `Arbeidskosten: ${formatCurrency(data.huidigeJaarKosten)} -> ${formatCurrency(data.robotJaarKosten)}/jaar`,
    `Productiviteit +${data.productiviteit}% door consistente output`,
    `Robot beschikbaarheid ${data.robotBeschikbaarheid}% vs ~70% menselijk`,
    `${formatNumber(data.jaarlijkseUren)} extra productieve uren/jaar`,
  ];

  doc.setFontSize(7);
  benefits.forEach((benefit, index) => {
    // Afwisselende achtergrondkleuren
    if (index % 2 === 0) {
      doc.setFillColor(248, 255, 250);
      doc.roundedRect(15, yPos - 3, 180, 9, 1, 1, 'F');
    }
    doc.setFillColor(...COLORS.semantic.success);
    doc.circle(20, yPos + 1, 2, 'F');
    doc.setFillColor(255, 255, 255);
    doc.circle(20, yPos + 1, 1, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(benefit, 26, yPos + 3);
    yPos += 8;
  });

  // ===== FOOTER (premium Robot ROI) =====
  const footerYRobot = pageHeight - 18;

  // Footer achtergrond met subtiele gradient
  doc.setFillColor(252, 250, 248);
  doc.rect(0, footerYRobot - 5, pageWidth, 25, 'F');

  // Top lijn met gradient effect
  drawGradientBar(doc, 10, footerYRobot - 5, pageWidth - 20, 1.5, COLORS.brand.primary, COLORS.brand.primaryMuted, 15);

  doc.setFontSize(6);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...COLORS.text.muted);
  doc.text('Vertrouwelijk - Alleen voor interne besluitvorming', 15, footerYRobot + 4);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('info@proces360.com | 085 - 401 0752', 15, footerYRobot + 10);

  // Centered website link
  doc.setTextColor(...COLORS.brand.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('www.proces360.com', pageWidth / 2, footerYRobot + 10, { align: 'center' });

  // Page number badge
  doc.setFillColor(...COLORS.brand.primaryLight);
  doc.roundedRect(175, footerYRobot + 2, 24, 10, 3, 3, 'F');
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(0.3);
  doc.roundedRect(175, footerYRobot + 2, 24, 10, 3, 3, 'S');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('2 / 2', 187, footerYRobot + 8.5, { align: 'center' });

  return doc.output('blob');
}

export async function generateOEEPDF(
  companyData: CompanyData,
  data: OEEData
): Promise<Blob> {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const totalPages = 2;

  // ========== PAGE 1: COVER PAGE ==========
  drawCoverPage(doc, pageWidth, pageHeight, 'oee', companyData.bedrijf, companyData.naam);

  // ========== PAGE 2: ALLE DATA OP ÉÉN PAGINA (PREMIUM STYLING) ==========
  doc.addPage();

  // Premium achtergrond met subtiele gradient
  const bgSteps = 30;
  const bgStepHeight = pageHeight / bgSteps;
  for (let i = 0; i < bgSteps; i++) {
    const ratio = i / bgSteps;
    const r = Math.round(255 - ratio * 4);
    const g = Math.round(253 - ratio * 3);
    const b = Math.round(250 - ratio * 3);
    doc.setFillColor(r, g, b);
    doc.rect(0, i * bgStepHeight, pageWidth, bgStepHeight + 0.5, 'F');
  }

  // Linker zijbalk accent (oranje gradient)
  drawVerticalGradient(doc, 0, 0, 4, pageHeight, COLORS.brand.primary, COLORS.brand.primaryDark, 40);

  // Rechter decoratieve hoek
  doc.setFillColor(255, 247, 237); // Zeer licht oranje
  doc.triangle(pageWidth, 0, pageWidth, 50, pageWidth - 50, 0, 'F');

  // Subtiele diagonale lijnen rechts
  doc.setDrawColor(254, 230, 210);
  doc.setLineWidth(0.4);
  for (let i = 0; i < 4; i++) {
    const offset = i * 8;
    doc.line(pageWidth - 40 + offset, 0, pageWidth, 40 - offset);
  }

  // Linksonder decoratieve hoek
  doc.setFillColor(255, 247, 237);
  doc.triangle(0, pageHeight, 0, pageHeight - 35, 35, pageHeight, 'F');

  // Premium header met gradient achtergrond
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(8, 6, pageWidth - 16, 18, 3, 3, 'F');
  drawGradientBar(doc, 8, 6, pageWidth - 16, 3, COLORS.brand.primary, COLORS.brand.primaryDark, 20);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.primary);
  doc.text('PROCES', 15, 17);
  doc.setTextColor(...COLORS.brand.primary);
  doc.text('360', 40, 17);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text(`OEE Verbeteringsrapport - ${companyData.bedrijf || companyData.naam}`, pageWidth - 15, 17, { align: 'right' });

  let yPos = 30;

  // ===== SECTIE 1: OEE VERBETERING (premium styled) =====
  // Gradient achtergrond voor de sectie
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 24, 4, 4, 'F');

  // Oranje accent lijn links
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(10, yPos, 4, 24, 2, 0, 'F');

  // Subtiele schaduw effect
  doc.setDrawColor(254, 215, 170);
  doc.setLineWidth(0.5);
  doc.roundedRect(10, yPos, 190, 24, 4, 4, 'S');

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('OEE VERBETERING', 20, yPos + 8);

  // Huidige OEE met badge achtergrond
  doc.setFillColor(243, 244, 246);
  doc.roundedRect(68, yPos + 4, 30, 16, 2, 2, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text(`${data.huidigeOEE}%`, 83, yPos + 15, { align: 'center' });

  // Custom getekende pijl (voorkomt encoding issues)
  const arrowX = 103;
  const arrowY = yPos + 12;
  doc.setFillColor(...COLORS.brand.primary);
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(1.5);
  // Horizontale lijn
  doc.line(arrowX - 3, arrowY, arrowX + 5, arrowY);
  // Pijlpunt (driehoek)
  doc.triangle(arrowX + 5, arrowY - 3, arrowX + 5, arrowY + 3, arrowX + 9, arrowY, 'F');

  // Doel OEE met groene badge
  doc.setFillColor(...COLORS.semantic.successLight);
  doc.roundedRect(112, yPos + 4, 30, 16, 2, 2, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text(`${data.doelOEE}%`, 127, yPos + 15, { align: 'center' });

  doc.setFontSize(6);
  doc.setTextColor(...COLORS.text.muted);
  doc.text('huidige', 83, yPos + 22, { align: 'center' });
  doc.text('doel', 127, yPos + 22, { align: 'center' });

  // Verbetering badge met gradient effect
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(150, yPos + 4, 46, 16, 3, 3, 'F');
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text(`+${data.oeeVerbetering.toFixed(1)} pp`, 173, yPos + 14, { align: 'center' });

  yPos += 30;

  // ===== SECTIE 2: KERNMETRICS (3 kolommen - premium) =====
  const metricWidth = 60;
  const metrics = [
    {
      label: 'Extra omzet/jaar',
      value: formatCurrency(data.extraJaarOmzet),
      sub: `+${formatCurrency(data.extraMaandOmzet)}/mnd`,
      color: COLORS.semantic.success,
      bgLight: [236, 253, 245] as [number, number, number] // Licht groen
    },
    {
      label: 'Terugverdientijd',
      value: `${data.terugverdientijd.toFixed(1)} mnd`,
      sub: `= ${(data.terugverdientijd / 12).toFixed(1)} jaar`,
      color: data.terugverdientijd < 12 ? COLORS.semantic.success : COLORS.semantic.warning,
      bgLight: data.terugverdientijd < 12 ? [236, 253, 245] as [number, number, number] : [255, 251, 235] as [number, number, number]
    },
    {
      label: 'ROI jaar 1',
      value: `${data.jaarROI.toFixed(0)}%`,
      sub: 'rendement',
      color: COLORS.semantic.info,
      bgLight: [239, 246, 255] as [number, number, number] // Licht blauw
    },
  ];

  metrics.forEach((m, i) => {
    const x = 10 + i * (metricWidth + 5);

    // Schaduw effect
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(x + 1, yPos + 1, metricWidth, 30, 3, 3, 'F');

    // Gekleurde achtergrond kaart
    doc.setFillColor(...m.bgLight);
    doc.roundedRect(x, yPos, metricWidth, 30, 3, 3, 'F');

    // Gekleurde border
    doc.setDrawColor(...m.color);
    doc.setLineWidth(0.8);
    doc.roundedRect(x, yPos, metricWidth, 30, 3, 3, 'S');

    // Top accent bar met gradient effect
    doc.setFillColor(...m.color);
    doc.roundedRect(x, yPos, metricWidth, 4, 3, 3, 'F');
    doc.setFillColor(...m.bgLight);
    doc.rect(x, yPos + 3, metricWidth, 2, 'F');

    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...m.color);
    doc.text(m.value, x + metricWidth / 2, yPos + 14, { align: 'center' });

    doc.setFontSize(7);
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(m.sub, x + metricWidth / 2, yPos + 20, { align: 'center' });

    doc.setFontSize(6);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.muted);
    doc.text(m.label.toUpperCase(), x + metricWidth / 2, yPos + 27, { align: 'center' });
  });

  yPos += 36;

  // ===== SECTIE 3: INVESTERING & PRODUCTIE (2 kolommen - premium) =====
  const colWidth = 92;

  // Links: Investering kaart
  // Schaduw
  doc.setFillColor(235, 235, 235);
  doc.roundedRect(11, yPos + 1, colWidth, 54, 4, 4, 'F');

  // Kaart achtergrond met lichte oranje tint
  doc.setFillColor(255, 253, 250);
  doc.roundedRect(10, yPos, colWidth, 54, 4, 4, 'F');

  // Oranje border
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(0.6);
  doc.roundedRect(10, yPos, colWidth, 54, 4, 4, 'S');

  // Header met gradient
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(10, yPos, colWidth, 12, 4, 0, 'F');
  doc.setFillColor(255, 253, 250);
  doc.rect(10, yPos + 10, colWidth, 4, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('INVESTERING', 15, yPos + 8);

  const invItems = [
    { label: 'Consultancy', value: data.consultancyKosten },
    { label: 'Software', value: data.softwareKosten },
    { label: 'Training', value: data.trainingsKosten },
    { label: 'Implementatie', value: data.implementatieKosten },
  ];

  let itemY = yPos + 18;
  doc.setFontSize(7);
  invItems.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(item.label, 15, itemY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text(formatCurrency(item.value), 97, itemY, { align: 'right' });
    itemY += 7;
  });

  // Totaal met gradient achtergrond
  doc.setFillColor(...COLORS.brand.primaryMuted);
  doc.roundedRect(13, itemY, colWidth - 6, 10, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('Totaal', 17, itemY + 7);
  doc.text(formatCurrency(data.totaleInvestering), 95, itemY + 7, { align: 'right' });

  // Rechts: Productie kaart
  const col2X = 108;

  // Schaduw
  doc.setFillColor(235, 235, 235);
  doc.roundedRect(col2X + 1, yPos + 1, colWidth, 54, 4, 4, 'F');

  // Kaart achtergrond met lichte blauwe tint
  doc.setFillColor(248, 250, 255);
  doc.roundedRect(col2X, yPos, colWidth, 54, 4, 4, 'F');

  // Blauwe border
  doc.setDrawColor(...COLORS.brand.secondary);
  doc.setLineWidth(0.6);
  doc.roundedRect(col2X, yPos, colWidth, 54, 4, 4, 'S');

  // Header met gradient
  doc.setFillColor(...COLORS.brand.secondary);
  doc.roundedRect(col2X, yPos, colWidth, 12, 4, 0, 'F');
  doc.setFillColor(248, 250, 255);
  doc.rect(col2X, yPos + 10, colWidth, 4, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('PRODUCTIELIJN', col2X + 5, yPos + 8);

  const prodItems = [
    { label: 'Maandomzet', value: formatCurrency(data.maandOmzet) },
    { label: 'Jaaromzet', value: formatCurrency(data.jaarOmzet) },
    { label: 'Winstmarge', value: `${data.winstmarge}%` },
    { label: 'Extra omzet/jaar', value: formatCurrency(data.extraJaarOmzet) },
  ];

  itemY = yPos + 18;
  doc.setFontSize(7);
  prodItems.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.text.secondary);
    doc.text(item.label, col2X + 5, itemY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...COLORS.text.primary);
    doc.text(item.value, col2X + colWidth - 5, itemY, { align: 'right' });
    itemY += 7;
  });

  // Extra winst highlight met groene gradient
  doc.setFillColor(...COLORS.semantic.successLight);
  doc.roundedRect(col2X + 3, itemY, colWidth - 6, 10, 2, 2, 'F');
  doc.setDrawColor(...COLORS.semantic.success);
  doc.setLineWidth(0.4);
  doc.roundedRect(col2X + 3, itemY, colWidth - 6, 10, 2, 2, 'S');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text('Extra winst/jaar', col2X + 7, itemY + 7);
  doc.text(formatCurrency(data.extraJaarWinst), col2X + colWidth - 7, itemY + 7, { align: 'right' });

  yPos += 60;

  // ===== SECTIE 4: 5-JAARS PROJECTIE (premium tabel) =====
  // Sectie header met gradient achtergrond
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text('MEERJARIGE WINSTPROJECTIE', 18, yPos + 7);

  yPos += 14;

  const yearlyData = [];
  for (let year = 1; year <= 5; year++) {
    const cumulativeProfit = data.extraJaarWinst * year;
    const netResult = cumulativeProfit - data.totaleInvestering;
    yearlyData.push([
      `Jaar ${year}`,
      formatCurrency(data.extraJaarWinst),
      formatCurrency(cumulativeProfit),
      formatCurrency(netResult),
    ]);
  }

  autoTable(doc, {
    startY: yPos,
    head: [['Periode', 'Extra winst/jaar', 'Cumulatief', 'Netto resultaat']],
    body: yearlyData,
    theme: 'plain',
    styles: {
      fontSize: 7,
      cellPadding: 2.5,
    },
    headStyles: {
      fillColor: COLORS.brand.primary,
      textColor: [255, 255, 255] as [number, number, number],
      fontStyle: 'bold',
      fontSize: 7,
    },
    bodyStyles: {
      fillColor: [255, 253, 250] as [number, number, number],
    },
    alternateRowStyles: {
      fillColor: [255, 248, 240] as [number, number, number],
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 30, textColor: COLORS.brand.primaryDark },
      1: { halign: 'right', cellWidth: 45 },
      2: { halign: 'right', cellWidth: 45 },
      3: { halign: 'right', cellWidth: 50 },
    },
    didParseCell: (cellData) => {
      if (cellData.column.index === 3 && cellData.section === 'body') {
        const value = parseFloat(cellData.cell.raw?.toString().replace(/[€.]/g, '').replace(',', '.') || '0');
        if (value >= 0) {
          cellData.cell.styles.textColor = COLORS.semantic.success;
          cellData.cell.styles.fontStyle = 'bold';
        } else {
          cellData.cell.styles.textColor = COLORS.semantic.danger;
        }
      }
    },
    margin: { left: 10, right: 10 },
    tableLineColor: COLORS.brand.primaryMuted,
    tableLineWidth: 0.3,
  });

  yPos = (doc as any).lastAutoTable.finalY + 6;

  // ===== SECTIE 5: INVESTERING VS OPBRENGSTEN (premium) =====
  // Sectie header
  doc.setFillColor(255, 251, 247);
  doc.roundedRect(10, yPos, 190, 10, 2, 2, 'F');
  doc.setFillColor(...COLORS.semantic.info);
  doc.rect(10, yPos, 3, 10, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.secondary);
  doc.text('INVESTERING VS. OPBRENGSTEN', 18, yPos + 7);

  yPos += 12;

  // Bar chart met betere proporties en visuele impact
  const barMaxWidth = 130;
  const barHeight = 12;
  const labelWidth = 55;
  const barStartX = labelWidth + 5;
  const maxProfit = data.vijfJaarWinst;

  // --- Investering bar ---
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('Investering', 15, yPos + 8);

  const invBarWidth = Math.max((data.totaleInvestering / maxProfit) * barMaxWidth, 30);

  // Achtergrond track
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(barStartX, yPos + 2, barMaxWidth, barHeight, 4, 4, 'F');

  // Bar schaduw
  doc.setFillColor(230, 180, 140);
  doc.roundedRect(barStartX + 1, yPos + 3, invBarWidth, barHeight, 4, 4, 'F');

  // Hoofdbar met 3D gradient effect
  doc.setFillColor(...COLORS.brand.primary);
  doc.roundedRect(barStartX, yPos + 2, invBarWidth, barHeight, 4, 4, 'F');
  // Lichtere bovenkant voor 3D effect
  doc.setFillColor(255, 165, 100);
  doc.roundedRect(barStartX, yPos + 2, invBarWidth, 5, 4, 0, 'F');
  doc.setFillColor(...COLORS.brand.primary);
  doc.rect(barStartX, yPos + 6, invBarWidth, 2, 'F');

  // Waarde naast de bar
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.text(formatCurrency(data.totaleInvestering), barStartX + invBarWidth + 5, yPos + 10);

  yPos += 18;

  // --- 5-jaars winst bar ---
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('5-jaars winst', 15, yPos + 8);

  // Achtergrond track
  doc.setFillColor(240, 250, 245);
  doc.roundedRect(barStartX, yPos + 2, barMaxWidth, barHeight, 4, 4, 'F');

  // Bar schaduw
  doc.setFillColor(150, 220, 180);
  doc.roundedRect(barStartX + 1, yPos + 3, barMaxWidth, barHeight, 4, 4, 'F');

  // Hoofdbar met 3D gradient effect
  doc.setFillColor(...COLORS.semantic.success);
  doc.roundedRect(barStartX, yPos + 2, barMaxWidth, barHeight, 4, 4, 'F');
  // Lichtere bovenkant voor 3D effect
  doc.setFillColor(74, 222, 150);
  doc.roundedRect(barStartX, yPos + 2, barMaxWidth, 5, 4, 0, 'F');
  doc.setFillColor(...COLORS.semantic.success);
  doc.rect(barStartX, yPos + 6, barMaxWidth, 2, 'F');

  // Waarde naast de bar
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...COLORS.semantic.successDark);
  doc.text(formatCurrency(data.vijfJaarWinst), barStartX + barMaxWidth + 5, yPos + 10);

  yPos += 18;

  // Netto resultaat - premium highlight box (10/10 quality)
  const netProfit = data.vijfJaarWinst - data.totaleInvestering;

  // Grotere, meer prominente box
  const resultBoxY = yPos;
  const resultBoxHeight = 20;

  // Diepere schaduw voor meer impact
  doc.setFillColor(180, 220, 200);
  doc.roundedRect(12, resultBoxY + 2, 186, resultBoxHeight, 5, 5, 'F');

  // Hoofdachtergrond met rijke groene tint
  doc.setFillColor(220, 252, 231); // Rijker groen
  doc.roundedRect(10, resultBoxY, 190, resultBoxHeight, 5, 5, 'F');

  // Gradient effect aan de bovenkant
  doc.setFillColor(187, 247, 208);
  doc.roundedRect(10, resultBoxY, 190, 8, 5, 0, 'F');
  doc.setFillColor(220, 252, 231);
  doc.rect(10, resultBoxY + 6, 190, 4, 'F');

  // Links groene accent bar (dikkere, gradient-achtig)
  doc.setFillColor(34, 197, 94); // Rijker groen
  doc.roundedRect(10, resultBoxY, 6, resultBoxHeight, 5, 0, 'F');
  doc.setFillColor(22, 163, 74); // Donkerder accent onderaan
  doc.rect(10, resultBoxY + 12, 6, 8, 'F');

  // Stevige border
  doc.setDrawColor(34, 197, 94);
  doc.setLineWidth(1);
  doc.roundedRect(10, resultBoxY, 190, resultBoxHeight, 5, 5, 'S');

  // Checkmark icoon voor succes
  doc.setFillColor(34, 197, 94);
  doc.circle(25, resultBoxY + resultBoxHeight / 2, 5, 'F');
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(1.2);
  // Checkmark lijnen
  doc.line(22.5, resultBoxY + resultBoxHeight / 2, 24, resultBoxY + resultBoxHeight / 2 + 2);
  doc.line(24, resultBoxY + resultBoxHeight / 2 + 2, 27.5, resultBoxY + resultBoxHeight / 2 - 2);

  // Tekst met grotere font
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(21, 128, 61); // Donkergroen
  doc.text('Netto winst na 5 jaar:', 35, resultBoxY + 8);

  // Groot bedrag rechts uitgelijnd
  doc.setFontSize(14);
  doc.setTextColor(22, 163, 74);
  doc.text(formatCurrency(netProfit), 195, resultBoxY + 14, { align: 'right' });

  // ===== FOOTER (premium OEE) =====
  const footerY = pageHeight - 18;

  // Footer achtergrond met subtiele gradient
  doc.setFillColor(252, 250, 248);
  doc.rect(0, footerY - 5, pageWidth, 25, 'F');

  // Top lijn met gradient effect
  drawGradientBar(doc, 10, footerY - 5, pageWidth - 20, 1.5, COLORS.brand.primary, COLORS.brand.primaryMuted, 15);

  doc.setFontSize(6);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...COLORS.text.muted);
  doc.text('Vertrouwelijk - Alleen voor interne besluitvorming', 15, footerY + 4);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...COLORS.text.secondary);
  doc.text('info@proces360.com | 085 - 401 0752', 15, footerY + 10);

  // Centered website link
  doc.setTextColor(...COLORS.brand.primary);
  doc.setFont('helvetica', 'bold');
  doc.text('www.proces360.com', pageWidth / 2, footerY + 10, { align: 'center' });

  // Page number badge
  doc.setFillColor(...COLORS.brand.primaryLight);
  doc.roundedRect(175, footerY + 2, 24, 10, 3, 3, 'F');
  doc.setDrawColor(...COLORS.brand.primary);
  doc.setLineWidth(0.3);
  doc.roundedRect(175, footerY + 2, 24, 10, 3, 3, 'S');
  doc.setTextColor(...COLORS.brand.primaryDark);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('2 / 2', 187, footerY + 8.5, { align: 'center' });

  return doc.output('blob');
}
