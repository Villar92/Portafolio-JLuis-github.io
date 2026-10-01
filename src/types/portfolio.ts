export interface ActivityEvidence {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  fileUrl?: string;
  grade?: number;
  status: "subido" | "pendiente" | "evaluado";
  feedback?: string;
}

export interface Activity {
  id: string;
  code: string;
  title: string;
  description?: string;
  evidences?: ActivityEvidence[];
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  description?: string;
  activities: Activity[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  description: string;
  weeks: Week[];
}

export interface StudentInfo {
  name: string;
  code: string;
  university: string;
  universityAcronym: string;
  career: string;
  subject: string;
  teacher: string;
  location: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  semester: string;
  academicYear: string;
}
