import type { SeanceModel } from './SeanceModel';

export interface ProgrammeModel {
  name: string;
  seances?: SeanceModel[];
}
