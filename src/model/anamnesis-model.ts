import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("anamneses")
export class AnamnesisModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  patientName!: string;

  @Column()
  age!: number;

  @Column()
  schoolYear!: string;

  @Column()
  reasonForReferral?: string;

  @Column()
  developmentalHistory?: string;

  @Column()
  schoolHistory?: string;

  @Column()
  familyHistory?: string;

  @Column()
  healthHistory?: string;

  @CreateDateColumn()
  createdAt!: Date;
}
