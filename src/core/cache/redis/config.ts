import { cacheConfig } from '@topup-mama/config';
import { RedisOptions } from 'ioredis';

const { host, port, password } = cacheConfig.redis;
const defaultRedisConfig: RedisOptions = {
  host,
  port,
  password,
  family: 4,
  db: 0,
  enableOfflineQueue: true,
  enableAutoPipelining: true
};

export default defaultRedisConfig;
