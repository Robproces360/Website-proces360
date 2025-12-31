# 🎯 Cobot ROI Calculator - Documentatie

## ✅ Voltooid & Klaar voor Gebruik

De professionele Cobot ROI Calculator is volledig gebouwd en geïntegreerd met exact dezelfde styling als de rest van de website.

## 📍 Locatie & Toegang

**Component:** `components/tools/CobotROICalculator.tsx`
**Test Pagina:** `app/roi-calculator/page.tsx`

**Bekijk de calculator op:**
```
http://localhost:3007/roi-calculator
```

## 🎨 Design & Styling

De calculator gebruikt **exact dezelfde** design elementen als de website:
- ✅ Raleway lettertype
- ✅ Proces360 oranje kleuren (#f97316)
- ✅ Glass morphism effecten
- ✅ Gradient backgrounds
- ✅ Lucide React icons
- ✅ Reveal animaties
- ✅ HoverScale effecten
- ✅ Responsive breakpoints
- ✅ Border radius styling

## 📊 Features

### Input Kaarten (3 Secties)

**1. Huidige Situatie** (Blauw gradient)
- Taak omschrijving (text input)
- Uurloon operator (€15-60, slider)
- Aantal shifts (1/2/3, dropdown)
- Werkdagen per jaar (200-365, slider)
- Huidige downtime (0-500 uur, slider)

**2. Cobot Investering** (Oranje gradient)
- Cobot categorie (3 opties met specs):
  - Lichte cobot: €35k (3kg, 500mm)
  - Medium cobot: €45k (5kg, 850mm) ⭐ Populair
  - Zware cobot: €60k (10kg, 1300mm)
- Gripper/End-effector (€1k-20k, slider)
- Installatie & integratie (€5k-30k, slider)
- Training (€1k-10k, slider)

**3. Verwachte Impact** (Groen gradient)
- Productiviteitsverbetering (10-50%, slider)
- Reductie uitval/afkeur (0-40%, slider)
- Cobot beschikbaarheid (85-99%, slider)
- Jaarlijks onderhoud (€1k-8k, slider)

### Industry Presets

3 knoppen bovenaan voor snelle configuratie:
- **Machinebediening:** €28/uur, 2 shifts, 30% productiviteit
- **Verpakking:** €22/uur, 3 shifts, 35% productiviteit
- **Lassen:** €32/uur, 1 shift, 25% productiviteit

### Hero Metrics (3 Grote Cards)

1. **Payback Periode**
   - Weergave in jaren + maanden
   - Kleurcodering: Groen (<2j), Blauw (2-3j), Oranje (>3j)

2. **Jaarlijkse Besparing**
   - Totaal per jaar
   - Subtitle: bedrag per maand

3. **5-Jaars ROI**
   - Percentage ROI
   - Subtitle: totale return in €

### Smart Feedback

Automatische meldingen:
- ⚡ **Exceptioneel:** ROI <1 jaar (groen, Zap icon)
- ✅ **Uitstekend:** ROI 1-2 jaar (groen, CheckCircle icon)
- ⚠️ **Waarschuwing:** ROI >3 jaar (oranje, AlertCircle icon)

### Recharts Grafieken (3 stuks)

**1. Cumulatieve Besparingen Over Tijd (LineChart)**
- X-as: Maanden (0-60)
- Y-as: Cumulatieve waarde (€)
- Rode lijn: Investering (gestippeld, vlak)
- Groene lijn: Besparingen (stijgend)
- Breakeven marker: Verticale groene lijn met label

**2. Jaarlijkse Kostenvergelijking (BarChart)**
- 5 jaren weergegeven
- Rode bars: Huidige methode
- Groene bars: Met Cobot
- Duidelijk verschil per jaar

**3. Gedetailleerde Breakdown (Tabel)**
- Jaarlijkse arbeidskosten (voor/na/verschil)
- Initiële investering (eenmalig)
- 5-jaars totaalkosten (vergelijking)

### CTA Sectie

Onderaan:
- "Wilt u deze berekening bespreken?"
- Buttons:
  - "Plan Gratis Quickscan" → `#360scan`
  - "Bel: 085 - 401 0752" → `tel:+31854010752`

## 🧮 Berekeningslogica

```javascript
// Huidige situatie
huidigeJaarKosten = (uurloon × 8 × shifts × werkdagen) + (downtime × uurloon)

// Totale investering
totaleInvestering = cobot + gripper + installatie + training

// Met cobot (operator werkt 30% voor monitoring)
operatorUrenMetCobot = 8 × 1 × werkdagen × 0.3
cobotJaarKosten = (uurloon × operatorUrenMetCobot) + onderhoud

// Key Metrics
jaarlijkseBesparing = huidigeJaarKosten - cobotJaarKosten
maandelijkseBesparing = jaarlijkseBesparing / 12
paybackMaanden = totaleInvestering / maandelijkseBesparing
paybackJaren = paybackMaanden / 12
roi5jaar = ((jaarlijkseBesparing × 5 - totaleInvestering) / totaleInvestering × 100)
```

## ⚡ Performance

- **Realtime updates:** Geen submit button, instant feedback
- **useMemo:** Berekeningen geoptimaliseerd
- **Smooth animations:** Alle value changes geanimeerd
- **Responsive:** Mobile-first design

## 📱 Responsive Design

- **Mobile:** Kaarten verticaal gestapeld, compacte grafieken
- **Tablet:** 2-kolom mogelijk voor inputs
- **Desktop:** 3-kolom grid voor input cards

## 🔧 Technische Stack

- **React 18** met TypeScript
- **Recharts** voor alle grafieken
- **Lucide React** voor iconen
- **Tailwind CSS** voor styling
- **useState** voor state management
- **useMemo** voor performance

## 🎯 Integratie in Website

### Optie 1: Nieuwe Pagina (Aanbevolen)

De calculator draait nu al op `/roi-calculator`

Voeg toe aan Navbar:
```typescript
// components/layout/Navbar.tsx
const navLinks = [
  // ... bestaande links
  { href: '/roi-calculator', label: 'ROI Calculator' },
];
```

### Optie 2: Sectie op Homepage

Voeg toe aan `app/page.tsx`:
```typescript
import CobotROICalculator from '@/components/tools/CobotROICalculator';

// In de component
<CobotROICalculator />
```

### Optie 3: Modal/Popup

Wrap in een modal component voor on-demand weergave.

## ✨ Kwaliteit & Polish

- ✅ Identiek aan website styling
- ✅ Professionele grafieken
- ✅ Realtime feedback
- ✅ Smart contextual messages
- ✅ Industry presets
- ✅ Smooth animations
- ✅ Error handling
- ✅ Responsive design
- ✅ Accessibility ready
- ✅ Performance optimized

## 🚀 Gebruik

1. Open: `http://localhost:3007/roi-calculator`
2. Kies een industry preset OF vul handmatig in
3. Pas sliders aan naar uw situatie
4. Bekijk realtime de resultaten
5. Analyseer grafieken en breakdown
6. Klik CTA voor contact

## 📝 Toekomstige Uitbreidingen (Optional)

- [ ] PDF export functionaliteit
- [ ] Share link met state parameters
- [ ] Dark mode support
- [ ] Opslaan calculaties in localStorage
- [ ] Email resultaten functionality
- [ ] Gauge charts voor Impact Dashboard
- [ ] Vergelijking meerdere scenario's

---

**Status:** ✅ Productie-ready
**Locatie:** `/roi-calculator`
**Testbaar op:** http://localhost:3007/roi-calculator
