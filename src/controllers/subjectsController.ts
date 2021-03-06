/* eslint-disable consistent-return */
import { Request, Response } from 'express';

import * as subjectsService from '../services/subjectsService';

export async function getSubjects(req: Request, res: Response) {
  try {
    const subjects = await subjectsService.getSubjects();
    return res.send(subjects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
