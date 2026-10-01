"use client";

import React, { useState, useEffect } from "react";
import { Navbar, NavTab } from "@/components/blocks/Navbar";
import { Presentacion } from "@/components/blocks/Presentacion";
import { Informacion } from "@/components/blocks/Informacion";
import { Trabajos } from "@/components/blocks/Trabajos";
import { Contacto } from "@/components/blocks/Contacto";
import { AdminPanel } from "@/components/blocks/AdminPanel";
import { Footer } from "@/components/blocks/Footer";
import { INITIAL_UNITS, STUDENT_INFO } from "@/data/portfolioData";
import { ActivityEvidence, Unit } from "@/types/portfolio";

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>("presentacion");
  const [units] = useState<Unit[]>(INITIAL_UNITS);
  const [evidences, setEvidences] = useState<Record<string, ActivityEvidence[]>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved evidences from localStorage on mount (with normalization for array support)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("upla_portfolio_evidences_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Normalize in case of legacy single object
        const normalized: Record<string, ActivityEvidence[]> = {};
        Object.keys(parsed).forEach((k) => {
          if (Array.isArray(parsed[k])) {
            normalized[k] = parsed[k];
          } else if (parsed[k]) {
            normalized[k] = [parsed[k]];
          }
        });
        setEvidences(normalized);
      } else {
        // Pre-load default samples with multiple files
        loadDefaultSampleEvidences();
      }
    } catch (e) {
      console.error("Error loading saved evidences:", e);
      loadDefaultSampleEvidences();
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever evidences change
  const saveEvidences = (newEvidences: Record<string, ActivityEvidence[]>) => {
    setEvidences(newEvidences);
    try {
      localStorage.setItem(
        "upla_portfolio_evidences_v2",
        JSON.stringify(newEvidences)
      );
    } catch (e) {
      console.warn("Storage quota limit reached or localStorage disabled:", e);
    }
  };

  // Upload one or multiple files for an activity
  const handleUploadEvidences = (activityId: string, files: File[]) => {
    if (!files || files.length === 0) return;

    const readPromises = files.map((file) => {
      return new Promise<ActivityEvidence>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileUrl = e.target?.result as string;
          resolve({
            id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            size: file.size,
            type: file.type || "application/octet-stream",
            uploadedAt: new Date().toLocaleDateString("es-PE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            fileUrl: fileUrl,
            status: "subido",
          });
        };
        // For very large files, avoid reading full base64 if exceeding storage
        if (file.size > 8 * 1024 * 1024) {
          resolve({
            id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            size: file.size,
            type: file.type || "application/octet-stream",
            uploadedAt: new Date().toLocaleDateString("es-PE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            status: "subido",
          });
        } else {
          reader.readAsDataURL(file);
        }
      });
    });

    Promise.all(readPromises).then((newItems) => {
      const current = evidences[activityId] || [];
      const updated = {
        ...evidences,
        [activityId]: [...current, ...newItems],
      };
      saveEvidences(updated);
    });
  };

  // Remove a specific file from an activity
  const handleRemoveEvidence = (activityId: string, evidenceId: string) => {
    const current = evidences[activityId] || [];
    const filtered = current.filter((item) => item.id !== evidenceId);
    const updated = { ...evidences };
    if (filtered.length === 0) {
      delete updated[activityId];
    } else {
      updated[activityId] = filtered;
    }
    saveEvidences(updated);
  };

  // Clear all files from a specific activity
  const handleClearActivityEvidences = (activityId: string) => {
    const updated = { ...evidences };
    delete updated[activityId];
    saveEvidences(updated);
  };

  const handleResetAllEvidences = () => {
    if (
      confirm(
        "¿Estás seguro de que deseas limpiar todas las evidencias cargadas en este navegador?"
      )
    ) {
      saveEvidences({});
    }
  };

  const loadDefaultSampleEvidences = () => {
    const samples: Record<string, ActivityEvidence[]> = {
      "act-u1-s1-1": [
        {
          id: "ev-demo-1a",
          name: "Cuadro_Comparativo_Arquitecturas_DBMS_JorgeCuro.pdf",
          size: 1450200,
          type: "application/pdf",
          uploadedAt: "04 Sep 2026, 10:15",
          status: "subido",
        },
        {
          id: "ev-demo-1b",
          name: "Diagrama_Arquitectura_Cliente_Servidor.png",
          size: 780000,
          type: "image/png",
          uploadedAt: "04 Sep 2026, 11:20",
          status: "subido",
        },
      ],
      "act-u1-s1-2": [
        {
          id: "ev-demo-2",
          name: "Evolucion_Historica_SGBD_Relacionales.pdf",
          size: 890400,
          type: "application/pdf",
          uploadedAt: "08 Sep 2026, 18:30",
          status: "subido",
        },
      ],
      "act-u1-s2-1": [
        {
          id: "ev-demo-3a",
          name: "Manual_Instalacion_MSSQLServer2022_UPLA.docx",
          size: 3410000,
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          uploadedAt: "12 Sep 2026, 16:45",
          status: "subido",
        },
        {
          id: "ev-demo-3b",
          name: "Capturas_Verificacion_Servicio_MSSQL.zip",
          size: 2150000,
          type: "application/zip",
          uploadedAt: "12 Sep 2026, 17:10",
          status: "subido",
        },
      ],
      "act-u1-s2-2": [
        {
          id: "ev-demo-4",
          name: "Reglamento_Grados_Titulos_UPLA_Analisis.pdf",
          size: 1120000,
          type: "application/pdf",
          uploadedAt: "15 Sep 2026, 20:10",
          status: "subido",
        },
      ],
      "act-u1-s3-1": [
        {
          id: "ev-demo-5a",
          name: "Diagrama_ER_Cadena_Editorial_JorgeCuro.png",
          size: 2040000,
          type: "image/png",
          uploadedAt: "20 Sep 2026, 11:20",
          status: "subido",
        },
        {
          id: "ev-demo-5b",
          name: "Diccionario_Datos_Cadena_Editorial.pdf",
          size: 920000,
          type: "application/pdf",
          uploadedAt: "20 Sep 2026, 11:45",
          status: "subido",
        },
      ],
      "act-u1-s3-2": [
        {
          id: "ev-demo-6",
          name: "Modelo_Fisico_Empresa_Material_Informatico.sql",
          size: 45600,
          type: "application/sql",
          uploadedAt: "24 Sep 2026, 15:00",
          status: "subido",
        },
      ],
      "act-u1-s4-2": [
        {
          id: "ev-demo-7a",
          name: "Script_DDL_DML_Cadena_Editorial.sql",
          size: 88200,
          type: "application/sql",
          uploadedAt: "28 Sep 2026, 19:40",
          status: "subido",
        },
        {
          id: "ev-demo-7b",
          name: "Reporte_Ejecucion_Consultas_SSMS.pdf",
          size: 1250000,
          type: "application/pdf",
          uploadedAt: "28 Sep 2026, 20:05",
          status: "subido",
        },
      ],
    };
    saveEvidences(samples);
  };

  const totalActivitiesCount = units.reduce(
    (acc, u) => acc + u.weeks.reduce((wAcc, w) => wAcc + w.activities.length, 0),
    0
  );

  // Activities that have at least 1 file
  const completedActivitiesCount = Object.keys(evidences).filter(
    (k) => evidences[k] && evidences[k].length > 0
  ).length;

  // Total files count across all activities
  const totalFilesCount = Object.values(evidences).reduce(
    (acc, list) => acc + (list ? list.length : 0),
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Navbar with tabs and theme switcher */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        completedCount={completedActivitiesCount}
        totalCount={totalActivitiesCount}
      />

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activeTab === "presentacion" && (
          <Presentacion
            onNavigate={setActiveTab}
            completedActivitiesCount={completedActivitiesCount}
            totalActivitiesCount={totalActivitiesCount}
          />
        )}

        {activeTab === "informacion" && <Informacion />}

        {activeTab === "trabajos" && (
          <Trabajos
            units={units}
            evidences={evidences}
            onUploadEvidences={handleUploadEvidences}
            onRemoveEvidence={handleRemoveEvidence}
            onClearActivityEvidences={handleClearActivityEvidences}
          />
        )}

        {activeTab === "contacto" && <Contacto />}

        {activeTab === "admin" && (
          <AdminPanel
            units={units}
            evidences={evidences}
            onResetAllEvidences={handleResetAllEvidences}
            onLoadSampleEvidences={loadDefaultSampleEvidences}
          />
        )}
      </main>

      {/* Footer matching exact credits */}
      <Footer />
    </div>
  );
}
