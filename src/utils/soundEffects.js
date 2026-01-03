// 8-bit style sound effects using Web Audio API
export const play8BitSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillator for 8-bit beep
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // 8-bit retro sound parameters
    oscillator.frequency.value = 520; // Frequency in Hz
    oscillator.type = 'square'; // Square wave for retro sound
    
    // Volume
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    // Duration
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    console.log('Audio not available');
  }
};

// Alternative: Higher pitched "select" sound
export const playSelectSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Higher pitch
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    console.log('Audio not available');
  }
};

// 8-bit background music for landing page
export class RetroMusicPlayer {
  constructor() {
    this.audioContext = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNodes = [];
  }

  start() {
    if (this.isPlaying) return;
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.isPlaying = true;
      this.playMelody();
    } catch (error) {
      console.log('Audio context not available');
    }
  }

  stop() {
    this.isPlaying = false;
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Already stopped
      }
    });
    this.oscillators = [];
    this.gainNodes = [];
  }

  playNote(frequency, duration, delay = 0) {
    if (!this.audioContext || !this.isPlaying) return;

    setTimeout(() => {
      if (!this.isPlaying) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);

      this.oscillators.push(oscillator);
      this.gainNodes.push(gainNode);
    }, delay);
  }

  playMelody() {
    // F.I.R.E. ZX Spectrum inspired melody - dramatic and heroic
    // Frequencies for notes
    const notes = {
      C3: 131,
      D3: 147,
      E3: 165,
      F3: 175,
      G3: 196,
      A3: 220,
      B3: 247,
      C4: 262,
      D4: 294,
      E4: 330,
      F4: 349,
      G4: 392,
      A4: 440,
      B4: 494,
      C5: 523,
      D5: 587,
      E5: 659,
      F5: 698,
      G5: 784,
      A5: 880,
      B5: 988,
      C6: 1047,
    };

    // Dramatic F.I.R.E. style melody
    const melody = [
      // Heroic opening - ascending
      { freq: notes.C5, duration: 0.2, delay: 0 },
      { freq: notes.E5, duration: 0.2, delay: 200 },
      { freq: notes.G5, duration: 0.2, delay: 400 },
      { freq: notes.C6, duration: 0.4, delay: 600 },
      { freq: notes.B5, duration: 0.2, delay: 1000 },
      { freq: notes.A5, duration: 0.2, delay: 1200 },
      { freq: notes.G5, duration: 0.2, delay: 1400 },
      { freq: notes.E5, duration: 0.3, delay: 1600 },
      
      // Second phrase - dramatic
      { freq: notes.D5, duration: 0.2, delay: 1900 },
      { freq: notes.F5, duration: 0.2, delay: 2100 },
      { freq: notes.A5, duration: 0.2, delay: 2300 },
      { freq: notes.C6, duration: 0.4, delay: 2500 },
      { freq: notes.B5, duration: 0.2, delay: 2900 },
      { freq: notes.A5, duration: 0.2, delay: 3100 },
      { freq: notes.G5, duration: 0.2, delay: 3300 },
      { freq: notes.F5, duration: 0.3, delay: 3500 },
      
      // Rapid fire section
      { freq: notes.C5, duration: 0.15, delay: 3800 },
      { freq: notes.C5, duration: 0.15, delay: 3950 },
      { freq: notes.E5, duration: 0.15, delay: 4100 },
      { freq: notes.E5, duration: 0.15, delay: 4250 },
      { freq: notes.G5, duration: 0.15, delay: 4400 },
      { freq: notes.G5, duration: 0.15, delay: 4550 },
      { freq: notes.C6, duration: 0.3, delay: 4700 },
      { freq: notes.A5, duration: 0.15, delay: 5000 },
      { freq: notes.G5, duration: 0.15, delay: 5150 },
      { freq: notes.E5, duration: 0.15, delay: 5300 },
      { freq: notes.C5, duration: 0.4, delay: 5450 }
    ];

    // Play melody
    melody.forEach(note => {
      this.playNote(note.freq, note.duration, note.delay);
    });

    // Loop melody after it finishes
    if (this.isPlaying) {
      setTimeout(() => this.playMelody(), 5900);
    }
  }
}
