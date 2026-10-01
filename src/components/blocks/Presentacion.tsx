"use client";

import React from "react";
import { STUDENT_INFO } from "@/data/portfolioData";
import {
  Database,
  Layers,
  Calendar,
  Award,
  ArrowRight,
  BookOpen,
  Server,
  Code2,
  ShieldCheck,
  HardDrive,
  Cpu,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Terminal,
  Activity,
  Network,
  FolderGit2,
} from "lucide-react";
import { NavTab } from "./Navbar";

interface PresentacionProps {
  onNavigate: (tab: NavTab) => void;
  completedActivitiesCount?: number;
  totalActivitiesCount?: number;
}

export const Presentacion: React.FC<PresentacionProps> = ({
  onNavigate,
  completedActivitiesCount = 0,
  totalActivitiesCount = 27,
}) => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* =========================================================
          HERO BANNER WITH DYNAMIC BACKGROUND IMAGE & GLASSMORPHISM
         ========================================================= */}
      <section className="relative overflow-hidden rounded-3xl text-white shadow-2xl border border-sky-500/20 group">
        {/* Real High-Tech Datacenter Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Ambient Dark Gradient Overlays for High Legibility & Futuristic Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142b]/95 via-[#002244]/85 to-[#050b16]/90 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#001b3a]/40 to-[#020611]/90" />

        {/* Glowing Decorative Radial Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-10 lg:p-14 space-y-8 max-w-5xl">
          {/* Top Institutional Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wider uppercase font-bold">PORTAFOLIO OFICIAL 2026-II</span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">UPLA - HUANCAYO</span>
          </div>

          {/* Cleanly Separated Main Titles */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              BASE DE DATOS II{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-sky-300">
                – V CICLO
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-sky-300 drop-shadow">
              PORTAFOLIO ACADÉMICO
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed font-normal">
            Espacio dedicado a documentar y presentar los trabajos desarrollados en la asignatura{" "}
            <strong className="text-white font-semibold">Base de Datos II</strong> a lo largo del
            semestre, organizados por unidades y semanas bajo estándares profesionales de gestión y administración de datos.
          </p>

          {/* CTA Actions */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onNavigate("trabajos")}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FolderGit2 className="w-5 h-5 text-slate-950" />
              <span>Explorar Trabajos por Unidades</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("informacion")}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all hover:border-sky-400/50"
            >
              <BookOpen className="w-4 h-4 text-sky-300" />
              <span>Información Académica</span>
            </button>
          </div>

          {/* Highlights Mini-Badges Grid */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-medium text-slate-200">
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 hover:bg-white/15 transition-colors">
              <Database className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold">Microsoft SQL Server</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 hover:bg-white/15 transition-colors">
              <HardDrive className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="font-semibold">Estructura .MDF/.NDF/.LDF</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 hover:bg-white/15 transition-colors">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Seguridad Corporativa TDE</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 hover:bg-white/15 transition-colors">
              <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="font-semibold">Extended Events & Tuning</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN PRESENTATION GRID: AUTHOR CARD & ACADEMIC STRUCTURE
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Student Presentation Card (Tarjeta de presentación) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg relative overflow-hidden">
          {/* Subtle gradient strip at top of card */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-upla-800 via-sky-500 to-amber-400" />

          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-upla-800 dark:text-sky-400">
                Tarjeta de Presentación
              </span>
            </div>
            <span className="text-[11px] font-mono bg-upla-50 dark:bg-slate-800 text-upla-800 dark:text-sky-300 px-2.5 py-1 rounded-md font-bold border border-upla-200 dark:border-slate-700">
              Estudiante UPLA
            </span>
          </div>

          {/* Student Profile Info */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl shadow-upla-950/25 border-2 border-white dark:border-slate-700 ring-4 ring-sky-500/20 transition-transform duration-300 group-hover:scale-105 bg-slate-100 dark:bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jorge-curo.png"
                  alt={`Fotografía oficial de ${STUDENT_INFO.name}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white dark:border-slate-900 shadow-md"
                title="Estudiante Activo - Verificado"
              >
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {STUDENT_INFO.name}
              </h2>
              <p className="text-sm font-semibold text-upla-700 dark:text-sky-400">
                Código de Matrícula:{" "}
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100 font-bold">
                  {STUDENT_INFO.code}
                </span>
              </p>
            </div>

            <div className="w-full pt-3 space-y-2.5 text-left text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  Carrera Profesional
                </div>
                <div className="font-extrabold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                  {STUDENT_INFO.career}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Facultad de Ingeniería
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                    Universidad
                  </div>
                  <div className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                    {STUDENT_INFO.university}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Sede Huancayo • Junín, Perú
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200 shrink-0 shadow-xs flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-upla-transparent.png"
                    alt="UPLA Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                  Asignatura & Cátedra
                </div>
                <div className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                  {STUDENT_INFO.subject} – V Ciclo
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Docente: <strong>{STUDENT_INFO.teacher}</strong>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="w-full pt-2">
              <a
                href={STUDENT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>WhatsApp Directo: {STUDENT_INFO.phone}</span>
                <ExternalLink className="w-4 h-4 opacity-90" />
              </a>
            </div>
          </div>
        </div>

        {/* Academic Structure & Curricular Metrics Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Estructura Curricular del Portafolio</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Distribución organizada de las 4 Unidades y 16 semanas académicas.
                </p>
              </div>
              <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-upla-50 text-upla-800 dark:bg-slate-800 dark:text-sky-300 border border-upla-200 dark:border-slate-700 self-start sm:self-auto">
                Plan Académico 2026-II
              </span>
            </div>

            {/* Grid of the 4 Units */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Unidad I */}
              <div
                onClick={() => onNavigate("trabajos")}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 hover:border-upla-500 dark:hover:border-sky-500 cursor-pointer transition-all hover:shadow-sm group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded bg-upla-800 text-white dark:bg-upla-600">
                    UNIDAD I
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Semanas 01-04
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1 group-hover:text-upla-700 dark:group-hover:text-sky-400 transition-colors">
                  Teoría de Apoyo y Arquitecturas
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Introducción a DBMS, instalación SQL Server, modelado físico y scripts DDL/DML.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-upla-700 dark:text-sky-400 font-bold">
                  <span>Ver actividades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Unidad II */}
              <div
                onClick={() => onNavigate("trabajos")}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 hover:border-upla-500 dark:hover:border-sky-500 cursor-pointer transition-all hover:shadow-sm group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded bg-upla-800 text-white dark:bg-upla-600">
                    UNIDAD II
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Semanas 05-08
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1 group-hover:text-upla-700 dark:group-hover:text-sky-400 transition-colors">
                  Almacenamiento y Carga Masiva
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Gestión de memoria, archivos .MDF/.NDF/.LDF, índices y Bulk Insert masivo.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-upla-700 dark:text-sky-400 font-bold">
                  <span>Ver actividades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Unidad III */}
              <div
                onClick={() => onNavigate("trabajos")}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 hover:border-upla-500 dark:hover:border-sky-500 cursor-pointer transition-all hover:shadow-sm group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded bg-upla-800 text-white dark:bg-upla-600">
                    UNIDAD III
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Semanas 09-12
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1 group-hover:text-upla-700 dark:group-hover:text-sky-400 transition-colors">
                  Seguridad y Alta Disponibilidad
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Roles, cifrado transparente TDE, conectividad de red TCP/IP y Always On.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-upla-700 dark:text-sky-400 font-bold">
                  <span>Ver actividades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Unidad IV */}
              <div
                onClick={() => onNavigate("trabajos")}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40 hover:border-upla-500 dark:hover:border-sky-500 cursor-pointer transition-all hover:shadow-sm group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded bg-upla-800 text-white dark:bg-upla-600">
                    UNIDAD IV
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Semanas 13-16
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1 group-hover:text-upla-700 dark:group-hover:text-sky-400 transition-colors">
                  Monitoreo y Recuperación
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  Extended Events, DMVs de rendimiento, planes de backup y sustentación.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-upla-700 dark:text-sky-400 font-bold">
                  <span>Ver actividades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="text-2xl sm:text-3xl font-black text-upla-800 dark:text-sky-400">
                  4
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Unidades</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="text-2xl sm:text-3xl font-black text-upla-800 dark:text-sky-400">
                  16
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Semanas</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {completedActivitiesCount}/{totalActivitiesCount}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  Evidencias Digitales
                </div>
              </div>
            </div>
          </div>

          {/* Technological Competencies Showcase Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-upla-900 via-upla-800 to-slate-900 text-white border border-upla-700/60 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Competencia Profesional en Gestión de Servidores DBMS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              El portafolio valida las capacidades prácticas del estudiante en administración, configuración física de almacenamiento, segmentación de grupos de archivos, transacciones ACID y planes de contingencia para la continuidad operativa de los datos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
