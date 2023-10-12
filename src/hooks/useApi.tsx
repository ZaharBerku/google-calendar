import { useContext } from 'react';
import { apiContext } from '@api/index';

export const useApi = () => useContext(apiContext);