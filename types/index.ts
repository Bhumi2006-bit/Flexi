export type EvidenceStatus =
  | "Unverified"
  | "Corroborated"
  | "Confirmed by an authoritative source"
  | "Disputed";

export type ScamCategory =
  | "Phishing and Account Theft"
  | "Fake Job and Recruitment Scams"
  | "Investment and Cryptocurrency Fraud"
  | "Digital Arrest and Impersonation Scams"
  | "UPI and Payment Fraud"
  | "Fake Shopping and Ticket Scams"
  | "Romance and Sextortion Scams"
  | "AI Voice Cloning and Deepfake Scams";

export type SourceType = "Official" | "Media" | "Community" | "Research";

export type CountryCode = "IN" | "US" | "GB" | "AE" | "SG" | "BD";

export type IncidentSource = {
  id: string;
  name: string;
  title: string;
  url: string;
  publicationDate: string;
  summary: string;
  type: SourceType;
};

export type ScamIncident = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: ScamCategory;
  country: string;
  region: string;
  firstSeen: string;
  lastUpdated: string;
  evidenceStatus: EvidenceStatus;
  sourceCount: number;
  indicators: string[];
  relatedIncidentIds: string[];
  sources: IncidentSource[];
  description: string;
  modusOperandi: string[];
};

export type EncyclopediaEntry = {
  id: string;
  slug: string;
  title: string;
  category: ScamCategory;
  summary: string;
  excerpt: string;
  lastReviewed: string;
  references: { name: string; url: string }[];
  sections: {
    heading: string;
    body: string;
  }[];
};

export type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
};

export type PatternEntry = {
  id: string;
  title: string;
  category: ScamCategory;
  summary: string;
  addedAt: string;
};

export type LinkCheckResult = {
  status: "known-malicious" | "suspicious" | "no-match" | "unable-to-check";
  label: string;
  explanation: string;
  sources: { name: string; summary: string }[];
};
