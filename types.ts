// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// File metafield
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Service type
export interface Service extends CosmicObject {
  metadata: {
    title: string;
    description: string;
    content?: string;
    icon?: string;
    featured_image?: CosmicFile;
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: CosmicFile;
    linkedin_url?: string;
    email?: string;
  };
}

// Project type
export interface Project extends CosmicObject {
  metadata: {
    client: string;
    description: string;
    content?: string;
    featured_image?: CosmicFile;
    gallery?: CosmicFile[];
    service?: Service;
    team_lead?: TeamMember;
    website_url?: string;
  };
}

// Cosmic API response
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Cosmic single object response
export interface CosmicSingleResponse<T> {
  object: T;
}