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

import { ExperienceService, ExperienceError, Experience, ExperienceField } from '../src';

describe('SDK Exports', () => {
  it('should export ExperienceService', () => {
    expect(ExperienceService).toBeDefined();
    expect(typeof ExperienceService.getExperiences).toBe('function');
  });

  it('should export ExperienceError', () => {
    const error = new ExperienceError('test');
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('ExperienceError');
  });

  it('should export Experience types', () => {
    const field: ExperienceField = {
      fieldName: 'test',
      fieldValue: 'test'
    };
    
    const experience: Experience = {
      id: 'test',
      experienceFields: { test: field }
    };

    expect(experience.id).toBe('test');
    expect(experience.experienceFields.test).toEqual(field);
  });
}); 