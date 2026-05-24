import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { AboutService, about } from '../../services/about';
import { SkillsService, Skill } from '../../services/skills';
import { Icon } from '../../shared//icon/icon';

@Component({
  selector: 'app-about',
  imports: [Icon],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  about!: about;
  skills: Skill[] = [];
  isVisible = false;
  animatedValues: number[] = [];

  private observer!: IntersectionObserver;

  constructor(
    private aboutService: AboutService,
    private skillsService: SkillsService
  ) { }

  ngOnInit() {
    this.about = this.aboutService.getAbout();
    this.skills = this.skillsService.getSkills();
    this.animatedValues = this.skills.map(() => 0);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.animateSkills();
          this.observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    this.observer.observe(this.skillsSection.nativeElement);
  }

  animateSkills() {
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.skills.forEach((skill, i) => {
        this.animatedValues[i] = Math.round(eased * skill.percentage);
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  getCircleDashoffset(index: number): number {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    return circumference - (this.animatedValues[index] / 100) * circumference;
  }

  getDelayStyle(index: number): string {
    return `${(index + 1) * 0.1}s`;
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
