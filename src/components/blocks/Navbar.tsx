"use client";

import React, { useState } from "react";
import { UplaLogo } from "@/components/ui/UplaLogo";
import { useTheme } from "@/context/ThemeContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  FolderGit2,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export type NavTab = "presentacion" | "informacion" | "trabajos" | "contacto" | "admin";

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  completedCount?: number;
  totalCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  completedCount = 0,
  totalCount = 27,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "presentacion", label: "Presentación", icon: GraduationCap },
    { id: "informacion", label: "Información", icon: BookOpen },
    { id: "trabajos", label: "Trabajos", icon: FolderGit2 },
    { id: "contacto", label: "Contacto", icon: PhoneCall },
    { id: "admin", label: "Administrador Avance", icon: ShieldCheck },
  ];

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
      {/* Top micro institutional bar */}
      <div className="bg-upla-900 text-slate-200 text-[11px] py-1 px-4 sm:px-8 flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-300">FACULTAD DE INGENIERÍA</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">INGENIERÍA DE SISTEMAS Y COMPUTACIÓN</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>Semestre 2026-II</span>
          <span>•</span>
          <span className="text-amber-400 font-medium">Base de Datos II</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & University Title */}
          <div
            onClick={() => handleTabClick("presentacion")}
            className="cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <UplaLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? "bg-upla-800 text-white shadow-md shadow-upla-900/20 dark:bg-upla-600 dark:text-white"
                      : "text-slate-600 hover:text-upla-800 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-400 dark:text-slate-400"}`} />
                  <span>{item.label}</span>
                  {item.id === "trabajos" && completedCount > 0 && (
                    <span className="ml-1 text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500 text-white rounded-full">
                      {completedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action buttons (Theme toggle & Mobile menu button) */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema día/noche"
              className="p-2 rounded-lg text-slate-600 hover:text-upla-800 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-amber-400 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={theme === "dark" ? "Cambiar a modo Claro" : "Cambiar a modo Oscuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-slide-down">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "bg-upla-800 text-white shadow dark:bg-upla-700"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? "text-amber-300" : "text-upla-600 dark:text-upla-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.id === "trabajos" && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                    {completedCount}/{totalCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
