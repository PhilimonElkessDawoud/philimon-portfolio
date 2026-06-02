import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ElementRef, ViewChild, ChangeDetectorRef, inject
} from '@angular/core';
import { SkillsService, Skill } from '../../services/skills';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-about',
  imports: [Icon, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  private skillsService = inject(SkillsService);
  private translate = inject(TranslateService);
  private cdr = inject(ChangeDetectorRef);

  skills: Skill[] = [];
  animatedValues: number[] = [];
  isVisible = false;

  readonly radius = 45;
  readonly circumference = 2 * Math.PI * this.radius;

  private observer!: IntersectionObserver;
  private animationId!: number;

  get cvUrl(): string {
    return this.translate.instant('home.cvLink');
  }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
    this.animatedValues = this.skills.map(() => 0);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.isVisible) {
          this.isVisible = true;
          this.cdr.markForCheck();
          this.cdr.detectChanges();
          setTimeout(() => this.animateSkills(), 100);
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.skillsSection.nativeElement);
  }

  animateSkills() {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.animatedValues = this.skills.map((skill) =>
        Math.round(eased * skill.percentage)
      );

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

  getStaggerDelay(index: number): string {
    return `${index * 0.1}s`;
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}