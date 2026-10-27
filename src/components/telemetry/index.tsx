import React from "react";
import {
  Activity,
  CheckCircle2,
  Clock,
  Layers,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

export function HeroLiveTelemetry(): React.JSX.Element {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-base-700/80 bg-base-950/85 p-5 shadow-2xl shadow-base-950/80 backdrop-blur-xl">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      {/* Header Bar */}
      <div className="mb-4 flex items-center justify-between border-b border-base-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-accent-400">
            Real-Time Operational Mesh
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-base-900 px-2 py-0.5 text-[11px] font-mono text-ink-300 border border-base-800">
          <Activity className="h-3 w-3 text-accent-400" />
          14ms sync latency
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-ink-400 mb-1">
            <span className="font-mono text-[11px]">SKU: SHI-M8100-1051</span>
            <span className="text-accent-400 font-medium">Register 01 • In-Store Sale</span>
          </div>
          <p className="text-sm font-bold text-ink-100">
            Shimano Deore XT M8100 12-Speed Cassette (10-51T)
          </p>
        </div>

        {/* Sync Propagation Strip */}
        <div className="grid grid-cols-3 gap-2 rounded-xl border border-base-800 bg-base-900/70 p-3">
          <div>
            <span className="text-[10px] uppercase font-semibold text-ink-400 block">Register POS</span>
            <span className="text-xs font-bold text-ink-200">Sold: 1 unit</span>
          </div>
          <div className="border-x border-base-800/80 px-2">
            <span className="text-[10px] uppercase font-semibold text-ink-400 block">Online Store</span>
            <span className="text-xs font-bold text-accent-400">Stock: 4 → 3</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-ink-400 block">Backroom Bin</span>
            <span className="text-xs font-bold text-ink-200">Allocated</span>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="flex items-center justify-between text-[11px] text-ink-400 pt-1">
          <span className="flex items-center gap-1.5 text-ink-300">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-400" />
            Margin Protected: $165.99 (MAP compliant)
          </span>
          <span className="font-mono text-[10px] text-ink-400">Tx #8942-B</span>
        </div>
      </div>
    </div>
  );
}

export function RegisterTerminalPreview(): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-base-800 bg-base-950/90 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-base-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Store className="h-4 w-4 text-accent-400" />
          <span className="text-xs font-bold text-ink-100">Front Register 01 • Vise POS</span>
        </div>
        <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-2.5 py-0.5 text-[10px] font-bold text-accent-400">
          Hardware Linked
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between rounded-lg bg-base-900/60 p-2.5 text-xs border border-base-800">
          <div>
            <p className="font-semibold text-ink-100">Maxxis Minion DHF 29x2.5 WT</p>
            <p className="text-[11px] text-ink-400">3C MaxxTerra / EXO / TR</p>
          </div>
          <span className="font-mono font-bold text-ink-100">$84.00</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-base-900/60 p-2.5 text-xs border border-base-800">
          <div>
            <p className="font-semibold text-ink-100">Stan&apos;s NoTubes Sealant (32 oz)</p>
            <p className="text-[11px] text-ink-400">Tubeless maintenance kit</p>
          </div>
          <span className="font-mono font-bold text-ink-100">$32.00</span>
        </div>
      </div>

      <div className="border-t border-base-800/80 pt-3 flex items-center justify-between text-xs">
        <span className="text-ink-400">Subtotal (2 items)</span>
        <span className="font-mono text-sm font-extrabold text-accent-400">$116.00</span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-accent-500/10 p-2 text-[11px] text-accent-300">
        <RefreshCw className="h-3.5 w-3.5 animate-spin" />
        <span>Inventory reserved in Mesh instantly — zero oversell risk</span>
      </div>
    </div>
  );
}

