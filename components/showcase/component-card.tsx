'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ComponentCard({
  id,
  name,
  description,
  code,
  flash,
  children,
}: {
  id: string;
  name: string;
  description: string;
  code: string;
  flash: boolean;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Card id={id} className={flash ? 'flash-target scroll-mt-28' : 'scroll-mt-28'}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-lg border bg-background p-4">{children}</div>
        <div className="relative">
          <pre className="max-h-80 overflow-auto rounded-lg bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100">
            <code>{code}</code>
          </pre>
          <Button
            size="sm"
            variant="secondary"
            onClick={copy}
            className="absolute top-2 right-2"
            aria-label={copied ? 'Copied' : 'Copy code'}
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
