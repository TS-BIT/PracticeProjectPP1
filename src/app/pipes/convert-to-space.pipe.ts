import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertToSpace' })
export class ConvertToSpacePipe implements PipeTransform {
  transform(valueToBeCleaned: string, charactersToReplace: string[]): string {
    for (let i = 0; i < charactersToReplace.length; i++) {
      valueToBeCleaned = valueToBeCleaned.replace(new RegExp(charactersToReplace[i] + '+', 'g'), i === 0 ? ' ' : '')
    }
    return valueToBeCleaned;
  }
}
