/*
Copyright 2025 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { Experience, ExperienceField } from './Experience';

import { GuestUI } from '@adobe/uix-guest';
import { VirtualApi } from '@adobe/uix-core';

export interface RightPanelApi extends VirtualApi {
  api: {
    createRightPanel: {
      getExperiences: () => Promise<any[]>;
    };
  };
}

export class ExperienceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ExperienceError';
  }
}

/**
 * Manages experience data conversion and retrieval
 */
export class ExperienceManager {

  /**
   * Fetches experiences from the connection
   * @param connection - The guest connection to the host
   * @returns Promise<Experience[]> Array of converted experiences
   * @throws Error if connection is missing
   */
  static async getExperiences(connection : GuestUI<RightPanelApi>): Promise<Experience[]> {
    if (!connection) {
      throw new ExperienceError('Connection is required to get experiences');
    }

    try {
      //TODO: getExperiences will change to return the actual Experiences object
      // should handle it here and deprecate the old one once released to production
      // @ts-ignore Remote API is handled through postMessage
      const rawExperiences = await connection.host.api.createRightPanel.getExperiences();
      return this.convertRawExperiencesToExperiences(rawExperiences);
    } catch (error) {
      throw new ExperienceError('Failed to fetch experiences from host');
    }
  }

  /**
   * Converts a raw experience object to Experience format
   * @param rawExperience - Raw experience data from the host
   * @returns Experience - Converted Experience object
   */
  static convertRawExperienceToExperience(rawExperience: {
    id?: string;
    fields: { [key: string]: any };
  }): Experience {
    const experienceFields = new Map<string, ExperienceField>();

    // Convert each field in the raw experience to SDK ExperienceField format
    Object.entries(rawExperience.fields).forEach(([key, value]) => {
        let fieldValue = '';
        if (value !== null && value !== undefined) {
            fieldValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
        }

        const field: ExperienceField = {
            fieldName: key,
            fieldValue,   
            fieldRole: {
                name: key
            },
            readonly: false
        };
        experienceFields.set(key, field); 
    });

    // Convert Map to plain object before creating Experience
    const experience: Experience = {
      id: rawExperience.id ?? '',
      experienceFields: Object.fromEntries(experienceFields)
    };

    return experience;
  }

  /**
   * Converts an array of raw experiences to Experience format
   * @param rawExperiences - Array of raw experience data
   * @returns Experience[] - Array of converted Experience objects
   */
  static convertRawExperiencesToExperiences(rawExperiences: any[]): Experience[] {
    return rawExperiences.map(exp => this.convertRawExperienceToExperience(exp));
  }
}
