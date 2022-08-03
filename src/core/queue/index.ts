import { Queue, QueueOptions } from 'bullmq';
import redis from '../cache/redis';

/**
 *
 * @param {string} name - The name of the queue
 * @param {QueueOptions} options - Queue options
*/
class JobQueue extends Queue {
  constructor(name:string, options?:QueueOptions) {
    super(name, { connection: redis(), ...options });
  }
}

export default JobQueue;
