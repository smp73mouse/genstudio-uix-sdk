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

/* this file defines types and interfaces that are considered as Experience api for extension consumers */

/** Experience */
/**
 * Represents the role of a field within an experience.
 */
export type FieldRole = {
    /** The name of the field role. */
    name: string;
};

export type ExperienceField = {
    fieldRole: FieldRole;
    fieldName: string;
    fieldValue: string | Object;
    readonly: boolean;
};

export type Experience = {
    id: string;
    experienceFields: { [key: string]: ExperienceField };
};