export function ServiceWorkOrderPreview(): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-base-800 bg-base-950/90 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-base-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-accent-400" />
          <span className="text-xs font-bold text-ink-100">Bench 02 • TrailTune Work Order #4109</span>
        </div>
        <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-2.5 py-0.5 text-[10px] font-bold text-accent-400">
          In Progress
        </span>
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold text-ink-300">Customer: Marcus Vance • (503) 555-0198</p>
        <p className="text-sm font-bold text-ink-100 mt-0.5">Specialized Stumpjumper Pro (2023)</p>
      </div>

      <div className="space-y-1.5 text-xs mb-4">
        <div className="flex items-center justify-between rounded bg-base-900/50 px-2.5 py-1.5 border border-base-800/60">
          <span className="text-ink-200">Fox Float X2 100hr Service</span>
          <span className="font-mono text-ink-400">Labor $120</span>
        </div>
        <div className="flex items-center justify-between rounded bg-base-900/50 px-2.5 py-1.5 border border-base-800/60">
          <span className="text-ink-200">SRAM GX Eagle 12-Speed Chain</span>
          <span className="font-mono text-ink-400">Part $54 (Deducted)</span>
        </div>
      </div>

      <div className="rounded-xl border border-base-800 bg-base-900/80 p-2.5 text-[11px] text-ink-300 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-accent-400" />
          Est. completion: Today, 4:30 PM
        </span>
        <span className="text-accent-400 font-semibold">SMS Auto-Notify Active</span>
      </div>
    </div>
  );
}

export function InventoryBinPreview(): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-base-800 bg-base-950/90 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-base-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-accent-400" />
          <span className="text-xs font-bold text-ink-100">Warehouse Bins • Stow Inventory</span>
        </div>
        <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-2.5 py-0.5 text-[10px] font-bold text-accent-400">
          Unified Catalog
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl border border-base-800 bg-base-900/70 p-3">
          <span className="text-[10px] uppercase font-semibold text-ink-400 block">Available to Promise</span>
          <span className="text-xl font-extrabold text-ink-100 font-mono">1,428</span>
          <span className="text-[10px] text-accent-400 block mt-0.5">Across 3 shop locations</span>
        </div>
        <div className="rounded-xl border border-base-800 bg-base-900/70 p-3">
          <span className="text-[10px] uppercase font-semibold text-ink-400 block">Low Stock Alerts</span>
          <span className="text-xl font-extrabold text-amber-400 font-mono">4 items</span>
          <span className="text-[10px] text-ink-400 block mt-0.5">Auto-draft PO queued</span>
        </div>
      </div>

      <div className="rounded-xl border border-base-800 bg-base-900/60 p-2.5 text-xs space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-ink-300">Bin A-08: SRAM AXS Batteries</span>
          <span className="font-mono text-accent-400 font-bold">12 on shelf</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-300">Bin C-14: Park Tool DAG-3 Gauge</span>
          <span className="font-mono text-accent-400 font-bold">3 on shelf</span>
        </div>
      </div>
    </div>
  );
}

export function WholesaleDispatchPreview(): React.JSX.Element {
  return (
    <div className="rounded-2xl border border-base-800 bg-base-950/90 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-base-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <PackageCheck className="h-4 w-4 text-accent-400" />
          <span className="text-xs font-bold text-ink-100">B2B Linesheet & Order Dispatch • Rift</span>
        </div>
        <span className="rounded-full bg-accent-500/10 border border-accent-500/20 px-2.5 py-0.5 text-[10px] font-bold text-accent-400">
          Dealer Portal
        </span>
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold text-ink-300">Dealer: Cascade Peak Cycles • Net-30 Approved</p>
        <p className="text-sm font-bold text-ink-100 mt-0.5">Spring Pre-Order #PO-8812</p>
      </div>

      <div className="space-y-1.5 text-xs mb-4">
        <div className="flex items-center justify-between rounded bg-base-900/50 px-2.5 py-1.5 border border-base-800/60">
          <span className="text-ink-200">Enve SES 3.4 Carbon Wheelset (x3)</span>
          <span className="font-mono text-ink-300">Tier 2 Wholesale • $6,450</span>
        </div>
        <div className="flex items-center justify-between rounded bg-base-900/50 px-2.5 py-1.5 border border-base-800/60">
          <span className="text-ink-200">Wolf Tooth Dropper Levers (x10)</span>
          <span className="font-mono text-ink-300">Tier 1 Wholesale • $490</span>
        </div>
      </div>

      <div className="rounded-xl border border-accent-500/20 bg-accent-500/10 p-2.5 text-[11px] text-accent-300 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
          Inventory automatically held in Stow
        </span>
        <span className="font-bold text-accent-400">Syncs to ERP</span>
      </div>
    </div>
  );
}
