import { timingSketches } from "./TimingSketches";

interface Node {
  months: string;
  what: string;
  status?: "ideal" | "possible" | "urgent";
}

const statusColor: Record<NonNullable<Node["status"]>, string> = {
  ideal: "bg-emerald-600",
  possible: "bg-amber-500",
  urgent: "bg-red-600",
};

const statusLabel: Record<NonNullable<Node["status"]>, string> = {
  ideal: "Ideaal",
  possible: "Mogelijk",
  urgent: "Urgent",
};

const WeddingTimeline = ({ nodes, note }: { nodes: Node[]; note?: string }) => {
  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative pt-2">
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))` }}
          >
            {nodes.map((n, i) => {
              const Sketch = timingSketches[i] ?? timingSketches[0];
              return (
                <div key={i} className="flex flex-col items-center text-center px-2">
                  <Sketch className="w-12 h-12 text-gold/70 mb-3" />
                </div>
              );
            })}
          </div>
          <div className="absolute top-[88px] left-0 right-0 h-px bg-border" />
          <div
            className="grid mt-3"
            style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))` }}
          >
            {nodes.map((n, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2">
                <div
                  className={`w-4 h-4 rounded-full ring-4 ring-background relative z-10 ${
                    n.status ? statusColor[n.status] : "bg-gold"
                  }`}
                />
                <div className="mt-5 font-heading text-lg text-foreground">
                  {n.months}
                </div>
                {n.status && (
                  <div
                    className={`mt-2 inline-block text-[9px] tracking-[0.3em] uppercase font-body px-2 py-0.5 ${
                      n.status === "ideal"
                        ? "text-emerald-700 bg-emerald-600/10"
                        : n.status === "possible"
                        ? "text-amber-700 bg-amber-500/10"
                        : "text-red-700 bg-red-600/10"
                    }`}
                  >
                    {statusLabel[n.status]}
                  </div>
                )}
                <div className="mt-3 font-body text-sm text-foreground/80 leading-[1.6] max-w-[16rem]">
                  {n.what}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <ol className="md:hidden relative pl-12 space-y-7">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-border" />
        {nodes.map((n, i) => {
          const Sketch = timingSketches[i] ?? timingSketches[0];
          return (
            <li key={i} className="relative">
              <span
                className={`absolute -left-[39px] top-1.5 w-4 h-4 rounded-full ring-4 ring-background ${
                  n.status ? statusColor[n.status] : "bg-gold"
                }`}
              />
              <Sketch className="w-10 h-10 text-gold/70 mb-2" />
              <div className="font-heading text-lg text-foreground mb-1">{n.months}</div>
              {n.status && (
                <div
                  className={`inline-block mb-2 text-[9px] tracking-[0.3em] uppercase font-body px-2 py-0.5 ${
                    n.status === "ideal"
                      ? "text-emerald-700 bg-emerald-600/10"
                      : n.status === "possible"
                      ? "text-amber-700 bg-amber-500/10"
                      : "text-red-700 bg-red-600/10"
                  }`}
                >
                  {statusLabel[n.status]}
                </div>
              )}
              <div className="font-body text-sm text-foreground/80 leading-[1.7]">{n.what}</div>
            </li>
          );
        })}
      </ol>

      {note && (
        <p className="mt-10 text-center text-sm font-body italic text-foreground/70 leading-[1.7] max-w-2xl mx-auto">
          {note}
        </p>
      )}
    </div>
  );
};

export default WeddingTimeline;
