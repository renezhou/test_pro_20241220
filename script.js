import { AnalogClock } from './js/clock.js';
import { DigitalClock } from './js/digitalClock.js';

console.log('Hello!');

// Initialize clocks on page3
if (window.location.pathname.includes('page3')) {
  const analogCanvas = document.querySelector('.analog-clock');
  
  if (analogCanvas) {
    const analogClock = new AnalogClock(analogCanvas);
    analogClock.start();
  }
  
  // Initialize all digital clocks with China timezone
  const clockConfigs = [
    { id: 'clock1', timezone: 'Asia/Shanghai' }, // Beijing
    { id: 'clock2', timezone: 'Asia/Shanghai' }, // Shanghai
    { id: 'clock3', timezone: 'Asia/Shanghai' }, // Guangzhou
    { id: 'clock4', timezone: 'Asia/Shanghai' }  // Shenzhen
  ];

  clockConfigs.forEach(config => {
    const element = document.getElementById(config.id);
    if (element) {
      const digitalClock = new DigitalClock(element, config.timezone);
      digitalClock.start();
    }
  });
}