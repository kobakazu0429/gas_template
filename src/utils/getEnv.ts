export const getEnv = (key: string): string | null => {
  return PropertiesService.getScriptProperties().getProperty(key);
};
