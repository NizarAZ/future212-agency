export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative grid size-8 place-items-center overflow-hidden"
      >
        <img
          src="/logo.png"
          alt=""
          className="absolute left-1/2 top-1/2 h-[200%] w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </span>
      <span className="font-display text-xl leading-none tracking-tight text-foreground">
        ＦＵＴＵＲＥ<span className="text-gold-gradient">２１２</span>
      </span>
      {!compact && <span className="sr-only">AI automation agency</span>}
    </span>
  );
}
