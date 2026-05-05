'use client';
import { createContext, useContext, useState } from 'react';
import { translations, Lang } from './translations';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'uk',
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('uk');
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useT() {
  const { lang } = useContext(LangContext);
  return translations[lang];
}

export function useLang() {
  return useContext(LangContext);
}
