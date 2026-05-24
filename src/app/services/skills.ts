import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  percentage: number;
  iconKey: string;
}

@Injectable({
  providedIn: 'root',
})

export class SkillsService {
  getSkills(): Skill[] {
    return [
      { name: "Angular", percentage: 90, iconKey: "Angular" },
      { name: "React", percentage: 85, iconKey: "React" },
      { name: "Java", percentage: 80, iconKey: "Java" },
      { name: "Javascript", percentage: 95, iconKey: "Javascript" },
      { name: "Typescript", percentage: 95, iconKey: "Typescript" },
      { name: "Springboot", percentage: 90, iconKey: "Sprinboot" },
      { name: "Kafka", percentage: 90, iconKey: "Kafka" },
      { name: "gRpc", percentage: 95, iconKey: "Grpc" },
      { name: "Docker", percentage: 95, iconKey: "Docker" },
      { name: "Git", percentage: 85, iconKey: "Git" },
      { name: "Microservices", percentage: 85, iconKey: "Microservices" },
      { name: "MongoDb", percentage: 95, iconKey: "Mongodb" },
      { name: "PostgreSQL", percentage: 95, iconKey: "Postgresql" },
      { name: "Neo4j", percentage: 85, iconKey: "Neo4j" }
    ];
  }
}