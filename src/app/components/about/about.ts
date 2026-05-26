import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { AboutService, about } from '../../services/about';
import { SkillsService, Skill } from '../../services/skills';
import { Icon } from '../../shared//icon/icon';

@Component({
  selector: 'app-about',
  imports: [Icon],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  private aboutService = inject(AboutService);
  private skillsService = inject(SkillsService);
  private cdr = inject(ChangeDetectorRef);

  about!: about;
  skills: Skill[] = [];
  animatedValues: number[] = [];
  isVisible = false;

  readonly radius = 45;
  readonly circumference = 2 * Math.PI * this.radius;

  private observer!: IntersectionObserver;
  private animationId!: number;

  ngOnInit() {
    this.about = this.aboutService.getAbout();
    this.skills = this.skillsService.getSkills();
    this.animatedValues = this.skills.map(() => 0);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.isVisible) {
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

      // Add this temporarily
      console.log('animatedValues:', [...this.animatedValues]);
      console.log('last value:', this.animatedValues[this.skills.length - 1]);

      this.cdr.markForCheck();
      this.cdr.detectChanges();

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  getDashoffset(index: number): number {
    const percent = this.animatedValues[index] ?? 0;
    return this.circumference - (percent / 100) * this.circumference;
  }

  getDelayStyle(index: number): string {
    return `${(index + 1) * 0.1}s`;
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}