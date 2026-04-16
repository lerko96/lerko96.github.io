type WidgetProps = {
  title: string;
  badge?: string | number;
  meta?: string;
  as?: "section" | "div" | "article";
  className?: string;
  children: React.ReactNode;
};

export default function Widget({
  title,
  badge,
  meta,
  as: Tag = "section",
  className,
  children,
}: WidgetProps) {
  const slashIdx = title.lastIndexOf("/");
  const prefix = slashIdx >= 0 ? title.slice(0, slashIdx + 1) : null;
  const name = slashIdx >= 0 ? title.slice(slashIdx + 1) : title;

  return (
    <Tag className={`mb-16 ${className ?? ""}`}>
      <div className="flex items-center gap-2 mb-8">
        {prefix && (
          <span className="font-mono text-sm text-[var(--color-text-dim)] select-none">{prefix}</span>
        )}
        <span className="font-mono text-sm font-semibold text-[var(--color-text)]">{name}</span>
        {badge !== undefined && (
          <span className="font-mono text-xs text-[var(--color-text-dim)]">[{badge}]</span>
        )}
        {meta && (
          <span className="font-mono text-xs text-[var(--color-text-dim)] ml-1">— {meta}</span>
        )}
      </div>
      {children}
    </Tag>
  );
}
