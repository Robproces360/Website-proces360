import jsPDF from 'jspdf';

// ============================================================================
// PROCES360 - OEE QUICKSCAN CHECKLIST PDF
// Client-side PDF generation — downloaded directly in the browser
// Professional 6-page design with ample whitespace
// ============================================================================

const COLORS = {
  brand: [249, 115, 22] as [number, number, number],
  brandDark: [194, 65, 12] as [number, number, number],
  brandLight: [255, 237, 213] as [number, number, number],
  dark: [17, 24, 39] as [number, number, number],
  text: [55, 65, 81] as [number, number, number],
  muted: [107, 114, 128] as [number, number, number],
  light: [243, 244, 246] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  green: [16, 185, 129] as [number, number, number],
  greenLight: [220, 252, 231] as [number, number, number],
  border: [229, 231, 235] as [number, number, number],
};

const MARGIN = 18;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function setColor(doc: jsPDF, color: [number, number, number]) {
  doc.setTextColor(color[0], color[1], color[2]);
}

function setFill(doc: jsPDF, color: [number, number, number]) {
  doc.setFillColor(color[0], color[1], color[2]);
}

function setDraw(doc: jsPDF, color: [number, number, number]) {
  doc.setDrawColor(color[0], color[1], color[2]);
}

function addFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  // Thin separator line
  setDraw(doc, COLORS.border);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, 280, PAGE_WIDTH - MARGIN, 280);

  const y = 286;
  setColor(doc, COLORS.muted);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Proces360 | www.proces360.com | 085 - 401 0752', MARGIN, y);
  doc.text(`${pageNum} / ${totalPages}`, PAGE_WIDTH - MARGIN, y, { align: 'right' });
}

