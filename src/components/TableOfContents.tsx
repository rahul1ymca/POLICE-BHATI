import React, { useState, useEffect } from 'react';
import { ListOrdered, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { TABLE_OF_CONTENTS } from '../data/contentData';

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('introduction');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    TABLE_OF_CONTENTS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      id="table-of-contents-navigation"
      aria-label="ब्लॉग विषय सूची"
      className="my-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-xs p-4 sm:p-5"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            <ListOrdered className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              विषय सूची (Table of Contents)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              अपनी रुचि के अनुसार किसी भी विषय पर सीधे क्लिक करें
            </p>
          </div>
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 p-1 rounded-md"
          aria-expanded={isMobileOpen}
          aria-controls="toc-list"
        >
          <span>{isMobileOpen ? 'संक्षिप्त करें' : 'सूची देखें'}</span>
          {isMobileOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <ul
        id="toc-list"
        className={`mt-4 space-y-1.5 transition-all ${
          isMobileOpen ? 'block' : 'hidden md:block'
        }`}
      >
        {TABLE_OF_CONTENTS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(item.id, e)}
                className={`group flex items-center justify-between py-1.5 px-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold border-l-4 border-blue-600'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900'
                }`}
                title={`${item.title} पर जाएं`}
              >
                <span className="truncate">{item.title}</span>
                <ArrowRight
                  className={`w-3.5 h-3.5 transition-transform shrink-0 ${
                    isActive ? 'translate-x-0.5 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
