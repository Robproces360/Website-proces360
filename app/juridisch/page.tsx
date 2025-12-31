"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Shield, Cookie, FileText } from 'lucide-react';

type TabType = 'privacy' | 'cookies' | 'voorwaarden';

const tabs = [
  { id: 'privacy' as TabType, label: 'Privacybeleid', icon: Shield },
  { id: 'cookies' as TabType, label: 'Cookiebeleid', icon: Cookie },
  { id: 'voorwaarden' as TabType, label: 'Algemene Voorwaarden', icon: FileText },
];

function JuridischContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('privacy');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'privacy' || tab === 'cookies' || tab === 'voorwaarden') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar home
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-white">Juridische </span>
          <span className="gradient-text">Informatie</span>
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'glass text-gray-400 hover:text-white hover:border-primary-500/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass p-8 rounded-2xl">
          {activeTab === 'privacy' && <PrivacyContent />}
          {activeTab === 'cookies' && <CookiesContent />}
          {activeTab === 'voorwaarden' && <VoorwaardenContent />}
        </div>

        {/* Last updated */}
        <p className="text-gray-500 text-sm mt-6 text-center">
          Laatst bijgewerkt: 8 mei 2025
        </p>
      </div>
    </main>
  );
}

export default function JuridischPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
      <JuridischContent />
    </Suspense>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Privacyverklaring Proces360</h2>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">1. Contactgegevens Verwerkingsverantwoordelijke</h3>
        <p className="text-gray-400 text-sm">
          Proces360 B.V., Voorhof 11, 5351 LL Berghem, Nederland. KvK: 97218774. Contact: <a href="mailto:info@proces360.com" className="text-primary-500 hover:underline">info@proces360.com</a>
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">2. Verwerkte Persoonsgegevens</h3>
        <p className="text-gray-400 text-sm">Voor- en achternaam, bedrijfsnaam, adresgegevens, telefoonnummers, e-mailadressen, IP-adressen (geanonimiseerd), browser- en apparaatinformatie, correspondentie- en formuliergegevens.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">3. Doeleinden en Grondslagen</h3>
        <p className="text-gray-400 text-sm">Verzoeken behandelen, diensten uitvoeren, offertes/facturen versturen, wijzigingen communiceren, websiteanalyse, marketing/nieuwsbrieven, wettelijke naleving.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">4. Geautomatiseerde Besluitvorming</h3>
        <p className="text-gray-400 text-sm">Wij nemen geen beslissingen op basis van volledig geautomatiseerde verwerkingen.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">5. Bewaartermijnen</h3>
        <p className="text-gray-400 text-sm">Contactgegevens: max 2 jaar. Projectgegevens: 7 jaar administratie. Analytics: max 26 maanden. Marketing: tot intrekking toestemming.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">6. Delen met Derden</h3>
        <p className="text-gray-400 text-sm">Alleen voor dienstverlening, wettelijke verplichtingen of met toestemming. Wij verkopen nooit gegevens aan derden.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">7. Cookies</h3>
        <p className="text-gray-400 text-sm">Functionele, analytische en marketingcookies worden gebruikt; zie Cookiebeleid voor details.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">8. Uw Rechten</h3>
        <p className="text-gray-400 text-sm">Inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar. Verzoeken naar info@proces360.com; reactie binnen 4 weken.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">9. Beveiliging</h3>
        <p className="text-gray-400 text-sm">Technische en organisatorische beschermingsmaatregelen zijn geïmplementeerd.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">10. Wijzigingen</h3>
        <p className="text-gray-400 text-sm">Deze verklaring kan worden aangepast. De meest actuele versie staat online.</p>
      </div>
    </div>
  );
}

function CookiesContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Cookieverklaring Proces360</h2>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Wat zijn cookies?</h3>
        <p className="text-gray-400 text-sm">Cookies zijn kleine tekstbestandjes die door uw browser worden opgeslagen op uw apparaat wanneer u onze website bezoekt.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">1. Functionele Cookies</h3>
        <p className="text-gray-400 text-sm">Doel: Basis site functionaliteit en taalvoorkeuren. Gegevens: Anonieme sessie/voorkeursinformatie. Bewaartermijn: Tot einde sessie of maximaal 1 jaar.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">2. Analytische Cookies</h3>
        <p className="text-gray-400 text-sm">Dienst: Google Analytics. Doel: Geanonimiseerde statistieken over sitegebruik. Gegevens: Geanonimiseerd IP en browsegedrag. Bewaartermijn: Maximaal 26 maanden.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">3. Marketing Cookies</h3>
        <p className="text-gray-400 text-sm">Doel: Gepersonaliseerde advertenties en campagnemeting. Gegevens: Browsegedrag en interesses (op basis van toestemming). Bewaartermijn: Typisch maanden tot één jaar. Alleen geplaatst met expliciete toestemming.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">4. Cookies Beheren</h3>
        <p className="text-gray-400 text-sm mb-2">U kunt cookies blokkeren of verwijderen via uw browserinstellingen:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Chrome</a>
          <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Firefox</a>
          <a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Edge</a>
          <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Safari (macOS)</a>
          <a href="https://support.apple.com/nl-nl/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Safari (iOS)</a>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">5. Wijzigingen</h3>
        <p className="text-gray-400 text-sm">Dit beleid wordt regelmatig herzien; de actuele versie is beschikbaar op de website.</p>
      </div>
    </div>
  );
}

function VoorwaardenContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Algemene Voorwaarden Proces360 B.V.</h2>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 1: Toepasselijkheid</h3>
        <p className="text-gray-400 text-sm">Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes, opdrachten en overeenkomsten tussen Proces360 B.V. (KvK 97218774) en opdrachtgever. Afwijkingen zijn slechts geldig indien schriftelijk overeengekomen. Algemene voorwaarden van opdrachtgever worden uitdrukkelijk van de hand gewezen. Door ondertekening van een offerte of aanvang van werkzaamheden verklaart opdrachtgever deze voorwaarden te hebben ontvangen en geaccepteerd.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 2: Offertes en Overeenkomst</h3>
        <p className="text-gray-400 text-sm">Alle aanbiedingen zijn vrijblijvend en hebben een geldigheidsduur van 30 dagen, tenzij anders vermeld. Genoemde prijzen, termijnen en specificaties zijn indicatief en niet-bindend. Een overeenkomst komt tot stand na schriftelijke bevestiging door Proces360 of bij aanvang der werkzaamheden. Meerwerk wordt separaat gefactureerd tegen geldende tarieven.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 3: Prijzen en Betaling</h3>
        <p className="text-gray-400 text-sm">Prijzen zijn exclusief BTW en overige heffingen. Betaling dient binnen 14 dagen na factuurdatum te geschieden. Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim en is een rente verschuldigd van 2% per maand (of de wettelijke handelsrente indien hoger). Alle gerechtelijke en buitengerechtelijke incassokosten komen voor rekening van opdrachtgever, met een minimum van 15% van het openstaande bedrag (min. €500).</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 4: Uitvoering en Verplichtingen Opdrachtgever</h3>
        <p className="text-gray-400 text-sm">Proces360 voert de overeenkomst uit naar beste inzicht en vermogen als inspanningsverplichting, nimmer als resultaatsverplichting. Opdrachtgever is verantwoordelijk voor tijdige aanlevering van juiste en volledige informatie, toegang tot locaties, en medewerking van personeel. Proces360 is gerechtigd derden in te schakelen. Opdrachtgever vrijwaart Proces360 voor aanspraken van derden die voortvloeien uit door opdrachtgever verstrekte informatie of instructies.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 5: Aansprakelijkheid en Vrijwaring</h3>
        <p className="text-gray-400 text-sm">Proces360 is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming. Aansprakelijkheid voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen, productieverlies, bedrijfsstagnatie, reputatieschade of schade door verlies van data, is uitdrukkelijk uitgesloten. De totale aansprakelijkheid is te allen tijde beperkt tot het laagste van: (a) het bedrag dat de aansprakelijkheidsverzekering van Proces360 uitkeert, of (b) het factuurbedrag van de specifieke opdracht waaruit de schade voortvloeit, met een absoluut maximum van €25.000 per gebeurtenis of reeks van samenhangende gebeurtenissen. Vorderingen vervallen indien niet binnen 12 maanden na ontdekking schriftelijk gemeld én binnen 24 maanden na het schadeveroorzakende feit in rechte aanhangig gemaakt.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 6: Uitsluiting Aansprakelijkheid</h3>
        <p className="text-gray-400 text-sm">Proces360 is niet aansprakelijk voor schade veroorzaakt door: (a) onjuiste, onvolledige of te laat verstrekte informatie door opdrachtgever; (b) niet-naleving van instructies, handleidingen of veiligheidsvoorschriften; (c) wijzigingen aangebracht door opdrachtgever of derden zonder schriftelijke toestemming; (d) gebreken in materialen of apparatuur van opdrachtgever of door opdrachtgever voorgeschreven leveranciers; (e) normale slijtage of onoordeelkundig gebruik; (f) handelen of nalaten van opdrachtgever, diens personeel of door hem ingeschakelde derden. Bij inschakeling van toeleveranciers of onderaannemers is de aansprakelijkheid van Proces360 beperkt tot hetgeen Proces360 op deze derden kan verhalen.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 7: Overmacht</h3>
        <p className="text-gray-400 text-sm">Proces360 is niet gehouden tot nakoming van enige verplichting indien daartoe gehinderd door overmacht. Hieronder wordt verstaan: storingen in (tele)communicatie, internet of energievoorziening; pandemieën, epidemieën of quarantainemaatregelen; stakingen; overheidsmaatregelen; transportproblemen; tekorten aan grondstoffen; brand, waterschade of natuurrampen; cyberaanvallen; en alle overige omstandigheden buiten de macht van Proces360. Bij overmacht langer dan 60 dagen zijn beide partijen gerechtigd de overeenkomst te ontbinden zonder schadevergoeding.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 8: Geheimhouding</h3>
        <p className="text-gray-400 text-sm">Partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie, ook na beëindiging van de overeenkomst. Opdrachtgever zal zonder voorafgaande schriftelijke toestemming geen mededelingen doen over de aanpak, werkwijze of prijsstelling van Proces360. Overtreding leidt tot een direct opeisbare boete van €10.000 per overtreding, onverminderd het recht op volledige schadevergoeding.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 9: Intellectueel Eigendom</h3>
        <p className="text-gray-400 text-sm">Alle intellectuele eigendomsrechten op adviezen, ontwerpen, rapporten, software, analyses en overige materialen blijven te allen tijde bij Proces360. Opdrachtgever verkrijgt uitsluitend een niet-exclusief, niet-overdraagbaar gebruiksrecht voor het overeengekomen doel. Verveelvoudiging, openbaarmaking of verstrekking aan derden zonder schriftelijke toestemming is verboden.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 10: Opschorting en Ontbinding</h3>
        <p className="text-gray-400 text-sm">Proces360 is gerechtigd de uitvoering op te schorten of de overeenkomst met onmiddellijke ingang te ontbinden indien: (a) opdrachtgever zijn verplichtingen niet nakomt; (b) na het sluiten van de overeenkomst omstandigheden bekend worden die goede grond geven te vrezen dat opdrachtgever niet zal nakomen; (c) opdrachtgever in staat van faillissement, surseance of schuldsanering komt te verkeren. In geval van ontbinding zijn alle vorderingen onmiddellijk opeisbaar en behoudt Proces360 recht op vergoeding van alle gemaakte kosten en gederfde winst.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 11: Toepasselijk Recht en Geschillen</h3>
        <p className="text-gray-400 text-sm">Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing. Het Weens Koopverdrag (CISG) is uitgesloten. Geschillen worden exclusief voorgelegd aan de bevoegde rechter in het arrondissement Oost-Brabant, locatie &apos;s-Hertogenbosch. Alvorens een geschil voor te leggen aan de rechter, zullen partijen trachten het geschil in onderling overleg op te lossen. De in het ongelijk gestelde partij draagt alle proceskosten, inclusief de volledige advocaatkosten van de wederpartij.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-primary-500 mb-1">Artikel 12: Slotbepalingen</h3>
        <p className="text-gray-400 text-sm">Indien enige bepaling nietig of vernietigbaar is, blijven de overige bepalingen onverminderd van kracht. Proces360 is gerechtigd deze voorwaarden eenzijdig te wijzigen; gewijzigde voorwaarden gelden voor nieuwe opdrachten. Deze voorwaarden zijn gedeponeerd bij de Kamer van Koophandel.</p>
      </div>
    </div>
  );
}
