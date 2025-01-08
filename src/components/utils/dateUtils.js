// project/src/components/utils/dateUtils.js
export const formatDate = (dateString, locale = 'en-US', options = {}) => {
    const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatOptions = { ...defaultOptions, ...options };
    return new Date(dateString).toLocaleDateString(locale, formatOptions);
  };
  