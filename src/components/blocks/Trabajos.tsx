"use client";

import React, { useState, useRef } from "react";
import { Unit, Activity, ActivityEvidence } from "@/types/portfolio";
import {
  Upload,
  FileCheck2,
  FileText,
  Trash2,
  Eye,
  Download,
  AlertCircle,
  Search,
  CheckCircle2,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  FileCode,
  FileImage,
  Layers,
  Sparkles,
  Plus,
  Paperclip,
  Clock,
  Filter,
  Check,
  FolderArchive,
  BookOpen,
} from "lucide-react";

interface TrabajosProps {
  units: Unit[];
  evidences: Record<string, ActivityEvidence[]>;
  onUploadEvidences: (activityId: string, files: File[]) => void;
  onRemoveEvidence: (activityId: string, evidenceId: string) => void;
  onClearActivityEvidences?: (activityId: string) => void;
}

export const Trabajos: React.FC<TrabajosProps> = ({
  units,
  evidences,
  onUploadEvidences,
  onRemoveEvidence,
  onClearActivityEvidences,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>("unidad-1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "pending">("all");
  const [previewFile, setPreviewFile] = useState<{ name: string; url: string; type: string } | null>(null);

  // Expanded weeks state (all open by default for clear visibility)
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({
    "semana-01": true,
    "semana-02": true,
    "semana-03": true,
    "semana-04": true,
    "semana-05": true,
    "semana-06": true,
    "semana-07": true,
    "semana-08": true,
    "semana-09": true,
    "semana-10": true,
    "semana-11": true,
    "semana-12": true,
    "semana-13": true,
    "semana-14": true,
    "semana-15": true,
    "semana-16": true,
  });

  const activeUnit = units.find((u) => u.id === selectedUnitId) || units[0];

  // Global calculations
  const totalActivities = units.reduce(
    (acc, unit) => acc + unit.weeks.reduce((wAcc, w) => wAcc + w.activities.length, 0),
    0
  );

  const activitiesWithFilesCount = Object.keys(evidences).filter(
    (k) => evidences[k] && evidences[k].length > 0
  ).length;

  const totalFilesCount = Object.values(evidences).reduce(
    (acc, list) => acc + (list ? list.length : 0),
    0
  );

  const progressPercentage = Math.round((activitiesWithFilesCount / (totalActivities || 1)) * 100);

  const toggleWeek = (weekId: string) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekId]: !prev[weekId],
    }));
  };

  const handleExpandAll = (expand: boolean) => {
    const updated: Record<string, boolean> = {};
    units.forEach((u) =>
      u.weeks.forEach((w) => {
        updated[w.id] = expand;
      })
    );
    setExpandedWeeks(updated);
  };

  const formatFileSize = (bytes: number) => {
    if (!bytes || bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (ext === "pdf") return <FileText className="w-4 h-4 text-rose-500 shrink-0" />;
    if (ext === "doc" || ext === "docx") return <FileText className="w-4 h-4 text-blue-600 shrink-0" />;
    if (ext === "sql") return <FileCode className="w-4 h-4 text-amber-500 shrink-0" />;
    if (ext === "xls" || ext === "xlsx" || ext === "csv")
      return <FileSpreadsheet className="w-4 h-4 text-emerald-500 shrink-0" />;
    if (["jpg", "jpeg", "png", "webp", "gif"].includes(ext || ""))
      return <FileImage className="w-4 h-4 text-purple-500 shrink-0" />;
    if (["zip", "rar", "7z", "tar", "gz"].includes(ext || ""))
      return <FolderArchive className="w-4 h-4 text-orange-500 shrink-0" />;
    return <FileText className="w-4 h-4 text-slate-500 shrink-0" />;
  };

  const getFileBadgeColor = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toUpperCase() || "FILE";
    if (ext === "PDF") return "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300";
    if (ext === "SQL") return "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300";
    if (ext === "DOC" || ext === "DOCX") return "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300";
    if (["PNG", "JPG", "JPEG"].includes(ext)) return "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300";
    if (["ZIP", "RAR"].includes(ext)) return "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300";
    return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      {/* =========================================================
          HEADER: MODERN DASHBOARD FOR ACADEMIC EVIDENCE
         ========================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-upla-50 dark:bg-slate-800 border border-upla-200 dark:border-slate-700 text-xs font-bold text-upla-800 dark:text-sky-300 uppercase tracking-wider">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Gestión de Evidencias Académicas</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              TRABAJOS POR UNIDADES
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Identifica las arquitecturas de base de datos mediante su capacidad de implementación
              en gestores DBMS vigentes para determinar cómo almacenar, organizar e integrar los
              datos. En cada actividad puedes subir **uno o múltiples archivos** como evidencias de aprendizaje.
            </p>
          </div>

          {/* Quick Metrics Progress Card */}
          <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 min-w-[280px] shrink-0 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Progreso General</span>
              </span>
              <span className="text-upla-800 dark:text-sky-400 font-mono font-extrabold text-sm">
                {activitiesWithFilesCount} / {totalActivities} act.
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-upla-700 via-sky-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Mini Counters */}
            <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
              <span>{progressPercentage}% Completado</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                {totalFilesCount} archivo(s) en total
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            UNIT TABS (MODERN PILLS WITH BADGES)
           ========================================================= */}
        <div className="space-y-3">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
            Selecciona la Unidad Académica:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {units.map((unit) => {
              const isSelected = unit.id === selectedUnitId;
              const unitActivities = unit.weeks.flatMap((w) => w.activities);
              const unitCompletedActivities = unitActivities.filter(
                (act) => evidences[act.id] && evidences[act.id].length > 0
              ).length;
              const unitFilesCount = unitActivities.reduce(
                (acc, act) => acc + (evidences[act.id]?.length || 0),
                0
              );

              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 border relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-upla-800 text-white shadow-lg shadow-upla-900/25 border-upla-700 dark:bg-upla-700"
                      : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[11px] font-mono font-black px-2 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {unit.romanNumeral}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {unitCompletedActivities}/{unitActivities.length}
                    </span>
                  </div>

                  <div className="font-extrabold text-xs sm:text-sm line-clamp-1">
                    {unit.title}
                  </div>

                  <div
                    className={`text-[11px] mt-1.5 font-medium ${
                      isSelected ? "text-blue-100" : "text-slate-400"
                    }`}
                  >
                    {unitFilesCount} archivo(s) subido(s)
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SEARCH, FILTER & ACCORDION CONTROLS TOOLBAR
           ========================================================= */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por actividad, código o tema..."
              className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-upla-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills and Expand/Collapse */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  statusFilter === "all"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setStatusFilter("completed")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  statusFilter === "completed"
                    ? "bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Con archivos
              </button>
              <button
                onClick={() => setStatusFilter("pending")}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  statusFilter === "pending"
                    ? "bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Pendientes
              </button>
            </div>

            <button
              onClick={() => handleExpandAll(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-upla-800 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
              title="Abrir todas las semanas"
            >
              Expandir
            </button>
            <button
              onClick={() => handleExpandAll(false)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-upla-800 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
              title="Cerrar todas las semanas"
            >
              Colapsar
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          SELECTED UNIT INFORMATION BANNER
         ========================================================= */}
      <div className="bg-gradient-to-r from-upla-900 via-upla-800 to-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-md border border-upla-700/60 relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg font-mono">
              {activeUnit.romanNumeral}
            </span>
            <h2 className="text-xl sm:text-2xl font-black">{activeUnit.title}</h2>
          </div>
          <span className="text-xs text-sky-200 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10">
            {activeUnit.weeks.length} Semanas Curriculares
          </span>
        </div>
        <p className="text-sm font-semibold text-sky-200 mb-1">{activeUnit.subtitle}</p>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
          {activeUnit.description}
        </p>
      </div>

      {/* =========================================================
          WEEKS & ACTIVITIES LIST (WITH MULTI-FILE UPLOAD)
         ========================================================= */}
      <div className="space-y-6">
        {activeUnit.weeks.map((week) => {
          const isExpanded = expandedWeeks[week.id] ?? true;

          // Filter activities based on search and status
          const filteredActivities = week.activities.filter((act) => {
            const fileList = evidences[act.id] || [];
            const hasFiles = fileList.length > 0;

            if (statusFilter === "completed" && !hasFiles) return false;
            if (statusFilter === "pending" && hasFiles) return false;

            if (searchQuery) {
              const q = searchQuery.toLowerCase();
              return (
                act.title.toLowerCase().includes(q) ||
                act.code.toLowerCase().includes(q) ||
                (act.description && act.description.toLowerCase().includes(q)) ||
                fileList.some((f) => f.name.toLowerCase().includes(q))
              );
            }
            return true;
          });

          if (filteredActivities.length === 0 && (searchQuery || statusFilter !== "all")) {
            return null;
          }

          const weekUploadedCount = week.activities.filter(
            (act) => evidences[act.id] && evidences[act.id].length > 0
          ).length;

          const weekTotalFiles = week.activities.reduce(
            (acc, act) => acc + (evidences[act.id]?.length || 0),
            0
          );

          return (
            <div
              key={week.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm overflow-hidden transition-all"
            >
              {/* Week Accordion Header */}
              <div
                onClick={() => toggleWeek(week.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between transition-colors border-b bg-slate-50/80 dark:bg-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 border-slate-200/70 dark:border-slate-800"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl font-black font-mono text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm bg-upla-800 text-white">
                    S{week.weekNumber < 10 ? `0${week.weekNumber}` : week.weekNumber}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white truncate">
                      {week.title}
                    </h3>
                    {week.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {week.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-3">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      weekUploadedCount === week.activities.length && week.activities.length > 0
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                        : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {weekUploadedCount} de {week.activities.length} completadas ({weekTotalFiles} archivos)
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Activities Content */}
              {isExpanded && (
                <div className="p-4 sm:p-6 space-y-4">
                  {filteredActivities.map((activity) => {
                    const fileList = evidences[activity.id] || [];
                    const hasFiles = fileList.length > 0;

                    return (
                      <ActivityCard
                        key={activity.id}
                        activity={activity}
                        files={fileList}
                        hasFiles={hasFiles}
                        onUpload={(files) => onUploadEvidences(activity.id, files)}
                        onRemoveFile={(evidenceId) => onRemoveEvidence(activity.id, evidenceId)}
                        onClearAll={() =>
                          onClearActivityEvidences && onClearActivityEvidences(activity.id)
                        }
                        onPreview={(name, url, type) => setPreviewFile({ name, url, type })}
                        formatFileSize={formatFileSize}
                        getFileIcon={getFileIcon}
                        getFileBadgeColor={getFileBadgeColor}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =========================================================
          MODAL PREVIEW FOR FILES (IMAGES / DOCUMENTS)
         ========================================================= */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3 overflow-hidden">
                {getFileIcon(previewFile.name)}
                <div className="overflow-hidden">
                  <h3 className="font-extrabold text-slate-900 dark:text-white truncate text-sm sm:text-base">
                    {previewFile.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Evidencia Académica Registrada
                  </span>
                </div>
              </div>
              <button
                onClick={() => setPreviewFile(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl font-bold p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Preview Box */}
            <div className="min-h-[260px] max-h-[480px] overflow-auto flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
              {previewFile.type.startsWith("image/") && previewFile.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewFile.url}
                  alt={previewFile.name}
                  className="max-h-[420px] w-auto object-contain rounded-xl shadow-md"
                />
              ) : (
                <div className="text-center space-y-3 py-10">
                  <div className="w-16 h-16 rounded-2xl bg-upla-50 dark:bg-slate-800 text-upla-800 dark:text-sky-400 flex items-center justify-center mx-auto shadow-sm">
                    {getFileIcon(previewFile.name)}
                  </div>
                  <div className="space-y-1">
                    <p className="font-extrabold text-slate-900 dark:text-white text-base">
                      {previewFile.name}
                    </p>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Archivo adjunto verificado para la sustentación del portafolio académico de Base de Datos II.
                    </p>
                  </div>
                  {previewFile.url && (
                    <a
                      href={previewFile.url}
                      download={previewFile.name}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-upla-800 hover:bg-upla-700 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Descargar Archivo</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] text-slate-400">
                Presiona Cerrar o haz clic fuera para regresar
              </span>
              <button
                onClick={() => setPreviewFile(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// ACTIVITY CARD COMPONENT (SUPPORTS MULTIPLE FILES UPLOAD & MODERN MANAGEMENT)
// =========================================================================

interface ActivityCardProps {
  activity: Activity;
  files: ActivityEvidence[];
  hasFiles: boolean;
  onUpload: (files: File[]) => void;
  onRemoveFile: (evidenceId: string) => void;
  onClearAll: () => void;
  onPreview: (name: string, url: string, type: string) => void;
  formatFileSize: (bytes: number) => string;
  getFileIcon: (name: string) => React.ReactNode;
  getFileBadgeColor: (name: string) => string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  files,
  hasFiles,
  onUpload,
  onRemoveFile,
  onClearAll,
  onPreview,
  formatFileSize,
  getFileIcon,
  getFileBadgeColor,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      onUpload(selectedFiles);
      e.target.value = ""; // Reset to allow re-uploading same file if desired
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      onUpload(droppedFiles);
    }
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4">
      {/* Hidden multiple file input */}
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.sql,.zip,.rar,.txt,.xlsx,.csv"
        className="hidden"
      />

      {/* Activity Header & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-lg border bg-upla-100 dark:bg-upla-900/60 text-upla-900 dark:text-sky-300 border-upla-200 dark:border-upla-800">
              {activity.code}
            </span>
            <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
              {activity.title}
            </h4>
          </div>
          {activity.description && (
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activity.description}
            </p>
          )}
        </div>

        {/* Status Badge */}
        <div className="shrink-0 flex items-center gap-2 self-start sm:self-auto">
          {hasFiles ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              <Check className="w-3.5 h-3.5" />
              <span>{files.length} archivo(s) entregado(s)</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Clock className="w-3.5 h-3.5" />
              <span>Pendiente de subir</span>
            </span>
          )}
        </div>
      </div>

      {/* =========================================================
          ATTACHED FILES LIST (IF FILES EXIST)
         ========================================================= */}
      {hasFiles && (
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1.5">
              <Paperclip className="w-3.5 h-3.5" />
              <span>Archivos adjuntos para esta actividad ({files.length}):</span>
            </span>
            {files.length > 1 && (
              <button
                onClick={onClearAll}
                className="text-[11px] text-red-600 hover:text-red-700 dark:text-red-400 font-semibold"
              >
                Eliminar todos
              </button>
            )}
          </div>

          {/* Grid of uploaded files */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {files.map((file) => {
              const ext = file.name.split(".").pop()?.toUpperCase() || "FILE";
              return (
                <div
                  key={file.id}
                  className="bg-white dark:bg-slate-800/90 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-between gap-2.5 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${getFileBadgeColor(
                        file.name
                      )}`}
                    >
                      {ext}
                    </span>
                    <div className="min-w-0">
                      <p
                        className="font-bold text-xs text-slate-900 dark:text-white truncate"
                        title={file.name}
                      >
                        {file.name}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                        <span>{formatFileSize(file.size)}</span>
                        <span>•</span>
                        <span>{file.uploadedAt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions for this individual file */}
                  <div className="flex items-center gap-1 shrink-0">
                    {file.fileUrl && (
                      <button
                        onClick={() => onPreview(file.name, file.fileUrl!, file.type)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-upla-800 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
                        title="Ver archivo"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {file.fileUrl && (
                      <a
                        href={file.fileUrl}
                        download={file.name}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-upla-800 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
                        title="Descargar archivo"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => onRemoveFile(file.id)}
                      className="p-1.5 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors"
                      title="Eliminar este archivo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================
          DROP-ZONE / UPLOAD BUTTON AREA (SUPPORTS MULTIPLE FILES)
         ========================================================= */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`p-3.5 rounded-xl border-2 border-dashed cursor-pointer transition-all flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left ${
          isDragging
            ? "border-upla-600 bg-upla-50 dark:bg-upla-950/30 dark:border-sky-400"
            : "border-slate-300 dark:border-slate-700 hover:border-upla-500 dark:hover:border-sky-400 bg-white/60 dark:bg-slate-800/40"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-upla-50 dark:bg-slate-800 text-upla-800 dark:text-sky-300">
            <Upload className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {hasFiles
                ? "Haz clic o arrastra para agregar más archivos a esta actividad"
                : "Haz clic o arrastra aquí tus archivos de evidencia (puedes subir varios a la vez)"}
            </p>
            <p className="text-[11px] text-slate-400">
              Formatos soportados: <span className="font-mono text-slate-500 dark:text-slate-400">.pdf, .doc, .docx, .sql, .png, .jpg, .zip, .xlsx</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-bold text-xs shadow-xs transition-all shrink-0 bg-upla-800 hover:bg-upla-700 dark:bg-upla-600 dark:hover:bg-upla-500"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>{hasFiles ? "Agregar más" : "Subir archivos"}</span>
        </button>
      </div>
    </div>
  );
};
