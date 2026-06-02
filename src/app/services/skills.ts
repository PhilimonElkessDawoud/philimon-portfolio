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
      { id: 0, name: "Angular", percentage: 90, iconKey: "Angular" },
      { id: 1, name: "React", percentage: 85, iconKey: "React" },
      { id: 2, name: "Java", percentage: 80, iconKey: "Java" },
      { id: 3, name: "Javascript", percentage: 95, iconKey: "Javascript" },
      { id: 4, name: "Typescript", percentage: 95, iconKey: "Typescript" },
      { id: 5, name: "Springboot", percentage: 90, iconKey: "Springboot" },
      { id: 6, name: ".NET", percentage: 85, iconKey: "Dotnet" },
      { id: 7, name: "NodeJS", percentage: 90, iconKey: "Nodejs" },
      { id: 8, name: "Kafka", percentage: 90, iconKey: "Kafka" },
      { id: 9, name: "gRpc", percentage: 95, iconKey: "Grpc" },
      { id: 10, name: "Docker", percentage: 95, iconKey: "Docker" },
      { id: 11, name: "Git", percentage: 85, iconKey: "Git" },
      { id: 12, name: "Microservices", percentage: 85, iconKey: "Microservices" },
      { id: 13, name: "MongoDb", percentage: 95, iconKey: "Mongodb" },
      { id: 14, name: "PostgreSQL", percentage: 95, iconKey: "Postgresql" },
      { id: 15, name: "Neo4j", percentage: 85, iconKey: "Neo4j" }
    ];
  }
}