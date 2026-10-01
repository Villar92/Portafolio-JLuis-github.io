"use client";

import React, { useState } from "react";
import { Unit, ActivityEvidence } from "@/types/portfolio";
import { STUDENT_INFO } from "@/data/portfolioData";
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  AlertTriangle,
  Award,
  Download,
  Filter,
  RefreshCw,
  FileCheck,
  Sliders,
  TrendingUp,
  Paperclip,
} from "lucide-react";

interface AdminPanelProps {
  units: Unit[];
  evidences: Record<string, ActivityEvidence[]>;
  onResetAllEvidences: () => void;
  onLoadSampleEvidences: () => void;
}

interface EvaluationRecord {
  grade: number;
  status: "Aprobado" | "En Revisión" | "Pendiente";
  feedback: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  units,
  evidences,
  onResetAllEvidences,
  onLoadSampleEvidences,
}) => {
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>("all");
  const [evaluations, setEvaluations] = useState<Record<string, EvaluationRecord>>({});
  const [isExporting, setIsExporting] = useState(false);

  // Flatten all activities
  const allActivities = units.flatMap((u) =>
    u.weeks.flatMap((w) =>
      w.activities.map((a) => ({
        ...a,
        unitTitle: u.romanNumeral,
        weekTitle: `Semana ${w.weekNumber < 10 ? `0${w.weekNumber}` : w.weekNumber}`,
      }))
    )
  );

  const totalActivities = allActivities.length;
  const completedActivitiesCount = Object.keys(evidences).filter(
    (k) => evidences[k] && evidences[k].length > 0
  ).length;
  const pendingCount = totalActivities - completedActivitiesCount;
  const completionRate = Math.round(
    (completedActivitiesCount / (totalActivities || 1)) * 100
  );

  const totalFilesUploaded = Object.values(evidences).reduce(
    (acc, list) => acc + (list ? list.length : 0),
    0
  );

  // Grade calculation
  const gradedActivities = Object.values(evaluations).filter((e) => e.grade > 0);
  const averageGrade =
    gradedActivities.length > 0
      ? (
          gradedActivities.reduce((acc, curr) => acc + curr.grade, 0) /
          gradedActivities.length
        ).toFixed(1)
      : "18.5"; // Baseline projected high academic grade

  const filteredActivities =
    selectedUnitFilter === "all"
      ? allActivities
      : allActivities.filter((a) => a.unitTitle === selectedUnitFilter);

  const handleGradeChange = (activityId: string, gradeStr: string) => {
    const grade = Math.min(20, Math.max(0, parseFloat(gradeStr) || 0));
    setEvaluations((prev) => ({
      ...prev,
      [activityId]: {
        grade,
        status: grade >= 11 ? "Aprobado" : "En Revisión",
        feedback:
          prev[activityId]?.feedback || "Cumple con los requisitos solicitados.",
      },
    }));
  };

  const handleExportSummary = () => {
    setIsExporting(true);
    const reportData = allActivities.map((act) => {
      const fileList = evidences[act.id] || [];
      const evEval = evaluations[act.id];
      const hasFiles = fileList.length > 0;

      return {
        Unidad: act.unitTitle,
        Semana: act.weekTitle,
        Codigo: act.code,
        Actividad: act.title,
        Estado: hasFiles ? "Entregado" : "Pendiente",
        TotalArchivos: fileList.length,
        ArchivosAdjuntos: hasFiles
          ? fileList.map((f) => `${f.name} (${f.uploadedAt})`).join("; ")
          : "Sin archivo",
        Nota: evEval?.grade ?? (hasFiles ? 18 : 0),
        Evaluacion: evEval?.status ?? (hasFiles ? "Aprobado" : "Pendiente"),
      };
    });

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Reporte_Portafolio_UPLA_${STUDENT_INFO.code}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Header section with admin badge */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Control de Avance & Calificación Académica</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              ADMINISTRADOR AVANCE
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Módulo de supervisión y control de avance académico para la asignatura Base de Datos II. Permite
              auditar las entregas multi-archivo de Jorge Luis Curo Villar, simular calificaciones y
              exportar reportes de avance.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleExportSummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-upla-700 hover:bg-upla-600 text-white font-bold text-xs shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Reporte</span>
            </button>
            <button
              onClick={onLoadSampleEvidences}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
              title="Cargar evidencias de muestra con múltiples archivos"
            >
              <FileCheck className="w-4 h-4" />
              <span>Cargar Evidencias Demo</span>
            </button>
            <button
              onClick={onResetAllEvidences}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-red-950/60 hover:text-red-300 text-slate-400 font-medium text-xs border border-slate-700 transition-all"
              title="Limpiar todas las evidencias"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Resetear</span>
            </button>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>Total Actividades</span>
              <FileCheck className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">{totalActivities}</div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">16 semanas en 4 unidades</div>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>Entregadas</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              {completedActivitiesCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              {completionRate}% ({totalFilesUploaded} archivos)
            </div>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>Pendientes</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{pendingCount}</div>
            <div className="text-[11px] text-slate-400 mt-1">Por verificar o subir</div>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>Promedio Ponderado</span>
              <Award className="w-4 h-4 text-amber-300" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300">
              {averageGrade} <span className="text-xs text-slate-400 font-normal">/20</span>
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">
              Rango Sobresaliente
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Table View */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white">
              Libro de Calificaciones y Evidencias
            </h2>
            <p className="text-xs text-slate-500">
              Estudiante: <strong>{STUDENT_INFO.name}</strong> ({STUDENT_INFO.code}) — UPLA
            </p>
          </div>

          {/* Unit filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
            <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Unidad:
            </span>
            {["all", "UNIDAD I", "UNIDAD II", "UNIDAD III", "UNIDAD IV"].map((u) => (
              <button
                key={u}
                onClick={() => setSelectedUnitFilter(u)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedUnitFilter === u
                    ? "bg-upla-800 text-white dark:bg-upla-600"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {u === "all" ? "Todas" : u}
              </button>
            ))}
          </div>
        </div>

        {/* Evaluation Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Unidad / Sem</th>
                <th className="py-3 px-3">Código</th>
                <th className="py-3 px-3">Actividad</th>
                <th className="py-3 px-3">Archivos Adjuntos</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-3 text-center">Calificación (/20)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredActivities.map((act) => {
                const fileList = evidences[act.id] || [];
                const hasFiles = fileList.length > 0;
                const currentEval = evaluations[act.id];
                const gradeValue = currentEval?.grade ?? (hasFiles ? 18 : 0);

                return (
                  <tr
                    key={act.id}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-3 px-3 whitespace-nowrap font-medium text-slate-500">
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {act.unitTitle}
                      </span>
                      <span className="block text-[10px] text-slate-400">{act.weekTitle}</span>
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-upla-800 dark:text-sky-300">
                      {act.code}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100 max-w-[220px]">
                      {act.title}
                    </td>
                    <td className="py-3 px-3 text-xs text-slate-600 dark:text-slate-400 max-w-[200px]">
                      {hasFiles ? (
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                            <Paperclip className="w-3.5 h-3.5 shrink-0" />
                            <span>{fileList.length} archivo(s):</span>
                          </span>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-mono">
                            {fileList.map((f) => f.name).join(", ")}
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Sin archivos</span>
                      )}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      {hasFiles ? (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                          {fileList.length} Entregado(s)
                        </span>
                      ) : (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                          Pendiente
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={gradeValue}
                          onChange={(e) => handleGradeChange(act.id, e.target.value)}
                          className="w-14 text-center font-bold font-mono py-1 px-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-upla-600 text-xs sm:text-sm"
                        />
                        <span className="text-xs text-slate-400 font-mono">/ 20</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
