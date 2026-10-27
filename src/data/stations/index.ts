import type { OperationalStation } from "./types";

export * from "./types";

export const OPERATIONAL_STATIONS: OperationalStation[] = [
  {
    id: "counter-pos",
    tabLabel: "Front Counter & POS",
    badge: "Station 01 • Checkout",
    title: "Front Registers & In-Store Checkout",
    tagline: "Ring up riders fast without worrying about online inventory clashes",
    description:
      "When a customer purchases a tire, cassette, or helmet at your register, the transaction locks and broadcasts the decrement in milliseconds. Online shoppers immediately see updated availability.",
    syncGuarantee: "Sub-50ms stock broadcast prevents double-selling across web & in-store registers.",
    backdrop: {
      src: "/images/stations/counter-pos.jpg",
      alt: "Sleek retail register counter with touch POS terminal and bike accessories",
    },
    associatedApps: [
      { slug: "mesh", name: "Mesh", role: "Multi-Store Register Hub" },
      { slug: "vise", name: "Vise", role: "Margin & Pricing Guard" },
    ],
    previewKey: "register",
  },
  {
    id: "service-stand",
    tabLabel: "Service & Repair Bench",
    badge: "Station 02 • Workshop",
    title: "Mechanic Stands & Service Work Orders",
    tagline: "Track repairs, auto-deduct replacement parts, and notify customers",
    description:
      "No more lost repair tickets or forgotten parts. Mechanics log tune-ups, shock overhauls, and wheel builds. When replacement cables or brake pads are added, they are deducted from shop stock automatically.",
    syncGuarantee: "Parts used on the stand are immediately reserved so floor staff don't sell them.",
    backdrop: {
      src: "/images/stations/service-stand.jpg",
      alt: "Master mechanic repair bench with titanium frame clamped in stand and precision tools",
    },
    associatedApps: [
      { slug: "trailtune", name: "TrailTune", role: "Service Bench & Work Orders" },
      { slug: "relay", name: "Relay", role: "Automated Rider SMS Updates" },
    ],
    previewKey: "service",
  },
  {
    id: "stockroom",
    tabLabel: "Stockroom & Inventory",
    badge: "Station 03 • Logistics",
    title: "Backroom Inventory & Multi-Location Stock",
    tagline: "One unified truth across stockroom bins, floor racks, and warehouse bays",
    description:
      "Know exactly what you have and where it sits. Scan incoming distributor shipments, track bin locations, and set automated reorder triggers before running out of high-velocity consumables.",
    syncGuarantee: "Continuous cycle counts and PO drafts keep your stockroom lean and accurate.",
    backdrop: {
      src: "/images/stations/stockroom.jpg",
      alt: "Organized bike shop warehouse with component boxes, wheels, and parts bins",
    },
    associatedApps: [
      { slug: "stow", name: "Stow", role: "Inventory & Bin Management" },
      { slug: "gear", name: "Gear", role: "Vendor Catalogs & Purchasing" },
    ],
    previewKey: "inventory",
  },
  {
    id: "fulfillment",
    tabLabel: "Omnichannel & Wholesale",
    badge: "Station 04 • Growth",
    title: "Web Store Alignment & B2B Dealer Linesheets",
    tagline: "Expand from local retail to multi-channel e-com and wholesale dealer accounts",
    description:
      "Enable wholesale dealers to place pre-season orders on custom linesheets while keeping your direct-to-consumer online store aligned with your physical store counters.",
    syncGuarantee: "B2B dealer approvals immediately reserve inventory without manual re-entry.",
    backdrop: {
      src: "/images/stations/fulfillment.jpg",
      alt: "Bicycle e-commerce fulfillment studio with shipping boxes and packing bench",
    },
    associatedApps: [
      { slug: "rift", name: "Rift", role: "B2B Dealer Wholesale Portal" },
      { slug: "beam", name: "Beam", role: "E-Commerce Real-Time Sync" },
      { slug: "lead", name: "Lead", role: "Dealer & Customer CRM" },
    ],
    previewKey: "wholesale",
  },
];
