import jsPDF from 'jspdf';

// ============================================================================
// PROCES360 - OEE QUICKSCAN CHECKLIST PDF
// Client-side PDF generation — downloaded directly in the browser
// Professional design consistent with existing PDF generator
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
  greenLight: [209, 250, 229] as [number, number, number],
  red: [239, 68, 68] as [number, number, number],
  redLight: [254, 226, 226] as [number, number, number],
  border: [229, 231, 235] as [number, number, number],
};

const MARGIN = 15;
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
  const y = 285;
  setColor(doc, COLORS.muted);
  doc.setFontSize(7);
  doc.text('Proces360 | www.proces360.com | 085 - 401 0752', MARGIN, y);
  doc.text(`${pageNum} / ${totalPages}`, PAGE_WIDTH - MARGIN, y, { align: 'right' });
}

function checkbox(doc: jsPDF, x: number, y: number, size = 4) {
  setDraw(doc, COLORS.border);
  doc.setLineWidth(0.3);
  doc.rect(x, y, size, size);
}

function wrappedText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number): number {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return lines.length * doc.getLineHeight() * 0.352778; // pt to mm
}

// Client-side: download PDF directly in browser
export function downloadQuickscanChecklist(voornaam: string): void {
  const doc = buildChecklist(voornaam);
  doc.save(`OEE-Quickscan-Checklist-${voornaam}.pdf`);
}

