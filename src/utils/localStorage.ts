export const storage: (
  // Because of TS issue
  // @see https://github.com/microsoft/TypeScript/issues/32465
  (key: string) => [
    () => string | null,
    (x: string) => void,
  ]
) = key => [
  () => localStorage.getItem(key),
  x => localStorage.setItem(key, x),
];

const [DISABLED, ENABLED] = ['DISABLED', 'ENABLED'];
export const boolStorage: (
  (key: string) => [
    () => boolean,
    (x: boolean) => void,
  ]
) = key => [
  () => localStorage.getItem(key) === ENABLED,
  x => localStorage.setItem(key, x ? ENABLED : DISABLED),
];
