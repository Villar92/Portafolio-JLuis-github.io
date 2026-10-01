"use client";

import React from "react";
import { STUDENT_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 bg-gradient-to-b from-slate-900 via-upla-950 to-[#020b18] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Enlaces Legales y Créditos solicitados:
            Lado Izquierdo o Centro: JORGE LUIS CURO VILLAR
            Lado Derecho: BASE DE DATOS II – UPLA
        */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          {/* Lado Izquierdo / Centro */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="tracking-wider uppercase font-bold text-white text-sm">
              {STUDENT_INFO.name}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-mono">CÓDIGO: {STUDENT_INFO.code}</span>
          </div>

          {/* Lado Derecho */}
          <div className="flex items-center gap-4">
            <span className="font-extrabold tracking-wide uppercase text-amber-300 text-sm">
              BASE DE DATOS II – UPLA
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
