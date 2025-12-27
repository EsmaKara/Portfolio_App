import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cn } from '@lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId],
    );
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <Card
            key={item.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <CardHeader className="cursor-pointer select-none" onClick={() => toggleItem(item.id)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className={cn(
                          'mt-1 text-xs',
                          item.badgeColor ||
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                        )}>
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </div>
            </CardHeader>

            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0',
              )}>
              <CardContent className="pt-0">{item.content}</CardContent>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Accordion;
