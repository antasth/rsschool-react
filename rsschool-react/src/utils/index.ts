export const getCharacterValidationError = (str: string): string => {
  return `Your password must have at least 1 ${str} character`;
};
