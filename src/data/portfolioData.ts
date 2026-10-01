import { StudentInfo, Unit } from "@/types/portfolio";

export const STUDENT_INFO: StudentInfo = {
  name: "Jorge Luis Curo Villar",
  code: "H14203C",
  university: "Universidad Peruana Los Andes",
  universityAcronym: "UPLA",
  career: "Ingeniería de Sistemas y Computación",
  subject: "Base de datos II",
  teacher: "Raul Enrique Fenandez Bejarano",
  location: "Huancayo, Perú",
  phone: "901040184",
  whatsappUrl: "https://wa.me/51901040184?text=Hola%20Jorge%20Luis%2C%20me%20comunico%20desde%20tu%20Portafolio%20Acad%C3%A9mico%20de%20Base%20de%20Datos%20II%20-%20UPLA",
  email: "h14203c@upla.edu.pe",
  semester: "2026-II",
  academicYear: "2026",
};

export const INITIAL_UNITS: Unit[] = [
  {
    id: "unidad-1",
    unitNumber: 1,
    romanNumeral: "UNIDAD I",
    title: "TEORÍA DE APOYO",
    subtitle: "Introducción a la administración de base de datos",
    description: "Identifica las arquitecturas de base de datos mediante su capacidad de implementación en gestores DBMS vigentes para determinar cómo almacenar, organizar e integrar los datos.",
    weeks: [
      {
        id: "semana-01",
        weekNumber: 1,
        title: "SEMANA 01: Formulación del Proyecto y Selección de la Arquitectura",
        description: "Análisis conceptual de arquitecturas de bases de datos centralizadas, cliente-servidor y distribuidas.",
        activities: [
          {
            id: "act-u1-s1-1",
            code: "ACT-01",
            title: "Actividad 1: Arquitecturas",
            description: "Investigación y cuadro comparativo de arquitecturas DBMS monolíticas, cliente-servidor de 2 y 3 capas, y computación en la nube.",
          },
          {
            id: "act-u1-s1-2",
            code: "ACT-02",
            title: "Actividad 2: Características y evolución de los SGBD",
            description: "Línea de tiempo y análisis evolutivo de los Sistemas Gestores de Base de Datos relacionales y no relacionales.",
          },
        ],
      },
      {
        id: "semana-02",
        weekNumber: 2,
        title: "SEMANA 02: Despliegue y Configuración de Motores de Datos",
        description: "Instalación y parametrización de instancias empresariales de base de datos en entornos Windows Server.",
        activities: [
          {
            id: "act-u1-s2-1",
            code: "ACT-03",
            title: "Actividad 1: Manual de instalación de MS-SQL Server",
            description: "Guía paso a paso ilustrada de instalación y configuración de componentes de Microsoft SQL Server y SSMS.",
          },
          {
            id: "act-u1-s2-2",
            code: "ACT-04",
            title: "Actividad 2: Reglamento de Grados y Títulos",
            description: "Análisis del marco normativo universitario UPLA aplicado al modelado de datos para titulación.",
          },
          {
            id: "act-u1-s2-3",
            code: "ACT-05",
            title: "Actividad 3: Sistemas de Gestión de Bases de Datos",
            description: "Resumen técnico comparativo de capacidades de SQL Server, PostgreSQL y Oracle Database.",
          },
        ],
      },
      {
        id: "semana-03",
        weekNumber: 3,
        title: "SEMANA 03: Modelamiento Físico y Mecanismos de Integración",
        description: "Transformación de modelos lógicos a esquemas físicos normalizados e integración de reglas de negocio.",
        activities: [
          {
            id: "act-u1-s3-1",
            code: "ACT-06",
            title: "Actividad 1: Cadena Editorial",
            description: "Diagrama Entidad-Relación y diccionario de datos para la gestión y publicación de editoriales.",
          },
          {
            id: "act-u1-s3-2",
            code: "ACT-07",
            title: "Actividad 2: Empresa de Material Informático",
            description: "Modelo relacional físico para control de inventario, proveedores y facturación informática.",
          },
          {
            id: "act-u1-s3-3",
            code: "ACT-08",
            title: "Actividad 3: Grados y Títulos",
            description: "Modelado relacional y normalización (3FN) para la base de datos de expedientes académicos.",
          },
          {
            id: "act-u1-s3-4",
            code: "ACT-09",
            title: "Actividad 4: Infografías de Base de Datos",
            description: "Material visual esquemático sobre integridad referencial, transacciones ACID y arquitectura física.",
          },
        ],
      },
      {
        id: "semana-04",
        weekNumber: 4,
        title: "SEMANA 04: Sustentación y Validación de la Infraestructura de Datos",
        description: "Evaluación práctica de consultas, integridad y validación de scripts DDL/DML.",
        activities: [
          {
            id: "act-u1-s4-1",
            code: "ACT-10",
            title: "Actividad 1: Cuestionario Resuelto",
            description: "Resolución argumentada del banco de preguntas teóricas y prácticas de la Unidad I.",
          },
          {
            id: "act-u1-s4-2",
            code: "ACT-11",
            title: "Actividad 2: Script Cadena Editorial",
            description: "Código Transact-SQL para creación de base de datos, tablas, constraints y datos de prueba.",
          },
        ],
      },
    ],
  },
  {
    id: "unidad-2",
    unitNumber: 2,
    romanNumeral: "UNIDAD II",
    title: "ADMINISTRACIÓN DE INSTANCIAS Y ALMACENAMIENTO",
    subtitle: "Estructuras de Almacenamiento y Gestión de Datos Masivos",
    description: "Asignación de memoria, archivos primarios y secundarios (.MDF, .NDF, .LDF), indexación y pruebas de carga masiva.",
    weeks: [
      {
        id: "semana-05",
        weekNumber: 5,
        title: "SEMANA 05: Asignación de Memoria y Parametrización de Instancia",
        description: "Ajuste de memoria mínima y máxima en SQL Server, tempdb allocation y planes de ejecución.",
        activities: [
          {
            id: "act-u2-s5-1",
            code: "ACT-12",
            title: "Actividad 1: Configuración de Buffer Cache y Memoria Máxima",
            description: "Optimización de memoria en servidor y cálculo de límite por sistema operativo.",
          },
          {
            id: "act-u2-s5-2",
            code: "ACT-13",
            title: "Actividad 2: Distribución de Archivos de TempDB",
            description: "Configuración de múltiples archivos de datos para tempdb reduciendo contención PAGELATCH.",
          },
        ],
      },
      {
        id: "semana-06",
        weekNumber: 6,
        title: "SEMANA 06: Gestión de Archivos .MDF, .NDF y .LDF",
        description: "Estrategias de distribución física de Filegroups en discos separados de alta velocidad.",
        activities: [
          {
            id: "act-u2-s6-1",
            code: "ACT-14",
            title: "Actividad 1: Creación y Segmentación de Filegroups Primarios y Secundarios",
            description: "Script DDL para distribución física de tablas pesadas en grupos de archivos dedicados.",
          },
          {
            id: "act-u2-s6-2",
            code: "ACT-15",
            title: "Actividad 2: Administración del Transaction Log (.LDF)",
            description: "Control del crecimiento automático (Autogrowth) y prevención de saturación de disco.",
          },
        ],
      },
      {
        id: "semana-07",
        weekNumber: 7,
        title: "SEMANA 07: Indexación Avanzada y Fragmentación",
        description: "Diseño de índices B-Tree agrupados, no agrupados, filtrados y columnas incluidas.",
        activities: [
          {
            id: "act-u2-s7-1",
            code: "ACT-16",
            title: "Actividad 1: Implementación de Índices Clustered y Non-Clustered",
            description: "Benchmark de rendimiento de consultas con y sin índices adecuados.",
          },
          {
            id: "act-u2-s7-2",
            code: "ACT-17",
            title: "Actividad 2: Mantenimiento y Reorganización vs Reconstrucción de Índices",
            description: "Script de análisis de fragmentación mediante sys.dm_db_index_physical_stats.",
          },
        ],
      },
      {
        id: "semana-08",
        weekNumber: 8,
        title: "SEMANA 08: Inserción Masiva y Pruebas de Carga",
        description: "Técnicas de Bulk Insert, utilitario bcp y particionamiento de tablas para millones de registros.",
        activities: [
          {
            id: "act-u2-s8-1",
            code: "ACT-18",
            title: "Actividad 1: Carga Masiva con BULK INSERT y archivos CSV",
            description: "Importación de 100,000+ registros con control de errores y batch sizing.",
          },
          {
            id: "act-u2-s8-2",
            code: "ACT-19",
            title: "Actividad 2: Evaluación Práctica de la Unidad II",
            description: "Informe de rendimiento y sustentación de pruebas de estrés sobre la base de datos.",
          },
        ],
      },
    ],
  },
  {
    id: "unidad-3",
    unitNumber: 3,
    romanNumeral: "UNIDAD III",
    title: "SEGURIDAD Y ALTA DISPONIBILIDAD",
    subtitle: "Seguridad Corporativa, Conectividad de Red y Alta Disponibilidad de Datos",
    description: "Configuración de autenticación mixta, roles, esquemas, cifrado TDE, conectividad de red y réplica de datos.",
    weeks: [
      {
        id: "semana-09",
        weekNumber: 9,
        title: "SEMANA 09: Autenticación, Logins y Mapeo de Usuarios",
        description: "Principio de menor privilegio, autenticación de Windows vs SQL Server y políticas de contraseña.",
        activities: [
          {
            id: "act-u3-s9-1",
            code: "ACT-20",
            title: "Actividad 1: Creación de Logins y Usuarios con Permisos Granulares",
            description: "Scripts de asignación de permisos SELECT, INSERT, UPDATE a nivel de tabla y columna.",
          },
        ],
      },
      {
        id: "semana-10",
        weekNumber: 10,
        title: "SEMANA 10: Roles de Base de Datos y Cifrado Transparente (TDE)",
        description: "Protección de datos en reposo y separación de privilegios mediante roles de aplicación.",
        activities: [
          {
            id: "act-u3-s10-1",
            code: "ACT-21",
            title: "Actividad 1: Configuración de Transparent Data Encryption (TDE)",
            description: "Creación de Master Key, Certificado del Servidor y cifrado del archivo de base de datos.",
          },
        ],
      },
      {
        id: "semana-11",
        weekNumber: 11,
        title: "SEMANA 11: Conectividad de Red y SQL Server Configuration Manager",
        description: "Habilitación de protocolo TCP/IP, configuración del puerto estático 1433 y reglas de Firewall.",
        activities: [
          {
            id: "act-u3-s11-1",
            code: "ACT-22",
            title: "Actividad 1: Conexión Remota Segura entre Servidor y Clientes",
            description: "Configuración y pruebas de ping / telnet / ODBC sobre máquina virtual en red local.",
          },
        ],
      },
      {
        id: "semana-12",
        weekNumber: 12,
        title: "SEMANA 12: Estrategias de Replicación y Alta Disponibilidad",
        description: "Estudio comparativo de Log Shipping, Database Mirroring y Always On Availability Groups.",
        activities: [
          {
            id: "act-u3-s12-1",
            code: "ACT-23",
            title: "Actividad 1: Implementación de Escenario de Contingencia y Replicación",
            description: "Diseño de topología de alta disponibilidad con failover automático ante caídas.",
          },
        ],
      },
    ],
  },
  {
    id: "unidad-4",
    unitNumber: 4,
    romanNumeral: "UNIDAD IV",
    title: "MONITOREO, OPTIMIZACIÓN Y RECUPERACIÓN",
    subtitle: "Monitoreo de Servidores, Optimización del Desempeño y Recuperación ante Desastres",
    description: "Monitoreo continuo, diagnóstico con DMVs, extended events, respaldos completos/diferenciales y recuperación ante caídas.",
    weeks: [
      {
        id: "semana-13",
        weekNumber: 13,
        title: "SEMANA 13: Monitoreo con Extended Events y Activity Monitor",
        description: "Captura de queries lentas, bloqueos y deadlocks sin impactar el rendimiento del motor.",
        activities: [
          {
            id: "act-u4-s13-1",
            code: "ACT-24",
            title: "Actividad 1: Sesión de Monitoreo con Extended Events",
            description: "Detección de consultas con tiempo de CPU excesivo y generación de alertas.",
          },
        ],
      },
      {
        id: "semana-14",
        weekNumber: 14,
        title: "SEMANA 14: Análisis de Planes de Ejecución y DMVs",
        description: "Lectura de Graphical Execution Plans, Table Scans vs Index Seeks, y Missing Index Warnings.",
        activities: [
          {
            id: "act-u4-s14-1",
            code: "ACT-25",
            title: "Actividad 1: Diagnóstico de Consultas Críticas con sys.dm_exec_query_stats",
            description: "Optimización de consultas con costos elevados y reducción de lecturas lógicas.",
          },
        ],
      },
      {
        id: "semana-15",
        weekNumber: 15,
        title: "SEMANA 15: Estrategias de Respaldo y Restauración (Disaster Recovery)",
        description: "Modelos de recuperación Full, Simple y Bulk-Logged. Automatización mediante SQL Server Agent.",
        activities: [
          {
            id: "act-u4-s15-1",
            code: "ACT-26",
            title: "Actividad 1: Plan de Backups Automatizados y Point-in-Time Recovery",
            description: "Ejecución de simulacro de corrupción y restauración de base de datos a un minuto exacto.",
          },
        ],
      },
      {
        id: "semana-16",
        weekNumber: 16,
        title: "SEMANA 16: Sustentación Final del Portafolio y Auditoría",
        description: "Presentación integral de la infraestructura implementada, entregables y documentación técnica.",
        activities: [
          {
            id: "act-u4-s16-1",
            code: "ACT-27",
            title: "Actividad 1: Sustentación Integral del Portafolio Académico",
            description: "Consolidación de evidencias de las 16 semanas y defensa técnica ante el docente evaluador.",
          },
        ],
      },
    ],
  },
];
