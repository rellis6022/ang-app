import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform( value: string ): string {
    return value.replace(
        /(\b.)|(.)/g,
        function ($0, $1, $2) {
            return ($1 && $1.toUpperCase()) || $2.toLowerCase();
        }
    );
  }

}
