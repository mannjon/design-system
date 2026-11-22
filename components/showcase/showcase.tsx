'use client';

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CATEGORIES } from '@/lib/registry';
import { ComponentCard } from '@/components/showcase/component-card';
import { SiteHeader, type SearchEntry } from '@/components/showcase/site-header';

const INDEX: SearchEntry[] = CATEGORIES.flatMap((c) =>
  c.components.map((k) => ({ id: k.id, name: k.name, categoryId: c.id, categoryName: c.name, keywords: k.keywords }))
);

export default function Showcase() {
  const [openCats, setOpenCats] = React.useState<string[]>(['layout']);
  const [flashId, setFlashId] = React.useState<string | null>(null);

  const openCategory = React.useCallback((categoryId: string) => {
    setOpenCats((prev) => (prev.includes(categoryId) ? prev : [...prev, categoryId]));
  }, []);

  const navigate = React.useCallback(
    (categoryId: string) => {
      openCategory(categoryId);
      requestAnimationFrame(() => {
        document.getElementById(`cat-${categoryId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    [openCategory ]
  );

  const pick = React.useCallback(
    (entry: SearchEntry) => {
      openCategory(entry.categoryId);
      setFlashId(entry.id);
      // Wait for the drawer to expand before scrolling to the card.
      setTimeout(() => {
        document.getElementById(entry.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
      setTimeout(() => setFlashId(null), 3600);
    },
    [openCategory]
  );

  return (
    <div className="min-h-screen">
      <SiteHeader
        categories={CATEGORIES.map((c) => ({ id: c.id, name: c.name }))}
        index={INDEX}
        onNavigate={navigate}
        onPick={pick}
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            The shared design system for every app in the Apps tab. Each component has a live demo and the exact code to copy into an
            app. Apps include these components as-is and differ only by their brand tokens.
          </p>
        </div>

        <Accordion type="multiple" value={openCats} onValueChange={setOpenCats} className="flex flex-col gap-4">
          {CATEGORIES.map((cat) => (
            <AccordionItem key={cat.id} value={cat.id} id={`cat-${cat.id}`} className="scroll-mt-24 rounded-xl border px-5">
              <AccordionTrigger className="py-5 text-base">
                <span className="flex flex-col items-start gap-0.5">
                  <span className="font-display text-lg font-semibold">{cat.name}</span>
                  <span className="text-muted-foreground text-sm font-normal">{cat.blurb}</span>
                </span>
                <span className="text-muted-foreground ml-auto pr-2 text-sm font-normal">
                  {cat.components.length} components
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-6 pb-2">
                  {cat.components.map((k) => (
                    <ComponentCard key={k.id} id={k.id} name={k.name} description={k.description} code={k.code} flash={flashId === k.id}>
                      {k.demo}
                    </ComponentCard>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <footer className="text-muted-foreground mt-14 border-t pt-6 text-sm">
          Design System v0 · React + Next.js + shadcn/ui + Tailwind CSS · One repo, every app includes it.
        </footer>
      </main>
    </div>
  );
}
