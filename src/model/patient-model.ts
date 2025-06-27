import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AnamnesisModel } from "./anamnesis-model";
import { AccountModel } from "./account-model";

@Entity("patient")
export class PatientModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => AccountModel)
  @JoinColumn()
  userId?: AccountModel;

  @Column()
  name!: string;

  @Column()
  age!: number;

  @Column()
  schoolYear!: string;

  @Column()
  dateOfBirth!: Date;

  @Column()
  gender!: string;

  @Column()
  address!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  motherName!: string;

  @Column()
  fatherName?: string;

  @OneToOne(() => AnamnesisModel, { nullable: true })
  @JoinColumn()
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
