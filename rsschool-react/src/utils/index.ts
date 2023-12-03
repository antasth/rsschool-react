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