function checkbox(doc: jsPDF, x: number, y: number, size = 4.5) {
  setDraw(doc, COLORS.border);
  doc.setLineWidth(0.4);
  doc.roundedRect(x, y, size, size, 0.8, 0.8);
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Client-side: download PDF directly in browser
export function downloadQuickscanChecklist(voornaam: string): void {
  const doc = buildChecklist(voornaam);
  const safeName = capitalize(voornaam.trim() || 'Bezoeker');
  doc.save(`OEE-Quickscan-Checklist-${safeName}.pdf`);
}

function buildChecklist(voornaam: string): jsPDF {
  const doc = new jsPDF('p', 'mm', 'a4');
  const totalPages = 6;
  const name = capitalize(voornaam.trim() || 'Bezoeker');

  // ========================================
  // PAGE 1: COVER
  // ========================================

  // Full-width orange header band
  setFill(doc, COLORS.brand);
  doc.rect(0, 0, PAGE_WIDTH, 85, 'F');

  // Small accent line at bottom of header
  setFill(doc, COLORS.brandDark);
  doc.rect(0, 85, PAGE_WIDTH, 1.5, 'F');

  // White text on orange
  setColor(doc, COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('PROCES360', MARGIN, 22);

  // Thin divider
  setDraw(doc, [255, 255, 255]);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, 26, MARGIN + 30, 26);

  doc.setFontSize(34);
  doc.setFont('helvetica', 'bold');
  doc.text('OEE Quickscan', MARGIN, 48);
  doc.text('Checklist', MARGIN, 63);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Ontdek in 15 minuten waar uw productie geld laat liggen', MARGIN, 78);

  // Personal greeting
  let y = 105;
  setColor(doc, COLORS.dark);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Beste ${name},`, MARGIN, y);

  y += 12;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.text('Goed dat u deze stap hebt gezet. In 22 jaar op productievloeren heb ik bij', MARGIN, y);
  y += 5.5;
  doc.text('bijna elk bedrijf hetzelfde gezien: machines die meer kunnen, processen die', MARGIN, y);
  y += 5.5;
  doc.text('slimmer kunnen, en potentieel dat onzichtbaar blijft \u2014 tot u weet waar u', MARGIN, y);
  y += 5.5;
  doc.text('moet kijken.', MARGIN, y);

  y += 11;
  doc.text('Deze checklist helpt u om in 15 minuten uw eigen situatie in kaart te brengen.', MARGIN, y);
  y += 5.5;
  doc.text('Geen theorie, geen benchmarks van andere bedrijven. Uw eigen getallen,', MARGIN, y);
  y += 5.5;
  doc.text('vertaald naar concrete kansen.', MARGIN, y);

  y += 11;
  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.dark);
  doc.text('Wat hebt u nodig?', MARGIN, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.text('Uw productiecijfers, een pen, en 15 minuten rust.', MARGIN, y);

  // What's in the checklist — clean card
  y += 16;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 58, 3, 3, 'F');

  y += 9;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Wat zit er in deze checklist:', MARGIN + 10, y);

  y += 9;
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  const items = [
    'Stap 1: Bereken uw OEE in 5 stappen',
    'Stap 2: De 5 plekken waar productietijd verdwijnt',
    'Stap 3: Vertaling naar euro\u2019s \u2014 wat kost het u?',
    'Stap 4: Is automatisering iets voor u? (5 eerlijke vragen)',
    'Stap 5: Uw actieplan \u2014 direct morgen aan de slag',
  ];
  items.forEach(item => {
    setColor(doc, COLORS.brand);
    doc.setFont('helvetica', 'bold');
    doc.text('\u2713', MARGIN + 12, y);
    setColor(doc, COLORS.text);
    doc.setFont('helvetica', 'normal');
    doc.text(item, MARGIN + 20, y);
    y += 7;
  });

  // Bottom quote
  y = 250;
  setDraw(doc, COLORS.brand);
  doc.setLineWidth(0.8);
  doc.line(MARGIN, y - 2, MARGIN, y + 18);

  setColor(doc, COLORS.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('\u201CHet potentieel zit al in uw bedrijf. U moet alleen weten waar u moet kijken.\u201D', MARGIN + 6, y + 3);

  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.dark);
  doc.text('Rob Derks \u2014 Proces360', MARGIN + 6, y + 11);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.muted);
  doc.setFontSize(8);
  doc.text('22 jaar productie-ervaring | Food, farma & metaal', MARGIN + 6, y + 16);

  addFooter(doc, 1, totalPages);

  // ========================================
  // PAGE 2: STAP 1 — OEE BEREKENEN
  // ========================================
  doc.addPage();

  // Section header bar
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 18, 3, 3, 'F');
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, 15, 4, 18, 2, 0, 'F'); // Orange left accent
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 1: Bereken uw OEE', MARGIN + 10, 27);

  y = 42;
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('OEE (Overall Equipment Effectiveness) is de thermometer van uw productie.', MARGIN, y);
  y += 5;
  doc.text('Het gemiddelde MKB-bedrijf scoort 45-55%. World-class is 85%+.', MARGIN, y);
  y += 5;
  doc.text('Elk procentpunt verbetering is direct zichtbaar in uw resultaat.', MARGIN, y);

  y += 12;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('OEE = Beschikbaarheid \u00D7 Prestatie \u00D7 Kwaliteit', MARGIN, y);

  // A. Beschikbaarheid
  y += 14;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 42, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('A. Beschikbaarheid', MARGIN + 6, y + 2);

  y += 10;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Geplande productietijd per dag/week:', MARGIN + 14, y);
  doc.text('__________ uur', MARGIN + 120, y);
  y += 8;
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Ongeplande stilstand per dag/week:', MARGIN + 14, y);
  doc.text('__________ uur', MARGIN + 120, y);
  y += 8;
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Geplande stops (pauzes, overleg, etc.):', MARGIN + 14, y);
  doc.text('__________ uur', MARGIN + 120, y);
  y += 8;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Beschikbaarheid = (Productietijd \u2212 Stilstand) / Productietijd \u00D7 100 = _________ %', MARGIN + 6, y);

  // B. Prestatie
  y += 14;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 42, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('B. Prestatie', MARGIN + 6, y + 2);

  y += 10;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Werkelijke output per uur/shift:', MARGIN + 14, y);
  doc.text('__________ stuks', MARGIN + 120, y);
  y += 8;
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Theoretische max. output per uur/shift:', MARGIN + 14, y);
  doc.text('__________ stuks', MARGIN + 120, y);
  y += 8;
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Gemiddelde cyclustijd:', MARGIN + 14, y);
  doc.text('__________ sec.', MARGIN + 120, y);
  y += 8;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Prestatie = Werkelijke output / Theoretische max. \u00D7 100 = _________ %', MARGIN + 6, y);

  // C. Kwaliteit
  y += 14;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 34, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('C. Kwaliteit', MARGIN + 6, y + 2);

  y += 10;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Totale productie:', MARGIN + 14, y);
  doc.text('__________ stuks', MARGIN + 120, y);
  y += 8;
  checkbox(doc, MARGIN + 6, y - 3.5);
  doc.text('Afgekeurde / herwerkte stuks:', MARGIN + 14, y);
  doc.text('__________ stuks', MARGIN + 120, y);
  y += 8;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Kwaliteit = Goede stuks / Totaal \u00D7 100 = _________ %', MARGIN + 6, y);

  // Final OEE result box
  y += 16;
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 20, 3, 3, 'F');
  setColor(doc, COLORS.white);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Uw OEE = ______ % \u00D7 ______ % \u00D7 ______ % = ______ %', MARGIN + 12, y + 8);

  addFooter(doc, 2, totalPages);

  // ========================================
  // PAGE 3: STAP 2 — WAAR LEKT HET WEG?
  // ========================================
  doc.addPage();

  // Header
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 18, 3, 3, 'F');
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, 15, 4, 18, 2, 0, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 2: Waar lekt het weg?', MARGIN + 10, 27);

  y = 42;
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Kruis aan wat u herkent. Wees eerlijk \u2014 dat is de enige manier waarop dit werkt.', MARGIN, y);

  y += 10;
  const verliesCategorieen = [
    {
      titel: '1. Omsteltijden',
      items: [
        'Omsteltijden duren langer dan 30 minuten',
        'Geen standaard omstelprocedure aanwezig',
        'Operators doen het elk op hun eigen manier',
      ],
    },
    {
      titel: '2. Micro-stops',
      items: [
        'Korte stops (<5 min) worden niet geregistreerd',
        'Materiaaltoevoer hapert regelmatig',
        'Sensors/detectoren geven valse signalen',
      ],
    },
    {
      titel: '3. Opstartverlies',
      items: [
        'Na pauze of shift-wissel duurt het >15 min voor de lijn draait',
        'Eerste batch na omstelling is vaak afkeur',
        'Opstart-informatie wordt niet overgedragen',
      ],
    },
    {
      titel: '4. Stilstand',
      items: [
        'Storing dezelfde machine >2x per week',
        'Geen preventief onderhoudsschema',
        'Wachten op onderdelen of materiaal',
      ],
    },
    {
      titel: '5. Snelheidsverlies',
      items: [
        'Machine draait onder nominale snelheid',
        'Niemand weet de theoretische max. snelheid',
        'Snelheid verlaagd vanwege kwaliteitsproblemen',
      ],
    },
  ];

  verliesCategorieen.forEach(cat => {
    setColor(doc, COLORS.dark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(cat.titel, MARGIN, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    setColor(doc, COLORS.text);
    cat.items.forEach(item => {
      checkbox(doc, MARGIN + 3, y - 3.5);
      doc.text(item, MARGIN + 11, y);
      y += 6.5;
    });
    y += 4;
  });

  // Score box
  y += 2;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 26, 3, 3, 'F');
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Uw score:', MARGIN + 8, y + 3);
  y += 8;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.setFontSize(8.5);
  setColor(doc, COLORS.green);
  doc.text('0\u20133 aangevinkt:', MARGIN + 8, y);
  setColor(doc, COLORS.text);
  doc.text('Goede basis. Focus op kleine optimalisaties.', MARGIN + 40, y);
  y += 5;
  setColor(doc, COLORS.brand);
  doc.text('4\u20138 aangevinkt:', MARGIN + 8, y);
  setColor(doc, COLORS.text);
  doc.text('Significant potentieel. 10-20% meer output is realistisch.', MARGIN + 40, y);
  y += 5;
  setColor(doc, COLORS.brandDark);
  doc.text('9\u201315 aangevinkt:', MARGIN + 8, y);
  setColor(doc, COLORS.text);
  doc.text('Veel verborgen potentieel. Een 360Scan kan u duizenden euro\u2019s besparen.', MARGIN + 40, y);

  addFooter(doc, 3, totalPages);

  // ========================================
  // PAGE 4: STAP 3 — VERTAAL NAAR EURO'S
  // ========================================
  doc.addPage();

  // Header
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 18, 3, 3, 'F');
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, 15, 4, 18, 2, 0, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 3: Vertaal het naar euro\u2019s', MARGIN + 10, 27);

  y = 44;
  setColor(doc, COLORS.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Nu wordt het concreet. Vul hieronder uw eigen cijfers in en u ziet direct wat', MARGIN, y);
  y += 5.5;
  doc.text('uw huidige OEE-verlies u kost \u2014 en wat verbetering oplevert.', MARGIN, y);

  // Input fields with better layout
  y += 16;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 50, 3, 3, 'F');

  y += 4;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Uw gegevens:', MARGIN + 8, y);

  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(doc, COLORS.text);
  checkbox(doc, MARGIN + 8, y - 3.5);
  doc.text('Uw jaaromzet:', MARGIN + 16, y);
  setColor(doc, COLORS.border);
  doc.text('\u20AC ___________________________', MARGIN + 100, y);

  y += 10;
  setColor(doc, COLORS.text);
  checkbox(doc, MARGIN + 8, y - 3.5);
  doc.text('Uw huidige OEE (uit stap 1):', MARGIN + 16, y);
  setColor(doc, COLORS.border);
  doc.text('_____________ %', MARGIN + 120, y);

  y += 10;
  setColor(doc, COLORS.text);
  checkbox(doc, MARGIN + 8, y - 3.5);
  doc.text('Realistisch haalbare OEE:', MARGIN + 16, y);
  setColor(doc, COLORS.border);
  doc.text('_____________ %', MARGIN + 120, y);

  // Calculation example
  y += 20;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Rekenvoorbeeld:', MARGIN, y);

  y += 10;
  setFill(doc, COLORS.white);
  setDraw(doc, COLORS.border);
  doc.setLineWidth(0.3);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 52, 3, 3, 'FD');

  y += 3;
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.text('Stel: uw jaaromzet is \u20AC 5.000.000 en uw OEE is 52%.', MARGIN + 8, y);
  y += 6;
  doc.text('U verbetert naar 62% (+10 procentpunt).', MARGIN + 8, y);
  y += 10;
  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.dark);
  doc.text('Dat is 10% meer effectieve productietijd.', MARGIN + 8, y);
  y += 6;
  setColor(doc, COLORS.brand);
  doc.setFontSize(10);
  doc.text('= ca. \u20AC 500.000 extra productiecapaciteit per jaar.', MARGIN + 8, y);
  y += 10;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.muted);
  doc.setFontSize(8.5);
  doc.text('Dit is een versimpeld voorbeeld. De werkelijke impact hangt af van uw marge, capaciteitsbenutting', MARGIN + 8, y);
  y += 4.5;
  doc.text('en kosten. Maar zelfs 1% verbetering levert bij de meeste bedrijven al \u20AC 10.000+ op.', MARGIN + 8, y);

  // Result box
  y += 16;
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 22, 3, 3, 'F');
  setColor(doc, COLORS.white);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Bij uw bedrijf: ______ % verbetering \u00D7 \u20AC ____________ omzet', MARGIN + 10, y + 3);
  doc.setFontSize(13);
  doc.text('= \u20AC _________________ extra per jaar', MARGIN + 10, y + 13);

  // Motivational note
  y += 28;
  setDraw(doc, COLORS.green);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, y, MARGIN, y + 14);
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'italic');
  doc.text('De meeste bedrijven die ik bezoek laten 15-30% van hun capaciteit onbenut.', MARGIN + 6, y + 4);
  doc.text('Niet door slechte mensen, maar door onzichtbare verliezen.', MARGIN + 6, y + 10);

  addFooter(doc, 4, totalPages);

  // ========================================
  // PAGE 5: STAP 4 + STAP 5
  // ========================================
  doc.addPage();

  // Stap 4 header
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 18, 3, 3, 'F');
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, 15, 4, 18, 2, 0, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 4: Is automatisering iets voor u?', MARGIN + 10, 27);

  y = 42;
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('5 eerlijke vragen. Geen verkooppraatje \u2014 puur om te bepalen of het zinvol is.', MARGIN, y);

  y += 10;
  const autoVragen = [
    { vraag: 'Heeft u taken die >4 uur per dag repetitief zijn?', ja: 'Potentieel voor cobot', nee: 'Waarschijnlijk niet nodig' },
    { vraag: 'Is het moeilijk om personeel te vinden voor deze taken?', ja: 'Sterke business case', nee: 'Minder urgent' },
    { vraag: 'Heeft u kwaliteitsproblemen door menselijke fouten?', ja: 'Automatisering helpt', nee: 'Focus op training' },
    { vraag: 'Draait u >2 shifts met dezelfde handeling?', ja: 'ROI vaak <2 jaar', nee: 'Langere terugverdientijd' },
    { vraag: 'Heeft u budget voor \u20AC25K\u201375K investering?', ja: 'Realistisch traject', nee: 'Start met procesverbetering' },
  ];

  autoVragen.forEach((v, i) => {
    setFill(doc, i % 2 === 0 ? COLORS.light : COLORS.white);
    doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 17, 2, 2, 'F');

    setColor(doc, COLORS.dark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(`${i + 1}. ${v.vraag}`, MARGIN + 5, y + 2);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    setColor(doc, COLORS.green);
    checkbox(doc, MARGIN + 9, y + 6, 4);
    doc.text(`Ja: ${v.ja}`, MARGIN + 16, y + 9.5);

    setColor(doc, COLORS.muted);
    checkbox(doc, MARGIN + 90, y + 6, 4);
    doc.text(`Nee: ${v.nee}`, MARGIN + 97, y + 9.5);

    y += 19;
  });

  // Uitslag
  y += 2;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 20, 3, 3, 'F');
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Uw uitslag:', MARGIN + 8, y + 3);
  y += 7;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.setFontSize(8.5);
  setColor(doc, COLORS.green);
  doc.setFont('helvetica', 'bold');
  doc.text('3\u20135\u00D7 Ja:', MARGIN + 8, y);
  setColor(doc, COLORS.text);
  doc.setFont('helvetica', 'normal');
  doc.text('Automatisering is waarschijnlijk zinvol. Laten we eens praten.', MARGIN + 28, y);
  y += 5;
  setColor(doc, COLORS.muted);
  doc.setFont('helvetica', 'bold');
  doc.text('1\u20132\u00D7 Ja:', MARGIN + 8, y);
  setColor(doc, COLORS.text);
  doc.setFont('helvetica', 'normal');
  doc.text('Mogelijk op termijn. Begin eerst met procesoptimalisatie.', MARGIN + 28, y);

  // Stap 5 header
  y += 16;
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 18, 3, 3, 'F');
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y, 4, 18, 2, 0, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 5: Uw actieplan', MARGIN + 10, y + 12);

  y += 26;
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Begin met de actie die de hoogste impact heeft \u00E9n het snelst te realiseren is.', MARGIN, y);

  y += 10;

  // Table header
  setFill(doc, COLORS.dark);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 10, 2, 2, 'F');
  setColor(doc, COLORS.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('#', MARGIN + 4, y + 2);
  doc.text('Actie', MARGIN + 14, y + 2);
  doc.text('Impact', MARGIN + 105, y + 2);
  doc.text('Haalbaarheid', MARGIN + 126, y + 2);
  doc.text('Deadline', MARGIN + 156, y + 2);

  y += 8;
  for (let i = 1; i <= 5; i++) {
    setFill(doc, i % 2 === 0 ? COLORS.light : COLORS.white);
    doc.rect(MARGIN, y - 3, CONTENT_WIDTH, 9, 'F');
    setDraw(doc, COLORS.border);
    doc.setLineWidth(0.15);
    doc.line(MARGIN, y + 6, MARGIN + CONTENT_WIDTH, y + 6);

    setColor(doc, COLORS.dark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${i}.`, MARGIN + 4, y + 2);

    setColor(doc, COLORS.border);
    doc.setFont('helvetica', 'normal');
    doc.text('_______________________', MARGIN + 14, y + 2);
    setColor(doc, COLORS.muted);
    doc.setFontSize(8);
    doc.text('H / M / L', MARGIN + 107, y + 2);
    doc.text('S / M / L', MARGIN + 131, y + 2);
    doc.text('__ / __ / ____', MARGIN + 155, y + 2);
    y += 9;
  }

  addFooter(doc, 5, totalPages);

  // ========================================
  // PAGE 6: EN NU? + CONTACT
  // ========================================
  doc.addPage();

  // Orange header
  setFill(doc, COLORS.brand);
  doc.rect(0, 0, PAGE_WIDTH, 55, 'F');
  setFill(doc, COLORS.brandDark);
  doc.rect(0, 55, PAGE_WIDTH, 1.5, 'F');

  setColor(doc, COLORS.white);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('En nu?', MARGIN, 30);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('U hebt de checklist doorgewerkt. Hieronder de volgende stappen.', MARGIN, 44);

  y = 72;

  // Optie 1: Zelf aan de slag
  setFill(doc, COLORS.greenLight);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 42, 4, 4, 'F');
  setDraw(doc, COLORS.green);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 42, 4, 4);

  setColor(doc, COLORS.green);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Optie 1: Zelf aan de slag', MARGIN + 10, y + 6);

  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('U hebt nu een eerste beeld. Pak uw actieplan (stap 5) en begin met', MARGIN + 10, y + 15);
  doc.text('de actie met de hoogste impact. Meet het resultaat na 2-4 weken.', MARGIN + 10, y + 21);
  y += 5;
  doc.text('Vragen onderweg? Stuur mij een bericht. Ik denk graag mee.', MARGIN + 10, y + 22);
  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.green);
  doc.text('Gratis.', MARGIN + 142, y + 22);

  // Optie 2: Samen kijken
  y += 42;
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 50, 4, 4, 'F');
  setDraw(doc, COLORS.brand);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 50, 4, 4);

  setColor(doc, COLORS.brandDark);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Optie 2: Samen kijken', MARGIN + 10, y + 6);

  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Wilt u weten wat er \u00E9cht mogelijk is? Ik kom een dag bij u op de werkvloer.', MARGIN + 10, y + 15);
  doc.text('Geen PowerPoint. Gewoon meekijken, meten, en concreet advies.', MARGIN + 10, y + 21);

  y += 28;
  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(10);
  doc.text('Bel mij voor een vrijblijvend kennismakingsgesprek van 20 minuten.', MARGIN + 10, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.setFontSize(9.5);
  doc.text('Eerlijk advies \u2014 ook als ik denk dat u mij niet nodig hebt.', MARGIN + 10, y);

  // Contact block
  y += 18;
  setFill(doc, COLORS.dark);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 56, 4, 4, 'F');

  setColor(doc, COLORS.white);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Rob Derks', MARGIN + 12, y + 10);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  setColor(doc, [180, 180, 180]);
  doc.text('Oprichter Proces360 | 22 jaar productie-ervaring', MARGIN + 12, y + 17);

  // Contact details in two columns
  const contactY = y + 26;
  setColor(doc, COLORS.brand);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('085 - 401 0752', MARGIN + 12, contactY);

  setColor(doc, [180, 180, 180]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('WhatsApp: 06-30185844', MARGIN + 12, contactY + 8);
  doc.text('info@proces360.com', MARGIN + 12, contactY + 15);

  setColor(doc, COLORS.brand);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('www.proces360.com', MARGIN + 110, contactY);
  setColor(doc, [180, 180, 180]);
  doc.setFont('helvetica', 'normal');
  doc.text('LinkedIn: /in/rob-derks', MARGIN + 110, contactY + 8);

  // Disclaimer
  y += 64;
  setColor(doc, COLORS.muted);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Deze checklist is eigendom van Proces360 B.V. en bedoeld voor persoonlijk gebruik.', MARGIN, y);
  doc.text('De genoemde percentages en bedragen zijn indicatief en gebaseerd op praktijkervaring.', MARGIN, y + 4);

  addFooter(doc, 6, totalPages);

  return doc;
}
