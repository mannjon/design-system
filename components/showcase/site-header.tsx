'use client';

import * as React from 'react';
import { Layers, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type SearchEntry = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  keywords: string;
};

export function SiteHeader({
  categories,
  index,
  onNavigate,
  onPick,
}: {
  categories: { id: string; name: string }[];
  index: SearchEntry[];
  onNavigate: (categoryId: string) => void;
  onPick: (entry: SearchEntry) => void;
}) {
  const [query, setQuery] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((e) => e.name.toLowerCase().includes(q) || e.keywords.toLowerCase().includes(q) || e.categoryName.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, index]);

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-4">
        <a href="#" className="flex items-center gap-2.5" onClick={(e) => e.preventDefault()}>
          <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md">
            <Layers className="size-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold">Design System</span>
            <span className="text-muted-foreground text-xs">Apps tab · shared components</span>
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Categories">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onNavigate(c.id)}
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {c.name}
            </button>
          ))}
        </nav>

        <div className="relative ml-auto w-52 sm:w-64">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setOpen(false);
              if (e.key === 'Enter' && results.length > 0) {
                onPick(results[0]);
                setOpen(false);
              }
            }}
            placeholder="Search components…"
            className="pl-8"
            aria-label="Search components"
          />
          {open && query.trim() !== '' && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
              <div className="bg-popover text-popover-foreground absolute top-full right-0 z-20 mt-2 w-72 overflow-hidden rounded-lg border shadow-lg">
                {results.length === 0 ? (
                  <p className="text-muted-foreground px-3 py-3 text-sm">No components match “{query}”.</p>
                ) : (
                  results.map((r) => (
                    <button
                      key={r.id}
                      className="hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm"
                      onClick={() => {
                        onPick(r);
                        setOpen(false);
                      }}
                    >
                      <span className="font-medium">{r.name}</span>
                      <Badge variant="outline">{r.categoryName}</Badge>
                    </button>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export { cn };
