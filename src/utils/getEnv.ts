export const getEnv = (key: string): string => {
  return PropertiesService.getScriptProperties().getProperty(key);
};
