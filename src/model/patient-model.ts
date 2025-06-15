import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AnamnesisModel } from "./anamnesis-model";

@Entity("patient")
export class PatientModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @OneToOne(() => AnamnesisModel, { nullable: true, eager: true })
  @JoinColumn({ name: "anamnesis_id" })
  anamnesis?: AnamnesisModel;

  @Column({ type: "json", nullable: true })
  protocols?: any[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt!: Date | null;
}
