import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  background: '#f8fafc',
  white: '#ffffff',
  text: '#1e293b',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  error: '#ef4444',
};

export const SIZES = {
  width,
  height,
  padding: width * 0.04,
  radius: 12,
  
  font: {
    small: width * 0.035,
    medium: width * 0.04,
    large: width * 0.045,
    xlarge: width * 0.06,
  },
  
  icon: {
    small: width * 0.05,
    medium: width * 0.06,
    large: width * 0.08,
  },
};