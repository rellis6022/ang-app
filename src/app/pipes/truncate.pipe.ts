import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit:number = 80 ): string {
    return value.length < limit
      ? value
      : value.slice(0, limit) + '...';
  }

}
