"use client";

import React from "react";
import { STUDENT_INFO } from "@/data/portfolioData";
import {
  GraduationCap,
  Building2,
  BookMarked,
  UserCheck,
  MapPin,
  CalendarDays,
  CheckCircle,
  FileCheck,
  Server,
  Layers,
  Shield,
  ActivitySquare,
} from "lucide-react";

export const Informacion: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Header section with IDENTIFICACIÓN */}
      <div className="text-center sm:text-left border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-upla-50 dark:bg-slate-800 border border-upla-200 dark:border-slate-700 text-xs font-bold text-upla-800 dark:text-sky-400 uppercase tracking-widest mb-3">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Ficha Técnica y Curricular</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          IDENTIFICACIÓN
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Datos institucionales y contextualización curricular de la asignatura.
        </p>
      </div>

      {/* INFORMACIÓN ACADÉMICA Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-extrabold text-upla-900 dark:text-sky-300 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-upla-700 dark:text-sky-400" />
            <span>INFORMACIÓN ACADÉMICA</span>
          </h2>
          <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 font-semibold px-2.5 py-1 rounded-md">
            Semestre {STUDENT_INFO.semester}
          </span>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Universidad */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-upla-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-upla-transparent.png"
                    alt="UPLA Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Universidad
                  </div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                    {STUDENT_INFO.university}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-upla-700 dark:text-sky-400">Siglas: {STUDENT_INFO.universityAcronym}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> {STUDENT_INFO.location}</span>
            </div>
          </div>

          {/* Card 2: Carrera */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-upla-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-slate-800 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Carrera Profesional
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                {STUDENT_INFO.career}
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span>Facultad de Ingeniería</span>
            </div>
          </div>

          {/* Card 3: Asignatura */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-upla-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Server className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Asignatura
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                {STUDENT_INFO.subject}
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-amber-600 dark:text-amber-400">V Ciclo • Especialidad</span>
              <span>4 Créditos</span>
            </div>
          </div>

          {/* Card 4: Docente */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-upla-500/50 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Docente
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                {STUDENT_INFO.teacher}
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span>Catedrático Titular</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla detallada de Identificación del Estudiante y Registro */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-upla-700 dark:text-sky-400" />
          <span>Ficha de Identificación del Estudiante</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30 w-1/3">
                  Apellidos y Nombres:
                </td>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                  {STUDENT_INFO.name}
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
                  Código de Matrícula:
                </td>
                <td className="py-3 px-4 font-mono font-bold text-upla-800 dark:text-sky-300">
                  {STUDENT_INFO.code}
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
                  Correo Institucional:
                </td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                  {STUDENT_INFO.email}
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
                  Teléfono / WhatsApp de Contacto:
                </td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">
                  {STUDENT_INFO.phone}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
                  Sede / Ciudad:
                </td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                  {STUDENT_INFO.location}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Competencias y Alcance Curricular */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span>Competencias de la Asignatura</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-upla-600 mt-2 shrink-0"></span>
              <span>
                <strong>Arquitectura & Motores:</strong> Diseña, implementa y configura servidores de bases de datos relacionales en entornos empresariales.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-upla-600 mt-2 shrink-0"></span>
              <span>
                <strong>Almacenamiento Físico:</strong> Gestiona la memoria de buffer, segmentación en grupos de archivos (.mdf, .ndf, .ldf) y particionamiento.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-upla-600 mt-2 shrink-0"></span>
              <span>
                <strong>Seguridad y Resguardo:</strong> Implementa esquemas de autenticación mixta, cifrado transparente (TDE) y políticas de mínimo privilegio.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-upla-600 mt-2 shrink-0"></span>
              <span>
                <strong>Tuning y Recuperación:</strong> Diagnostica cuellos de botella con Extended Events y DMVs, formulando planes de contingencia ante caídas.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ActivitySquare className="w-5 h-5 text-sky-500" />
            <span>Infraestructura Tecnológica Empleada</span>
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block font-semibold">Motor Principal:</strong>
              <span>Microsoft SQL Server 2022 Enterprise / Developer Edition y SQL Server Management Studio (SSMS v20+).</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block font-semibold">Herramientas Auxiliares:</strong>
              <span>Azure Data Studio, SQL Profiler, PowerShell Scripts, Docker Containers para instancias Linux.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block font-semibold">Formato de Evidencias:</strong>
              <span>Scripts T-SQL (.sql), Diagramas E-R (.pdf/.png), Manuales técnicos (.docx/.pdf) y respaldos (.bak).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
