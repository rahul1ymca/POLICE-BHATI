export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export interface VerificationStep {
  id: number;
  stageHindi: string;
  title: string;
  department: string;
  timeTaken: string;
  description: string;
  keyPoints: string[];
  policeOfficerRole: string;
  candidateAdvice: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  copiesRequired: string;
  category: 'पहचान' | 'निवास' | 'चरित्र' | 'विधिक';
  isRequired: boolean;
  tip: string;
}

export interface StatePortalInfo {
  state: string;
  portalName: string;
  officialUrl: string;
  pvrService: string;
  avgDays: string;
  mobileApp?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'सामान्य' | 'कानूनी/FIR' | 'दस्तावेज' | 'थाना प्रक्रिया';
}

export interface ReadinessQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    score: number;
    tip: string;
  }[];
}
