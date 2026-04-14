export const normalizePhoneDigits = (value: string) => value.replace(/\D/g, '').replace(/^998/, '').slice(0, 9);

export const formatPhoneDigits = (value: string) => {
  const digits = normalizePhoneDigits(value);
  const groups = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return groups.join(' ');
};

export const buildPhoneNumber = (value: string) => {
  const digits = normalizePhoneDigits(value);
  return digits ? `+998 ${formatPhoneDigits(digits)}` : '';
};
