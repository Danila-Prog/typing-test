// Скорость печати
export function speedCounting(correctLetters: number, seconds: number) {
  if (seconds) {
    const words = correctLetters / 5;
    const minutes = seconds / 60;
    
    return (words / minutes).toFixed(2);
  }
  
  return '0.00';
}