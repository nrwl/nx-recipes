import { serve } from 'https://deno.land/std@0.157.0/http/server.ts';
import { handler } from './handler.ts';

console.log('Listening on http://localhost:8000');
serve(handler);
