import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "taskName";

export const TaskTitle = (record: TTask): string => {
  return record.taskName || record.id;
};
