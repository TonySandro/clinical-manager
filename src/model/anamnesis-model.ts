import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { PatientModel } from "./patient-model";

@Entity("anamneses")
export class AnamnesisModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => PatientModel, { nullable: false })
  @JoinColumn({ name: "patient_id" })
  patient!: PatientModel;

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
