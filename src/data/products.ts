export interface Product {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  description: string;
  icon: string;
  features: { title: string; body: string }[];
  integrations?: string[];
  cta: { label: string; href: string };
  /** Optional public subdomain already live (e.g. mesh). */
  liveUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "rift",
    name: "Rift",
    tagline: "Wholesale commerce gateway",
    oneLiner: "Sell to dealers with linesheets, quotes, and net terms.",
    description:
      "Rift is the wholesale gateway for Bicycle Butler. Dealers request quotes, browse linesheets, and place orders on their own terms — all synced back to inventory and fulfillment.",
    icon: "Package",
    features: [
      { title: "Linesheets & catalogs", body: "Curated, dealer-specific catalogs that update from the master catalog." },
      { title: "Quotes & net terms", body: "Request, negotiate, and convert quotes into orders with approved terms." },
      { title: "Dealer portal", body: "Dealers track their own orders, invoices, and reorder history." },
    ],
    cta: { label: "Request a Rift demo", href: "/demo" },
  },
  {
    slug: "lead",
    name: "Lead",
    tagline: "Multi-tenant CRM command hub",
    oneLiner: "One command center for every dealer relationship.",
    description:
      "Lead is the CRM that keeps every dealer conversation, pipeline, and follow-up in a single, secure place across the whole ecosystem.",
    icon: "Users",
    features: [
      { title: "Unified pipeline", body: "Every opportunity across every dealer in one view." },
      { title: "Encrypted messaging", body: "Zero-knowledge end-to-end encrypted dealer communications." },
      { title: "Campaigns", body: "Targeted outreach to dealers without leaving the hub." },
    ],
    cta: { label: "Request a Lead demo", href: "/demo" },
  },
  {
    slug: "vise",
    name: "Vise",
    tagline: "Touchscreen retail POS",
    oneLiner: "Fast checkout built for the bike shop counter.",
    description:
      "Vise is the touchscreen point of sale for retail bike shops — service tickets, parts, and accessories, all in one fast interface.",
    icon: "Monitor",
    features: [
      { title: "Service tickets", body: "Track repairs and pickups right at the counter." },
      { title: "Parts & accessories", body: "Barcode scan and quick add for the fast-moving aisle." },
      { title: "Multi-register", body: "Run several registers from one shared inventory." },
    ],
    cta: { label: "Request a Vise demo", href: "/demo" },
    liveUrl: "https://vise.bicyclebutler.cc",
  },
  {
    slug: "stow",
    name: "Stow",
    tagline: "Warehouse management",
    oneLiner: "Know where every bike and part actually is.",
    description:
      "Stow is warehouse management for bicycle distribution — bin locations, pick paths, and real-time stock across every facility.",
    icon: "Boxes",
    features: [
      { title: "Bin-level inventory", body: "Locate any unit instantly across multiple warehouses." },
      { title: "Pick and pack", body: "Optimized pick paths for fast, accurate fulfillment." },
      { title: "Receiving", body: "Inbound receipts reconcile against purchase orders." },
    ],
    cta: { label: "Request a Stow demo", href: "/demo" },
  },
  {
    slug: "mesh",
    name: "Mesh",
    tagline: "Shopify ↔ POS sync",
    oneLiner: "Stop overselling between registers and Shopify.",
    description:
      "Mesh keeps in-store registers and Shopify in perfect sync — automatic inventory alignment, item matching, and price protection so nothing sells twice.",
    icon: "RefreshCw",
    features: [
      { title: "Automated inventory sync", body: "When an item sells in-store, Shopify updates automatically." },
      { title: "Margin Shield", body: "Guards prices against accidental markdowns below cost." },
      { title: "Item matching", body: "Connects SKUs cleanly and surfaces discrepancies before they reach customers." },
    ],
    integrations: ["Lightspeed Retail", "Square", "Clover", "Citrus Lime", "Ascend RMS", "Revel"],
    cta: { label: "Install Mesh", href: "https://apps.shopify.com/mesh-omnichannel-erp" },
    liveUrl: "https://mesh.bicyclebutler.cc",
  },
  {
    slug: "beam",
    name: "Beam",
    tagline: "AI marketing platform",
    oneLiner: "Turn dealer data into campaigns that convert.",
    description:
      "Beam is the AI marketing platform for Bicycle Butler — segments, journeys, and content driven by real dealer and product data.",
    icon: "Sparkles",
    features: [
      { title: "Smart segments", body: "Audiences built from live dealer and purchase behavior." },
      { title: "Automated journeys", body: "Nurture sequences that trigger on real events." },
      { title: "Content assist", body: "Draft on-brand copy and creative in seconds." },
    ],
    cta: { label: "Request a Beam demo", href: "/demo" },
  },
  {
    slug: "wire",
    name: "Wire",
    tagline: "Industry intelligence terminal",
    oneLiner: "The market, at your fingertips.",
    description:
      "Wire is the intelligence terminal for the bicycle industry — pricing, availability, and trends across the ecosystem, in real time.",
    icon: "LineChart",
    features: [
      { title: "Live pricing", body: "Market pricing across brands and channels." },
      { title: "Availability", body: "See what is in stock, where, and at what volume." },
      { title: "Trends", body: "Spot category and component trends before they peak." },
    ],
    cta: { label: "Request a Wire demo", href: "/demo" },
  },
  {
    slug: "echo",
    name: "Echo",
    tagline: "On-device AI command center",
    oneLiner: "Your shop, understood — right on the device.",
    description:
      "Echo is the on-device AI command center for bike shops — local intelligence that runs on the hardware you already own, no cloud dependency for core tasks.",
    icon: "Cpu",
    features: [
      { title: "On-device inference", body: "Core AI runs locally for speed and privacy." },
      { title: "Voice commands", body: "Hands-free operation while working on a bike." },
      { title: "Local-first", body: "Works without a connection; syncs when available." },
    ],
    cta: { label: "Request an Echo demo", href: "/demo" },
  },
  {
    slug: "pars",
    name: "Pars",
    tagline: "Dealer inventory reporting",
    oneLiner: "See what dealers actually have on the floor.",
    description:
      "Pars scrapes and normalizes dealer inventory across the ecosystem into clean analytics — know what is where, and what is missing.",
    icon: "BarChart3",
    features: [
      { title: "Inventory scraping", body: "Normalize dealer listings into a single schema." },
      { title: "Availability analytics", body: "See stock levels and gaps across dealers." },
      { title: "Sales signals", body: "Surface what is moving and what is stuck." },
    ],
    cta: { label: "Request a Pars demo", href: "/demo" },
  },
  {
    slug: "gear",
    name: "Gear",
    tagline: "Technical bicycle catalog & kinematics",
    oneLiner: "The canonical technical truth for every bike.",
    description:
      "Gear is the master technical catalog — geometry, kinematics, and specs for every frame, fork, and shock, consumed read-only across the ecosystem.",
    icon: "BookOpen",
    features: [
      { title: "Canonical specs", body: "The single source of geometry and kinematics truth." },
      { title: "Kinematics", body: "Suspension curves and metrics for every model." },
      { title: "Read-only authority", body: "Consumed by the whole ecosystem, written by one." },
    ],
    cta: { label: "Request a Gear demo", href: "/demo" },
  },
  {
    slug: "tally",
    name: "Tally",
    tagline: "Expense & commission tracker",
    oneLiner: "Know exactly what each deal cost and earned.",
    description:
      "Tally tracks expenses and commissions across the ecosystem — every deal, every payout, reconciled and auditable.",
    icon: "Calculator",
    features: [
      { title: "Commission calc", body: "Commission rules tied to real closed deals." },
      { title: "Expense tracking", body: "Log and categorize spend with receipts." },
      { title: "Audit trail", body: "Every figure is traceable to its source." },
    ],
    cta: { label: "Request a Tally demo", href: "/demo" },
  },
  {
    slug: "trailtune",
    name: "TrailTune",
    tagline: "MTB suspension tuning & digital garage",
    oneLiner: "Tune the bike to the rider and the trail.",
    description:
      "TrailTune is the mountain-bike suspension tuning platform — kinematics, digital garage, and telemetry that turn a rider into a setup.",
    icon: "Mountain",
    features: [
      { title: "Suspension tuning", body: "Recommend setups from kinematics and riding style." },
      { title: "Digital garage", body: "Model every bike you own and its build." },
      { title: "Telemetry", body: "Capture and review ride data to refine the tune." },
    ],
    cta: { label: "Request a TrailTune demo", href: "/demo" },
    liveUrl: "https://trailtune.bicyclebutler.cc",
  },
  {
    slug: "relay",
    name: "Relay",
    tagline: "Real-time chat & entity messaging",
    oneLiner: "Messaging fabric woven through the ecosystem.",
    description:
      "Relay is the real-time messaging fabric — chat and entity messaging that every Bicycle Butler product can speak through.",
    icon: "MessagesSquare",
    features: [
      { title: "Real-time chat", body: "Low-latency messaging across the ecosystem." },
      { title: "Entity messaging", body: "Messages attached to orders, tickets, and dealers." },
      { title: "Ephemeral", body: "Zero-knowledge, end-to-end encrypted by default." },
    ],
    cta: { label: "Request a Relay demo", href: "/demo" },
    liveUrl: "https://chat.bicyclebutler.cc",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
