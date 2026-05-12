  export const getFileTypeFromBase64 = (base64String: string): string => {
    const match = base64String.match(/^data:([^;]+);base64/);
    return match ? match[1] : 'unknown';
  };

  export const getFileSizeFromBase64 = (base64String: string): string => {
    const base64Data = base64String.split(',')[1] || base64String;
    const binaryString = atob(base64Data);
    const bytes = binaryString.length;
    const kb = (bytes / 1024).toFixed(2);
    const mb = (bytes / (1024 * 1024)).toFixed(2);
    return bytes > 1024 * 1024 ? `${mb} MB` : `${kb} KB`;
  };