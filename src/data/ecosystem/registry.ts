import type { ProductProfile } from "./types";

export const PRODUCT_PROFILES: ProductProfile[] = [
  {
    slug: "rift",
    name: "Rift",
    tagline: "Wholesale commerce gateway",
    oneLiner: "Sell to dealers with linesheets, quotes, and net terms.",
    description:
      "Rift is the wholesale gateway for Bicycle Butler. Dealers request quotes, browse linesheets, and place orders on their own terms — all synced back to inventory and fulfillment.",
    icon: "Package",
    domainCategory: "wholesale-commerce",
    domainLabel: "B2B Wholesale",
    capabilities: [
      "Custom dealer pricing tiers",
      "Dynamic B2B linesheets",
      "Net terms & quote conversion",
      "Automated stock hold on quote approval",
    ],
    features: [
      { title: "Linesheets & catalogs", body: "Curated, dealer-specific catalogs that update from the master catalog." },
      { title: "Quotes & net terms", body: "Request, negotiate, and convert quotes into orders with approved terms." },
      { title: "Dealer portal", body: "Dealers track their own orders, invoices, and reorder history." },
    ],
    companionApps: [
      {
        slug: "stow",
        name: "Stow",
        relationship: "Inventory Allocation",
        operationalFlow: "Approved wholesale orders immediately reserve stock in warehouse bins.",
      },
      {
        slug: "lead",
        name: "Lead",
        relationship: "Dealer CRM Hub",
        operationalFlow: "Quotes, terms, and purchase histories sync directly into dealer conversation timelines.",
      },
      {
        slug: "tally",
        name: "Tally",
        relationship: "Sales Commission",
        operationalFlow: "Closed dealer orders calculate rep commissions and reconcile net-term payouts.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Brand & Component Distributor",
        personaRole: "Primary B2B Sales Engine",
        operationalBenefit: "Replaces manual PDF linesheets and phone orders with a self-serve dealer portal.",
        stackSuite: ["Rift", "Stow", "Lead", "Tally"],
      },
      {
        personaTitle: "Multi-Store Retail Operator",
        personaRole: "Inter-store Transfer & Buying",
        operationalBenefit: "Streamlines high-volume group purchases and supplier terms across regional branches.",
        stackSuite: ["Rift", "Vise", "Stow"],
      },
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
    domainCategory: "dealer-crm",
    domainLabel: "Dealer CRM",
    capabilities: [
      "Unified dealer deal pipeline",
      "Zero-knowledge encrypted dealer communications",
      "Multi-location contact mapping",
      "Targeted campaign dispatch",
    ],
    features: [
      { title: "Unified pipeline", body: "Every opportunity across every dealer in one view." },
      { title: "Encrypted messaging", body: "Zero-knowledge end-to-end encrypted dealer communications." },
      { title: "Campaigns", body: "Targeted outreach to dealers without leaving the hub." },
    ],
    companionApps: [
      {
        slug: "rift",
        name: "Rift",
        relationship: "Wholesale Conversions",
        operationalFlow: "Dealer quotes and reorders populate pipeline stages automatically.",
      },
      {
        slug: "relay",
        name: "Relay",
        relationship: "Real-time Messaging Fabric",
        operationalFlow: "Real-time chat threads connect reps and shop managers instantly.",
      },
      {
        slug: "beam",
        name: "Beam",
        relationship: "AI Campaign Intelligence",
        operationalFlow: "Purchase trends generate high-conversion dealer nurture sequences.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Commercial Sales Director",
        personaRole: "Account Oversight & Territory Management",
        operationalBenefit: "Eliminates lost dealer inquiries and tracks sales pipeline across territories.",
        stackSuite: ["Lead", "Rift", "Relay"],
      },
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
    domainCategory: "pos-checkout",
    domainLabel: "Retail POS",
    capabilities: [
      "Sub-second barcode scanning & checkout",
      "Counter repair intake & service ticket tracking",
      "Multi-register inventory locking",
      "Customer bike digital service history",
    ],
    features: [
      { title: "Service tickets", body: "Track repairs and pickups right at the counter." },
      { title: "Parts & accessories", body: "Barcode scan and quick add for the fast-moving aisle." },
      { title: "Multi-register", body: "Run several registers from one shared inventory." },
    ],
    companionApps: [
      {
        slug: "mesh",
        name: "Mesh",
        relationship: "Shopify Inventory Sync",
        operationalFlow: "Counter ring-outs deduct online stock in real time to prevent double-selling.",
      },
      {
        slug: "stow",
        name: "Stow",
        relationship: "Backroom Stock Visibility",
        operationalFlow: "Cashiers check backroom bin counts directly from the checkout screen.",
      },
      {
        slug: "echo",
        name: "Echo",
        relationship: "On-Device Service AI",
        operationalFlow: "Hands-free voice note dictation attached directly to repair tickets.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Independent Bike Shop Owner",
        personaRole: "Front-Counter Hub",
        operationalBenefit: "Speeds up counter queues and keeps mechanic tickets tied directly to register sales.",
        stackSuite: ["Vise", "Mesh", "Echo"],
      },
      {
        personaTitle: "Multi-Register Flagship Retailer",
        personaRole: "Floor & Service Point of Sale",
        operationalBenefit: "Runs multiple registers smoothly across departments without inventory collision.",
        stackSuite: ["Vise", "Stow", "Mesh"],
      },
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
    domainCategory: "warehouse-inventory",
    domainLabel: "Warehouse & Stockrooms",
    capabilities: [
      "Dynamic bin-level tracking",
      "Algorithmic pick path optimization",
      "Barcode-driven receiving & purchase order reconciliation",
      "Multi-warehouse transfer orders",
    ],
    features: [
      { title: "Bin-level inventory", body: "Locate any unit instantly across multiple warehouses." },
      { title: "Pick and pack", body: "Optimized pick paths for fast, accurate fulfillment." },
      { title: "Receiving", body: "Inbound receipts reconcile against purchase orders." },
    ],
    companionApps: [
      {
        slug: "vise",
        name: "Vise",
        relationship: "Retail Counter Fulfillment",
        operationalFlow: "Restocks and backroom queries pull directly from precise bin locations.",
      },
      {
        slug: "rift",
        name: "Rift",
        relationship: "Wholesale Order Staging",
        operationalFlow: "Pick lists generate automatically from approved dealer purchase orders.",
      },
      {
        slug: "mesh",
        name: "Mesh",
        relationship: "Omnichannel Stock Master",
        operationalFlow: "Warehouse inventory levels publish reliably to all e-commerce channels.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Warehouse & Operations Lead",
        personaRole: "Inventory Control Engine",
        operationalBenefit: "Cuts pick times in half and eliminates misplaced high-value frames and parts.",
        stackSuite: ["Stow", "Rift", "Mesh"],
      },
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
    domainCategory: "pos-checkout",
    domainLabel: "Omnichannel Sync",
    capabilities: [
      "Real-time bidirectional inventory deduplication",
      "Margin Shield automated cost protection",
      "Intelligent SKU matching & barcode resolution",
      "Universal POS adapter layer",
    ],
    features: [
      { title: "Automated inventory sync", body: "When an item sells in-store, Shopify updates automatically." },
      { title: "Margin Shield", body: "Guards prices against accidental markdowns below cost." },
      { title: "Item matching", body: "Connects SKUs cleanly and surfaces discrepancies before they reach customers." },
    ],
    integrations: ["Lightspeed Retail", "Square", "Clover", "Citrus Lime", "Ascend RMS", "Revel"],
    companionApps: [
      {
        slug: "vise",
        name: "Vise",
        relationship: "In-Store Register Sync",
        operationalFlow: "Physical sales instantly adjust online quantity available in Shopify.",
      },
      {
        slug: "stow",
        name: "Stow",
        relationship: "Warehouse Stock Publishing",
        operationalFlow: "Aggregates retail floor and warehouse stock into a single truthful web inventory.",
      },
      {
        slug: "pars",
        name: "Pars",
        relationship: "Discrepancy Reporting",
        operationalFlow: "Audits inventory reconciliations and flags mismatched variants.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Omnichannel Bike Shop Merchant",
        personaRole: "Sync & Protection Core",
        operationalBenefit: "Guarantees no customer buys a bike online that was already sold at the counter an hour ago.",
        stackSuite: ["Mesh", "Vise", "Stow"],
      },
    ],
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
    domainCategory: "marketing-ai",
    domainLabel: "Marketing & AI",
    capabilities: [
      "Predictive dealer reorder triggers",
      "Automated personalized email journeys",
      "AI campaign copy generation for seasonal cycling launches",
    ],
    features: [
      { title: "Smart segments", body: "Audiences built from live dealer and purchase behavior." },
      { title: "Automated journeys", body: "Nurture sequences that trigger on real events." },
      { title: "Content assist", body: "Draft on-brand copy and creative in seconds." },
    ],
    companionApps: [
      {
        slug: "lead",
        name: "Lead",
        relationship: "CRM Audience Sync",
        operationalFlow: "Campaign interactions log directly to dealer activity timelines.",
      },
      {
        slug: "wire",
        name: "Wire",
        relationship: "Market Trend Alignment",
        operationalFlow: "Campaign timing calibrates against industry component availability and price trends.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Brand Marketing Lead",
        personaRole: "Growth & Retention Engine",
        operationalBenefit: "Launches targeted dealer promotions based on actual inventory shortages and seasonal demand.",
        stackSuite: ["Beam", "Lead", "Wire"],
      },
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
    domainCategory: "market-intelligence",
    domainLabel: "Market Intelligence",
    capabilities: [
      "Industry-wide component availability tracking",
      "Real-time benchmark pricing across channels",
      "Macro supply chain trend forecasting",
    ],
    features: [
      { title: "Live pricing", body: "Market pricing across brands and channels." },
      { title: "Availability", body: "See what is in stock, where, and at what volume." },
      { title: "Trends", body: "Spot category and component trends before they peak." },
    ],
    companionApps: [
      {
        slug: "rift",
        name: "Rift",
        relationship: "Wholesale Margin Defense",
        operationalFlow: "Sets wholesale price floors informed by live competitive market rates.",
      },
      {
        slug: "pars",
        name: "Pars",
        relationship: "Floor Availability Cross-Check",
        operationalFlow: "Correlates regional inventory shortages with retail floor demand.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Bicycle Brand Product Director",
        personaRole: "Strategic Market Radar",
        operationalBenefit: "Avoids costly over-spec'ing and stock-outs by tracking market component volumes.",
        stackSuite: ["Wire", "Rift", "Pars"],
      },
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
    domainCategory: "service-kinematics",
    domainLabel: "Local-First AI",
    capabilities: [
      "On-device local LLM inference",
      "Hands-free shop voice commands",
      "Offline repair log buffer",
      "Zero-latency hardware diagnostics",
    ],
    features: [
      { title: "On-device inference", body: "Core AI runs locally for speed and privacy." },
      { title: "Voice commands", body: "Hands-free operation while working on a bike." },
      { title: "Local-first", body: "Works without a connection; syncs when available." },
    ],
    companionApps: [
      {
        slug: "vise",
        name: "Vise",
        relationship: "Hands-Free Repair Intake",
        operationalFlow: "Mechanics dictate part replacements without touching oily screens.",
      },
      {
        slug: "trailtune",
        name: "TrailTune",
        relationship: "Kinematic Diagnostic Prompts",
        operationalFlow: "Voice queries retrieve suspension clicker baselines at the repair stand.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Head Bike Mechanic",
        personaRole: "Repair Stand Co-Pilot",
        operationalBenefit: "Speeds up repair logs without taking off greasy gloves or stepping away from the bike.",
        stackSuite: ["Echo", "Vise", "TrailTune"],
      },
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
    domainCategory: "market-intelligence",
    domainLabel: "Dealer Analytics",
    capabilities: [
      "Automated dealer floor stock normalization",
      "Geographic model penetration maps",
      "Sell-through velocity signals",
    ],
    features: [
      { title: "Inventory scraping", body: "Normalize dealer listings into a single schema." },
      { title: "Availability analytics", body: "See stock levels and gaps across dealers." },
      { title: "Sales signals", body: "Surface what is moving and what is stuck." },
    ],
    companionApps: [
      {
        slug: "rift",
        name: "Rift",
        relationship: "Proactive Dealer Reordering",
        operationalFlow: "Notifies sales reps when a dealer sells through a high-margin frame size.",
      },
      {
        slug: "wire",
        name: "Wire",
        relationship: "Market Health Index",
        operationalFlow: "Feeds dealer floor data into aggregate industry supply indexes.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Territory Sales Representative",
        personaRole: "Dealer Replenishment Advisor",
        operationalBenefit: "Shows up to dealer visits knowing exactly which bike sizes and parts they sold this week.",
        stackSuite: ["Pars", "Rift", "Lead"],
      },
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
    domainCategory: "service-kinematics",
    domainLabel: "Technical Spec Authority",
    capabilities: [
      "Canonical frame geometry matrix (reach, stack, head angle)",
      "Leverage ratio & axle path kinematics curves",
      "Read-only universal part compatibility index",
    ],
    features: [
      { title: "Canonical specs", body: "The single source of geometry and kinematics truth." },
      { title: "Kinematics", body: "Suspension curves and metrics for every model." },
      { title: "Read-only authority", body: "Consumed by the whole ecosystem, written by one." },
    ],
    companionApps: [
      {
        slug: "trailtune",
        name: "TrailTune",
        relationship: "Kinematic Foundation",
        operationalFlow: "Feeds suspension curves directly into rider setup calculation algorithms.",
      },
      {
        slug: "vise",
        name: "Vise",
        relationship: "Parts Fitment Verification",
        operationalFlow: "Verifies bottom bracket, headset, and rotor size compatibility right at the counter.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Service Manager & Custom Bike Builder",
        personaRole: "Fitment & Geometry Truth",
        operationalBenefit: "Never orders incompatible bearings, headsets, or shock stroke sizes again.",
        stackSuite: ["Gear", "Vise", "TrailTune"],
      },
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
    domainCategory: "financials-commission",
    domainLabel: "Deal Accounting",
    capabilities: [
      "Automated sales rep commission tiers",
      "Dealer invoice margin reconciliation",
      "Auditable payout calculation logs",
    ],
    features: [
      { title: "Commission calc", body: "Commission rules tied to real closed deals." },
      { title: "Expense tracking", body: "Log and categorize spend with receipts." },
      { title: "Audit trail", body: "Every figure is traceable to its source." },
    ],
    companionApps: [
      {
        slug: "rift",
        name: "Rift",
        relationship: "Closed Order Reconciliation",
        operationalFlow: "Wholesale invoices trigger commission splits upon payment confirmation.",
      },
      {
        slug: "lead",
        name: "Lead",
        relationship: "Rep Pipeline Incentive",
        operationalFlow: "Projected deal commissions display directly inside CRM deal views.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Finance & Accounting Controller",
        personaRole: "Payout Audit & Ledger",
        operationalBenefit: "Eliminates disputed commission spreadsheets and automates end-of-month reconciliations.",
        stackSuite: ["Tally", "Rift", "Lead"],
      },
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
    domainCategory: "service-kinematics",
    domainLabel: "Rider Telemetry",
    capabilities: [
      "Algorithm-driven fork & shock baseline recommendations",
      "Digital garage bike build tracking",
      "Telemetry session logging & trail-specific bracketing",
    ],
    features: [
      { title: "Suspension tuning", body: "Recommend setups from kinematics and riding style." },
      { title: "Digital garage", body: "Model every bike you own and its build." },
      { title: "Telemetry", body: "Capture and review ride data to refine the tune." },
    ],
    companionApps: [
      {
        slug: "gear",
        name: "Gear",
        relationship: "Kinematic Data Ingestion",
        operationalFlow: "Pulls factory leverage ratios and progression curves automatically.",
      },
      {
        slug: "echo",
        name: "Echo",
        relationship: "Voice Run Notes",
        operationalFlow: "Riders and mechanics record trail notes hands-free immediately after a test lap.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Performance Shop & Demo Fleet Operator",
        personaRole: "Rider Setup Optimization",
        operationalBenefit: "Dials in suspension clickers for demo riders in under 3 minutes with zero guesswork.",
        stackSuite: ["TrailTune", "Gear", "Echo"],
      },
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
    domainCategory: "messaging-fabric",
    domainLabel: "Entity Messaging",
    capabilities: [
      "Zero-knowledge end-to-end encrypted messaging",
      "Deep entity pinning (tickets, purchase orders, frames)",
      "Instant push and WebSocket pub/sub fabric",
    ],
    features: [
      { title: "Real-time chat", body: "Low-latency messaging across the ecosystem." },
      { title: "Entity messaging", body: "Messages attached to orders, tickets, and dealers." },
      { title: "Ephemeral", body: "Zero-knowledge, end-to-end encrypted by default." },
    ],
    companionApps: [
      {
        slug: "lead",
        name: "Lead",
        relationship: "Dealer Account Threads",
        operationalFlow: "Live conversations remain tethered to CRM account records.",
      },
      {
        slug: "vise",
        name: "Vise",
        relationship: "Customer Service Updates",
        operationalFlow: "Notifies customers directly when their service ticket status updates.",
      },
    ],
    personaWorkflows: [
      {
        personaTitle: "Ecosystem Operator & Support Rep",
        personaRole: "Cross-App Collaboration",
        operationalBenefit: "Keeps all shop discussions tied directly to orders and repairs, ending email confusion.",
        stackSuite: ["Relay", "Lead", "Vise"],
      },
    ],
    cta: { label: "Request a Relay demo", href: "/demo" },
    liveUrl: "https://chat.bicyclebutler.cc",
  },
];
