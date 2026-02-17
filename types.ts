
export enum ViewState {
  OVERVIEW = 'OVERVIEW',
  ZOOMED = 'ZOOMED'
}

export interface HotspotData {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  label: string;
  description: string;
  targetSceneId?: string; // ID of the scene to navigate to
}

export interface NarrativeBlock {
  id: string;
  title?: string;
  text: string;
}

export interface SceneConfig {
  id: string;
  name: string;
  description: string;
  image: string;
  hotspots: HotspotData[];
  narrative: NarrativeBlock[];
  article?: string;
  details?: string[]; 
  detailFocus?: {
    scale: number;
    position: string;
  };
}
