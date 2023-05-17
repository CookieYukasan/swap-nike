/**
 * 
 * @param delayTime Delay time in milliseconds
 * @returns A promise that is resolved when the delay is reached
 */
export const delay = (delayTime: number) => new Promise((resolve) => setTimeout(() => resolve, 3000))