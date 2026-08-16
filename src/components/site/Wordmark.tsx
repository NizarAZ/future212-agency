export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative grid size-8 place-items-center border border-gold/50"
      >
        <span className="block size-2.5 rotate-45 bg-gold" />
        <span className="absolute inset-x-1.5 top-1/2 h-px bg-gold/35" />
      </span>
      <span className="font-display text-xl leading-none tracking-tight text-foreground">
        Future<span className="text-gold-gradient">212</span>
      </span>
      {!compact && <span className="sr-only">AI automation agency</span>}
    </span>
  );
}
