import { Component, OnDestroy, signal } from '@angular/core';
import { ToTimePipe } from '../../pipes/to-time-pipe';

@Component({
  selector: 'app-exo-3',
  imports: [ToTimePipe],
  templateUrl: './exo-3.html',
  styleUrl: './exo-3.scss',
})
export class Exo3 implements OnDestroy {
  elapsed = signal(0);
  state = signal<'stopped' | 'running' | 'paused'>('stopped');
  private intervalId?: ReturnType<typeof setInterval>;

  start() {
    this.state.set('running');
    this.intervalId = setInterval(() => {
      this.elapsed.update((s) => s + 1);
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.state.set('paused');
  }

  reset() {
    clearInterval(this.intervalId);
    this.elapsed.set(0);
    this.state.set('stopped');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
