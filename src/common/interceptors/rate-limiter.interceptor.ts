import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    ForbiddenException,
  } from '@nestjs/common';
  import { RateLimiterMemory } from 'rate-limiter-flexible';
  import { Observable } from 'rxjs';
  
  const rateLimiter = new RateLimiterMemory({
    points: 5, // Number of points
    duration: 1, // Per second
  });
  
  @Injectable()
  export class RateLimiterInterceptor implements NestInterceptor {
    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      const request = context.switchToHttp().getRequest();
      const key = request.user ? `user:${request.user.userId}` : `ip:${request.ip}`;
  
      try {
        await rateLimiter.consume(key);
        return next.handle();
      } catch (e) {
        throw new ForbiddenException('Too many requests');
      }
    }
  }
  