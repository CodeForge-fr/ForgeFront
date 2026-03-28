export interface IEducation {
  id: number | null | undefined;
  institution?: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface profileType {
  userId: number;
  gender: string;
  dateOfBirth: string;
  education: {
    institution?: string;
    degree?: string;
  }[];
  skill: string[];
  phone: string;
  email: string;
  address: string;
  nickname: string;
}
