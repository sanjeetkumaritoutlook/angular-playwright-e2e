import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    service = new CounterService();
  });

  it('should increment count', () => {
    service.increment();
    expect(service.getCount()).toBe(1);
  });

  it('should reset count', () => {
    service.increment();
    service.reset();
    expect(service.getCount()).toBe(0);
  });
});
