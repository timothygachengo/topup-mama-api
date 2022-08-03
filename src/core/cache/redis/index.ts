import Redis, { RedisOptions } from 'ioredis';
import defaultRedisConfig from './config';

const redis = (defaultConfig? : RedisOptions) => {
  const config = defaultConfig || defaultRedisConfig;
  return new Redis(config);
};

export default redis;
