import { passwordStrengthRules } from '@/constants';

export const getCharacterValidationError = (str: string): string => {
  return `Your password must have at least 1 ${str} character`;
};

export const toBase64Converter = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (): void => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Failed to read file.'));
      }
    };

    reader.onerror = (error): void => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const getPasswordStrength = (password: string): number => {
  const strength = passwordStrengthRules.reduce((strength, rule) => {
    return rule.test(password) ? (strength += 1) : strength;
  }, 0);
  return strength;
};
