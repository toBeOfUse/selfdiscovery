let accordionItemId = 0;
export const getAccordionItemId = () => accordionItemId++;

export const accordionProviderKeys = {
  openAccordionItem: Symbol(),
  initialContentHeight: Symbol(),
} as const;
