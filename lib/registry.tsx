import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { CardStyled } from '@/components/ui/cardstyled';
import { ChevronsUpDown, Mail, Plus, Rocket, Settings } from 'lucide-react';

export type ShowcaseComponent = {
  id: string;
  name: string;
  description: string;
  keywords: string;
  code: string;
  demo: React.ReactNode;
};

export type Category = {
  id: string;
  name: string;
  blurb: string;
  components: ShowcaseComponent[];
};

const box = 'flex items-center justify-center rounded-md border bg-muted/60 px-3 py-4 text-sm text-muted-foreground';

export const CATEGORIES: Category[] = [
  {
    id: 'layout',
    name: 'Layout',
    blurb: 'The bones of every page: containers, grids, rows, stacks, and dividers.',
    components: [
      {
        id: 'container',
        name: 'Container & Section',
        description: 'The standard page width and a titled section block. Every page in every app starts with this.',
        keywords: 'page width wrapper section max-w',
        code: `<div className="mx-auto w-full max-w-5xl px-4">
  <section className="py-8">
    <h2 className="text-2xl font-semibold">Section title</h2>
    <p className="text-muted-foreground mt-2">
      Section intro text goes here.
    </p>
  </section>
</div>`,
        demo: (
          <div className="mx-auto w-full max-w-md rounded-md border border-dashed p-4">
            <h3 className="text-base font-semibold">Section title</h3>
            <p className="text-muted-foreground mt-1 text-sm">Centered, max-width, padded — the same on every page.</p>
          </div>
        ),
      },
      {
        id: 'grid',
        name: 'Grid',
        description: 'Responsive columns from one token-driven pattern: 1 up on phones, 3 up on desktop.',
        keywords: 'columns responsive grid cards',
        code: `<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`,
        demo: (
          <div className="grid gap-3 sm:grid-cols-3">
            <div className={box}>One</div>
            <div className={box}>Two</div>
            <div className={box}>Three</div>
          </div>
        ),
      },
      {
        id: 'row-stack',
        name: 'Row & Stack',
        description: 'Flex rows for toolbars and button groups; vertical stacks for flowing content.',
        keywords: 'flex row stack toolbar group spacing',
        code: `{/* Row */}
<div className="flex items-center gap-2">…</div>

{/* Stack */}
<div className="flex flex-col gap-4">…</div>`,
        demo: (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button size="sm">Row</Button>
              <Button size="sm" variant="secondary">of</Button>
              <Button size="sm" variant="outline">buttons</Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className={box}>Stacked one</div>
              <div className={box}>Stacked two</div>
            </div>
          </div>
        ),
      },
      {
        id: 'separator',
        name: 'Separator',
        description: 'A one-token divider, horizontal or vertical. Divides without decorating.',
        keywords: 'divider rule line hr',
        code: `<Separator />
<div className="flex h-5 items-center gap-4">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
</div>`,
        demo: (
          <div>
            <p className="text-sm">Above the line</p>
            <Separator className="my-3" />
            <div className="flex h-5 items-center gap-4 text-sm">
              <span>Blog</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Source</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'forms',
    name: 'Forms',
    blurb: 'Inputs and controls. Labels always paired, hints in muted text, one column unless there is a reason.',
    components: [
      {
        id: 'text-field',
        name: 'Text Field',
        description: 'Label + input + optional hint. The unit every form is built from.',
        keywords: 'input text field label email form',
        code: `<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-muted-foreground text-sm">
    We never share it.
  </p>
</div>`,
        demo: (
          <div className="flex max-w-sm flex-col gap-2">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
            <p className="text-muted-foreground text-sm">We never share it.</p>
          </div>
        ),
      },
      {
        id: 'textarea',
        name: 'Textarea',
        description: 'Multi-line text, same tokens as the text field so forms feel like one system.',
        keywords: 'textarea multiline message comment form',
        code: `<div className="flex flex-col gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message…" />
</div>`,
        demo: (
          <div className="flex max-w-sm flex-col gap-2">
            <Label htmlFor="demo-message">Message</Label>
            <Textarea id="demo-message" placeholder="Type your message…" />
          </div>
        ),
      },
      {
        id: 'checkbox',
        name: 'Checkbox',
        description: 'One choice, or a list of independent choices. The label is the click target.',
        keywords: 'checkbox check toggle option form terms',
        code: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
        demo: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="demo-terms" defaultChecked />
              <Label htmlFor="demo-terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="demo-news" />
              <Label htmlFor="demo-news">Email me the newsletter</Label>
            </div>
          </div>
        ),
      },
      {
        id: 'login-card',
        name: 'Login Card (CardStyled)',
        description: 'The composed login form: a Card carrying email, password, and stacked actions. A pattern, built entirely from system parts.',
        keywords: 'login card sign in auth form cardstyled',
        code: `<CardStyled />
// components/ui/cardstyled.tsx — a Card composition:
// CardHeader (title, description) + CardContent (email +
// password fields) + CardFooter (Login / Login with Google).`,
        demo: (
          <div className="max-w-sm">
            <CardStyled />
          </div>
        ),
      },
      {
        id: 'form-actions',
        name: 'Form Actions Row',
        description: 'How forms end: primary action right, quiet cancel beside it. Same order everywhere.',
        keywords: 'submit save cancel buttons form footer',
        code: `<div className="flex items-center justify-end gap-2">
  <Button variant="ghost">Cancel</Button>
  <Button>Save changes</Button>
</div>`,
        demo: (
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost">Cancel</Button>
            <Button>Save changes</Button>
          </div>
        ),
      },
    ],
  },
  {
    id: 'actions',
    name: 'Actions',
    blurb: 'Buttons and badges. One primary action per view; everything else steps down a variant.',
    components: [
      {
        id: 'button-variants',
        name: 'Button — Variants',
        description: 'Default is the one primary action. Outline and ghost step down; destructive is reserved for damage.',
        keywords: 'button variants primary destructive outline ghost link',
        code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`,
        demo: (
          <div className="flex flex-wrap items-center gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        ),
      },
      {
        id: 'button-sizes',
        name: 'Button — Sizes',
        description: 'sm for dense toolbars, default for forms, lg for hero actions, icon for square icon buttons.',
        keywords: 'button sizes small large icon',
        code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Settings">
  <Settings />
</Button>`,
        demo: (
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Settings">
              <Settings />
            </Button>
            <Button>
              <Mail /> With icon
            </Button>
          </div>
        ),
      },
      {
        id: 'badge',
        name: 'Badge',
        description: 'Small status labels. Color means something: default = brand, destructive = problem, outline = neutral.',
        keywords: 'badge tag label status pill',
        code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
        demo: (
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        ),
      },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    blurb: 'Getting around: menus that open, and pagination for long lists.',
    components: [
      {
        id: 'navigation-menu',
        name: 'Navigation Menu',
        description: 'The site nav pattern: triggers that open rich dropdown panels. This is the pattern the Aeroscout page was drafted with.',
        keywords: 'nav menu header dropdown links site',
        code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
        demo: (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-56 gap-1 p-2">
                    <NavigationMenuLink className="rounded-md px-3 py-2 hover:bg-accent">Aerial photography</NavigationMenuLink>
                    <NavigationMenuLink className="rounded-md px-3 py-2 hover:bg-accent">Mapping & surveys</NavigationMenuLink>
                    <NavigationMenuLink className="rounded-md px-3 py-2 hover:bg-accent">Inspections</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-48 gap-1 p-2">
                    <NavigationMenuLink className="rounded-md px-3 py-2 hover:bg-accent">About</NavigationMenuLink>
                    <NavigationMenuLink className="rounded-md px-3 py-2 hover:bg-accent">Contact</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ),
      },
      {
        id: 'pagination',
        name: 'Pagination',
        description: 'Stepping through long lists a page at a time, with the current page marked.',
        keywords: 'pagination pages next previous list',
        code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        demo: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive onClick={(e) => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" onClick={(e) => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" onClick={(e) => e.preventDefault()} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      },
      {
        id: 'dropdown-menu',
        name: 'Dropdown Menu',
        description: 'A button that opens a menu of actions. Labels and separators group the choices.',
        keywords: 'dropdown menu actions context overflow',
        code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        demo: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
  },
  {
    id: 'display',
    name: 'Display',
    blurb: 'Presenting content: cards, drawers, and tabs.',
    components: [
      {
        id: 'card',
        name: 'Card',
        description: 'The standard content box: header, content, optional footer. One idea per card.',
        keywords: 'card panel box content',
        code: `<Card>
  <CardHeader>
    <CardTitle>Card title</CardTitle>
    <CardDescription>What this card is about.</CardDescription>
  </CardHeader>
  <CardContent>Body content.</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
        demo: (
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Launch checklist</CardTitle>
              <CardDescription>Three steps to a live page.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">Build the page, review it, ship it. The card holds one idea and its action.</CardContent>
            <CardFooter>
              <Button size="sm">
                <Rocket /> Start
              </Button>
            </CardFooter>
          </Card>
        ),
      },
      {
        id: 'accordion',
        name: 'Accordion',
        description: 'Vertical drawers that expand and hide content — the same pattern this showcase uses for its categories.',
        keywords: 'accordion drawer expand collapse faq',
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes — it is a Radix primitive with keyboard support.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
        demo: (
          <Accordion type="single" collapsible className="max-w-md">
            <AccordionItem value="a1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes — it is a Radix primitive with full keyboard support built in.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="a2">
              <AccordionTrigger>Does it work in dark mode?</AccordionTrigger>
              <AccordionContent>Every token has a dark value, so yes — flip the .dark class and it follows.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        id: 'tabs',
        name: 'Tabs',
        description: 'Switching between sibling views without leaving the page.',
        keywords: 'tabs switch views panels',
        code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings.</TabsContent>
  <TabsContent value="password">Password settings.</TabsContent>
</Tabs>`,
        demo: (
          <Tabs defaultValue="account" className="max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-sm">Account settings live here.</TabsContent>
            <TabsContent value="password" className="text-sm">Password settings live here.</TabsContent>
          </Tabs>
        ),
      },
      {
        id: 'table',
        name: 'Table',
        description: 'Rows and columns for real data. Header row muted, numbers right-aligned, a caption when the table needs a name.',
        keywords: 'table data rows columns grid list',
        code: `<Table>
  <TableCaption>Recent flights.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Job</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Photos</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ranch survey</TableCell>
      <TableCell>Delivered</TableCell>
      <TableCell className="text-right">212</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        demo: (
          <Table>
            <TableCaption>Recent flights.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Job</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Photos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ranch survey</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell className="text-right">212</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Roof inspection</TableCell>
                <TableCell>Scheduled</TableCell>
                <TableCell className="text-right">—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
      {
        id: 'collapsible',
        name: 'Collapsible',
        description: 'One block that opens and closes — the simple cousin of the accordion, for a single disclosure.',
        keywords: 'collapsible expand hide show disclosure',
        code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Hidden until opened.
  </CollapsibleContent>
</Collapsible>`,
        demo: (
          <Collapsible className="max-w-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Flight details</p>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle flight details">
                  <ChevronsUpDown className="size-4" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-muted-foreground pt-2 text-sm">
              Altitude 120 m, wind NW 8 kt, battery 3 of 4. Hidden until opened — one disclosure, no ceremony.
            </CollapsibleContent>
          </Collapsible>
        ),
      },
      {
        id: 'plus-note',
        name: 'More on the way',
        description: 'This registry grows by rule: a component is added to the design system first, reviewed, then used in apps.',
        keywords: 'more coming roadmap',
        code: `// To propose a component:
// 1. Build it on a Radix primitive.
// 2. Variants via cva, colors via tokens only.
// 3. Add its entry to lib/registry.tsx with demo + code.
// 4. Jonathan reviews, then it ships to every app.`,
        demo: (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Plus className="size-4" /> Dialogs, selects, switches, and toasts are next in line.
          </p>
        ),
      },
    ],
  },
];
