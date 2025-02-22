export interface userDetailsType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: "student" | "teacher";
  admission_number?: string;
  grade_level?: string;
  date_of_birth?: string;
  employee_id?: string;
  department?: string;
}
