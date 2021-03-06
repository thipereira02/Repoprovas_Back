import { getRepository } from "typeorm";

import SubjectsTeachers from "../entities/SubjectsTeachers";

export async function getTeachersBySubjects (subjectId: number) {
  const teachers = await getRepository(SubjectsTeachers)
    .find({
      where: {subjectId},
      relations: ["teacher"]
    });
  
  return teachers.map(t => t.teacher);
}