function buildChecklist(voornaam: string): jsPDF {
  const doc = new jsPDF('p', 'mm', 'a4');
  const totalPages = 5;

  // ========================================
  // PAGE 1: COVER
  // ========================================

  // Orange header band
  setFill(doc, COLORS.brand);
  doc.rect(0, 0, PAGE_WIDTH, 80, 'F');

  // White text on orange
  setColor(doc, COLORS.white);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('PROCES360', MARGIN, 25);

  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('OEE Quickscan', MARGIN, 48);
  doc.text('Checklist', MARGIN, 62);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Ontdek in 15 minuten waar uw productie geld laat liggen', MARGIN, 74);

  // Personalization
  let y = 100;
  setColor(doc, COLORS.dark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Beste ${voornaam},`, MARGIN, y);

  y += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  const introText = [
    'Goed dat u deze stap hebt gezet. In 22 jaar op productievloeren heb ik bij bijna elk bedrijf',
    'hetzelfde gezien: machines die meer kunnen, processen die slimmer kunnen, en potentieel dat',
    'onzichtbaar blijft \u2014 tot u weet waar u moet kijken.',
    '',
    'Deze checklist helpt u om in 15 minuten uw eigen situatie in kaart te brengen. Geen theorie,',
    'geen benchmarks van andere bedrijven. Uw eigen getallen, vertaald naar concrete kansen.',
    '',
    'Pak er uw productiecijfers bij. Pen en papier. En neem er even rustig de tijd voor.',
  ];
  introText.forEach(line => {
    doc.text(line, MARGIN, y);
    y += 5;
  });

  // What's in it box
  y += 8;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 52, 3, 3, 'F');

  y += 8;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Wat zit er in deze checklist:', MARGIN + 8, y);

  y += 8;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  const items = [
    'Stap 1: Uw OEE in 5 stappen berekend',
    'Stap 2: De 5 plekken waar productietijd verdwijnt',
    'Stap 3: Vertaling naar euro\u2019s \u2014 wat kost het u?',
    'Stap 4: Is automatisering iets voor u? (5 vragen)',
    'Stap 5: Actieplan \u2014 direct morgen aan de slag',
  ];
  items.forEach(item => {
    setColor(doc, COLORS.brand);
    doc.text('\u2713', MARGIN + 10, y);
    setColor(doc, COLORS.text);
    doc.text(item, MARGIN + 17, y);
    y += 6;
  });

  // Bottom personal note
  y = 240;
  setDraw(doc, COLORS.brand);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, y, MARGIN, y + 20);
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.text('"Het potentieel zit al in uw bedrijf. U moet alleen weten waar u moet kijken."', MARGIN + 5, y + 5);
  doc.setFont('helvetica', 'bold');
  doc.text('Rob Derks \u2014 Proces360', MARGIN + 5, y + 12);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.muted);
  doc.setFontSize(8);
  doc.text('22 jaar productie-ervaring | Food, farma & metaal', MARGIN + 5, y + 17);

  addFooter(doc, 1, totalPages);

  // ========================================
  // PAGE 2: STAP 1 — OEE BEREKENEN
  // ========================================
  doc.addPage();

  // Section header
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 16, 2, 2, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 1: Bereken uw OEE', MARGIN + 6, 26);

  y = 40;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  y += wrappedText(doc, 'OEE (Overall Equipment Effectiveness) is de thermometer van uw productie. Het gemiddelde MKB-bedrijf scoort 45-55%. World-class is 85%+. Elk procentpunt verbetering is direct zichtbaar in uw resultaat.', MARGIN, y, CONTENT_WIDTH);

  y += 5;
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('OEE = Beschikbaarheid x Prestatie x Kwaliteit', MARGIN, y);

  // Beschikbaarheid
  y += 12;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 38, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('A. Beschikbaarheid', MARGIN + 5, y + 2);

  y += 8;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Geplande productietijd per dag/week:  __________ uur', MARGIN + 12, y);
  y += 7;
  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Ongeplande stilstand per dag/week:     __________ uur', MARGIN + 12, y);
  y += 7;
  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Geplande stops (pauzes, overleg, etc.): __________ uur', MARGIN + 12, y);
  y += 7;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.text('Beschikbaarheid = (Productietijd - Stilstand) / Productietijd x 100 = _________ %', MARGIN + 5, y);

  // Prestatie
  y += 12;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 38, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('B. Prestatie', MARGIN + 5, y + 2);

  y += 8;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Werkelijke output per uur/shift:           __________ stuks', MARGIN + 12, y);
  y += 7;
  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Theoretische max. output per uur/shift: __________ stuks', MARGIN + 12, y);
  y += 7;
  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Gemiddelde cyclustijd:                       __________ sec.', MARGIN + 12, y);
  y += 7;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.text('Prestatie = Werkelijke output / Theoretische max. x 100 = _________ %', MARGIN + 5, y);

  // Kwaliteit
  y += 12;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 32, 2, 2, 'F');
  setColor(doc, COLORS.brand);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('C. Kwaliteit', MARGIN + 5, y + 2);

  y += 8;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Totale productie:                    __________ stuks', MARGIN + 12, y);
  y += 7;
  checkbox(doc, MARGIN + 5, y - 3);
  doc.text('Afgekeurde / herwerkte stuks:  __________ stuks', MARGIN + 12, y);
  y += 7;
  setColor(doc, COLORS.brandDark);
  doc.setFont('helvetica', 'bold');
  doc.text('Kwaliteit = Goede stuks / Totaal x 100 = _________ %', MARGIN + 5, y);

  // Final OEE
  y += 14;
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y - 5, CONTENT_WIDTH, 18, 3, 3, 'F');
  setColor(doc, COLORS.white);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Uw OEE = ______ % x ______ % x ______ % = ______ %', MARGIN + 10, y + 6);

  addFooter(doc, 2, totalPages);

  // ========================================
  // PAGE 3: STAP 2 & 3 — VERLIESANALYSE + EURO'S
  // ========================================
  doc.addPage();

  // Stap 2
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 16, 2, 2, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 2: Waar lekt het weg?', MARGIN + 6, 26);

  y = 38;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Kruis aan wat u herkent. Wees eerlijk \u2014 dat is de enige manier waarop dit werkt.', MARGIN, y);

  y += 8;
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
    doc.setFontSize(9);
    doc.text(cat.titel, MARGIN, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    setColor(doc, COLORS.text);
    cat.items.forEach(item => {
      checkbox(doc, MARGIN + 3, y - 3);
      doc.text(item, MARGIN + 10, y);
      y += 5.5;
    });
    y += 3;
  });

  // Score tabel
  y += 2;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 22, 2, 2, 'F');
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Uw score:', MARGIN + 5, y + 2);
  y += 7;
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.setFontSize(8);
  doc.text('0-3 aangevinkt: Goede basis. Focus op kleine optimalisaties.', MARGIN + 5, y);
  y += 4;
  doc.text('4-8 aangevinkt: Significant potentieel. 10-20% meer output is realistisch.', MARGIN + 5, y);
  y += 4;
  doc.text('9-15 aangevinkt: Veel verborgen potentieel. Een 360Scan kan u duizenden euro\u2019s besparen.', MARGIN + 5, y);

  // Stap 3
  y += 14;
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 16, 2, 2, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 3: Vertaal het naar euro\u2019s', MARGIN + 6, y + 11);

  y += 24;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Vul hieronder uw eigen cijfers in. Dan ziet u direct wat het u kost.', MARGIN, y);

  y += 8;
  checkbox(doc, MARGIN, y - 3);
  doc.text('Uw jaaromzet:                               \u20AC ______________', MARGIN + 7, y);
  y += 7;
  checkbox(doc, MARGIN, y - 3);
  doc.text('Uw huidige OEE (uit stap 1):          _________ %', MARGIN + 7, y);
  y += 7;
  checkbox(doc, MARGIN, y - 3);
  doc.text('Realistisch haalbare OEE:               _________ %', MARGIN + 7, y);

  y += 10;
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 16, 3, 3, 'F');
  setColor(doc, COLORS.white);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('1% OEE-verbetering = ca. 1% meer output = \u20AC __________ per jaar extra', MARGIN + 8, y + 6);

  addFooter(doc, 3, totalPages);

  // ========================================
  // PAGE 4: STAP 4 — AUTOMATISERING + STAP 5 — ACTIEPLAN
  // ========================================
  doc.addPage();

  // Stap 4
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, 15, CONTENT_WIDTH, 16, 2, 2, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 4: Is automatisering iets voor u?', MARGIN + 6, 26);

  y = 38;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('5 eerlijke vragen. Geen verkooppraatje \u2014 puur om te bepalen of het zinvol is.', MARGIN, y);

  y += 10;
  const autoVragen = [
    { vraag: 'Heeft u taken die >4 uur per dag repetitief zijn?', ja: 'Potentieel voor cobot', nee: 'Waarschijnlijk niet nodig' },
    { vraag: 'Is het moeilijk om personeel te vinden voor deze taken?', ja: 'Sterke business case', nee: 'Minder urgent' },
    { vraag: 'Heeft u kwaliteitsproblemen door menselijke fouten?', ja: 'Automatisering helpt', nee: 'Focus op training' },
    { vraag: 'Draait u >2 shifts met dezelfde handeling?', ja: 'ROI vaak <2 jaar', nee: 'Langere terugverdientijd' },
    { vraag: 'Heeft u budget voor \u20AC25K-75K investering?', ja: 'Realistisch traject', nee: 'Start met procesverbetering' },
  ];

  autoVragen.forEach((v, i) => {
    setFill(doc, i % 2 === 0 ? COLORS.light : COLORS.white);
    doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 16, 1, 1, 'F');

    setColor(doc, COLORS.dark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${i + 1}. ${v.vraag}`, MARGIN + 4, y + 2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(doc, COLORS.green);
    checkbox(doc, MARGIN + 8, y + 5.5, 3.5);
    doc.text(`Ja: ${v.ja}`, MARGIN + 14, y + 8.5);

    setColor(doc, COLORS.muted);
    checkbox(doc, MARGIN + 85, y + 5.5, 3.5);
    doc.text(`Nee: ${v.nee}`, MARGIN + 91, y + 8.5);

    y += 18;
  });

  // Uitslag
  y += 2;
  setFill(doc, COLORS.light);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 18, 2, 2, 'F');
  setColor(doc, COLORS.dark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Uw uitslag:', MARGIN + 5, y + 2);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.setFontSize(8);
  doc.text('3-5x Ja: Automatisering is waarschijnlijk zinvol. Laten we eens praten.', MARGIN + 5, y + 8);
  doc.text('1-2x Ja: Mogelijk op termijn. Begin eerst met procesoptimalisatie.', MARGIN + 5, y + 12);

  // Stap 5
  y += 28;
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, y, CONTENT_WIDTH, 16, 2, 2, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('STAP 5: Uw actieplan', MARGIN + 6, y + 11);

  y += 24;
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Prioriteer op: impact (hoog/midden/laag) x haalbaarheid (snel/middel/lang).', MARGIN, y);
  doc.text('Begin altijd met de actie die de hoogste impact heeft en het snelst te realiseren is.', MARGIN, y + 5);

  y += 14;

  // Actieplan tabel
  setFill(doc, COLORS.brand);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 10, 1, 1, 'F');
  setColor(doc, COLORS.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('#', MARGIN + 3, y + 2);
  doc.text('Actie', MARGIN + 12, y + 2);
  doc.text('Impact', MARGIN + 105, y + 2);
  doc.text('Haalbaarheid', MARGIN + 128, y + 2);
  doc.text('Deadline', MARGIN + 160, y + 2);

  y += 8;
  for (let i = 1; i <= 5; i++) {
    setFill(doc, i % 2 === 0 ? COLORS.light : COLORS.white);
    doc.rect(MARGIN, y - 3, CONTENT_WIDTH, 9, 'F');
    setDraw(doc, COLORS.border);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, y + 6, MARGIN + CONTENT_WIDTH, y + 6);

    setColor(doc, COLORS.muted);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`${i}.`, MARGIN + 3, y + 2);

    // Lege velden met underscores
    setColor(doc, COLORS.border);
    doc.text('_________________________', MARGIN + 12, y + 2);
    doc.text('H / M / L', MARGIN + 105, y + 2);
    doc.text('S / M / L', MARGIN + 133, y + 2);
    doc.text('__ / __ / ____', MARGIN + 158, y + 2);
    y += 9;
  }

  addFooter(doc, 4, totalPages);

  // ========================================
  // PAGE 5: NEXT STEPS + CONTACT
  // ========================================
  doc.addPage();

  // Header
  setFill(doc, COLORS.brand);
  doc.rect(0, 0, PAGE_WIDTH, 50, 'F');
  setColor(doc, COLORS.white);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('En nu?', MARGIN, 30);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('U hebt de checklist doorgewerkt. Hieronder de volgende stappen.', MARGIN, 42);

  y = 65;

  // Optie 1
  setFill(doc, COLORS.greenLight);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 36, 3, 3, 'F');
  setColor(doc, COLORS.green);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Optie 1: Zelf aan de slag', MARGIN + 8, y + 4);
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('U hebt nu een eerste beeld. Pak uw actieplan (stap 5) en begin met de', MARGIN + 8, y + 12);
  doc.text('actie met de hoogste impact. Meet het resultaat na 2-4 weken.', MARGIN + 8, y + 17);
  doc.text('Vragen onderweg? Stuur mij een bericht. Ik denk graag mee. Gratis.', MARGIN + 8, y + 24);

  // Optie 2
  y += 45;
  setFill(doc, COLORS.brandLight);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 42, 3, 3, 'F');
  setColor(doc, COLORS.brandDark);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Optie 2: Samen kijken', MARGIN + 8, y + 4);
  setColor(doc, COLORS.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Wilt u weten wat er echt mogelijk is? Ik kom een dag bij u op de werkvloer.', MARGIN + 8, y + 12);
  doc.text('Geen PowerPoint. Gewoon meekijken, meten, en concreet advies.', MARGIN + 8, y + 17);
  doc.setFont('helvetica', 'bold');
  setColor(doc, COLORS.brandDark);
  doc.text('Bel mij voor een vrijblijvend kennismakingsgesprek van 20 minuten.', MARGIN + 8, y + 24);
  doc.setFont('helvetica', 'normal');
  setColor(doc, COLORS.text);
  doc.text('Eerlijk advies \u2014 ook als ik denk dat u mij niet nodig hebt.', MARGIN + 8, y + 31);

  // Contact block
  y += 55;
  setFill(doc, COLORS.dark);
  doc.roundedRect(MARGIN, y - 4, CONTENT_WIDTH, 50, 3, 3, 'F');

  setColor(doc, COLORS.white);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Rob Derks', MARGIN + 10, y + 8);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  setColor(doc, [200, 200, 200]);
  doc.text('Oprichter Proces360 | 22 jaar productie-ervaring', MARGIN + 10, y + 15);

  y += 22;
  setColor(doc, COLORS.brand);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('085 - 401 0752', MARGIN + 10, y);
  setColor(doc, [200, 200, 200]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('WhatsApp: 06-30185844', MARGIN + 10, y + 7);
  doc.text('info@proces360.com', MARGIN + 10, y + 14);
  doc.text('www.proces360.com', MARGIN + 10, y + 21);

  // Disclaimer
  y += 38;
  setColor(doc, COLORS.muted);
  doc.setFontSize(7);
  doc.text('Deze checklist is eigendom van Proces360 B.V. en bedoeld voor persoonlijk gebruik.', MARGIN, y);
  doc.text('De genoemde percentages en bedragen zijn indicatief en gebaseerd op praktijkervaring.', MARGIN, y + 4);

  addFooter(doc, 5, totalPages);

  return doc;
}
