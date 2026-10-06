// Synthesized Web Audio Engine for Oberon Vision Cinematic Hero
// Procedural audio generation requiring no external audio assets

class CinematicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Default muted for browser autoplay policies
    this.ambientGain = null;
    this.masterGain = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.isInitialized = true;
    } catch {
      // AudioContext not supported
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (!this.isInitialized && !muted) {
      this.init();
    }
    if (this.ctx && this.masterGain) {
      if (this.ctx.state === 'suspended' && !muted) {
        this.ctx.resume();
      }
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 0.85, this.ctx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  // Phase 1: Ethereal ambient forest & starlight chime
  playStagAmbient() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Ambient warm pad
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now); // A2
      osc.frequency.exponentialRampToValueAtTime(164.81, now + 3); // E3

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.6);

      // Crystalline constellation chimes
      [587.33, 880, 1174.66, 1760].forEach((freq, idx) => {
        const chime = this.ctx.createOscillator();
        const chimeGain = this.ctx.createGain();
        const chimeTime = now + 0.4 + idx * 0.35;

        chime.type = 'triangle';
        chime.frequency.setValueAtTime(freq, chimeTime);

        chimeGain.gain.setValueAtTime(0.001, chimeTime);
        chimeGain.gain.linearRampToValueAtTime(0.04, chimeTime + 0.05);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, chimeTime + 1.2);

        chime.connect(chimeGain);
        chimeGain.connect(this.masterGain);

        chime.start(chimeTime);
        chime.stop(chimeTime + 1.3);
      });
    } catch {}
  }

  // Phase 2: Surging streak of vivid light sweeps through
  playSurgeStreak() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Sub-bass sweep
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(60, now);
      sub.frequency.exponentialRampToValueAtTime(240, now + 0.8);
      sub.frequency.exponentialRampToValueAtTime(80, now + 1.5);

      subGain.gain.setValueAtTime(0.01, now);
      subGain.gain.linearRampToValueAtTime(0.25, now + 0.6);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

      sub.connect(subGain);
      subGain.connect(this.masterGain);
      sub.start(now);
      sub.stop(now + 1.6);

      // Hypersonic laser/plasma streak noise
      const bufferSize = this.ctx.sampleRate * 1.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.Q.value = 4.0;
      noiseFilter.frequency.setValueAtTime(400, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(4500, now + 0.7);
      noiseFilter.frequency.exponentialRampToValueAtTime(1200, now + 1.4);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.4);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + 1.4);
    } catch {}
  }

  // Phase 3: Fluid swirling trails of magenta, neon purple, cyan energy
  playFluidTrails() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Swirling resonant phaser sweep
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 1.0);
      osc.frequency.exponentialRampToValueAtTime(440, now + 2.0);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(2800, now + 1.2);
      filter.frequency.exponentialRampToValueAtTime(600, now + 2.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.09, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.3);
    } catch {}
  }

  // Phase 4: Center Implosion & Radiant Flare Burst
  playImplosionAndBurst() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // 1. Implosion vacuum suck (0.0 to 0.4s)
      const implosionOsc = this.ctx.createOscillator();
      const implosionGain = this.ctx.createGain();
      implosionOsc.type = 'sine';
      implosionOsc.frequency.setValueAtTime(380, now);
      implosionOsc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

      implosionGain.gain.setValueAtTime(0.08, now);
      implosionGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      implosionOsc.connect(implosionGain);
      implosionGain.connect(this.masterGain);
      implosionOsc.start(now);
      implosionOsc.stop(now + 0.36);

      // 2. Radiant flare burst (at now + 0.38s)
      const burstTime = now + 0.38;
      // Low impact sub-boom
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(130, burstTime);
      sub.frequency.exponentialRampToValueAtTime(30, burstTime + 0.6);

      subGain.gain.setValueAtTime(0.35, burstTime);
      subGain.gain.exponentialRampToValueAtTime(0.001, burstTime + 0.8);

      sub.connect(subGain);
      subGain.connect(this.masterGain);
      sub.start(burstTime);
      sub.stop(burstTime + 0.9);

      // Radiant harmonic flare chime (Major 9th chord)
      [523.25, 659.25, 783.99, 987.77, 1318.51].forEach((freq) => {
        const chordOsc = this.ctx.createOscillator();
        const chordGain = this.ctx.createGain();
        chordOsc.type = 'triangle';
        chordOsc.frequency.setValueAtTime(freq, burstTime);

        chordGain.gain.setValueAtTime(0.001, burstTime);
        chordGain.gain.linearRampToValueAtTime(0.06, burstTime + 0.04);
        chordGain.gain.exponentialRampToValueAtTime(0.0001, burstTime + 2.0);

        chordOsc.connect(chordGain);
        chordGain.connect(this.masterGain);
        chordOsc.start(burstTime);
        chordOsc.stop(burstTime + 2.1);
      });
    } catch {}
  }

  // Phase 5: 3D Metallic chrome typography shine sheen
  playChromeSheen() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // High-frequency crystalline metallic glint
      [1567.98, 2093.0, 3135.96].forEach((freq, idx) => {
        const glint = this.ctx.createOscillator();
        const glintGain = this.ctx.createGain();
        const t = now + idx * 0.12;

        glint.type = 'sine';
        glint.frequency.setValueAtTime(freq, t);

        glintGain.gain.setValueAtTime(0.001, t);
        glintGain.gain.linearRampToValueAtTime(0.04, t + 0.03);
        glintGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

        glint.connect(glintGain);
        glintGain.connect(this.masterGain);
        glint.start(t);
        glint.stop(t + 0.95);
      });
    } catch {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
