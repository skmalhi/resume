import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { constants } from "@app/app.constants";
import * as $_ from 'jquery';
import { constants } from 'src/app.constants';
import * as _ from 'underscore';
const $ = $_;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public static isUndefinedOrNull(value: any): boolean {
    return (
      _.isUndefined(value) ||
      _.isNull(value) ||
      _.isEmpty(value) ||
      value.length === 0
    );
  }

  public static isNumber(value: any): boolean {
    if (value) {
      return !_.isNaN(value);
    }
    return false;
  }

  public static markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    for (const i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsDirty();
        group.controls[i].setErrors(group.controls[i].errors);
      } else if (group.controls[i] instanceof FormGroup) {
        AppService.markAsDirty(group.controls[i] as FormGroup);
      }
    }

    const element: any = $('.form-control.ng-invalid');
    if (element && element.length > 0) {
      element[0].focus();
    }
  }

  public static copyDataInForm(data: any, form: FormGroup): void {
    Object.keys(data).forEach((name) => {
      if (form.controls[name]) {
        form.controls[name].patchValue(data[name]);
      }
    });
  }

  public static isDateEqual(startDate: Date, endDate: Date): boolean {
    return this.compareDates(startDate, endDate) === 0;
  }

  private static compareDates(startDate: Date, endDate: Date): number {
    startDate = new Date(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate()
    );
    endDate = new Date(
      endDate.getUTCFullYear(),
      endDate.getUTCMonth(),
      endDate.getUTCDate()
    );
    return startDate.getTime() - endDate.getTime();
  }

  public static getNumbersOnlyFromString(num: string): string {
    if (num) {
      num = num.replace(/\D/g, '');
    }
    return num;
  }

  public static toLowerCase(value: string): string | null {
    return value ? value.toLocaleLowerCase() : null;
  }

  public static isEmptyObject(obj: any): boolean {
    return obj && Object.keys(obj).length === 0;
  }

  public static html5StorageSupported(): boolean {
    // This is dummy data. Just to test storage size. Current size of dummy data is 2000
    const sampleData =
      'eyJhbGciOiJIUzI1NiJ9.eyJyZW1lbWJlciI6ZmFsc2UsInN1YiI6IkdSRCIsImlzcyI6Imh0dHA6XC9cL3d3dy5iZWdpbnRoZXJldm9sdXRpb24uY29tIiwiZXhwIjoxNDkyMDcwNzgyLCJsb2dpbiI6eyJsb2dpblVzZXIiOnsibGFzdE5hbWUiOiJUd28iLCJpc0Rpc3RyaWJ1dG9yIjp0cnVlLCJpc0VtcGxveWVlIjpudWxsLCJkaXN0cmlidXRvcklkIjoxMDAwMDIsImRpc3RyaWJ1dG9yVHlwZSI6IkluZGl2aWR1YWwiLCJyb2xlcyI6WyJHQk8iLCJTU19ST0xFIl0sImFjY291bnRHdWlkIjoiYWNjZmZiYjctMGIyZS1lNjExLWE2MzgtMDAwYzI5NTJjZjVjIiwiZmlyc3ROYW1lIjoiR1JEIiwiaGFzVHJhdmVsSW5zdXJhbmNlIjpmYWxzZSwicGVybWlzc2lvbnMiOnsiRU5ST0xMTUVOVF9DT05URVNUIjpbIlIiXSwiVk9MVU1FUyI6WyJSIl0sIlRSQVZFTF9JTlNVUkFOQ0VfTUdNVCI6WyJDIiwiUiJdLCJDSEFOR0VfUEFTU1dPUkQiOlsiQyIsIlIiLCJVIl0sIkdCT19BQ0NPVU5UIjpbIkMiLCJSIiwiVSJdLCJGQU1JTFlfTUVNQkVSUyI6WyJDIiwiUiIsIlUiLCJEIl0sIkdSX1NBTV9TVVBQRVIiOlsiUiJdLCJPUkdBTklaQVRJT04iOlsiUiJdLCJHQk9fREFTSEJPQVJEIjpbIlIiXSwiR1JfU0FNX0dCTyI6WyJSIl0sIk1FRElDQUxfSElTVE9SWV9TRUxGIjpbIkMiLCJSIiwiVSIsIkQiXSwiT1JERVJTIjpbIlIiXSwiUkFOS19BRFZBTkNFTUVOVCI6WyJSIl0sIkNPTU1JU1NJT05TIjpbIlIiXSwiUFJPTU9USU9OUyI6WyJSIl0sIkVNRVJHRU5DWV9DT05UQUNUIjpbIkMiLCJSIiwiVSJdLCJDQU5DRUxfTUVNQkVSU0hJUCI6WyJSIl0sIlNVQlNDUklQVElPTlMiOlsiQyIsIlIiLCJVIl0sIkdSX1NBTV9NRU1CRVIiOlsiUiJdLCJQUk9GSUxFX1BJQ1RVUkUiOlsiQyIsIlIiLCJVIiwiRCJdLCJBQ0NFU1NfVE9fR1JJRCI6WyJSIl0sIkNSRURJVF9DQVJEIjpbIkMiLCJSIiwiVSIsIkQiXSwiTUVNQkVSU0hJUF9NQU5BR0VNRU5UIjpbIkMiLCJSIiwiVSJdLCJTU19HQk9fT05MWSI6WyJSIl0sIlZJREVPX0xJQlJBUlkiOlsiUiJdLCJCQU5LX0FDQ09VTlQiOlsiQyIsIlIiLCJVIiwiRCJdLCJHQk9fUEFSVE5FUlMiOlsiQyIsIlIiXSwiTUVNQkVSU0hJUF9SRU5FV0FMIjpbIkMiLCJSIl0sIkNPTlRBQ1RfVVMiOlsiUiJdLCJNRURJQ0FMX0hJU1RPUllfREVQRU5ERU5UUyI6WyJDIiwiUiIsIlUiLCJEIl19LCJuYW1lIjoiVHdvLCBHUkQiLCJndWlkIjoiYjVjZmZiYjctMGIyZS1lNjExLWE2MzgtMDAwYzI5NTJjZjVjIiwiaXNQcmltYXJ5Q29uc3VtZXJNZW1iZXIiOmZhbHNlLCJlbWFpbCI6IkdSRDJAbm9tYWlsLmNvbSIsImlzRW1wbG95ZXIiOmZhbHNlfSwic2lsZW50TG9naW4iOmZhbHNlLCJ0YXJnZXRVc2VyIjpudWxsfSwiaWF0IjoxNDkyMDY4OTgyLCJ2ZXJzaW9uIjoiMS4wLjEifQ.nR6FkA_ODCNuLjGPDBdCg_VSBDIXncZHadsf_werqeaxcaerqwefadcae_asdfasdrqweadsfasdfacaedfadcasdfadsfasdfadasdfxcvasdfavasddddd';

    try {
      if (window && window.localStorage) {
        window.localStorage.setItem('local-storage-sample', sampleData);
        window.localStorage.removeItem('local-storage-sample');
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  public static getAge(date1: any, date2: any): number {
    const today = new Date(date1);
    const birthDate = new Date(date2);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public static getDateStringFromDate(dateObj: any): string {
    return dateObj.month + '-' + dateObj.day + '-' + dateObj.year;
  }

  public static getDateObject(date: Date): any {
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
  }

  public static cloneObject(objectToCopy: any): any {
    return JSON.parse(JSON.stringify(objectToCopy));
  }

  public static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static stringToDate(
    date: string,
    format: string,
    delimiter: string
  ): Date {
    const formatLowerCase = format.toLowerCase();
    const formatItems = formatLowerCase.split(delimiter);
    const dateItems: string[] = date.split(delimiter);
    const monthIndex = formatItems.indexOf('mm');
    const dayIndex = formatItems.indexOf('dd');
    const yearIndex = formatItems.indexOf('yyyy');
    const month = parseInt(dateItems[monthIndex]) - 1;
    const formatedDate = new Date(
      parseInt(dateItems[yearIndex]),
      month,
      parseInt(dateItems[dayIndex])
    );
    return formatedDate;
  }

  public static getRouteByPageName(pageName: string): string {
    if (!this.isUndefinedOrNull(constants.routesMapper[pageName])) {
      return constants.routesMapper[pageName];
    }
    return pageName;
  }

  public static scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  public static getValueFromHTMLInput(elementName: string): string {
    return $('input[name=' + elementName + ']').val() as string;
  }

  public static roundDecimal(num: number, decimalPlaces: number): number {
    return parseFloat(num.toFixed(decimalPlaces));
  }

  public static getPhoneNumberInNumberOnlyFormat(phoneNumber: string): string {
    return phoneNumber
      .replace('-', '')
      .replace(' ', '')
      .replace('(', '')
      .replace(')', '');
  }

  public static getPhoneNumberInParts(phoneNumber: string): string[] {
    phoneNumber = this.getPhoneNumberInNumberOnlyFormat(phoneNumber);
    const arr: string[] = [];
    arr.push(phoneNumber.substring(0, 3)); // area code
    arr.push(phoneNumber.substring(3, 6)); // prefix
    arr.push(phoneNumber.substring(6)); // suffix
    return arr;
  }

  public static getDayMonthYearFromDate(dateStr: string): number[] {
    const date = new Date(dateStr);
    const arr: number[] = [];
    arr.push(date.getDate());
    arr.push(date.getMonth() + 1);
    arr.push(date.getFullYear());
    return arr;
  }

  public static isValidDate(dateObj): boolean {
    const date = new Date(dateObj.year, dateObj.month - 1, dateObj.day);
    return date instanceof Date && !isNaN(date.getTime());
  }
}
