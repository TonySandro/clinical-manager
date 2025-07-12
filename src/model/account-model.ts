export class AccountModel {
  id!: string;
  name: string;
  email: string;
  accessToken: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
