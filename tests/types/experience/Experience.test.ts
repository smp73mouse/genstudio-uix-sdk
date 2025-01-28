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

import { Experience, ExperienceField, FieldRole } from '../../../src/types/experience/Experience';

describe('Experience Types', () => {
  it("should define FieldRole", () => {
    const fieldRole: FieldRole = {
      name: "subject",
    };
    expect(fieldRole).toBeDefined();
    expect(fieldRole.name).toBe("subject");
  });

  it("should define ExperienceField with fieldValue as a string", () => {
    const experienceField: ExperienceField = {
      fieldRole: {
        name: "subject",
      },
      fieldName: "subject",
      fieldValue: "test field value",
      readonly: true,
    };
    expect(experienceField).toBeDefined();
    expect(experienceField.fieldRole.name).toBe("subject");
    expect(experienceField.fieldName).toBe("subject");
    expect(experienceField.fieldValue).toBe("test field value");
  });

  it("should define ExperienceField with fieldValue as an object", () => {
    const experienceField: ExperienceField = {
      fieldRole: {
        name: "subject",
      },
      fieldName: "subject",
      fieldValue: {
        key: "value",
      },
      readonly: true,
    };
    expect(experienceField).toBeDefined();
    expect(experienceField.fieldRole.name).toBe("subject");
    expect(experienceField.fieldName).toBe("subject");
    expect(experienceField.fieldValue).toEqual({ key: "value" });
  });

  it("should define Experience", () => {
    const experienceFields: Record<string, ExperienceField> = {
      subject: {
        fieldRole: {
          name: "subject",
        },
        fieldName: "subject",
        fieldValue: "test field value",
        readonly: false,
      },
      section2_image: {
        fieldRole: {
          name: "image",
        },
        fieldName: "section2_image",
        fieldValue: {
          test: "1",
        },
        readonly: true,
      },
    }
    const experience: Experience = {
      id: "230853274642",
      experienceFields: experienceFields,
    };
    expect(experience).toBeDefined();
    expect(experience.id).toBe("230853274642");
    expect(experience.experienceFields).toBeInstanceOf(Object);
    expect(Object.keys(experience.experienceFields).length).toBe(2);
    expect(experience.experienceFields.subject).toBeDefined();
    expect(experience.experienceFields.subject?.fieldRole.name).toBe(
      "subject"
    );
    expect(experience.experienceFields.subject?.fieldName).toBe(
      "subject"
    );
    expect(experience.experienceFields.subject?.fieldValue).toBe(
      "test field value"
    );
    expect(experience.experienceFields.section2_image).toBeDefined();
    expect(
      experience.experienceFields.section2_image?.fieldRole.name
    ).toBe("image");
    expect(experience.experienceFields.section2_image?.fieldName).toBe(
      "section2_image"
    );
    expect(
      experience.experienceFields.section2_image?.fieldValue
    ).toEqual({
      test: "1",
    });
  });
});