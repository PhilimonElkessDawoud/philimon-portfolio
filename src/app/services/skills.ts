import { Injectable } from '@angular/core';

export interface Skill {
  id: number;
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
      { id: 1, name: "Angular", percentage: 90, iconKey: "Angular" },
      { id: 2, name: "React", percentage: 85, iconKey: "React" },
      { id: 3, name: "Java", percentage: 80, iconKey: "Java" },
      { id: 4, name: "Javascript", percentage: 95, iconKey: "Javascript" },
      { id: 5, name: "Typescript", percentage: 95, iconKey: "Typescript" },
      { id: 6, name: "Springboot", percentage: 90, iconKey: "Springboot" },
      { id: 7, name: "Kafka", percentage: 90, iconKey: "Kafka" },
      { id: 8, name: "gRpc", percentage: 95, iconKey: "Grpc" },
      { id: 9, name: "Docker", percentage: 95, iconKey: "Docker" },
      { id: 10, name: "Git", percentage: 85, iconKey: "Git" },
      { id: 11, name: "Microservices", percentage: 85, iconKey: "Microservices" },
      { id: 12, name: "MongoDb", percentage: 95, iconKey: "Mongodb" },
      { id: 13, name: "PostgreSQL", percentage: 95, iconKey: "Postgresql" },
      { id: 14, name: "Neo4j", percentage: 85, iconKey: "Neo4j" }
    ];
  }
}