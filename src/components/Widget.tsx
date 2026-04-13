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
  return (
    <Tag className={`mb-16 ${className ?? ""}`}>
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-[var(--color-text-label)] tracking-widest uppercase whitespace-nowrap">
          {title}
        </span>
        {meta && (
          <span className="font-mono text-xs text-[var(--color-text-dim)] whitespace-nowrap">
            {meta}
          </span>
        )}
        <div className="flex-1 h-px bg-[var(--color-border)]" aria-hidden="true" />
        {badge !== undefined && (
          <span className="font-mono text-xs text-[var(--color-text-dim)] whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
      {children}
    </Tag>
  );
}
